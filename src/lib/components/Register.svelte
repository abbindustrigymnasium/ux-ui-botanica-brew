<script lang="ts">
	import { auth } from '$lib/firebase/init';
	import {
		createUserWithEmailAndPassword,
		GoogleAuthProvider,
		signInWithPopup
	} from 'firebase/auth';
	import { goto } from '$app/navigation';
	import { session } from '$lib/stores/session';

	export let switchMethod;

	let email: string = '';
	let password: string = '';

	const provider = new GoogleAuthProvider();

	async function handleRegister() {
		await createUserWithEmailAndPassword(auth, email, password)
		// set session state
			.then((result) => {
				const { user } = result;
				session.update((cur: any) => {
					return {
						...cur,
						user,
						loggedIn: true,
						loading: false
					};
				});
				goto('/account');
			})
			.catch((error) => {
				throw new Error(error);
			});
	}

	async function handleGoogleSignIn() {
		await signInWithPopup(auth, provider)
		// set session state
			.then((result) => {
				const { user } = result;
				session.update((cur: any) => {
					return {
						...cur,
						user,
						loggedIn: true,
						loading: false
					};
				});
				goto('/account');
			})
			.catch((error) => {
				throw new Error(error);
			});
	}
</script>

<div class="register-form">
	<form>
		<h2>Register</h2>
		<input bind:value={email} type="text" placeholder="Email" />
		<input bind:value={password} type="password" placeholder="Password" />
		<button type="submit" on:click={handleRegister}>Register</button>
	</form>
	<button on:click={handleGoogleSignIn}>Sign in with google</button>
	<button on:click={switchMethod}>Switch</button>
</div>

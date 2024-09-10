<script lang="ts">
	import { auth } from '$lib/firebase/init';
	import {
		GoogleAuthProvider,
		signInWithEmailAndPassword,
		signInWithPopup
	} from 'firebase/auth';
	import { goto } from '$app/navigation';
	import { session } from '$lib/stores/session';

	let email: string = '';
	let password: string = '';

	const provider = new GoogleAuthProvider();

	async function handleLogin() {
		await signInWithEmailAndPassword(auth, email, password)
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
	<form on:submit={handleLogin}>
		<h2>Login</h2>
		<input bind:value={email} type="text" placeholder="Email" />
		<input bind:value={password} type="password" placeholder="Password" />
		<button type="submit">Log in</button>
	</form>
	<button on:click={handleGoogleSignIn}>Log in with google</button>
</div>

<script lang="ts">
	import { session } from '$lib/stores/session';
	import { goto } from '$app/navigation';
	import { signOut } from 'firebase/auth';
	import { auth } from '$lib/firebase/init';
	import LoginWrapper from './LoginWrapper.svelte';

	type User = {
		email?: string | null;
		displayName?: string | null;
		photoURL?: string | null;
		uid?: string | null;
	};

	let loading: boolean = true;
	let loggedIn: boolean = false;
	let user: User | null;

	session.subscribe((cur: any) => {
		user = cur?.user;
		loading = cur?.loading;
		loggedIn = cur?.loggedIn;
	});

	async function handleSignOut() {
		await signOut(auth).then(() => {
			session.update((cur: any) => {
				return {
					...cur,
					user: null,
					loggedIn: false,
					loading: false
				};
			});
		});
		goto('/');
	}
</script>

{#if loading}
	<div>Loading...</div>
{:else if loggedIn}
	<div>
		Logged in as {user?.email}
		<button on:click={handleSignOut}>Sign out</button>
	</div>
{:else}
	<LoginWrapper />
{/if}

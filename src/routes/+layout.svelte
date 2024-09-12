<script lang="ts">
	import { onMount } from 'svelte';
	import { session } from '$lib/stores/session';
	import { goto } from '$app/navigation';
	import { signOut } from 'firebase/auth';
	import { auth } from '$lib/firebase/init';

	import type { LayoutData } from './$types';
	import { crossfade, draw, fade, fly, scale, slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import NavigationLink from '$lib/components/NavigationLink.svelte';
	export let data: LayoutData;

	let loading: boolean = true;
	let loggedIn: boolean = false;

	session.subscribe((cur: any) => {
		loading = cur?.loading ?? true; // Ensure loading is true by default
		loggedIn = cur?.loggedIn;
	});

	onMount(async () => {
		// Explicitly set loading to true at the start of component lifecycle
		session.update((cur: any) => ({ ...cur, loading: true }));

		const user: any = await data.getAuthUser();

		const loggedIn = !!user && user?.emailVerified;
		session.update((cur: any) => {
			return {
				...cur,
				user,
				loggedIn,
				loading: false // Set loading to false after async operation
			};
		});
	});

	let isNavOpen = false;
	function toggleNav() {
        setTimeout(() => {
            isNavOpen = !isNavOpen;
        }, 50);
	}
</script>

{#if loading}
	<h1 class="loading">↺</h1>
{/if}
{#if isNavOpen}
	<div class="nav open">
		<div class="nav">
			<a href="/">
				<img src="/logo.png" alt="Logo" class="img" />
			</a>
			<button class="burger" on:click={toggleNav}>☰</button>
		</div>
		<div class="links">
			<button class="link" on:click={toggleNav}>
				<NavigationLink href="/" text="Home" />
			</button>
			<button class="link" on:click={toggleNav}>  
				<NavigationLink href="/products" text="Products" />
			</button>
			<button class="link" on:click={toggleNav}>
				<NavigationLink href="/about" text="About" />
			</button>
			<button class="link" on:click={toggleNav}>
				<NavigationLink href="/contact" text="Contact" />
			</button>
			<button class="link" on:click={toggleNav}>
				<NavigationLink href="/cart" text="Cart" />\
			</button>
		</div>
	</div>
{:else}
	<div>
		<div class="nav">
			<a href="/">
				<img src="/logo.png" alt="Logo" class="img" />
			</a>
			<button class="burger" on:click={toggleNav}>☰</button>
		</div>
		<slot />
	</div>
{/if}

<style>
	button {
		border: none;
		background-color: inherit;
	}

	.nav {
		display: flex;
		justify-content: space-between;
        position: absolute;
        top: 8px;
		width: 100%;
		padding: 0;
        background-color: inherit;
	}

	.nav.open {
		background-color: #a3b396;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: 0;
	}

	.img {
		width: 66px;
		height: 66px;
		transform: translateX(8px);
	}

	.burger {
		width: 46px;
		height: 58px;
		font-size: 48px;
		transform: translateX(-24px);
	}

	.links {
		position: absolute;
		top: 10%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
	}

	.link {
		margin: 28px;
	}

	.loading {
        animation: rotate 2s linear infinite;
		text-align: center;
		font-size: 40px;
		color: #333;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
	}

    @keyframes rotate {
    from {
        transform: rotate(360deg);
    }
    to {
        transform: rotate(0deg);
    }
}

</style>

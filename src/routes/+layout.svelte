<script lang="ts">
    import { onMount } from 'svelte';
    import { session } from '$lib/stores/session';
    import { goto } from '$app/navigation';
    import { signOut } from 'firebase/auth';
    import { auth } from '$lib/firebase/init';

    import type { LayoutData } from './$types';
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
</script>

{#if loading}
    <div>Loading...</div>
{:else}
    <div>
        <!-- Logged in: {loggedIn} -->
        <slot />
    </div>
{/if}
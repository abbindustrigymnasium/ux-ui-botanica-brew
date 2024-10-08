<script lang="ts">
    import StaffMember from '$lib/components/StaffMember.svelte';
    import { onMount } from 'svelte';

    // Fetch data from db
    export let data;
</script>

<div class="wrapper">
{#each data.staff as staffMember}
    <StaffMember data={staffMember} />
{/each}
</div>

<style>
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100vh;
        background-color: #a3b396;
    }
</style>
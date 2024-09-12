<script lang="ts">
	import Cake from '$lib/components/Cake.svelte';
	// Fetch data from db
	export let data;

	// Example: access price of cakeId = 0
	console.log(data.cakes[0].price);
</script>

<div class="wrapper">
	<h1 class="header">Menu</h1>
	<div class="cakes">
		{#each data.cakes as cake}
			<a class="cake-wrapper" href={`/products/${cake.id}`}>
				<Cake price={cake.price} name={cake.title} />
			</a>
		{/each}
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		align-items: center;
		height: 100vh;
		background-color: #a3b396;
		flex-direction: column;
	}

	.header {
		margin-top: 80px;
		font-size: 40px;
	}

    .cakes {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        gap: 16px;
        margin-top: 48px;
    }

	.cake-wrapper {
		z-index: 5;
	}

    a {
        text-decoration: none;
        color: black;
    }
</style>

<script lang="ts">
	export let data;
	const cake = data.cake;
</script>

<div class="wrapper">
	<h1 class="header">{cake.title}</h1>
	<div class="img-wrapper">
		<img src={cake.image} alt={`Image of ${cake.title}`} class="img" />
	</div>
	<h3 class="desc-header">Description</h3>
    <p class="description">
        {cake.detailDescription}
    </p>
	<button class="cart-add">Add to Cart</button>
</div>

<style>
	.wrapper {
		display: flex;
		align-items: center;
		height: 100vh;
		background-color: #a3b396;
		flex-direction: column;
	}

	.img {
		width: 320px;
		height: 240px;
		border-radius: 16px;
	}

	.img-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 2px solid black;
		padding-bottom: 24px;
        margin-top: 24px;
	}
	
	.desc-header {
		margin-top: 24px;
		font-size: 32px;
	}

	.header {
		margin-top: 80px;
		font-size: 40px;
	}

	.description {
        background-color: #B75C4B;
        padding: 16px;
        color: white;
        border-radius: 16px;
        width: 304px;
        font-size: 16px;
		font-weight: 200;
    }

	.cart-add {
        background-color: #b75c4b;
        color: white;
        font-size: 24px;
        padding: 14px;
        border-radius: 8px;
        margin-top: 24px;
        width: 340px;
        border: 1px solid black;
		position: absolute;
		bottom: 24px;
		left: 50%;
		transform: translate(-50%, 0);
    }
</style>

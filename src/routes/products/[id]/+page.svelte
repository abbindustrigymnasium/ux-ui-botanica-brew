<script lang="ts">
	export let data;
	const cake = data.cake;
</script>

<div class="wrapper">
	<h1 class="header">{cake.title}</h1>
	<div class="img-wrapper">
		<img src={cake.image} alt={`Image of ${cake.title}`} class="img" />
	</div>
    <p class="description">
        {cake.detailDescription}
    </p>
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
		height: 160px;
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

	.header {
		margin-top: 80px;
		font-size: 40px;
	}

	.description {
        background-color: #B75C4B;
        padding: 8px;
        color: white;
        border-radius: 16px;
        width: 320px;
        font-size: 16px;
        margin-top: 24px;
    }
</style>

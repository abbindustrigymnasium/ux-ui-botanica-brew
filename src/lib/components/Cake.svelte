<script lang="ts">
	export let price: number;
	export let name: string;
</script>

<div class="wrapper">
	<div class="price-wrapper">
		${price}
	</div>
	<div class="name-wrapper">
		{name}
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
        /* border: 1px solid black; */
        width: 260px;
        height: 48px;
	}

	.price-wrapper {
		font-size: 24px;
		font-weight: 500;
        background-color: #B75C4B;
        padding: 8px;
        border-radius: 8px;
	}

    .name-wrapper {
        font-size: 24px;
    }
</style>

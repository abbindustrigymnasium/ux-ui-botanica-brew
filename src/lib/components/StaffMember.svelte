<script lang="ts">
	export let data;

	const name = data.name;
    const image = data.avatar;
	console.log(data);
</script>

<div class="wrapper">
	<img src={image} alt="staff member avatar" />
	<p class="desc">{name}</p>
</div>

<style>
	.wrapper {
		width: 320px;
		display: flex;
		align-items: center;
		justify-content: space-between;
        height: 120px;
        background-color: #B75C4B;
        margin: 16px;
        border-radius: 16px;
	}

	img {
		width: 30%;
        margin: 8px 12px;
        border-radius: 8px;
	}

    .desc {
        width: 60%;
        font-size: 24px;
        color: white;
        font-weight: 200;
        margin: 8px 12px;
    }
</style>

<script lang="ts">
	export let href = '';
	export let text = '';
</script>

<a {href}>{text}</a>

<style>
	a {
		color: white;
		text-decoration: none;
		font-size: 40px;
		border: 1px solid black;
        width: 200px;
        background-color: #B75C4B;
        border-radius: 10px;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
	}
</style>

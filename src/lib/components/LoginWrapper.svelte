<script>
	import Register from './Register.svelte';
	import Login from './Login.svelte';

	let login = true;

	function switchMethod() {
		login = !login;
	}
</script>

{#if login}
	<Login switchMethod={switchMethod} />
{:else}
	<Register switchMethod={switchMethod} />
{/if}
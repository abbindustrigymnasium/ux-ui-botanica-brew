<script lang="ts">
	function sendMessage() {
		alert('Message sent! (real)');
	}
</script>

<div class="wrapper">
	<h1 class="header">Contact</h1>
	<div class="img-wrapper">
		<img src="/contact-img.png" alt="Our logo" class="img" />
	</div>
	<input class="input" type="text" placeholder="Your Name" />
	<input class="input" type="text" placeholder="Your Email" />
	<textarea class="input" placeholder="Your Message" />
	<button on:click={sendMessage}>Send Message</button>
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

	.img {
		width: 318px;
		height: 300px;
		border-radius: 16px;
		padding-bottom: 16px;
	}

	.img-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 2px solid black;
		padding-bottom: 24px;
	}

	.input {
		width: 320px;
		height: 48px;
		border-radius: 8px;
		margin-top: 24px;
		padding: 12px;
		font-size: 24px;
		background-color: #738068;
		border: 1px solid black;
		color: white;
	}

    textarea.input {
        height: 80px;
    }

	.input::placeholder {
		color: rgb(207, 207, 207); /* Light khaki color for the placeholder text */
	}

    button {
        background-color: #b75c4b;
        color: white;
        font-size: 24px;
        padding: 14px;
        border-radius: 8px;
        margin-top: 24px;
        width: 340px;
        border: 1px solid black;
    }
</style>

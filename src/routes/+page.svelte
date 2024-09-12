<script lang="ts">
	import Navigation from '$lib/components/NavigationLink.svelte';
</script>

<div class="top">
	<!-- <div class="nav__wrapper">
		<Navigation />
	</div> -->
	<img src="/landingBackground.png" alt="" class="background__image" />
	<header class="title">Botanica Brew</header>
	<div class="description">
		Where Plants and People Thrive Together: Sip, Study, and Savor the Green
	</div>
	<a href="/products" class="order">Order now</a>
</div>
<div class="bottom">
	<div class="content">
		<h1 class="header">Nature in every cup</h1>
		<br />
		<p class="paragraph">
			Welcome to Botanica Brew, where plants and people thrive. Enjoy coffee, herbal teas, and a
			cozy atmosphere surrounded by greenery. Perfect for botanists and nature lovers alike. Come
			in, relax, and let nature inspire you.
		</p>
	</div>
</div>

<style>
	@media (max-width: 600px) {
		.background__image {
			position: absolute;
			top: 0;
			width: 100%;
			height: 50%;
			z-index: -1;
		}

		.title {
			position: absolute;
			font-size: 32px;
			top: 24px;
			left: 50%;
			transform: translateX(-50%);
		}

		.description {
			width: 222px;
			font-size: 24px;
			margin: 0 auto;
			transform: translate(8px, 108px);
		}

		.order {
			position: absolute;
			width: 192px;
			height: 48px;
			top: 40%;
			right: 24px;
			transform: translateY(60%);
			background-color: #B75C4B;
			z-index: 5;
			color: white;
			font-size: 24px;
			border-radius: 8px;
			border: 1px solid black;
			display: flex;
			align-items: center;
			justify-content: center;
			text-decoration: none;
			color: white;
		}

		.bottom {
			position: absolute;
			height: 50%;
			width: 100%;
			bottom: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			background-color: #a3b396;
		}

		.content {
			transform: translateY(-16px);
		}

		.header {
			font-size: 36px;
			font-weight: bold;
			border-bottom: 3px solid black;
			padding-bottom: 12px;
			margin: 0;
			width: 330px;
		}

		.paragraph {
			width: 284px;
			font-size: 22px;
			width: 330px;
			text-align: center;
		}
	}
	.nav__wrapper {
		z-index: 1;
	}
</style>

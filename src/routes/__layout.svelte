<script lang="ts">
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import Header from '$lib/components/header/Header.svelte';
	import '../app.css';
</script>

<div class="container">
	<Navbar />

	<Header />
	<main>
		<slot />
	</main>
</div>

<style>
	.container {
		display: grid;
		grid-template-areas:
			'nav header'
			'nav main';
		grid-template-columns: fit-content(32ch) 1fr;
		grid-template-rows: auto 1fr;
		height: 100vh;
	}
	main {
		grid-area: main;
		overflow: auto;
		padding: 0 8ch;
	}

	@media (min-width: 480px) {
	}
</style>

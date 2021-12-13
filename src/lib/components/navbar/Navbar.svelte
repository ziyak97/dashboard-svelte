<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/button/Button.svelte';
</script>

<header>
	<Button class="nav-button">🌱 Dashboard</Button>

	<nav>
		<ul>
			<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
			<li class:active={$page.path === '/todos'}><a sveltekit:prefetch href="/todos">Todos</a></li>
		</ul>
	</nav>

	<div class="corner">
		<!-- TODO put something else here? github link? -->
	</div>
</header>

<style>
	header {
		display: flex;
		grid-area: nav;
		flex-direction: column;
		padding-top: 10ch;
		box-shadow: 0 0 15px 15px rgba(0, 0, 0, 0.1);
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	ul {
		display: flex;
		flex-direction: column;
		padding: 0;
		list-style: none;
	}

	li {
		margin: 1ch 0;
		padding: 6px 20ch 6px 5ch;
		border-left: 4px solid transparent;
		border-right: 4px solid transparent;
	}

	li.active {
		color: var(--color-primary-blue);
		border-left: 4px solid;
		border-right: 4px solid;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
	:global(.nav-button) {
		margin: 8ch 5ch;
		padding: 15px 32px;
	}
</style>

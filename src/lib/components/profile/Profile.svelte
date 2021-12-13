<script lang="ts">
	import Dropdown from '$lib/components/dropdown/Dropdown.svelte';

	export let name = 'User';
	let open = false;
</script>

<div class="container" on:click={() => (open = !open)}>
	<img
		src="https://avatars.dicebear.com/api/avataaars/2.svg"
		alt="profile"
		width="40px"
		height="40px"
	/>
	<h3>{name}</h3>
	<span>⬇️</span>
</div>

{#if open}<Dropdown on:click_outside={() => (open = false)} />{/if}

<style>
	.container {
		display: flex;
		align-items: center;
		gap: 1ch;
		cursor: pointer;
		position: relative;
	}

	img {
		border-radius: 50%;
	}

	span {
		font-size: 0.8rem;
	}
</style>

<script lang="ts">
	export let leftIcon: string = null;
	export let rightIcon: string = null;
</script>

<div class="container" on:click>
	{#if leftIcon}<span class="icon-left">{leftIcon}</span>{/if}
	<slot />
	{#if rightIcon}<span class="icon-right">{rightIcon}</span>{/if}
</div>

<style>
	.container {
		height: 50px;
		display: flex;
		align-items: center;
		border-radius: 8px;
		transition: background 500ms;
		padding: 0.5rem;
		cursor: pointer;
	}

	.container:hover {
		background-color: #525357;
	}

	.icon-left {
		background-color: #fff;
		border-radius: 50%;
		padding: 5px;
		margin: 2px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: filter 300ms;
	}

	.icon-left:hover {
		filter: brightness(1.2);
	}

	.icon-right {
		margin-left: auto;
	}
</style>

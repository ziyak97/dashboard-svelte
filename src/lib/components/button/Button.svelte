<script lang="ts">
	let className = '';
	export { className as class };
</script>

<button class={`button ${className || ''}`}>
	<slot />
</button>

<style>
	.button {
		background-color: var(--color-primary-blue);
		border: none;
		border-radius: var(--border-radius-small);
		color: white;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		cursor: pointer;
	}
</style>

<script lang="ts">
	import Select from '$lib/components/select/Select.svelte';
	import Button from '$lib/components/button/Button.svelte';

	let options = [
		{ value: '1', label: 'Option 1' },
		{ value: '2', label: 'Option 2' },
		{ value: '3', label: 'Option 3' },
		{ value: '4', label: 'Option 4' },
		{ value: '5', label: 'Option 5' }
	];

	let value: string;
</script>

<section>
	<div class="selectors">
		<Select label="Display" name="display" bind:value {options} />
		<Select label="Sort By" name="display" bind:value {options} />
	</div>
	<Button class="campaign-header-button">Create Campaign</Button>
</section>

<style>
	section {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 5ch 0;
	}

	.selectors {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 4ch;
	}
	:global(.campaign-header-button) {
		padding: 1ch 2ch;
	}
</style>

<script lang="ts">
	export let label: string;
	export let name: string;
	export let options: Array<{ value: string; label: string }>;
	let value: string;
</script>

<div>
	<label for={name}>{label}</label>
	<select bind:value {name}>
		{#each options as option}
			<option value={option.value}>
				{option.label}
			</option>
		{/each}
	</select>
</div>

<style>
	label {
		margin-right: 2ch;
	}
	select {
		padding: 0.5ch 1ch;
		width: 30ch;
		border-radius: 0.5ch;
		border: 2px solid #ccc;
	}
</style>

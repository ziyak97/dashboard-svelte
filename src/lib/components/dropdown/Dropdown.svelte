<script lang="ts">
	import DropdownItem from './DropdownItem.svelte';
	import { clickOutside } from '$lib/utils/clickOutside';
	import { Menu } from './enums';
	import { fly } from 'svelte/transition';

	const padding = 34;

	let activeMenu: Menu = Menu.Main;
	let height: number = 0;

	function handleClick(goToMenu: Menu) {
		if (goToMenu) {
			activeMenu = goToMenu;
		}
	}
</script>

<div class="container" style={`height: ${height}px;`} use:clickOutside on:click_outside>
	{#if activeMenu === Menu.Main}
		<div
			in:fly={{ x: 200, duration: 500 }}
			on:introstart={(el) => (height = el.currentTarget.offsetHeight + padding)}
		>
			<DropdownItem leftIcon="👤">Profile</DropdownItem>
			<DropdownItem leftIcon="⚙️" rightIcon="➡️" on:click={() => handleClick(Menu.Settings)}
				>Settings</DropdownItem
			>
		</div>
	{/if}

	{#if activeMenu === Menu.Settings}
		<div
			in:fly={{ x: 200, duration: 500 }}
			on:introstart={(el) => (height = el.currentTarget.offsetHeight + padding)}
		>
			<DropdownItem leftIcon="⬅️" on:click={() => handleClick(Menu.Main)}>Go Back</DropdownItem>
			<DropdownItem leftIcon="👤">Profile</DropdownItem>
			<DropdownItem leftIcon="👤">Profile</DropdownItem>
			<DropdownItem leftIcon="👤">Profile</DropdownItem>
			<DropdownItem leftIcon="👤">Profile</DropdownItem>
			<DropdownItem leftIcon="👤">Profile</DropdownItem>
		</div>
	{/if}
</div>

<style>
	.container {
		position: absolute;
		top: 58px;
		width: 300px;
		background-color: #ccc;
		padding: 2ch;
		border: 1px solid #000;
		border-radius: 8px;
		overflow: hidden;
		z-index: 1;
		transition: height 500ms;
	}
</style>

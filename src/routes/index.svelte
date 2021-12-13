<script context="module" lang="ts">
	import CampaignHeader from '$lib/components/campaign-header/CampaignHeader.svelte';
	import CampaignTable from '$lib/components/campaign-table/CampaignTable.svelte';
	export const prerender = true;
</script>

<script lang="ts">
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<CampaignHeader />
<CampaignTable />

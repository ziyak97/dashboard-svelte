<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import { campaigns, handleStatusUpdate } from '$lib/stores/CampaignsStore';
	import { Status } from '$lib/shared/enums';
</script>

<table>
	<tr>
		<th>Name of campaigns</th>
		<th />
		<th>✉️ Sent</th>
		<th>👀 Impressions</th>
		<th>🖱️ Clicked</th>
		<th>🎯 Goal</th>
		<th>📩 Postback</th>
		<th>🌪️ Type</th>
	</tr>
	{#each $campaigns as campaign (campaign.id)}
		<tr>
			<td>
				<div>
					<div>{campaign.name}</div>
					<Button
						class={`campaign-table-button ${
							campaign.status === Status.Live
								? 'campaign-table-button-live'
								: 'campaign-table-button-paused'
						}`}
						on:click={() => handleStatusUpdate(campaign.id)}
						>{campaign.status === Status.Live ? 'LIVE' : 'PAUSED'}</Button
					>
				</div>
				<p>Match any of: Last contacted more than 6 days ago</p>
				<p>Created : {campaign.createdAt}</p>
			</td>
			<td on:click={() => handleStatusUpdate(campaign.id)}
				>{campaign.status === Status.Live ? '⏸' : '▶️'}</td
			>
			<td>{campaign.sent}</td>
			<td>{campaign.impressions}</td>
			<td>{campaign.clicked}</td>
			<td>{campaign.goal}</td>
			<td>{campaign.postback}</td>
			<td>{campaign.type}</td>
		</tr>
	{/each}
</table>

<style>
	table {
		border-collapse: collapse;
		font-size: 0.8rem;
		width: 100%;
		position: relative;
	}
	tr {
		border-bottom: 1px solid #ccc;
	}
	tr:last-child {
		border-bottom: hidden;
	}
	tr div {
		display: flex;
		justify-content: space-between;
		margin: 0;
		color: #2a2b2f;
		font-weight: 500;
		align-items: flex-start;
	}
	tr p {
		margin: 0;
		font-size: 0.6rem;
	}
	th {
		text-align: left;
		padding: 2ch 8ch;
		padding-left: 0;
		font-weight: 500;
		color: #2a2b2f;
		position: sticky;
		top: 0px;
		background: #fff;
	}
	td {
		padding: 2ch 8ch;
		padding-left: 0;
		color: #999;
	}
	tr td:nth-child(1) {
		padding-right: 4ch;
	}
	tr td:nth-child(2) {
		display: flex;
		cursor: pointer;
		user-select: none;
	}
	:global(.campaign-table-button) {
		padding: 0.5ch 2ch;
		font-size: 0.6rem;
		margin-bottom: 0.5ch;
	}
	:global(.campaign-table-button-paused) {
		background: #edf2ff !important;
		color: #4d7cfe !important;
	}
</style>

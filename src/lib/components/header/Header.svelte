<script lang="ts">
    import Search from "$lib/components/search/Search.svelte";
    import Profile from '$lib/components/profile/Profile.svelte';
</script>

<div class="container">
    <h3>Campaigns</h3>

    <div class="container-right">
        <Search />
        <span>🔔</span>
        <Profile />
    </div>
</div>

<style>
    .container {
        grid-area: header;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 8ch;
        border-bottom: 1px solid #ccc;
    }

    .container-right {
        display: flex;
        align-items: center;
        gap: 3ch;
    }
</style>
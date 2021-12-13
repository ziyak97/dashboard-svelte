<script lang="ts">
    let value: string;
</script>

<div>
    <span>🔍</span>
    <input bind:value placeholder="Search..." />
</div>

<style>
    div {
        display: flex;
    } 
    input {
        border: transparent;
        outline: transparent;
        width: 8ch;
    }
</style>
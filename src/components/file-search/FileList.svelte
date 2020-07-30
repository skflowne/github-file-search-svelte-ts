<script lang="ts">
    import type { File } from "../../types"
    import ListItem from "./ListItem.svelte"

    import fileIndex from "../../store/fileIndex"

    export let files: File[] = []
    export let searching: boolean = false
</script>

<div class="files w-4/5 mx-auto">
    {#if files.length > 0}
        {#each files as file, index (file.id)}
            <ListItem active={searching && $fileIndex === index} {...file} />
        {/each}
    {:else}
        <div>
            <h3>No matching files found</h3>
        </div>
    {/if}
</div>

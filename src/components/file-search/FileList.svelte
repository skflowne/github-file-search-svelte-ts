<script lang="ts">
    import type { File } from "../../interfaces/file.interface"

    import FileItem from "./FileItem.svelte"

    import fileIndex from "../../store/fileIndex"

    export let searching: boolean = false
    export let files: File[] = []
</script>

<div class="w-4/5 mx-auto">
    {#if files.length > 0}
        {#each files as file, index (file.id)}
            <FileItem active={searching && index === $fileIndex} {file} />
        {/each}
    {:else}
        <div>
            <h3>No matching files found</h3>
        </div>
    {/if}
</div>

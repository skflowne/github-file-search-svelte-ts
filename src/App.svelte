<script lang="ts">
    import { onMount } from "svelte"

    import Tailwind from "./Tailwind.svelte"
    import FileList from "./components/file-search/FileList.svelte"
    import FileSearch from "./components/file-search/FileSearch.svelte"
    import InfoMessage from "./components/file-search/InfoMessage.svelte"

    import files from "./store/files"
    import fileSearchResults from "./store/fileSearchResults"
    import fileIndex from "./store/fileIndex"
    import Header from "./components/Header.svelte"

    let searching = false

    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.key === "t" || e.key === "T") {
            searching = true
        }

        if (e.key === "Escape") {
            searching = false
        }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "ArrowDown") {
            fileIndex.update((i) => (i + 1) % $fileSearchResults.length)
        }

        if (e.key === "ArrowUp") {
            fileIndex.update((i) => (i - 1 < 0 ? $fileSearchResults.length - 1 : i - 1))
        }
    }

    onMount(() => {
        document.addEventListener("keyup", handleKeyUp)
        document.addEventListener("keydown", handleKeyDown)

        return () => {
            document.removeEventListener("keyup", handleKeyUp)
            document.removeEventListener("keydown", handleKeyDown)
        }
    })
</script>

<Tailwind />
<main>
    <Header />
    {#if searching}
        <InfoMessage />
        <FileSearch />
    {/if}
    <FileList {searching} files={searching ? $fileSearchResults : $files} />
</main>

<script lang="ts">
    import { onMount } from "svelte"

    import Tailwind from "./Tailwind.svelte"
    import Header from "./components/Header.svelte"
    import FileList from "./components/file-search/FileList.svelte"
    import Search from "./components/file-search/Search.svelte"
    import InfoMessage from "./components/file-search/InfoMessage.svelte"

    import files from "./store/files"
    import fileSearchResults from "./store/fileSearchResults"
    import fileIndex from "./store/fileIndex"

    let searching = false

    const handleKeyUp = (e: KeyboardEvent) => {
        console.log("keyup", e.key, e)
        if (e.key === "t") {
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
        addEventListener("keyup", handleKeyUp)
        addEventListener("keydown", handleKeyDown)

        return () => {
            removeEventListener("keyup", handleKeyUp)
            removeEventListener("keydown", handleKeyDown)
        }
    })

    $: console.log("index", $fileIndex)
</script>

<Tailwind />
<main>
    <Header />
    {#if searching}
        <InfoMessage />
        <Search />
    {/if}
    <FileList {searching} files={searching ? $fileSearchResults : $files} />
</main>

<script lang="ts">
    import fileSearch from "../../store/fileSearch"

    let input: HTMLElement

    $: if (input) {
        input.focus()
    }
</script>

<div class="search-box text-md text-gray-800 w-4/5 mx-auto my-2">
    My Repository
    <span class="text-bold text-xl">/</span>
    <input bind:this={input} type="text" name="search" bind:value={$fileSearch} autocomplete="off" />
</div>

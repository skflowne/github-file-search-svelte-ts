<script lang="ts">
    import Icon from "svelte-awesome/components/Icon.svelte"
    import { faFileCode, faFolder } from "@fortawesome/free-regular-svg-icons"
    import { parseJSON, formatDistanceToNow } from "date-fns"

    export let id: number = 0
    export let type: string = ""
    export let name: string = ""
    export let comment: string = ""
    export let modified_time: string = ""
    export let active: boolean = false

    $: distance = formatDistanceToNow(parseJSON(modified_time))
</script>

<div
    class:bg-blue-100={active}
    class="list-item w-full flex flex-row items-center justify-between py-1 px-4 border border-gray-200">
    <div class="file">
        <span
            class="file-icon text-xl px-1 pr-2"
            class:text-blue-400={type === 'file'}
            class:text-yellow-600={type === 'folder'}>
            {#if type === 'file'}
                <Icon data={faFileCode} />
            {:else}
                <Icon data={faFolder} />
            {/if}
        </span>
        <span class:text-blue-500={type === 'file'} class:text-yellow-700={type === 'folder'}>
            {@html name}
        </span>
    </div>
    <div class="comment text-gray-700">{comment}</div>
    <div class="time text-gray-600" title={modified_time}>{distance} ago</div>
</div>

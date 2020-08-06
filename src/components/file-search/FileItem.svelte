<script lang="ts">
    import Icon from "svelte-awesome/components/Icon.svelte"
    import { faFileCode, faFolder } from "@fortawesome/free-regular-svg-icons"
    import { parseJSON, formatDistanceToNow } from "date-fns"
    import type { File } from "../../interfaces/file.interface"

    export let file: File
    export let active: boolean = false

    const distance = formatDistanceToNow(parseJSON(file.modified_time))
</script>

<div
    class:bg-blue-200={active}
    class="w-full flex flex-row items-center justify-between py-1 px-4 border border-gray-200">
    <div>
        <span class={`text-xl px-1 pr-2 ${file.type === 'file' ? 'text-blue-400' : 'text-yellow-600'}`}>
            <Icon data={file.type === 'file' ? faFileCode : faFolder} />
        </span>
        <span class={`${file.type === 'file' ? 'text-blue-500' : 'text-yellow-700'}`}>
            {@html file.name}
        </span>
    </div>
    <div class="text-gray-700">{file.comment}</div>
    <div class="text-gray-600" title={file.modified_time}>{distance} ago</div>
</div>

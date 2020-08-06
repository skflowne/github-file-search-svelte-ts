import { derived } from "svelte/store"
import fileSearch from "./fileSearch"
import files from "./files"
import fileIndex from "./fileIndex"

const results = derived([fileSearch, files], ([$fileSearch, $files]) => {
    const isSearchEmpty = $fileSearch.trim().length === 0
    const allFiles = $files.filter((t) => t.type === "file")

    fileIndex.set(0)

    if (isSearchEmpty) {
        return allFiles
    } else {
        const pattern = new RegExp($fileSearch, "gi")
        return allFiles
            .filter((f) => {
                const filename = f.name.toLocaleLowerCase()
                const search = $fileSearch.toLocaleLowerCase()
                return filename.includes(search)
            })
            .map((f) => {
                return {
                    ...f,
                    name: f.name.replace(pattern, (match) => `<mark>${match}</mark>`),
                }
            })
    }
})

export default results

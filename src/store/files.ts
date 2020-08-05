import { readable } from "svelte/store"
import apiFiles from "../api"

// import our custom File interface
import type { File } from "../interfaces/file.interface"

// create a readonly store which is going to contain an array of File
const files = readable<File[]>([], (set) => {
    set(apiFiles)
})

export default files

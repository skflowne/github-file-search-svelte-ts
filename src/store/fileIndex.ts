import { writable } from "svelte/store"

const fileIndex = writable<number>(0)

export default fileIndex

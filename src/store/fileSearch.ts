import { writable } from "svelte/store"

const fileSearch = writable<string>("")

export default fileSearch

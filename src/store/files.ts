import { writable } from "svelte/store"
import apiFiles from "../api"

import type { File } from "../types"

const files = writable<File[]>(apiFiles)

export default files

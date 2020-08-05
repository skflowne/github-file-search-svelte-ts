export interface File {
    id: number
    type: "file" | "folder"
    name: string
    comment: string
    modified_time: string
}

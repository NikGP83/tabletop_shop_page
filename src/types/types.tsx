interface BundleData {
    icon_path: string,
    item: string,
    free_server: string,
    server: string,
}

export interface Response {
    name: string,
    cost: string,
    data: BundleData[],
}
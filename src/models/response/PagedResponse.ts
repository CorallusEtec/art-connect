export interface PagedResponse<T> {
    content: T[],
    totalPages: number,
    first: boolean,
    last: boolean,
    size: number,
    pageable: {
        pageNumber: number,
        offset: number,
        pageSize: number
    }
}
export interface IPaginatedList<T> {
    count: number;
    rows: Array<T>;
}
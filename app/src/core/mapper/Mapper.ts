export default interface Mapper<M, D> {
    to: (model: M) => Promise<D>;
    from: (dto: D) => Promise<M>;
}
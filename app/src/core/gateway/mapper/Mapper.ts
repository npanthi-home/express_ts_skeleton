export default interface Mapper<M, D> {
    to: (model: M) => D;
    from: (dto: D) => M;
}
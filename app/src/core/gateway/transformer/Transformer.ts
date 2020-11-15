export default interface Transformer<M, D> {
    to: (model: M) => D;
    from: (dto: D) => M;
}
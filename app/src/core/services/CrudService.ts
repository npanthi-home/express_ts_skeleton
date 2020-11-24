export default interface CrudService<M, ID> {
    create:(model: M) => Promise<M>;
    get:(id: ID) => Promise<M>;
    update:(model: M) => Promise<M>;
    delete:(id: ID) => Promise<M>;
}
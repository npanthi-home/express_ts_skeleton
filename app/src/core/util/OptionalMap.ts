import Nothing from './Nothing';
import Optional from './Optional';

export default class OptionalMap<K, V>  {
    map: Map<K, V>;

    constructor() {
        this.map = new Map<K, V>();
    }

    get(key: K): Optional<V> {
        let value:V|undefined = this.map.get(key);
        if(value === undefined || value === null) {
            return Nothing;
        }
        return value;
    }

    delete(key: K): Optional<V> {
        let value:V|undefined = this.map.get(key);
        if(value === undefined || value === null) {
            return Nothing;
        }
        this.map.delete(key);
        return value;
    }

    set(key: K, value: V): void {
        if(value !== undefined || value !== null) {
            this.map.set(key, value);
        }
    }
}
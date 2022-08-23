const _cache = () => {
    const _cache = new Map() 
    return {
        add: (key, item) => _cache.set(key, item),
        get: id => _cache.get(id),
        all: () => Array.from(_cache.values()),
        has: key => _cache.has(key)
    }
}

export const cache = (() => {
    const cacheCache = _cache()

    return {
        getOrAdd: name => cacheCache.has(name) ? cacheCache.get(name) : _cache()         
    }

})() 



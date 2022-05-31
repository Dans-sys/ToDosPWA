function updateDynamicCache(dynamicCache, request, response) {
    if (response.ok) {
        caches.open(dynamicCache).then(cache => {
            cache.put(request, response.clone());
            return response.clone();
        });
    } else {
        return response;
    }
}
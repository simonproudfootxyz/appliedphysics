import { PAGINATION_QUERY } from "../components/Pagination";

export default function paginationField() {
    return {
        keyArgs: false,
        // Tells Apollo we will take care of this
        read(existing = [], { args, cache }) {
            const { skip, first } = args;
            // Read the number of items on the page from the cache
            const data = cache.readQuery({
                query: PAGINATION_QUERY
            })
            const count = data?._allProductsMeta?.count;
            const page = skip / first + 1;
            const pages = Math.ceil(count/ first);
            // Check if we have existing items
            const items = existing.slice(skip, skip + first).filter((item) => item);
            if(items.length && items.length !== first && page === pages) {
                // If there are items, and there there aren't enough for a full query, AND we are on the last page
                return items;
            }
            if(items.length !== first) {
                // If we have no items, return false (make another network request)
                return false;
            }
            if(items.length) {
                // If we have items, return them
                return items;
            }
            // Failsafe, if nothing else return false (make another network request)
            return false;
            // first thing it does is asks the read function for those items
            // We can do one of two things
            // 1. return the items they are already in the cache
            // 2. return false from here (network request)
        },
        merge(existing, incoming, { args }) {
            // This runs when the Apollo client comes back from the network with our product
            const { skip, first } = args;
            const merged = existing ? existing.slice(0) : [];
            for(let i = skip; i < skip + incoming.length; ++i) {
                merged[i] = incoming[i - skip]
            }
            // TODO: refactor this
            return merged;
        }
    }
}
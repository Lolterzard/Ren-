import { cache } from "../cache/cache.mjs"



let id = 0
export const registerTile = ({distribution, colour}) => {    
    cache.getOrAdd('tiles').add(++id, {distribution, colour})
}
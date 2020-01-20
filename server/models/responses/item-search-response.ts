import Author from "../author";
import Item from "../item";

export default interface ItemSearchResponse {
    author: Author,
    categories: string[],
    items: Item[]
}
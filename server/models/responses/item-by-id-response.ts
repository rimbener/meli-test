import Author from "../author";
import Item from "../item";

export default interface ItemByIdResponse {
    author: Author,
    category: string[],
    item: Item
}
import Price from "./price";

export default interface Item {
    id: string,
    title: string,
    price: Price,
    picture: string,
    condition: string,
    free_shipping: boolean,
    sold_quantity?: number,
    description?: string
}
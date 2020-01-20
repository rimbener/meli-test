import ItemDescriptionController from "../controllers/item-description-controller";
import Item from "../models/item";
import MlItem from "../models/meli/ml-item";
import MlSearchItem from "../models/meli/ml-search-item";
import { priceFactory } from "./price.factory";

export const itemFactory = async (mlItem: MlSearchItem | MlItem) => {
    const item: Item = {
        id: mlItem.id,
        title: mlItem.title,
        price: await priceFactory(mlItem.currency_id, mlItem.price),
        picture: mlItem.thumbnail,
        condition: mlItem.condition,
        free_shipping: mlItem.shipping.free_shipping
    }
    return item;
}

export const itemByIdFactory = async (mlItem: MlItem) => {
    const item: Item = await itemFactory(mlItem);
    item.picture = mlItem.pictures[0].secure_url;
    item.sold_quantity = mlItem.sold_quantity;
    item.description = await ItemDescriptionController.getItemDescription(item.id);
    return item;
}

import { AUTHOR } from "../consts/author";
import ItemCategoryController from "../controllers/item-category-controller";
import Item from "../models/item";
import MlItem from "../models/meli/ml-item";
import MlSearchItem from "../models/meli/ml-search-item";
import ItemByIdResponse from "../models/responses/item-by-id-response";
import ItemSearchResponse from "../models/responses/item-search-response";
import { itemByIdFactory, itemFactory } from "./item.factory";

export const itemSearchResponseFactory = async (mlSearchItems: MlSearchItem[]) => {
    const items: Item[] = [];
    const categories: string[] = [];

    for (const item of mlSearchItems) {
        const itemRootCategory = await ItemCategoryController.getRootCategory(item.category_id);
        if (categories.findIndex(element => element === itemRootCategory) === -1) {
            categories.push(itemRootCategory);
        };
        items.push(await itemFactory(item));
    }

    const response: ItemSearchResponse = {
        author: AUTHOR,
        categories,
        items
    }

    return response;
}

export const itemByIdResponseFactory = async (mlItem: MlItem) => {
    const item: Item = await itemByIdFactory(mlItem);
    const category: string[] = await ItemCategoryController.getCategoryList(mlItem.category_id);
    const response: ItemByIdResponse = {
        author: AUTHOR,
        category,
        item
    }
    return response;
}

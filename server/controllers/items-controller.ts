import { Request, Response } from "express";
import { ML_API_URL, ML_ITEMS_API_URL } from "../consts/api-url";
import { itemByIdResponseFactory, itemSearchResponseFactory } from "../factories/item-response.factory";
import MlSearchItem from "../models/meli/ml-search-item";
import ItemByIdResponse from "../models/responses/item-by-id-response";
import ItemSearchResponse from "../models/responses/item-search-response";
const cachios = require('cachios');

export default class ItemsController {

    private static searchApiUrl(query: any): string {
        let url = `${ML_API_URL}/search?`;
        if (query.search) {
            url += `q=${query.search}`
        }
        if (query.limit) {
            url += `&limit=${query.limit}`
        }
        return url;
    }

    public static async getById(req: Request, res: Response) {
        try {
            const mlResponse = await cachios.get(`${ML_ITEMS_API_URL}/${req.params.id}`, { ttl: 60 });
            const response: ItemByIdResponse = await itemByIdResponseFactory(mlResponse.data);

            if (response) {
                res.send(response)
            } else {
                res.status(204).send();
            }
        } catch (errors) {
            res.status(404).send("Item no encontrado");
        }
    }

    public static async search(req: Request, res: Response) {
        try {
            const mlResponse = await cachios.get(ItemsController.searchApiUrl(req.query), { ttl: 60 });
            const MlSearchItems: MlSearchItem[] = mlResponse.data.results;
            const response: ItemSearchResponse = await itemSearchResponseFactory(MlSearchItems);

            res.send(response);
        } catch (errors) {
            res.status(404).send(errors);
        }
    }
}

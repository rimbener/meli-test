import { ML_CATEGORY_API_URL } from "../consts/api-url";
import MlCategory from "../models/meli/ml-category";
const cachios = require('cachios');

export default class ItemCategoryController {
    public static async getRootCategory(categoryId: string) {
        let url = `${ML_CATEGORY_API_URL}/${categoryId}`;
        try {
            const response = await cachios.get(url, { ttl: 60 });
            return response.data.path_from_root[0].name;
        } catch (error) {
            console.log(error)
        }
    }

    public static async getCategoryList(categoryId: string) {
        let url = `${ML_CATEGORY_API_URL}/${categoryId}`;
        try {
            const response = await cachios.get(url, { ttl: 60 });
            const list: string[] = response.data.path_from_root.reduce(
                (acc: string[], val: MlCategory) => {
                    acc.push(val.name)
                    return acc
                }, []
            );
            return list;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
}


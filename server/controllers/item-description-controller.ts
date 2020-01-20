import { ML_ITEMS_API_URL } from "../consts/api-url";
const cachios = require('cachios');

export default class ItemDescriptionController {
    public static async getItemDescription(itemId: string) {
        const url = `${ML_ITEMS_API_URL}/${itemId}/descriptions`;
        try {
            const response = await cachios.get(url, { ttl: 60 });
            return response.data[0].plain_text;
        } catch (error) {
            console.log(error)
        }
    }
}

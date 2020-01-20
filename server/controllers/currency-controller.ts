import { ML_CURRENCY_API_URL } from "../consts/api-url";
const cachios = require('cachios');

export default class CurrencyController {
    public static async getCurrencyById(currencyId: string) {
        let url = `${ML_CURRENCY_API_URL}/${currencyId}`;
        try {
            const response = await cachios.get(url, { ttl: 60 });
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }
}


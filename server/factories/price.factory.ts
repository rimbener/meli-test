import CurrencyController from "../controllers/currency-controller";
import MlCurrency from "../models/meli/ml-currency";
import Price from "../models/price";

export const priceFactory = async (currencyId: string, price: number): Promise<Price> => {
    const mlPrice: MlCurrency = await CurrencyController.getCurrencyById(currencyId);
    const responsePrice: Price = {
        currency: mlPrice.symbol,
        amount: Number.parseFloat(price.toFixed(mlPrice.decimal_places)),
        decimals: mlPrice.decimal_places
    }
    return responsePrice;
}
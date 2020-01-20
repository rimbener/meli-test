import MlAddress from "./ml-address";
import MlInstallments from "./ml-installments";
import MlSeller from "./ml-seller";
import MlSellerAddres from "./ml-seller-address";
import MlShipping from "./ml-shipping";

export default interface MlSearchItem {
    id: string,
    site_id: string,
    title: string,
    seller: MlSeller,
    price: number,
    currency_id: string,
    available_quantity: number,
    sold_quantity: number,
    buying_mode: string,
    listing_type_id: string,
    stop_time: string,
    condition: string,
    permalink: string,
    thumbnail: string,
    accepts_mercadopago: boolean,
    installments: MlInstallments,
    address: MlAddress,
    shipping: MlShipping,
    seller_address: MlSellerAddres,
    attributes: any[],
    original_price: number,
    category_id: string,
    official_store_id: number,
    catalog_product_id: null
    tags: string[],
}

import MlItemPicture from "./ml-item-picture";
import MlItemMlSellerAddress from "./ml-item-seller-address";
import MlItemShipping from "./ml-item-shipping";

export default interface MlItem {
    id: string,
    site_id: string,
    title: string,
    subtitle: string,
    seller_id: number,
    category_id: string,
    official_store_id: number,
    price: number,
    base_price: number,
    original_price: number,
    currency_id: string,
    initial_quantity: number,
    available_quantity: number,
    sold_quantity: number,
    sale_terms: string[],
    buying_mode: string,
    listing_type_id: string,
    start_time: string,
    stop_time: string,
    condition: string,
    permalink: string,
    thumbnail: string,
    secure_thumbnail: string,
    pictures: MlItemPicture[],
    video_id: string,
    descriptions: [{ id: string }],
    accepts_mercadopago: boolean,
    non_mercado_pago_payment_methods: string[],
    shipping: MlItemShipping,
    international_delivery_mode: string,
    seller_address: MlItemMlSellerAddress,
    seller_contact: null,
    // DESDE ACA DEBERIA TENER VARIOS TYPES PARA CADA ATRIBUTO
    // NO LOS HAGO XQ LLEVA MUCHO TIEMPO SOLO PARA EL TEST, EN UNA APP REAL VA SI O SI
    location: {},
    geolocation: {
        latitude: number,
        longitude: number
    },
    coverage_areas: [],
    attributes: [
        {
            id: string,
            name: string,
            value_id: null,
            value_name: string,
            value_struct: null,
            values: [
                {
                    id: null,
                    name: string,
                    struct: null
                }
            ],
            attribute_group_id: string,
            attribute_group_name: string
        },
        {
            id: string,
            name: string,
            value_id: null,
            value_name: string,
            value_struct: null,
            values: [
                {
                    id: null,
                    name: string,
                    struct: null
                }
            ],
            attribute_group_id: string,
            attribute_group_name: string
        },
        {
            id: string,
            name: string,
            value_id: null,
            value_name: string,
            value_struct: null,
            values: [
                {
                    id: null,
                    name: string,
                    struct: null
                }
            ],
            attribute_group_id: string,
            attribute_group_name: string
        },
        {
            id: string,
            name: string,
            value_id: string,
            value_name: string,
            value_struct: null,
            values: [
                {
                    id: string,
                    name: string,
                    struct: null
                }
            ],
            attribute_group_id: string,
            attribute_group_name: string
        },
        {
            id: string,
            name: string,
            value_id: string,
            value_name: string,
            value_struct: null,
            values: [
                {
                    id: string,
                    name: string,
                    struct: null
                }
            ],
            attribute_group_id: string,
            attribute_group_name: string
        },
        {
            id: string,
            name: string,
            value_id: null,
            value_name: string,
            value_struct: null,
            values: [
                {
                    id: null,
                    name: string,
                    struct: null
                }
            ],
            attribute_group_id: string,
            attribute_group_name: string
        },
        {
            id: string,
            name: string,
            value_id: string,
            value_name: string,
            value_struct: null,
            values: [
                {
                    id: string,
                    name: string,
                    struct: null
                }
            ],
            attribute_group_id: string,
            attribute_group_name: string
        },
        {
            id: string,
            name: string,
            value_id: string,
            value_name: string,
            value_struct: null,
            values: [
                {
                    id: string,
                    name: string,
                    struct: null
                }
            ],
            attribute_group_id: string,
            attribute_group_name: string
        },
        {
            id: string,
            name: string,
            value_id: null,
            value_name: string,
            value_struct: null,
            values: [
                {
                    id: null,
                    name: string,
                    struct: null
                }
            ],
            attribute_group_id: string,
            attribute_group_name: string
        },
        {
            id: string,
            name: string,
            value_id: null,
            value_name: string,
            value_struct: null,
            values: [
                {
                    id: null,
                    name: string,
                    struct: null
                }
            ],
            attribute_group_id: string,
            attribute_group_name: string
        }
    ],
    warnings: string[],
    listing_source: string,
    variations: string[],
    status: string,
    sub_status: string[],
    tags: string[],
    warranty: null,
    catalog_product_id: null,
    domain_id: string,
    parent_item_id: string,
    differential_pricing: string,
    deal_ids: string[],
    automatic_relist: boolean,
    date_created: string,
    last_updated: string,
    health: number,
    catalog_listing: boolean
}
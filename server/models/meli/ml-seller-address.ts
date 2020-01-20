import MlCity from "./ml-city";
import MlCountry from "./ml-country";
import State from "./ml-state";

export default interface MlSellerAddres {
    id: string,
    comment: string,
    address_line: string,
    zip_code: string,
    country: MlCountry,
    state: State,
    city: MlCity
    latitude: string,
    longitude: string,
}
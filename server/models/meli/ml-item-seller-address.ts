import MlCity from "./ml-city";
import MlCountry from "./ml-country";
import MlNeighborhood from "./ml-neighborhood";
import State from "./ml-state";

export default interface MlItemMlSellerAddress {
    city: MlCity,
    state: State,
    country: MlCountry,
    search_location: {
        neighborhood: MlNeighborhood,
        city: MlCity,
        state: State
    },
    latitude: number,
    longitude: number,
    id: number,
}
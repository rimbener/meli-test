export default interface MlItemShipping {
    mode: string,
    methods: string[],
    tags: string[],
    dimensions: string,
    local_pick_up: boolean,
    free_shipping: boolean,
    logistic_type: string,
    store_pick_up: boolean
}
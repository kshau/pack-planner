import axios from "axios";

export let loadedStoresData;

axios.get("/api/getStoresData")
    .then(response => {
        const {stores} = response.data;
        loadedStoresData = stores;
    })
    .catch(err => {
        console.error(err);
    })
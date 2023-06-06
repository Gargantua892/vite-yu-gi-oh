import { reactive } from "vue";

export const store = reactive({
    apiURL: " https://db.ygoprodeck.com/api/v7/cardinfo.php ",
    filterURL: " https://db.ygoprodeck.com/api/v7/archetypes.php ",
    cardList: [],
    filter: [],
    filterModel: "",
});
 
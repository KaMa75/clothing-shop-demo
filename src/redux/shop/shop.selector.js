import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsAsArray = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(collectionKey => collections[collectionKey])
);

export const selectCollectionsForOverview = createSelector(
    [selectCollectionsAsArray],
    collections => collections.map(collection => ({
        ...collection,
        items: [...collection.items].slice(-4)
    }))
);

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
);

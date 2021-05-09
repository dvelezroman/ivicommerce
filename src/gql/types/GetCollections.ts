/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCollections
// ====================================================

export interface GetCollections_collections_items_assets {
  __typename: "Asset";
  source: string;
  id: string;
  width: number;
}

export interface GetCollections_collections_items {
  __typename: "Collection";
  id: string;
  name: string;
  slug: string;
  assets: GetCollections_collections_items_assets[];
}

export interface GetCollections_collections {
  __typename: "CollectionList";
  items: GetCollections_collections_items[];
  totalItems: number;
}

export interface GetCollections {
  /**
   * A list of Collections available to the shop
   */
  collections: GetCollections_collections;
}

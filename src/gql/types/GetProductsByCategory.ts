/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CurrencyCode } from "./../../../types/globalTypes";

// ====================================================
// GraphQL query operation: GetProductsByCategory
// ====================================================

export interface GetProductsByCategory_search_items_productAsset {
  __typename: "SearchResultAsset";
  id: string;
  preview: string;
}

export interface GetProductsByCategory_search_items {
  __typename: "SearchResult";
  sku: string;
  slug: string;
  productName: string;
  productId: string;
  currencyCode: CurrencyCode;
  description: string;
  /**
   * A relevence score for the result. Differs between database implementations
   */
  score: number;
  productAsset: GetProductsByCategory_search_items_productAsset | null;
}

export interface GetProductsByCategory_search {
  __typename: "SearchResponse";
  items: GetProductsByCategory_search_items[];
  totalItems: number;
}

export interface GetProductsByCategory {
  /**
   * Search Products based on the criteria set by the `SearchInput`
   */
  search: GetProductsByCategory_search;
}

export interface GetProductsByCategoryVariables {
  collectionSlug: string;
}

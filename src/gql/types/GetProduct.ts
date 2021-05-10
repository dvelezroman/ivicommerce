/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProduct
// ====================================================

export interface GetProduct_product_assets {
  __typename: 'Asset'
  source: string
  id: string
  width: number
  preview: string
}

export interface GetProduct_product {
  __typename: 'Product'
  name: string
  slug: string
  id: string
  description: string
  assets: GetProduct_product_assets[]
}

export interface GetProduct {
  /**
   * Get a Product either by id or slug. If neither 'id' nor 'slug' is speicified, an error will result.
   */
  product: GetProduct_product | null
}

export interface GetProductVariables {
  id: string
}

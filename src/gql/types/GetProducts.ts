/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AssetType } from './../../../types/globalTypes'

// ====================================================
// GraphQL query operation: GetProducts
// ====================================================

export interface GetProducts_products_items_assets {
  __typename: 'Asset'
  name: string
  id: string
  type: AssetType
  mimeType: string
  source: string
  preview: string
}

export interface GetProducts_products_items_variants_product {
  __typename: 'Product'
  name: string
  id: string
  slug: string
}

export interface GetProducts_products_items_variants {
  __typename: 'ProductVariant'
  id: string
  product: GetProducts_products_items_variants_product
  productId: string
  price: number
  name: string
  sku: string
}

export interface GetProducts_products_items {
  __typename: 'Product'
  id: string
  name: string
  slug: string
  description: string
  assets: GetProducts_products_items_assets[]
  createdAt: any
  updatedAt: any
  variants: GetProducts_products_items_variants[]
}

export interface GetProducts_products {
  __typename: 'ProductList'
  totalItems: number
  items: GetProducts_products_items[]
}

export interface GetProducts {
  /**
   * Get a list of Products
   */
  products: GetProducts_products
}

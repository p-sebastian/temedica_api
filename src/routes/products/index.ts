import {combineRoutes} from '@marblejs/http'

import {getProductsEffect$} from './effects/getProducts.effect'

export const product$ = combineRoutes('/product', {
  effects: [getProductsEffect$],
})

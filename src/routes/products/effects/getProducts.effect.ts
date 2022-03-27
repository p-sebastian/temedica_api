import {r} from '@marblejs/http'
import {requestValidator$} from '@marblejs/middleware-io'
import {map, mergeMap} from 'rxjs/operators'

import {ProductDao} from '../model/product.dao'
import {ProductValidator} from '../model/product.validator'

export const getProductsEffect$ = r.pipe(
  r.matchPath('/'),
  r.matchType('POST'),
  r.useEffect(req$ =>
    req$.pipe(
      requestValidator$({body: ProductValidator.get}),
      map(({body}) => body),
      mergeMap(ProductDao.search),
      map(body => ({body: {data: body}})),
    ),
  ),
)

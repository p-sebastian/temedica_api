import Fuse from 'fuse.js'
import {of} from 'rxjs'

import data from '../../../util/dataset.json'
import {TProduct} from './product.type'
import {TProductGet} from './product.validator'

export const ProductDao = Object.freeze({
  search: (body: TProductGet) => of(find(body)),
})

const fuse = new Fuse(data.drugs as TProduct[], {
  keys: ['name', 'diseases'],
})

const find = (body: TProductGet) => {
  const {limit = 10, q, skip = 0} = body
  const found = !q ? data.drugs : fuse.search(q).map(x => x.item)
  const obj = {products: found.slice(skip, skip + limit), count: found.length}
  return obj
}

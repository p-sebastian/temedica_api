import {t} from '@marblejs/middleware-io'

import {optional} from '../../../util/optional.util'

export const ProductValidator = Object.freeze({
  get: t.type({
    skip: optional(t.number),
    limit: optional(t.number),
    q: optional(t.string),
  }),
})

export type TProductGet = t.TypeOf<typeof ProductValidator.get>

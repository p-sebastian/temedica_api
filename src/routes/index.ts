import {combineRoutes} from '@marblejs/http'

import {product$} from './products'

export const api$ = combineRoutes('/api/v1', [product$])

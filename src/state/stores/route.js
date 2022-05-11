import { createReducer } from '../create-reducer'

class Route {
  constructor(options = {}) {
    const {
      currentRoute = '',
      hash = '',
      host = '',
      hostName = '',
      href = '',
      origin = '',
      pathName = '',
      port = '',
      protocol = '',
    } = options

    this.currentRoute = currentRoute
    this.hash = hash
    this.host = host
    this.hostName = hostName
    this.href = href
    this.origin = origin
    this.pathName = pathName
    this.port = port
    this.protocol = protocol
  }

  static UPDATE_ROUTE(state, payload = {}) {
    const { location } = payload
    const [currentRoute] = location.hash.split('#!').filter((item) => item)

    state = {
      currentRoute: currentRoute || '/',
      hash: location.hash,
      host: location.host,
      hostName: location.hostname,
      href: location.href,
      origin: location.origin,
      pathName: location.pathname,
      port: location.port,
      protocol: location.protocol,
    }

    return state
  }
}

export const routeReducer = createReducer(Route)

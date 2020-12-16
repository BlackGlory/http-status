import { HTTPError } from './http-error'
import { ServerError } from './enum'

export class HTTPServerError extends HTTPError {}

export class InternalServerError extends HTTPServerError {
  constructor() {
    super(ServerError.InternalServerError, 'Internal Server Error')
  }
}

export class NotImplemented extends HTTPServerError {
  constructor() {
    super(ServerError.NotImplemented, 'Not Implemented')
  }
}

export class BadGateway extends HTTPServerError {
  constructor() {
    super(ServerError.BadGateway, 'Bad Gateway')
  }
}

export class ServiceUnavailable extends HTTPServerError {
  constructor() {
    super(ServerError.ServiceUnavailable, 'Service Unavailable')
  }
}

export class GatewayTimeout extends HTTPServerError {
  constructor() {
    super(ServerError.GatewayTimeout, 'Gateway Timeout')
  }
}

export class HTTPVersionNotSupported extends HTTPServerError {
  constructor() {
    super(ServerError.HTTPVersionNotSupported, 'HTTP Version Not Supported')
  }
}

export class VariantAlsoNegotiates extends HTTPServerError {
  constructor() {
    super(ServerError.VariantAlsoNegotiates, 'Variant Also Negotiates')
  }
}

export class InsufficientStorage extends HTTPServerError {
  constructor() {
    super(ServerError.InsufficientStorage, 'Insufficient Storage')
  }
}

export class LoopDetected extends HTTPServerError {
  constructor() {
    super(ServerError.LoopDetected, 'Loop Detected')
  }
}

export class NotExtended extends HTTPServerError {
  constructor() {
    super(ServerError.NotExtended, 'Not Extended')
  }
}

export class NetworkAuthenticationRequired extends HTTPServerError {
  constructor() {
    super(ServerError.NetworkAuthenticationRequired, 'Network Authentication Required')
  }
}

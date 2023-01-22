import { HTTPError } from './http-error.js'
import { ServerError } from './enum.js'

export class HTTPServerError extends HTTPError {}

export class InternalServerError extends HTTPServerError {
  constructor(message?: string) {
    super(ServerError.InternalServerError, message ?? 'Internal Server Error')
  }
}

export class NotImplemented extends HTTPServerError {
  constructor(message?: string) {
    super(ServerError.NotImplemented, message ?? 'Not Implemented')
  }
}

export class BadGateway extends HTTPServerError {
  constructor(message?: string) {
    super(ServerError.BadGateway, message ?? 'Bad Gateway')
  }
}

export class ServiceUnavailable extends HTTPServerError {
  constructor(message?: string) {
    super(ServerError.ServiceUnavailable, message ?? 'Service Unavailable')
  }
}

export class GatewayTimeout extends HTTPServerError {
  constructor(message?: string) {
    super(ServerError.GatewayTimeout, message ?? 'Gateway Timeout')
  }
}

export class HTTPVersionNotSupported extends HTTPServerError {
  constructor(message?: string) {
    super(ServerError.HTTPVersionNotSupported, message ?? 'HTTP Version Not Supported')
  }
}

export class VariantAlsoNegotiates extends HTTPServerError {
  constructor(message?: string) {
    super(ServerError.VariantAlsoNegotiates, message ?? 'Variant Also Negotiates')
  }
}

export class InsufficientStorage extends HTTPServerError {
  constructor(message?: string) {
    super(ServerError.InsufficientStorage, message ?? 'Insufficient Storage')
  }
}

export class LoopDetected extends HTTPServerError {
  constructor(message?: string) {
    super(ServerError.LoopDetected, message ?? 'Loop Detected')
  }
}

export class NotExtended extends HTTPServerError {
  constructor(message?: string) {
    super(ServerError.NotExtended, message ?? 'Not Extended')
  }
}

export class NetworkAuthenticationRequired extends HTTPServerError {
  constructor(message?: string) {
    super(ServerError.NetworkAuthenticationRequired, message ?? 'Network Authentication Required')
  }
}

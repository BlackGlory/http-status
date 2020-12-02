import { HTTPError } from './http-error'

export class HTTPServerError extends HTTPError {}

export class InternalServerError extends HTTPServerError {
  constructor() {
    super(500, 'Internal Server Error')
  }
}

export class NotImplemented extends HTTPServerError {
  constructor() {
    super(501, 'Not Implemented')
  }
}

export class BadGateway extends HTTPServerError {
  constructor() {
    super(502, 'Bad Gateway')
  }
}

export class ServiceUnavailable extends HTTPServerError {
  constructor() {
    super(503, 'Service Unavailable')
  }
}

export class GatewayTimeout extends HTTPServerError {
  constructor() {
    super(504, 'Gateway Timeout')
  }
}

export class HTTPVersionNotSupported extends HTTPServerError {
  constructor() {
    super(505, 'HTTP Version Not Supported')
  }
}

export class VariantAlsoNegotiates extends HTTPServerError {
  constructor() {
    super(506, 'Variant Also Negotiates')
  }
}

export class InsufficientStorage extends HTTPServerError {
  constructor() {
    super(507, 'Insufficient Storage')
  }
}

export class LoopDetected extends HTTPServerError {
  constructor() {
    super(508, 'Loop Detected')
  }
}

export class NotExtended extends HTTPServerError {
  constructor() {
    super(510, 'Not Extended')
  }
}

export class NetworkAuthenticationRequired extends HTTPServerError {
  constructor() {
    super(511, 'Network Authentication Required')
  }
}

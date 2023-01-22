import { HTTPError } from './http-error.js'
import { ClientError } from './enum.js'

export class HTTPClientError extends HTTPError {}

export class BadRequest extends HTTPClientError {
  constructor(message?: string) {
    super(ClientError.BadRequest, message ?? 'Bad Request')
  }
}

export class Unauthorized extends HTTPClientError {
  constructor(message?: string) {
    super(ClientError.Unauthorized, message ?? 'Unauthorized')
  }
}

export class Forbidden extends HTTPClientError {
  constructor(message?: string) {
    super(ClientError.Forbidden, message ?? 'Forbidden')
  }
}

export class NotFound extends HTTPClientError {
  constructor(message?: string) {
    super(ClientError.NotFound, message ?? 'Not Found')
  }
}

export class MethodNotAllowed extends HTTPClientError {
  constructor(message?: string) {
    super(ClientError.MethodNotAllowed, message ?? 'Method Not Allowed')
  }
}

export class NotAcceptable extends HTTPClientError {
  constructor(message?: string) {
    super(ClientError.NotAcceptable, message ?? 'Not Acceptable')
  }
}

export class ProxyAuthenticationRequired extends HTTPClientError {
  constructor(message?: string) {
    super(ClientError.ProxyAuthenticationRequired, message ?? 'Proxy Authentication Required')
  }
}

export class RequestTimeout extends HTTPClientError {
  constructor(message?: string) {
    super(ClientError.RequestTimeout, message ?? 'Request Timeout')
  }
}

export class Conflict extends HTTPClientError {
  constructor(message?: string) {
    super(ClientError.Conflict, message ?? 'Conflict')
  }
}

export class Gone extends HTTPClientError {
  constructor(message?: string) {
    super(ClientError.Gone, message ?? 'Gone')
  }
}

export class LengthRequired extends HTTPClientError {
  constructor(message?: string) {
    super(ClientError.LengthRequired, message ?? 'Length Required')
  }
}

export class PreconditionFailed extends HTTPClientError {
  constructor(message?: string) {
    super(ClientError.PreconditionFailed, message ?? 'Precondition Failed')
  }
}

export class PayloadTooLarge extends HTTPClientError {
  constructor(message?: string) {
    super(ClientError.PayloadTooLarge, message ?? 'Payload Too Large')
  }
}

export class URITooLong extends HTTPClientError {
  constructor(message?: string) {
    super(ClientError.URITooLong, message ?? 'URI Too Long')
  }
}

export class UnsupportedMediaType extends HTTPClientError {
  constructor(message?: string) {
    super(ClientError.UnsupportedMediaType, message ?? 'Unsupported Media Type')
  }
}

export class RangeNotSatisfiable extends HTTPClientError {
  constructor(message?: string) {
    super(ClientError.RangeNotSatisfiable, message ?? 'Range Not Satisfiable')
  }
}

export class ExpectationFailed extends HTTPClientError {
  constructor(message?: string) {
    super(ClientError.ExpectationFailed, message ?? 'Expectation Failed')
  }
}

export class MisdirectedRequest extends HTTPClientError {
  constructor(message?: string) {
    super(ClientError.MisdirectedRequest, message ?? 'Misdirected Request')
  }
}

export class UnprocessableEntity extends HTTPClientError {
  constructor(message?: string) {
    super(ClientError.UnprocessableEntity, message ?? 'Unprocessable Entity')
  }
}

export class Locked extends HTTPClientError {
  constructor(message?: string) {
    super(ClientError.Locked, message ?? 'Locked')
  }
}

export class FailedDependency extends HTTPClientError {
  constructor(message?: string) {
    super(ClientError.FailedDependency, message ?? 'Failed Dependency')
  }
}

export class UpgradeRequired extends HTTPClientError {
  constructor(message?: string) {
    super(ClientError.UpgradeRequired, message ?? 'Upgrade Required')
  }
}

export class PreconditionRequired extends HTTPClientError {
  constructor(message?: string) {
    super(ClientError.PreconditionRequired, message ?? 'Precondition Required')
  }
}

export class TooManyRequests extends HTTPClientError {
  constructor(message?: string) {
    super(ClientError.TooManyRequests, message ?? 'Too Many Requests')
  }
}

export class RequestHeaderFieldsTooLarge extends HTTPClientError {
  constructor(message?: string) {
    super(ClientError.RequestHeaderFieldsTooLarge, message ?? 'Request Header Fields Too Large')
  }
}

export class UnavailableForLegalReasons extends HTTPClientError {
  constructor(message?: string) {
    super(ClientError.UnavailableForLegalReasons, message ?? 'Unavailable For Legal Reasons')
  }
}

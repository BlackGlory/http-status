import { HTTPError } from './http-error'
import { ClientError } from './enum'

export class HTTPClientError extends HTTPError {}

export class BadRequest extends HTTPClientError {
  constructor() {
    super(ClientError.BadRequest, 'Bad Request')
  }
}

export class Unauthorized extends HTTPClientError {
  constructor() {
    super(ClientError.Unauthorized, 'Unauthorized')
  }
}

export class Forbidden extends HTTPClientError {
  constructor() {
    super(ClientError.Forbidden, 'Forbidden')
  }
}

export class NotFound extends HTTPClientError {
  constructor() {
    super(ClientError.NotFound, 'Not Found')
  }
}

export class MethodNotAllowed extends HTTPClientError {
  constructor() {
    super(ClientError.MethodNotAllowed, 'Method Not Allowed')
  }
}

export class NotAcceptable extends HTTPClientError {
  constructor() {
    super(ClientError.NotAcceptable, 'Not Acceptable')
  }
}

export class ProxyAuthenticationRequired extends HTTPClientError {
  constructor() {
    super(ClientError.ProxyAuthenticationRequired, 'Proxy Authentication Required')
  }
}

export class RequestTimeout extends HTTPClientError {
  constructor() {
    super(ClientError.RequestTimeout, 'Request Timeout')
  }
}

export class Conflict extends HTTPClientError {
  constructor() {
    super(ClientError.Conflict, 'Conflict')
  }
}

export class Gone extends HTTPClientError {
  constructor() {
    super(ClientError.Gone, 'Gone')
  }
}

export class LengthRequired extends HTTPClientError {
  constructor() {
    super(ClientError.LengthRequired, 'Length Required')
  }
}

export class PreconditionFailed extends HTTPClientError {
  constructor() {
    super(ClientError.PreconditionFailed, 'Precondition Failed')
  }
}

export class PayloadTooLarge extends HTTPClientError {
  constructor() {
    super(ClientError.PayloadTooLarge, 'Payload Too Large')
  }
}

export class URITooLong extends HTTPClientError {
  constructor() {
    super(ClientError.URITooLong, 'URI Too Long')
  }
}

export class UnsupportedMediaType extends HTTPClientError {
  constructor() {
    super(ClientError.UnsupportedMediaType, 'Unsupported Media Type')
  }
}

export class RangeNotSatisfiable extends HTTPClientError {
  constructor() {
    super(ClientError.RangeNotSatisfiable, 'Range Not Satisfiable')
  }
}

export class ExpectationFailed extends HTTPClientError {
  constructor() {
    super(ClientError.ExpectationFailed, 'Expectation Failed')
  }
}

export class MisdirectedRequest extends HTTPClientError {
  constructor() {
    super(ClientError.MisdirectedRequest, 'Misdirected Request')
  }
}

export class UnprocessableEntity extends HTTPClientError {
  constructor() {
    super(ClientError.UnprocessableEntity, 'Unprocessable Entity')
  }
}

export class Locked extends HTTPClientError {
  constructor() {
    super(ClientError.Locked, 'Locked')
  }
}

export class FailedDependency extends HTTPClientError {
  constructor() {
    super(ClientError.FailedDependency, 'Failed Dependency')
  }
}

export class UpgradeRequired extends HTTPClientError {
  constructor() {
    super(ClientError.UpgradeRequired, 'Upgrade Required')
  }
}

export class PreconditionRequired extends HTTPClientError {
  constructor() {
    super(ClientError.PreconditionRequired, 'Precondition Required')
  }
}

export class TooManyRequests extends HTTPClientError {
  constructor() {
    super(ClientError.TooManyRequests, 'Too Many Requests')
  }
}

export class RequestHeaderFieldsTooLarge extends HTTPClientError {
  constructor() {
    super(ClientError.RequestHeaderFieldsTooLarge, 'Request Header Fields Too Large')
  }
}

export class UnavailableForLegalReasons extends HTTPClientError {
  constructor() {
    super(ClientError.UnavailableForLegalReasons, 'Unavailable For Legal Reasons')
  }
}

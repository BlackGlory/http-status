import { HTTPError } from './http-error'

export class HTTPClientError extends HTTPError {}

export class BadRequest extends HTTPClientError {
  constructor() {
    super(400, 'Bad Request')
  }
}

export class Unauthorized extends HTTPClientError {
  constructor() {
    super(401, 'Unauthorized')
  }
}

export class Forbidden extends HTTPClientError {
  constructor() {
    super(403, 'Forbidden')
  }
}

export class NotFound extends HTTPClientError {
  constructor() {
    super(404, 'Not Found')
  }
}

export class MethodNotAllowed extends HTTPClientError {
  constructor() {
    super(405, 'Method Not Allowed')
  }
}

export class NotAcceptable extends HTTPClientError {
  constructor() {
    super(406, 'Not Acceptable')
  }
}

export class ProxyAuthenticationRequired extends HTTPClientError {
  constructor() {
    super(407, 'Proxy Authentication Required')
  }
}

export class RequestTimeout extends HTTPClientError {
  constructor() {
    super(408, 'Request Timeout')
  }
}

export class Conflict extends HTTPClientError {
  constructor() {
    super(409, 'Conflict')
  }
}

export class Gone extends HTTPClientError {
  constructor() {
    super(410, 'Gone')
  }
}

export class LengthRequired extends HTTPClientError {
  constructor() {
    super(411, 'Length Required')
  }
}

export class PreconditionFailed extends HTTPClientError {
  constructor() {
    super(412, 'Precondition Failed')
  }
}

export class PayloadTooLarge extends HTTPClientError {
  constructor() {
    super(413, 'Payload Too Large')
  }
}

export class URITooLong extends HTTPClientError {
  constructor() {
    super(414, 'URI Too Long')
  }
}

export class UnsupportedMediaType extends HTTPClientError {
  constructor() {
    super(415, 'Unsupported Media Type')
  }
}

export class RangeNotSatisfiable extends HTTPClientError {
  constructor() {
    super(416, 'Range Not Satisfiable')
  }
}

export class ExpectationFailed extends HTTPClientError {
  constructor() {
    super(417, 'Expectation Failed')
  }
}

export class MisdirectedRequest extends HTTPClientError {
  constructor() {
    super(421, 'Misdirected Request')
  }
}

export class UnprocessableEntity extends HTTPClientError {
  constructor() {
    super(422, 'Unprocessable Entity')
  }
}

export class Locked extends HTTPClientError {
  constructor() {
    super(423, 'Locked')
  }
}

export class FailedDependency extends HTTPClientError {
  constructor() {
    super(424, 'Failed Dependency')
  }
}

export class UpgradeRequired extends HTTPClientError {
  constructor() {
    super(426, 'Upgrade Required')
  }
}

export class PreconditionRequired extends HTTPClientError {
  constructor() {
    super(428, 'Precondition Required')
  }
}

export class TooManyRequests extends HTTPClientError {
  constructor() {
    super(429, 'Too Many Requests')
  }
}

export class RequestHeaderFieldsTooLarge extends HTTPClientError {
  constructor() {
    super(431, 'Request Header Fields Too Large')
  }
}

export class UnavailableForLegalReasons extends HTTPClientError {
  constructor() {
    super(451, 'Unavailable For Legal Reasons')
  }
}

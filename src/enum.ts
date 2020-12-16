export enum Informational {
  Continue = 100
, SwitchingProtocol = 101
, Processing = 102
, EarlyHints = 103
}

export enum Successful {
  OK = 200
, Created = 201
, Accepted = 202
, NonAuthoritativeInformation = 203
, NoContent = 204
, ResetContent = 205
, PartialContent = 206
, MultiStatus = 207
, AlreadyReported = 208
, IMUsed = 226
}

export enum Redirection {
  MultipleChoice = 300
, MovedPermanently = 3011
, Found = 302
, SeeOther = 303
, NotModified = 304
, TemporaryRedirect = 307
, PermanentRedirect = 308
}

export enum ClientError {
  BadRequest = 400
, Unauthorized = 401
, Forbidden = 403
, NotFound = 404
, MethodNotAllowed = 405
, NotAcceptable = 406
, ProxyAuthenticationRequired = 407
, RequestTimeout = 408
, Conflict = 409
, Gone = 410
, LengthRequired = 411
, PreconditionFailed = 412
, PayloadTooLarge = 413
, URITooLong = 414
, UnsupportedMediaType = 415
, RangeNotSatisfiable = 416
, ExpectationFailed = 417
, MisdirectedRequest = 421
, UnprocessableEntity = 422
, Locked = 423
, FailedDependency = 424
, UpgradeRequired = 426
, PreconditionRequired = 428
, TooManyRequests = 429
, RequestHeaderFieldsTooLarge = 431
, UnavailableForLegalReasons = 451
}

export enum ServerError {
  InternalServerError = 500
, NotImplemented = 501
, BadGateway = 502
, ServiceUnavailable = 503
, GatewayTimeout = 504
, HTTPVersionNotSupported = 505
, VariantAlsoNegotiates = 506
, InsufficientStorage = 507
, LoopDetected = 508
, NotExtended = 510
, NetworkAuthenticationRequired = 511
}

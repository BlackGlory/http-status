import { HTTPStatus } from './http-status.js'
import * as Informational from './http-informational.js'
import * as Successful from './http-successful.js'
import * as Redirection from './http-redirection.js'
import * as ClientError from './http-client-error.js'
import * as ServerError from './http-server-error.js'

export class UnknownHTTPStatusError extends Error {
  name = this.constructor.name
  constructor(code: number) {
    super(`The HTTP status code ${code} is unknown`)
  }
}

export function fromCode(code: 100): Informational.Continue
export function fromCode(code: 101): Informational.SwitchingProtocol
export function fromCode(code: 102): Informational.Processing
export function fromCode(code: 103): Informational.EarlyHints
export function fromCode(code: 200): Successful.OK
export function fromCode(code: 201): Successful.Created
export function fromCode(code: 202): Successful.Accepted
export function fromCode(code: 203): Successful.NonAuthoritativeInformation
export function fromCode(code: 204): Successful.NoContent
export function fromCode(code: 205): Successful.ResetContent
export function fromCode(code: 206): Successful.PartialContent
export function fromCode(code: 207): Successful.MultiStatus
export function fromCode(code: 208): Successful.AlreadyReported
export function fromCode(code: 226): Successful.IMUsed
export function fromCode(code: 300): Redirection.MultipleChoice
export function fromCode(code: 301): Redirection.MovedPermanently
export function fromCode(code: 302): Redirection.Found
export function fromCode(code: 303): Redirection.SeeOther
export function fromCode(code: 304): Redirection.NotModified
export function fromCode(code: 307): Redirection.TemporaryRedirect
export function fromCode(code: 308): Redirection.PermanentRedirect
export function fromCode(code: 400, message?: string): ClientError.BadRequest
export function fromCode(code: 401, message?: string): ClientError.Unauthorized
export function fromCode(code: 403, message?: string): ClientError.Forbidden
export function fromCode(code: 404, message?: string): ClientError.NotFound
export function fromCode(code: 405, message?: string): ClientError.MethodNotAllowed
export function fromCode(code: 406, message?: string): ClientError.NotAcceptable
export function fromCode(code: 407, message?: string): ClientError.ProxyAuthenticationRequired
export function fromCode(code: 408, message?: string): ClientError.RequestTimeout
export function fromCode(code: 409, message?: string): ClientError.Conflict
export function fromCode(code: 410, message?: string): ClientError.Gone
export function fromCode(code: 411, message?: string): ClientError.LengthRequired
export function fromCode(code: 412, message?: string): ClientError.PreconditionFailed
export function fromCode(code: 413, message?: string): ClientError.PayloadTooLarge
export function fromCode(code: 414, message?: string): ClientError.URITooLong
export function fromCode(code: 415, message?: string): ClientError.UnsupportedMediaType
export function fromCode(code: 416, message?: string): ClientError.RangeNotSatisfiable
export function fromCode(code: 417, message?: string): ClientError.ExpectationFailed
export function fromCode(code: 421, message?: string): ClientError.MisdirectedRequest
export function fromCode(code: 422, message?: string): ClientError.UnprocessableEntity
export function fromCode(code: 423, message?: string): ClientError.Locked
export function fromCode(code: 424, message?: string): ClientError.FailedDependency
export function fromCode(code: 426, message?: string): ClientError.UpgradeRequired
export function fromCode(code: 428, message?: string): ClientError.PreconditionRequired
export function fromCode(code: 429, message?: string): ClientError.TooManyRequests
export function fromCode(code: 431, message?: string): ClientError.RequestHeaderFieldsTooLarge
export function fromCode(code: 451, message?: string): ClientError.UnavailableForLegalReasons
export function fromCode(code: 500, message?: string): ServerError.InternalServerError
export function fromCode(code: 501, message?: string): ServerError.NotImplemented
export function fromCode(code: 502, message?: string): ServerError.BadGateway
export function fromCode(code: 503, message?: string): ServerError.ServiceUnavailable
export function fromCode(code: 504, message?: string): ServerError.GatewayTimeout
export function fromCode(code: 505, message?: string): ServerError.HTTPVersionNotSupported
export function fromCode(code: 506, message?: string): ServerError.VariantAlsoNegotiates
export function fromCode(code: 507, message?: string): ServerError.InsufficientStorage
export function fromCode(code: 508, message?: string): ServerError.LoopDetected
export function fromCode(code: 510, message?: string): ServerError.NotExtended
export function fromCode(code: 511, message?: string): ServerError.NetworkAuthenticationRequired
export function fromCode(code: number, message?: string): HTTPStatus
export function fromCode(code: number, message?: string): HTTPStatus {
  switch (code) {
    case 100: return new Informational.Continue()
    case 101: return new Informational.SwitchingProtocol()
    case 102: return new Informational.Processing()
    case 103: return new Informational.EarlyHints()
    case 200: return new Successful.OK()
    case 201: return new Successful.Created()
    case 202: return new Successful.Accepted()
    case 203: return new Successful.NonAuthoritativeInformation()
    case 204: return new Successful.NoContent()
    case 205: return new Successful.ResetContent()
    case 206: return new Successful.PartialContent()
    case 207: return new Successful.MultiStatus()
    case 208: return new Successful.AlreadyReported()
    case 226: return new Successful.IMUsed()
    case 300: return new Redirection.MultipleChoice()
    case 301: return new Redirection.MovedPermanently()
    case 302: return new Redirection.Found()
    case 303: return new Redirection.SeeOther()
    case 304: return new Redirection.NotModified()
    case 307: return new Redirection.TemporaryRedirect()
    case 308: return new Redirection.PermanentRedirect()
    case 400: return new ClientError.BadRequest(message)
    case 401: return new ClientError.Unauthorized(message)
    case 403: return new ClientError.Forbidden(message)
    case 404: return new ClientError.NotFound(message)
    case 405: return new ClientError.MethodNotAllowed(message)
    case 406: return new ClientError.NotAcceptable(message)
    case 407: return new ClientError.ProxyAuthenticationRequired(message)
    case 408: return new ClientError.RequestTimeout(message)
    case 409: return new ClientError.Conflict(message)
    case 410: return new ClientError.Gone(message)
    case 411: return new ClientError.LengthRequired(message)
    case 412: return new ClientError.PreconditionFailed(message)
    case 413: return new ClientError.PayloadTooLarge(message)
    case 414: return new ClientError.URITooLong(message)
    case 415: return new ClientError.UnsupportedMediaType(message)
    case 416: return new ClientError.RangeNotSatisfiable(message)
    case 417: return new ClientError.ExpectationFailed(message)
    case 421: return new ClientError.MisdirectedRequest(message)
    case 422: return new ClientError.UnprocessableEntity(message)
    case 423: return new ClientError.Locked(message)
    case 424: return new ClientError.FailedDependency(message)
    case 426: return new ClientError.UpgradeRequired(message)
    case 428: return new ClientError.PreconditionRequired(message)
    case 429: return new ClientError.TooManyRequests(message)
    case 431: return new ClientError.RequestHeaderFieldsTooLarge(message)
    case 451: return new ClientError.UnavailableForLegalReasons(message)
    case 500: return new ServerError.InternalServerError(message)
    case 501: return new ServerError.NotImplemented(message)
    case 502: return new ServerError.BadGateway(message)
    case 503: return new ServerError.ServiceUnavailable(message)
    case 504: return new ServerError.GatewayTimeout(message)
    case 505: return new ServerError.HTTPVersionNotSupported(message)
    case 506: return new ServerError.VariantAlsoNegotiates(message)
    case 507: return new ServerError.InsufficientStorage(message)
    case 508: return new ServerError.LoopDetected(message)
    case 510: return new ServerError.NotExtended(message)
    case 511: return new ServerError.NetworkAuthenticationRequired(message)
    default: throw new UnknownHTTPStatusError(code)
  }
}

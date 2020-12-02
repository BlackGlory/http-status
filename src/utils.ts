import { HTTPStatus } from './http-status'
import * as Informational from './http-informational'
import * as Successful from './http-successful'
import * as Redirection from './http-redirection'
import * as ClientError from './http-client-error'
import * as ServerError from './http-server-error'

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
export function fromCode(code: 400): ClientError.BadRequest
export function fromCode(code: 401): ClientError.Unauthorized
export function fromCode(code: 403): ClientError.Forbidden
export function fromCode(code: 404): ClientError.NotFound
export function fromCode(code: 405): ClientError.MethodNotAllowed
export function fromCode(code: 406): ClientError.NotAcceptable
export function fromCode(code: 407): ClientError.ProxyAuthenticationRequired
export function fromCode(code: 408): ClientError.RequestTimeout
export function fromCode(code: 409): ClientError.Conflict
export function fromCode(code: 410): ClientError.Gone
export function fromCode(code: 411): ClientError.LengthRequired
export function fromCode(code: 412): ClientError.PreconditionFailed
export function fromCode(code: 413): ClientError.PayloadTooLarge
export function fromCode(code: 414): ClientError.URITooLong
export function fromCode(code: 415): ClientError.UnsupportedMediaType
export function fromCode(code: 416): ClientError.RangeNotSatisfiable
export function fromCode(code: 417): ClientError.ExpectationFailed
export function fromCode(code: 421): ClientError.MisdirectedRequest
export function fromCode(code: 422): ClientError.UnprocessableEntity
export function fromCode(code: 423): ClientError.Locked
export function fromCode(code: 424): ClientError.FailedDependency
export function fromCode(code: 426): ClientError.UpgradeRequired
export function fromCode(code: 428): ClientError.PreconditionRequired
export function fromCode(code: 429): ClientError.TooManyRequests
export function fromCode(code: 431): ClientError.RequestHeaderFieldsTooLarge
export function fromCode(code: 451): ClientError.UnavailableForLegalReasons
export function fromCode(code: 500): ServerError.InternalServerError
export function fromCode(code: 501): ServerError.NotImplemented
export function fromCode(code: 502): ServerError.BadGateway
export function fromCode(code: 503): ServerError.ServiceUnavailable
export function fromCode(code: 504): ServerError.GatewayTimeout
export function fromCode(code: 505): ServerError.HTTPVersionNotSupported
export function fromCode(code: 506): ServerError.VariantAlsoNegotiates
export function fromCode(code: 507): ServerError.InsufficientStorage
export function fromCode(code: 508): ServerError.LoopDetected
export function fromCode(code: 510): ServerError.NotExtended
export function fromCode(code: 511): ServerError.NetworkAuthenticationRequired
export function fromCode(code: number): HTTPStatus {
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
    case 400: return new ClientError.BadRequest()
    case 401: return new ClientError.Unauthorized()
    case 403: return new ClientError.Forbidden()
    case 404: return new ClientError.NotFound()
    case 405: return new ClientError.MethodNotAllowed()
    case 406: return new ClientError.NotAcceptable()
    case 407: return new ClientError.ProxyAuthenticationRequired()
    case 408: return new ClientError.RequestTimeout()
    case 409: return new ClientError.Conflict()
    case 410: return new ClientError.Gone()
    case 411: return new ClientError.LengthRequired()
    case 412: return new ClientError.PreconditionFailed()
    case 413: return new ClientError.PayloadTooLarge()
    case 414: return new ClientError.URITooLong()
    case 415: return new ClientError.UnsupportedMediaType()
    case 416: return new ClientError.RangeNotSatisfiable()
    case 417: return new ClientError.ExpectationFailed()
    case 421: return new ClientError.MisdirectedRequest()
    case 422: return new ClientError.UnprocessableEntity()
    case 423: return new ClientError.Locked()
    case 424: return new ClientError.FailedDependency()
    case 426: return new ClientError.UpgradeRequired()
    case 428: return new ClientError.PreconditionRequired()
    case 429: return new ClientError.TooManyRequests()
    case 431: return new ClientError.RequestHeaderFieldsTooLarge()
    case 451: return new ClientError.UnavailableForLegalReasons()
    case 500: return new ServerError.InternalServerError()
    case 501: return new ServerError.NotImplemented()
    case 502: return new ServerError.BadGateway()
    case 503: return new ServerError.ServiceUnavailable()
    case 504: return new ServerError.GatewayTimeout()
    case 505: return new ServerError.HTTPVersionNotSupported()
    case 506: return new ServerError.VariantAlsoNegotiates()
    case 507: return new ServerError.InsufficientStorage()
    case 508: return new ServerError.LoopDetected()
    case 510: return new ServerError.NotExtended()
    case 511: return new ServerError.NetworkAuthenticationRequired()
    default: throw new UnknownHTTPStatusError(code)
  }
}

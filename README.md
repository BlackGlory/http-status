# http-status
A class-based HTTP status library.

## Install
```sh
npm install --save @blackglory/http-status
# or
yarn add @blackglory/http-status
```

## API
### fromCode
```ts
function fromCode(code: number): HTTPStatus
```

When the status code is unknown, it will throw `UnkonwnHTTPStatusError`.

### HTTPStatus
```ts
interface HTTPStatus {
  code: number
  message: string
}
```

| Code | HTTPStatus                    |
|------|-------------------------------|
| 1xx  | HTTPInformational             |
| 100  | Continue                      |
| 101  | SwitchingProtocol             |
| 102  | Processing                    |
| 103  | EarlyHints                    |
| 2xx  | HTTPSuccessful                |
| 200  | OK                            |
| 201  | Created                       |
| 202  | Accepted                      |
| 203  | NonAuthoritativeInformation   |
| 204  | NoContent                     |
| 205  | ResetContent                  |
| 206  | PartialContent                |
| 207  | MultiStatus                   |
| 208  | AlreadyReported               |
| 226  | IMUsed                        |
| 3xx  | HTTPRedirection               |
| 300  | MultipleChoice                |
| 301  | MovedPermanently              |
| 302  | Found                         |
| 303  | SeeOther                      |
| 304  | NotModified                   |
| 307  | TemporaryRedirect             |
| 308  | PermanentRedirect             |
| 4xx  | HTTPClientError               |
| 400  | BadRequest                    |
| 401  | Unauthorized                  |
| 403  | Forbidden                     |
| 404  | NotFound                      |
| 405  | MethodNotAllowed              |
| 406  | NotAcceptable                 |
| 407  | ProxyAuthenticationRequired   |
| 408  | RequestTimeout                |
| 409  | Conflict                      |
| 410  | Gone                          |
| 411  | LengthRequired                |
| 412  | PreconditionFailed            |
| 413  | PayloadTooLarge               |
| 414  | URITooLong                    |
| 415  | UnsupportedMediaType          |
| 416  | RangeNotSatisfiable           |
| 417  | ExpectationFailed             |
| 421  | MisdirectedRequest            |
| 422  | UnprocessableEntity           |
| 423  | Locked                        |
| 424  | FailedDependency              |
| 426  | UpgradeRequired               |
| 428  | PreconditionRequired          |
| 429  | TooManyRequests               |
| 431  | RequestHeaderFieldsTooLarge   |
| 451  | UnavailableForLegalReasons    |
| 5xx  | HTTPServerError               |
| 500  | InternalServerError           |
| 501  | NotImplemented                |
| 502  | BadGateway                    |
| 503  | ServiceUnavailable            |
| 504  | GatewayTimeout                |
| 505  | HTTPVersionNotSupported       |
| 506  | VariantAlsoNegotiates         |
| 507  | InsufficientStorage           |
| 508  | LoopDetected                  |
| 510  | NotExtended                   |
| 511  | NetworkAuthenticationRequired |

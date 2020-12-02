import { HTTPStatus } from './http-status'

export class HTTPError extends Error implements HTTPStatus {
  constructor(public readonly code: number, public readonly text: string) {
    super(text)
  }
}

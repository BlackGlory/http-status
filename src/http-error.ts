import { HTTPStatus } from './http-status.js'
import { CustomError } from '@blackglory/errors'

export class HTTPError extends CustomError implements HTTPStatus {
  constructor(public readonly code: number, message: string) {
    super(message)
  }
}

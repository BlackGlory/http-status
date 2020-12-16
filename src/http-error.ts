import { HTTPStatus } from './http-status'
import { CustomError } from '@blackglory/errors'

export class HTTPError extends CustomError implements HTTPStatus {
  constructor(public readonly code: number, public readonly text: string) {
    super(text)
  }
}

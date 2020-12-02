export type HTTPStatusConstructor = new (code: number, text: string) => HTTPStatus

export interface HTTPStatus {
  code: number
  text: string
}

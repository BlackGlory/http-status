import { getError } from 'return-style'
import { fromCode, UnknownHTTPStatusError, NotFound } from '@src/index'

describe('fromCode(code: number): HTTPStatus', () => {
  describe('known code', () => {
    it('return HTTPStatus', () => {
      const result = fromCode(404)

      expect(result).toBeInstanceOf(NotFound)
    })
  })

  describe('unknown code', () => {
    it('throw UnknownStatusError', () => {
      /* @ts-ignore */
      const err = getError(() => fromCode(666))

      expect(err).toBeInstanceOf(UnknownHTTPStatusError)
    })
  })
})

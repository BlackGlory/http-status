import { HTTPStatus } from './http-status'
import { Informational } from './enum'

export class HTTPInformational implements HTTPStatus {
  constructor(public readonly code: number, public readonly text: string) {}
}

export class Continue extends HTTPInformational {
  constructor() {
    super(Informational.Continue, 'Continue')
  }
}

export class SwitchingProtocol extends HTTPInformational {
  constructor() {
    super(Informational.SwitchingProtocol, 'Switching Protocol')
  }
}

export class Processing extends HTTPInformational {
  constructor() {
    super(Informational.Processing, 'Processing')
  }
}

export class EarlyHints extends HTTPInformational {
  constructor() {
    super(Informational.EarlyHints, 'Early Hints')
  }
}

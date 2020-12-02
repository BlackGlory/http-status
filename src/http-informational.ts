import { HTTPStatus } from './http-status'

export class HTTPInformational implements HTTPStatus {
  constructor(public readonly code: number, public readonly text: string) {}
}

export class Continue extends HTTPInformational {
  constructor() {
    super(100, 'Continue')
  }
}

export class SwitchingProtocol extends HTTPInformational {
  constructor() {
    super(101, 'Switching Protocol')
  }
}

export class Processing extends HTTPInformational {
  constructor() {
    super(102, 'Processing')
  }
}

export class EarlyHints extends HTTPInformational {
  constructor() {
    super(103, 'Early Hints')
  }
}

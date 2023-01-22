import { HTTPStatus } from './http-status.js'
import { Successful } from './enum.js'

export class HTTPSuccessful implements HTTPStatus {
  constructor(public readonly code: number, public readonly message: string) {}
}

export class OK extends HTTPSuccessful {
  constructor() {
    super(Successful.OK, 'OK')
  }
}

export class Created extends HTTPSuccessful {
  constructor() {
    super(Successful.Created, 'Created')
  }
}

export class Accepted extends HTTPSuccessful {
  constructor() {
    super(Successful.Accepted, 'Accepted')
  }
}

export class NonAuthoritativeInformation extends HTTPSuccessful {
  constructor() {
    super(Successful.NonAuthoritativeInformation, 'Non-Authoritative Information')
  }
}

export class NoContent extends HTTPSuccessful {
  constructor() {
    super(Successful.NoContent, 'No Content')
  }
}

export class ResetContent extends HTTPSuccessful {
  constructor() {
    super(Successful.ResetContent, 'Reset Content')
  }
}

export class PartialContent extends HTTPSuccessful {
  constructor() {
    super(Successful.PartialContent, 'Partial Content')
  }
}

export class MultiStatus extends HTTPSuccessful {
  constructor() {
    super(Successful.MultiStatus, 'Multi-Status')
  }
}

export class AlreadyReported extends HTTPSuccessful {
  constructor() {
    super(Successful.AlreadyReported, 'Already Reported')
  }
}

export class IMUsed extends HTTPSuccessful {
  constructor() {
    super(Successful.IMUsed, 'IM Used')
  }
}

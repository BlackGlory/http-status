import { HTTPStatus } from './http-status'

export class HTTPSuccessful implements HTTPStatus {
  constructor(public readonly code: number, public readonly text: string) {}
}

export class OK extends HTTPSuccessful {
  constructor() {
    super(200, 'OK')
  }
}

export class Created extends HTTPSuccessful {
  constructor() {
    super(201, 'Created')
  }
}

export class Accepted extends HTTPSuccessful {
  constructor() {
    super(202, 'Accepted')
  }
}

export class NonAuthoritativeInformation extends HTTPSuccessful {
  constructor() {
    super(203, 'Non-Authoritative Information')
  }
}

export class NoContent extends HTTPSuccessful {
  constructor() {
    super(204, 'No Content')
  }
}

export class ResetContent extends HTTPSuccessful {
  constructor() {
    super(205, 'Reset Content')
  }
}

export class PartialContent extends HTTPSuccessful {
  constructor() {
    super(206, 'Partial Content')
  }
}

export class MultiStatus extends HTTPSuccessful {
  constructor() {
    super(207, 'Multi-Status')
  }
}

export class AlreadyReported extends HTTPSuccessful {
  constructor() {
    super(208, 'Already Reported')
  }
}

export class IMUsed extends HTTPSuccessful {
  constructor() {
    super(226, 'IM Used')
  }
}

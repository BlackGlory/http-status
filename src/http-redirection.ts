import { HTTPStatus } from './http-status'

export class HTTPRedirection implements HTTPStatus {
  constructor(public readonly code: number, public readonly text: string) {}
}

export class MultipleChoice extends HTTPRedirection {
  constructor() {
    super(300, 'Multiple Choice')
  }
}

export class MovedPermanently extends HTTPRedirection {
  constructor() {
    super(301, 'Moved Permanently')
  }
}

export class Found extends HTTPRedirection {
  constructor() {
    super(302, 'Found')
  }
}

export class SeeOther extends HTTPRedirection {
  constructor() {
    super(303, 'See Other')
  }
}

export class NotModified extends HTTPRedirection {
  constructor() {
    super(304, 'Not Modified')
  }
}

export class TemporaryRedirect extends HTTPRedirection {
  constructor() {
    super(307, 'Temporary Redirect')
  }
}

export class PermanentRedirect extends HTTPRedirection {
  constructor() {
    super(308, 'Permanent Redirect')
  }
}

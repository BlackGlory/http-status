import { HTTPStatus } from './http-status'
import { Redirection } from './enum'

export class HTTPRedirection implements HTTPStatus {
  constructor(public readonly code: number, public readonly text: string) {}
}

export class MultipleChoice extends HTTPRedirection {
  constructor() {
    super(Redirection.MultipleChoice, 'Multiple Choice')
  }
}

export class MovedPermanently extends HTTPRedirection {
  constructor() {
    super(Redirection.MovedPermanently, 'Moved Permanently')
  }
}

export class Found extends HTTPRedirection {
  constructor() {
    super(Redirection.Found, 'Found')
  }
}

export class SeeOther extends HTTPRedirection {
  constructor() {
    super(Redirection.SeeOther, 'See Other')
  }
}

export class NotModified extends HTTPRedirection {
  constructor() {
    super(Redirection.NotModified, 'Not Modified')
  }
}

export class TemporaryRedirect extends HTTPRedirection {
  constructor() {
    super(Redirection.TemporaryRedirect, 'Temporary Redirect')
  }
}

export class PermanentRedirect extends HTTPRedirection {
  constructor() {
    super(Redirection.PermanentRedirect, 'Permanent Redirect')
  }
}

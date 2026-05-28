if (typeof globalThis.CustomEvent === 'undefined') {
  class CustomEventPolyfill {
    constructor(type, params = {}) {
      this.type = type;
      this.detail = params.detail === undefined ? null : params.detail;
      this.bubbles = !!params.bubbles;
      this.cancelable = !!params.cancelable;
    }
  }
  globalThis.CustomEvent = CustomEventPolyfill;
}

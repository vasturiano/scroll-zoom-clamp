export interface ConfigOptions {
  message?: string;
}

declare class ScrollZoomClamp {
  constructor(
    childNode: HTMLElement,
    options?: ConfigOptions
  );

  readonly node: HTMLElement;
}

export default ScrollZoomClamp;
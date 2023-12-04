export default class ScrollZoomClamp {
  constructor(
    childNode: HTMLElement,
    options?: {
      message?: string;
    }
  );

  get node(): HTMLElement;
}
import './index.css';

class ScrollZoomClamp {
  constructor(childNode, { message } = {}) {
    this.#node = document.createElement('div');
    this.#node.style.position = 'relative';

    this.#node.addEventListener('wheel', e => {
      if (!e.metaKey && !e.ctrlKey) {
        e.stopPropagation();
        this.#showMsg(true);
      } else {
        e.preventDefault();
        this.#showMsg(false);
      }
    }, true);

    const keyChar = window?.navigator?.platform?.startsWith('Mac')
      ? '&#x2318'
      : window?.navigator?.platform?.startsWith('Win')
        ? '&#x229E'
        : 'ctrl';

    this.#msgNode = document.createElement('div');
    this.#msgNode.classList.add('scroll-zoom-clamp-message');
    this.#msgNode.style.opacity = 0;
    this.#msgNode.innerHTML = message || `Use&nbsp;<b>${keyChar}</b>&nbsp;+&nbsp;<b>scroll</b>&nbsp;to zoom the chart`;

    this.#node.appendChild(childNode);
    this.#node.appendChild(this.#msgNode);
  }

  get node() {
    return this.#node;
  }

  #showMsg(show = true) {
    this.#msgNode.style.transition = `opacity ${show ? 0 : 1000}ms`;
    this.#msgNode.style.opacity = show ? '1' : '0';

    clearTimeout(this.#msgTimeout);
    show && (this.#msgTimeout = setTimeout(() => this.#showMsg(false), 1000));
  }

  #node;
  #msgNode;
  #msgTimeout;
}

export default ScrollZoomClamp;
scroll-zoom-clamp
=================

[![NPM package][npm-img]][npm-url]
[![Build Size][build-size-img]][build-size-url]
[![NPM Downloads][npm-downloads-img]][npm-downloads-url]

This DOM utility prevents zooming components from hijacking [mouse-wheel events](https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event) and interfering with the natural scroll of a page.

By wrapping a child element with this component, wheel events are only propagated downstream if a modifier key is pressed (meta key), otherwise a message is overlayed informing the user he can do so.

## Quick start

```js
import ScrollZoomClamp from 'scroll-zoom-clamp';
```
or using a *script* tag
```html
<script src="//unpkg.com/scroll-zoom-clamp"></script>
```
then
```js
// assuming a parentNode and a childNode element
parentNode.appendChild(
  new ScrollZoomClamp(childNode).node
);
```

## API reference

### Instantiation

new <b>ScrollZoomClamp</b>(<i>childNode</i>, { configOptions })

Creates a new scroll zoom protection, wrapped around the `childNode` element.

The following configuration options are available:

| Config option | Description |
| --- | --- |
| <b>message</b>: <i>str</i> | Ability to customize the message shown when the zoom is blocked. Supports plain text or HTML content. |

### Methods

| Method | Description |
| --- | --- |
| <b>node</b>() | Returns the wrapper DOM element. |

## Giving Back

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=L398E7PKP47E8&currency_code=USD&source=url) If this project has helped you and you'd like to contribute back, you can always [buy me a ☕](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=L398E7PKP47E8&currency_code=USD&source=url)!

[npm-img]: https://img.shields.io/npm/v/scroll-zoom-clamp
[npm-url]: https://npmjs.org/package/scroll-zoom-clamp
[build-size-img]: https://img.shields.io/bundlephobia/minzip/scroll-zoom-clamp
[build-size-url]: https://bundlephobia.com/result?p=scroll-zoom-clamp
[npm-downloads-img]: https://img.shields.io/npm/dt/scroll-zoom-clamp
[npm-downloads-url]: https://www.npmtrends.com/scroll-zoom-clamp


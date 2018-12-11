import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import Hamburger from '../Hamburger';

const renderHamburger = ({ props = {} } = {}) => {
  const rtlUtils = render(<Hamburger {...props} />);

  return {
    tree: rtlUtils.container.firstChild,
    ...rtlUtils
  };
};

describe('Hamburger', () => {
  describe('style', () => {
    it('should render a closed red hamburger by default', () => {
      const { tree } = renderHamburger();

      expect(tree).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  cursor: pointer;
  height: 24px;
  padding: 0 25px 3px 0;
}

.c1 {
  height: 3px;
  position: absolute;
  width: 25px;
  background-color: #C00404;
  -webkit-transition-property: -webkit-transform;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease;
  transition-timing-function: ease;
  -webkit-transition-duration: .22s;
  transition-duration: .22s;
  -webkit-transition-timing-function: cubic-bezier(0.55,0.055,0.675,0.19);
  transition-timing-function: cubic-bezier(0.55,0.055,0.675,0.19);
}

.c1.c1:before {
  height: 3px;
  position: absolute;
  width: 25px;
  background-color: #C00404;
  content: '';
  display: block;
  -webkit-transition-property: -webkit-transform;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease;
  transition-timing-function: ease;
  -webkit-transition-duration: .15s;
  transition-duration: .15s;
  -webkit-transition: top .1s .25s ease-in,opacity .1s ease-in;
  transition: top .1s .25s ease-in,opacity .1s ease-in;
  top: -7px;
}

.c1.c1:after {
  height: 3px;
  position: absolute;
  width: 25px;
  background-color: #C00404;
  content: '';
  display: block;
  -webkit-transition-property: -webkit-transform;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease;
  transition-timing-function: ease;
  -webkit-transition-duration: .15s;
  transition-duration: .15s;
  -webkit-transition: bottom .1s .25s ease-in,-webkit-transform .22s cubic-bezier(0.55,0.055,0.675,0.19);
  -webkit-transition: bottom .1s .25s ease-in,transform .22s cubic-bezier(0.55,0.055,0.675,0.19);
  transition: bottom .1s .25s ease-in,transform .22s cubic-bezier(0.55,0.055,0.675,0.19);
  bottom: -7px;
}

<button
  aria-expanded="false"
  aria-label="Toggle navigation"
  class="c0"
  type="button"
>
  <span
    class="c1"
  />
</button>
`);
    });

    it('should render an open red hamburger when isOpen variant is provided', () => {
      const { tree } = renderHamburger({
        props: { isOpen: true }
      });

      expect(tree).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  cursor: pointer;
  height: 24px;
  padding: 0 25px 3px 0;
}

.c1 {
  height: 3px;
  position: absolute;
  width: 25px;
  background-color: #C00404;
  -webkit-transition-property: -webkit-transform;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease;
  transition-timing-function: ease;
  -webkit-transition-duration: .22s;
  transition-duration: .22s;
  -webkit-transition-timing-function: cubic-bezier(0.55,0.055,0.675,0.19);
  transition-timing-function: cubic-bezier(0.55,0.055,0.675,0.19);
  -webkit-transform: rotate(225deg);
  -ms-transform: rotate(225deg);
  -webkit-transform: rotate(225deg);
  -ms-transform: rotate(225deg);
  transform: rotate(225deg);
  -webkit-transition-delay: 0.12s;
  -o-transition-delay: 0.12s;
  -webkit-transition-delay: 0.12s;
  transition-delay: 0.12s;
  -webkit-transition-timing-function: cubic-bezier(0.215,0.61,0.355,1);
  -o-transition-timing-function: cubic-bezier(0.215,0.61,0.355,1);
  -webkit-transition-timing-function: cubic-bezier(0.215,0.61,0.355,1);
  transition-timing-function: cubic-bezier(0.215,0.61,0.355,1);
}

.c1.c1:before {
  height: 3px;
  position: absolute;
  width: 25px;
  background-color: #C00404;
  content: '';
  display: block;
  -webkit-transition-property: -webkit-transform;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease;
  transition-timing-function: ease;
  -webkit-transition-duration: .15s;
  transition-duration: .15s;
  -webkit-transition: top .1s .25s ease-in,opacity .1s ease-in;
  transition: top .1s .25s ease-in,opacity .1s ease-in;
  opacity: 0;
  top: 0;
  -webkit-transition: top 0.1s ease-out,opacity 0.1s 0.12s ease-out;
  -o-transition: top 0.1s ease-out,opacity 0.1s 0.12s ease-out;
  -webkit-transition: top 0.1s ease-out,opacity 0.1s 0.12s ease-out;
  transition: top 0.1s ease-out,opacity 0.1s 0.12s ease-out;
}

.c1.c1:after {
  height: 3px;
  position: absolute;
  width: 25px;
  background-color: #C00404;
  content: '';
  display: block;
  -webkit-transition-property: -webkit-transform;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease;
  transition-timing-function: ease;
  -webkit-transition-duration: .15s;
  transition-duration: .15s;
  -webkit-transition: bottom .1s .25s ease-in,-webkit-transform .22s cubic-bezier(0.55,0.055,0.675,0.19);
  -webkit-transition: bottom .1s .25s ease-in,transform .22s cubic-bezier(0.55,0.055,0.675,0.19);
  transition: bottom .1s .25s ease-in,transform .22s cubic-bezier(0.55,0.055,0.675,0.19);
  bottom: 0;
  -webkit-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  -webkit-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  transform: rotate(-90deg);
  -webkit-transition: bottom 0.1s ease-out,-webkit-transform 0.22s 0.12s cubic-bezier(0.215,0.61,0.355,1);
  -webkit-transition: bottom 0.1s ease-out,-webkit-transform 0.22s 0.12s cubic-bezier(0.215,0.61,0.355,1);
  transition: bottom 0.1s ease-out,-webkit-transform 0.22s 0.12s cubic-bezier(0.215,0.61,0.355,1);
}

<button
  aria-expanded="true"
  aria-label="Toggle navigation"
  class="c0"
  type="button"
>
  <span
    class="c1"
  />
</button>
`);
    });

    it('should render a hamburger of another color when color variant is provided', () => {
      const { tree } = renderHamburger({
        props: { color: 'black' }
      });

      expect(tree).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  cursor: pointer;
  height: 24px;
  padding: 0 25px 3px 0;
}

.c1 {
  height: 3px;
  position: absolute;
  width: 25px;
  background-color: #3B302C;
  -webkit-transition-property: -webkit-transform;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease;
  transition-timing-function: ease;
  -webkit-transition-duration: .22s;
  transition-duration: .22s;
  -webkit-transition-timing-function: cubic-bezier(0.55,0.055,0.675,0.19);
  transition-timing-function: cubic-bezier(0.55,0.055,0.675,0.19);
}

.c1.c1:before {
  height: 3px;
  position: absolute;
  width: 25px;
  background-color: #3B302C;
  content: '';
  display: block;
  -webkit-transition-property: -webkit-transform;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease;
  transition-timing-function: ease;
  -webkit-transition-duration: .15s;
  transition-duration: .15s;
  -webkit-transition: top .1s .25s ease-in,opacity .1s ease-in;
  transition: top .1s .25s ease-in,opacity .1s ease-in;
  top: -7px;
}

.c1.c1:after {
  height: 3px;
  position: absolute;
  width: 25px;
  background-color: #3B302C;
  content: '';
  display: block;
  -webkit-transition-property: -webkit-transform;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease;
  transition-timing-function: ease;
  -webkit-transition-duration: .15s;
  transition-duration: .15s;
  -webkit-transition: bottom .1s .25s ease-in,-webkit-transform .22s cubic-bezier(0.55,0.055,0.675,0.19);
  -webkit-transition: bottom .1s .25s ease-in,transform .22s cubic-bezier(0.55,0.055,0.675,0.19);
  transition: bottom .1s .25s ease-in,transform .22s cubic-bezier(0.55,0.055,0.675,0.19);
  bottom: -7px;
}

<button
  aria-expanded="false"
  aria-label="Toggle navigation"
  class="c0"
  type="button"
>
  <span
    class="c1"
  />
</button>
`);
    });
  });

  describe('onClick', () => {
    it('should call onOpen when hamburger is opened', () => {
      const onOpen = jest.fn();
      const onClose = jest.fn();
      const { tree } = renderHamburger({
        props: { onOpen, onClose }
      });

      fireEvent.click(tree);
      expect(onOpen).toHaveBeenCalledTimes(1);
      expect(onClose).not.toHaveBeenCalled();
    });

    it('should call onClose when hamburger is closed', () => {
      const onOpen = jest.fn();
      const onClose = jest.fn();
      const { tree } = renderHamburger({
        props: { isOpen: true, onOpen, onClose }
      });

      fireEvent.click(tree);
      expect(onOpen).not.toHaveBeenCalled();
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  it('should update when isOpen prop changes', () => {
    const { tree, rerender } = renderHamburger();

    expect(tree).toHaveAttribute('aria-expanded', 'false');

    rerender(<Hamburger isOpen onOpen={jest.fn()} onClose={jest.fn()} />);

    expect(tree).toHaveAttribute('aria-expanded', 'true');
  });
});

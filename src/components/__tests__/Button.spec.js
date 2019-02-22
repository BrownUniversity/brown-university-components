import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import Button from '../Button';

const renderButton = ({ props = {}, children = 'Button' } = {}) => {
  const rtlUtils = render(<Button {...props}>{children}</Button>);

  return {
    button: rtlUtils.container.firstChild,
    ...rtlUtils
  };
};

describe('Button', () => {
  describe('children', () => {
    it('should render children', () => {
      const { getByText } = renderButton({ children: 'Click Me' });

      expect(getByText('Click Me')).toBeInTheDocument();
    });
  });

  describe('tag', () => {
    it('should render button element by default', () => {
      const { container } = renderButton();

      expect(container.getElementsByTagName('button')).toHaveLength(1);
    });

    it('should render anchor element when href is provided', () => {
      const { container } = renderButton({
        props: { href: 'https://www.brown.edu/' }
      });

      expect(container.getElementsByTagName('a')).toHaveLength(1);
    });

    it('should render custom element when provided', () => {
      /* eslint-disable-next-line react/prop-types */
      const Link = ({ className, children }) => (
        <a href="/home" className={className} data-testid="custom-element">
          {children}
        </a>
      );

      const { getByTestId } = renderButton({
        props: { tag: Link }
      });

      expect(getByTestId('custom-element')).toBeInTheDocument();
    });
  });

  describe('type', () => {
    it('should render type as undefined by default', () => {
      const { button } = renderButton();

      expect(button).not.toHaveAttribute('type');
    });

    it('should render type as button when tag is button and onClick is provided', () => {
      const { button } = renderButton({
        props: { onClick: jest.fn() }
      });

      expect(button).toHaveAttribute('type', 'button');
    });

    it('should render custom type when provided', () => {
      const { button } = renderButton({
        props: { type: 'submit' }
      });

      expect(button).toHaveAttribute('type', 'submit');
    });

    it('should render type as undefined when the type is not provided and the tag is not button', () => {
      const { button } = renderButton({
        props: { tag: 'a' }
      });

      expect(button).not.toHaveAttribute('type');
    });

    it('should render type as undefined when the type is not provided and href is provided', () => {
      const { button } = renderButton({
        props: { href: 'https://www.brown.edu/' }
      });

      expect(button).not.toHaveAttribute('type');
    });
  });

  describe('styles', () => {
    describe('with onClick', () => {
      it('should render solid red button element by default', () => {
        const { button } = renderButton({ props: { onClick: jest.fn() } });

        expect(button).toMatchInlineSnapshot(`
.c0 {
  border-width: 0;
  display: inline-block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  font-style: normal;
  font-weight: 700;
  -webkit-letter-spacing: 0.6px;
  -moz-letter-spacing: 0.6px;
  -ms-letter-spacing: 0.6px;
  letter-spacing: 0.6px;
  line-height: 1.5;
  text-align: center;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  text-transform: uppercase;
  -webkit-transition: color 0.25s,background 0.25s,border 0.25s,box-shadow 0.25s;
  transition: color 0.25s,background 0.25s,border 0.25s,box-shadow 0.25s;
  background-color: #C00404;
  box-shadow: inset 0 0 0 1px #C00404;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 0.75em;
  opacity: 1;
  padding: 12px 25px;
  pointer-events: auto;
}

.c0:hover {
  background-color: #8e0303;
  box-shadow: inset 0 0 0 1px #8e0303;
  color: #FFFFFF;
}

<button
  class="c0"
  color="red"
  type="button"
>
  Button
</button>
`);
      });

      it('should render solid button element of another color when color variant is provided', () => {
        const { button } = renderButton({
          props: { color: 'yellow', onClick: jest.fn() }
        });

        expect(button).toMatchInlineSnapshot(`
.c0 {
  border-width: 0;
  display: inline-block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  font-style: normal;
  font-weight: 700;
  -webkit-letter-spacing: 0.6px;
  -moz-letter-spacing: 0.6px;
  -ms-letter-spacing: 0.6px;
  letter-spacing: 0.6px;
  line-height: 1.5;
  text-align: center;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  text-transform: uppercase;
  -webkit-transition: color 0.25s,background 0.25s,border 0.25s,box-shadow 0.25s;
  transition: color 0.25s,background 0.25s,border 0.25s,box-shadow 0.25s;
  background-color: #FFC72C;
  box-shadow: inset 0 0 0 1px #FFC72C;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 0.75em;
  opacity: 1;
  padding: 12px 25px;
  pointer-events: auto;
}

.c0:hover {
  background-color: #f8b600;
  box-shadow: inset 0 0 0 1px #f8b600;
  color: #FFFFFF;
}

<button
  class="c0"
  color="yellow"
  type="button"
>
  Button
</button>
`);
      });

      it('should render outlined red button element when outline variant is provided', () => {
        const { button } = renderButton({
          props: { outline: true, onClick: jest.fn() }
        });

        expect(button).toMatchInlineSnapshot(`
.c0 {
  border-width: 0;
  display: inline-block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  font-style: normal;
  font-weight: 700;
  -webkit-letter-spacing: 0.6px;
  -moz-letter-spacing: 0.6px;
  -ms-letter-spacing: 0.6px;
  letter-spacing: 0.6px;
  line-height: 1.5;
  text-align: center;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  text-transform: uppercase;
  -webkit-transition: color 0.25s,background 0.25s,border 0.25s,box-shadow 0.25s;
  transition: color 0.25s,background 0.25s,border 0.25s,box-shadow 0.25s;
  background-color: transparent;
  box-shadow: inset 0 0 0 1px #C00404;
  color: #C00404;
  cursor: pointer;
  font-size: 0.75em;
  opacity: 1;
  padding: 12px 25px;
  pointer-events: auto;
}

.c0:hover {
  background-color: #C00404;
  box-shadow: inset 0 0 0 1px #C00404;
  color: #FFFFFF;
}

<button
  class="c0"
  color="red"
  type="button"
>
  Button
</button>
`);
      });

      it('should render outlined button element of another color when color and outline variants are provided', () => {
        const { button } = renderButton({
          props: { color: 'brown', outline: true, onClick: jest.fn() }
        });

        expect(button).toMatchInlineSnapshot(`
.c0 {
  border-width: 0;
  display: inline-block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  font-style: normal;
  font-weight: 700;
  -webkit-letter-spacing: 0.6px;
  -moz-letter-spacing: 0.6px;
  -ms-letter-spacing: 0.6px;
  letter-spacing: 0.6px;
  line-height: 1.5;
  text-align: center;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  text-transform: uppercase;
  -webkit-transition: color 0.25s,background 0.25s,border 0.25s,box-shadow 0.25s;
  transition: color 0.25s,background 0.25s,border 0.25s,box-shadow 0.25s;
  background-color: transparent;
  box-shadow: inset 0 0 0 1px #4E3629;
  color: #4E3629;
  cursor: pointer;
  font-size: 0.75em;
  opacity: 1;
  padding: 12px 25px;
  pointer-events: auto;
}

.c0:hover {
  background-color: #4E3629;
  box-shadow: inset 0 0 0 1px #4E3629;
  color: #FFFFFF;
}

<button
  class="c0"
  color="brown"
  type="button"
>
  Button
</button>
`);
      });

      it('should render solid inverse red button element when inverse variant is provided', () => {
        const { button } = renderButton({
          props: { inverse: true, onClick: jest.fn() }
        });

        expect(button).toMatchInlineSnapshot(`
.c0 {
  border-width: 0;
  display: inline-block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  font-style: normal;
  font-weight: 700;
  -webkit-letter-spacing: 0.6px;
  -moz-letter-spacing: 0.6px;
  -ms-letter-spacing: 0.6px;
  letter-spacing: 0.6px;
  line-height: 1.5;
  text-align: center;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  text-transform: uppercase;
  -webkit-transition: color 0.25s,background 0.25s,border 0.25s,box-shadow 0.25s;
  transition: color 0.25s,background 0.25s,border 0.25s,box-shadow 0.25s;
  background-color: #FFFFFF;
  box-shadow: inset 0 0 0 1px #FFFFFF;
  color: #98A4AE;
  cursor: pointer;
  font-size: 0.75em;
  opacity: 1;
  padding: 12px 25px;
  pointer-events: auto;
}

.c0:hover {
  background-color: #C00404;
  box-shadow: inset 0 0 0 1px #FFFFFF;
  color: #FFFFFF;
}

<button
  class="c0"
  color="red"
  type="button"
>
  Button
</button>
`);
      });

      it('should render solid inverse button element of another color when color and inverse variants are provided', () => {
        const { button } = renderButton({
          props: { color: 'gray', inverse: true, onClick: jest.fn() }
        });

        expect(button).toMatchInlineSnapshot(`
.c0 {
  border-width: 0;
  display: inline-block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  font-style: normal;
  font-weight: 700;
  -webkit-letter-spacing: 0.6px;
  -moz-letter-spacing: 0.6px;
  -ms-letter-spacing: 0.6px;
  letter-spacing: 0.6px;
  line-height: 1.5;
  text-align: center;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  text-transform: uppercase;
  -webkit-transition: color 0.25s,background 0.25s,border 0.25s,box-shadow 0.25s;
  transition: color 0.25s,background 0.25s,border 0.25s,box-shadow 0.25s;
  background-color: #FFFFFF;
  box-shadow: inset 0 0 0 1px #FFFFFF;
  color: #98A4AE;
  cursor: pointer;
  font-size: 0.75em;
  opacity: 1;
  padding: 12px 25px;
  pointer-events: auto;
}

.c0:hover {
  background-color: #98A4AE;
  box-shadow: inset 0 0 0 1px #FFFFFF;
  color: #FFFFFF;
}

<button
  class="c0"
  color="gray"
  type="button"
>
  Button
</button>
`);
      });

      it('should render outlined inverse red button element when outline and inverse variants are provided', () => {
        const { button } = renderButton({
          props: { outline: true, inverse: true, onClick: jest.fn() }
        });

        expect(button).toMatchInlineSnapshot(`
.c0 {
  border-width: 0;
  display: inline-block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  font-style: normal;
  font-weight: 700;
  -webkit-letter-spacing: 0.6px;
  -moz-letter-spacing: 0.6px;
  -ms-letter-spacing: 0.6px;
  letter-spacing: 0.6px;
  line-height: 1.5;
  text-align: center;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  text-transform: uppercase;
  -webkit-transition: color 0.25s,background 0.25s,border 0.25s,box-shadow 0.25s;
  transition: color 0.25s,background 0.25s,border 0.25s,box-shadow 0.25s;
  background-color: #C00404;
  box-shadow: inset 0 0 0 1px #FFFFFF;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 0.75em;
  opacity: 1;
  padding: 12px 25px;
  pointer-events: auto;
}

.c0:hover {
  background-color: #FFFFFF;
  box-shadow: inset 0 0 0 1px #FFFFFF;
  color: #98A4AE;
}

<button
  class="c0"
  color="red"
  type="button"
>
  Button
</button>
`);
      });

      it('should render outlined inverse button element of another color when color, outline and inverse variants are provided', () => {
        const { button } = renderButton({
          props: {
            color: 'emerald',
            outline: true,
            inverse: true,
            onClick: jest.fn()
          }
        });

        expect(button).toMatchInlineSnapshot(`
.c0 {
  border-width: 0;
  display: inline-block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  font-style: normal;
  font-weight: 700;
  -webkit-letter-spacing: 0.6px;
  -moz-letter-spacing: 0.6px;
  -ms-letter-spacing: 0.6px;
  letter-spacing: 0.6px;
  line-height: 1.5;
  text-align: center;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  text-transform: uppercase;
  -webkit-transition: color 0.25s,background 0.25s,border 0.25s,box-shadow 0.25s;
  transition: color 0.25s,background 0.25s,border 0.25s,box-shadow 0.25s;
  background-color: #00B398;
  box-shadow: inset 0 0 0 1px #FFFFFF;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 0.75em;
  opacity: 1;
  padding: 12px 25px;
  pointer-events: auto;
}

.c0:hover {
  background-color: #FFFFFF;
  box-shadow: inset 0 0 0 1px #FFFFFF;
  color: #98A4AE;
}

<button
  class="c0"
  color="emerald"
  type="button"
>
  Button
</button>
`);
      });

      it('should render disabled button element when variant is provided', () => {
        const { button } = renderButton({
          props: { disabled: true, onClick: jest.fn() }
        });

        expect(button).toHaveStyleRule('cursor', 'not-allowed');
        expect(button).toHaveStyleRule('opacity', '0.65');
        expect(button).toHaveStyleRule('pointer-events', 'auto');
      });
    });

    describe('with href', () => {
      it('should render solid red anchor element by default', () => {
        const { button } = renderButton({
          props: { href: 'https://www.brown.edu' }
        });

        expect(button).toMatchInlineSnapshot(`
.c0 {
  border-width: 0;
  display: inline-block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  font-style: normal;
  font-weight: 700;
  -webkit-letter-spacing: 0.6px;
  -moz-letter-spacing: 0.6px;
  -ms-letter-spacing: 0.6px;
  letter-spacing: 0.6px;
  line-height: 1.5;
  text-align: center;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  text-transform: uppercase;
  -webkit-transition: color 0.25s,background 0.25s,border 0.25s,box-shadow 0.25s;
  transition: color 0.25s,background 0.25s,border 0.25s,box-shadow 0.25s;
  background-color: #C00404;
  box-shadow: inset 0 0 0 1px #C00404;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 0.75em;
  opacity: 1;
  padding: 12px 25px 12px 20px;
  pointer-events: auto;
}

.c0::after {
  border-color: transparent transparent transparent transparent;
  border-style: solid;
  border-width: 3.5px 0 3.5px 5px;
  content: '';
  display: inline-block;
  height: 0;
  position: relative;
  right: -8px;
  top: -1px;
  -webkit-transition: border 0.25s,color 0.25s;
  transition: border 0.25s,color 0.25s;
  width: 0;
  -ms-transform: translate3d(0,0,0);
  -webkit-transform: translate3d(0,0,0);
  -webkit-transform: translate3d(0,0,0);
  -ms-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
  border-color: transparent transparent transparent #FFFFFF;
}

.c0:hover {
  background-color: #8e0303;
  box-shadow: inset 0 0 0 1px #8e0303;
  color: #FFFFFF;
}

.c0:hover::after {
  -ms-transform: translate3d(4px,0,0);
  -webkit-transform: translate3d(4px,0,0);
  -webkit-transform: translate3d(4px,0,0);
  -ms-transform: translate3d(4px,0,0);
  transform: translate3d(4px,0,0);
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
  border-color: transparent transparent transparent #FFFFFF;
}

<a
  class="c0"
  color="red"
  href="https://www.brown.edu"
>
  Button
</a>
`);
      });

      it('should render solid anchor element of another color when color variant is provided', () => {
        const { button } = renderButton({
          props: { color: 'navy', href: 'https://www.brown.edu' }
        });

        expect(button).toMatchInlineSnapshot(`
.c0 {
  border-width: 0;
  display: inline-block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  font-style: normal;
  font-weight: 700;
  -webkit-letter-spacing: 0.6px;
  -moz-letter-spacing: 0.6px;
  -ms-letter-spacing: 0.6px;
  letter-spacing: 0.6px;
  line-height: 1.5;
  text-align: center;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  text-transform: uppercase;
  -webkit-transition: color 0.25s,background 0.25s,border 0.25s,box-shadow 0.25s;
  transition: color 0.25s,background 0.25s,border 0.25s,box-shadow 0.25s;
  background-color: #003C71;
  box-shadow: inset 0 0 0 1px #003C71;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 0.75em;
  opacity: 1;
  padding: 12px 25px 12px 20px;
  pointer-events: auto;
}

.c0::after {
  border-color: transparent transparent transparent transparent;
  border-style: solid;
  border-width: 3.5px 0 3.5px 5px;
  content: '';
  display: inline-block;
  height: 0;
  position: relative;
  right: -8px;
  top: -1px;
  -webkit-transition: border 0.25s,color 0.25s;
  transition: border 0.25s,color 0.25s;
  width: 0;
  -ms-transform: translate3d(0,0,0);
  -webkit-transform: translate3d(0,0,0);
  -webkit-transform: translate3d(0,0,0);
  -ms-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
  border-color: transparent transparent transparent #FFFFFF;
}

.c0:hover {
  background-color: #00213e;
  box-shadow: inset 0 0 0 1px #00213e;
  color: #FFFFFF;
}

.c0:hover::after {
  -ms-transform: translate3d(4px,0,0);
  -webkit-transform: translate3d(4px,0,0);
  -webkit-transform: translate3d(4px,0,0);
  -ms-transform: translate3d(4px,0,0);
  transform: translate3d(4px,0,0);
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
  border-color: transparent transparent transparent #FFFFFF;
}

<a
  class="c0"
  color="navy"
  href="https://www.brown.edu"
>
  Button
</a>
`);
      });

      it('should render outlined red anchor element when outline variant is provided', () => {
        const { button } = renderButton({
          props: { outline: true, href: 'https://www.brown.edu' }
        });

        expect(button).toMatchInlineSnapshot(`
.c0 {
  border-width: 0;
  display: inline-block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  font-style: normal;
  font-weight: 700;
  -webkit-letter-spacing: 0.6px;
  -moz-letter-spacing: 0.6px;
  -ms-letter-spacing: 0.6px;
  letter-spacing: 0.6px;
  line-height: 1.5;
  text-align: center;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  text-transform: uppercase;
  -webkit-transition: color 0.25s,background 0.25s,border 0.25s,box-shadow 0.25s;
  transition: color 0.25s,background 0.25s,border 0.25s,box-shadow 0.25s;
  background-color: transparent;
  box-shadow: inset 0 0 0 1px #C00404;
  color: #C00404;
  cursor: pointer;
  font-size: 0.75em;
  opacity: 1;
  padding: 12px 25px 12px 20px;
  pointer-events: auto;
}

.c0::after {
  border-color: transparent transparent transparent transparent;
  border-style: solid;
  border-width: 3.5px 0 3.5px 5px;
  content: '';
  display: inline-block;
  height: 0;
  position: relative;
  right: -8px;
  top: -1px;
  -webkit-transition: border 0.25s,color 0.25s;
  transition: border 0.25s,color 0.25s;
  width: 0;
  -ms-transform: translate3d(0,0,0);
  -webkit-transform: translate3d(0,0,0);
  -webkit-transform: translate3d(0,0,0);
  -ms-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
  border-color: transparent transparent transparent #C00404;
}

.c0:hover {
  background-color: #C00404;
  box-shadow: inset 0 0 0 1px #C00404;
  color: #FFFFFF;
}

.c0:hover::after {
  -ms-transform: translate3d(4px,0,0);
  -webkit-transform: translate3d(4px,0,0);
  -webkit-transform: translate3d(4px,0,0);
  -ms-transform: translate3d(4px,0,0);
  transform: translate3d(4px,0,0);
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
  border-color: transparent transparent transparent #FFFFFF;
}

<a
  class="c0"
  color="red"
  href="https://www.brown.edu"
>
  Button
</a>
`);
      });

      it('should render outlined anchor element of another color when color and outline variants are provided', () => {
        const { button } = renderButton({
          props: {
            color: 'skyblue',
            outline: true,
            href: 'https://www.brown.edu'
          }
        });

        expect(button).toMatchInlineSnapshot(`
.c0 {
  border-width: 0;
  display: inline-block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  font-style: normal;
  font-weight: 700;
  -webkit-letter-spacing: 0.6px;
  -moz-letter-spacing: 0.6px;
  -ms-letter-spacing: 0.6px;
  letter-spacing: 0.6px;
  line-height: 1.5;
  text-align: center;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  text-transform: uppercase;
  -webkit-transition: color 0.25s,background 0.25s,border 0.25s,box-shadow 0.25s;
  transition: color 0.25s,background 0.25s,border 0.25s,box-shadow 0.25s;
  background-color: transparent;
  box-shadow: inset 0 0 0 1px #59CBE8;
  color: #59CBE8;
  cursor: pointer;
  font-size: 0.75em;
  opacity: 1;
  padding: 12px 25px 12px 20px;
  pointer-events: auto;
}

.c0::after {
  border-color: transparent transparent transparent transparent;
  border-style: solid;
  border-width: 3.5px 0 3.5px 5px;
  content: '';
  display: inline-block;
  height: 0;
  position: relative;
  right: -8px;
  top: -1px;
  -webkit-transition: border 0.25s,color 0.25s;
  transition: border 0.25s,color 0.25s;
  width: 0;
  -ms-transform: translate3d(0,0,0);
  -webkit-transform: translate3d(0,0,0);
  -webkit-transform: translate3d(0,0,0);
  -ms-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
  border-color: transparent transparent transparent #59CBE8;
}

.c0:hover {
  background-color: #59CBE8;
  box-shadow: inset 0 0 0 1px #59CBE8;
  color: #FFFFFF;
}

.c0:hover::after {
  -ms-transform: translate3d(4px,0,0);
  -webkit-transform: translate3d(4px,0,0);
  -webkit-transform: translate3d(4px,0,0);
  -ms-transform: translate3d(4px,0,0);
  transform: translate3d(4px,0,0);
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
  border-color: transparent transparent transparent #FFFFFF;
}

<a
  class="c0"
  color="skyblue"
  href="https://www.brown.edu"
>
  Button
</a>
`);
      });

      it('should render solid inverse red anchor element when inverse variant is provided', () => {
        const { button } = renderButton({
          props: { inverse: true, href: 'https://www.brown.edu' }
        });

        expect(button).toMatchInlineSnapshot(`
.c0 {
  border-width: 0;
  display: inline-block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  font-style: normal;
  font-weight: 700;
  -webkit-letter-spacing: 0.6px;
  -moz-letter-spacing: 0.6px;
  -ms-letter-spacing: 0.6px;
  letter-spacing: 0.6px;
  line-height: 1.5;
  text-align: center;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  text-transform: uppercase;
  -webkit-transition: color 0.25s,background 0.25s,border 0.25s,box-shadow 0.25s;
  transition: color 0.25s,background 0.25s,border 0.25s,box-shadow 0.25s;
  background-color: #FFFFFF;
  box-shadow: inset 0 0 0 1px #FFFFFF;
  color: #98A4AE;
  cursor: pointer;
  font-size: 0.75em;
  opacity: 1;
  padding: 12px 25px 12px 20px;
  pointer-events: auto;
}

.c0::after {
  border-color: transparent transparent transparent transparent;
  border-style: solid;
  border-width: 3.5px 0 3.5px 5px;
  content: '';
  display: inline-block;
  height: 0;
  position: relative;
  right: -8px;
  top: -1px;
  -webkit-transition: border 0.25s,color 0.25s;
  transition: border 0.25s,color 0.25s;
  width: 0;
  -ms-transform: translate3d(0,0,0);
  -webkit-transform: translate3d(0,0,0);
  -webkit-transform: translate3d(0,0,0);
  -ms-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
  border-color: transparent transparent transparent #98A4AE;
}

.c0:hover {
  background-color: #C00404;
  box-shadow: inset 0 0 0 1px #FFFFFF;
  color: #FFFFFF;
}

.c0:hover::after {
  -ms-transform: translate3d(4px,0,0);
  -webkit-transform: translate3d(4px,0,0);
  -webkit-transform: translate3d(4px,0,0);
  -ms-transform: translate3d(4px,0,0);
  transform: translate3d(4px,0,0);
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
  border-color: transparent transparent transparent #FFFFFF;
}

<a
  class="c0"
  color="red"
  href="https://www.brown.edu"
>
  Button
</a>
`);
      });

      it('should render solid inverse anchor element of another color when color and inverse variants are provided', () => {
        const { button } = renderButton({
          props: {
            color: 'emerald',
            inverse: true,
            href: 'https://www.brown.edu'
          }
        });

        expect(button).toMatchInlineSnapshot(`
.c0 {
  border-width: 0;
  display: inline-block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  font-style: normal;
  font-weight: 700;
  -webkit-letter-spacing: 0.6px;
  -moz-letter-spacing: 0.6px;
  -ms-letter-spacing: 0.6px;
  letter-spacing: 0.6px;
  line-height: 1.5;
  text-align: center;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  text-transform: uppercase;
  -webkit-transition: color 0.25s,background 0.25s,border 0.25s,box-shadow 0.25s;
  transition: color 0.25s,background 0.25s,border 0.25s,box-shadow 0.25s;
  background-color: #FFFFFF;
  box-shadow: inset 0 0 0 1px #FFFFFF;
  color: #98A4AE;
  cursor: pointer;
  font-size: 0.75em;
  opacity: 1;
  padding: 12px 25px 12px 20px;
  pointer-events: auto;
}

.c0::after {
  border-color: transparent transparent transparent transparent;
  border-style: solid;
  border-width: 3.5px 0 3.5px 5px;
  content: '';
  display: inline-block;
  height: 0;
  position: relative;
  right: -8px;
  top: -1px;
  -webkit-transition: border 0.25s,color 0.25s;
  transition: border 0.25s,color 0.25s;
  width: 0;
  -ms-transform: translate3d(0,0,0);
  -webkit-transform: translate3d(0,0,0);
  -webkit-transform: translate3d(0,0,0);
  -ms-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
  border-color: transparent transparent transparent #98A4AE;
}

.c0:hover {
  background-color: #00B398;
  box-shadow: inset 0 0 0 1px #FFFFFF;
  color: #FFFFFF;
}

.c0:hover::after {
  -ms-transform: translate3d(4px,0,0);
  -webkit-transform: translate3d(4px,0,0);
  -webkit-transform: translate3d(4px,0,0);
  -ms-transform: translate3d(4px,0,0);
  transform: translate3d(4px,0,0);
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
  border-color: transparent transparent transparent #FFFFFF;
}

<a
  class="c0"
  color="emerald"
  href="https://www.brown.edu"
>
  Button
</a>
`);
      });

      it('should render outlined inverse red anchor element when outline and inverse variants are provided', () => {
        const { button } = renderButton({
          props: { outline: true, inverse: true, href: 'https://www.brown.edu' }
        });

        expect(button).toMatchInlineSnapshot(`
.c0 {
  border-width: 0;
  display: inline-block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  font-style: normal;
  font-weight: 700;
  -webkit-letter-spacing: 0.6px;
  -moz-letter-spacing: 0.6px;
  -ms-letter-spacing: 0.6px;
  letter-spacing: 0.6px;
  line-height: 1.5;
  text-align: center;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  text-transform: uppercase;
  -webkit-transition: color 0.25s,background 0.25s,border 0.25s,box-shadow 0.25s;
  transition: color 0.25s,background 0.25s,border 0.25s,box-shadow 0.25s;
  background-color: #C00404;
  box-shadow: inset 0 0 0 1px #FFFFFF;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 0.75em;
  opacity: 1;
  padding: 12px 25px 12px 20px;
  pointer-events: auto;
}

.c0::after {
  border-color: transparent transparent transparent transparent;
  border-style: solid;
  border-width: 3.5px 0 3.5px 5px;
  content: '';
  display: inline-block;
  height: 0;
  position: relative;
  right: -8px;
  top: -1px;
  -webkit-transition: border 0.25s,color 0.25s;
  transition: border 0.25s,color 0.25s;
  width: 0;
  -ms-transform: translate3d(0,0,0);
  -webkit-transform: translate3d(0,0,0);
  -webkit-transform: translate3d(0,0,0);
  -ms-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
  border-color: transparent transparent transparent #FFFFFF;
}

.c0:hover {
  background-color: #FFFFFF;
  box-shadow: inset 0 0 0 1px #FFFFFF;
  color: #98A4AE;
}

.c0:hover::after {
  -ms-transform: translate3d(4px,0,0);
  -webkit-transform: translate3d(4px,0,0);
  -webkit-transform: translate3d(4px,0,0);
  -ms-transform: translate3d(4px,0,0);
  transform: translate3d(4px,0,0);
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
  border-color: transparent transparent transparent #98A4AE;
}

<a
  class="c0"
  color="red"
  href="https://www.brown.edu"
>
  Button
</a>
`);
      });

      it('should render outlined inverse anchor element of another color when color, outline and inverse variants are provided', () => {
        const { button } = renderButton({
          props: {
            color: 'gray',
            outline: true,
            inverse: true,
            href: 'https://www.brown.edu'
          }
        });

        expect(button).toMatchInlineSnapshot(`
.c0 {
  border-width: 0;
  display: inline-block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  font-style: normal;
  font-weight: 700;
  -webkit-letter-spacing: 0.6px;
  -moz-letter-spacing: 0.6px;
  -ms-letter-spacing: 0.6px;
  letter-spacing: 0.6px;
  line-height: 1.5;
  text-align: center;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  text-transform: uppercase;
  -webkit-transition: color 0.25s,background 0.25s,border 0.25s,box-shadow 0.25s;
  transition: color 0.25s,background 0.25s,border 0.25s,box-shadow 0.25s;
  background-color: #98A4AE;
  box-shadow: inset 0 0 0 1px #FFFFFF;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 0.75em;
  opacity: 1;
  padding: 12px 25px 12px 20px;
  pointer-events: auto;
}

.c0::after {
  border-color: transparent transparent transparent transparent;
  border-style: solid;
  border-width: 3.5px 0 3.5px 5px;
  content: '';
  display: inline-block;
  height: 0;
  position: relative;
  right: -8px;
  top: -1px;
  -webkit-transition: border 0.25s,color 0.25s;
  transition: border 0.25s,color 0.25s;
  width: 0;
  -ms-transform: translate3d(0,0,0);
  -webkit-transform: translate3d(0,0,0);
  -webkit-transform: translate3d(0,0,0);
  -ms-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
  border-color: transparent transparent transparent #FFFFFF;
}

.c0:hover {
  background-color: #FFFFFF;
  box-shadow: inset 0 0 0 1px #FFFFFF;
  color: #98A4AE;
}

.c0:hover::after {
  -ms-transform: translate3d(4px,0,0);
  -webkit-transform: translate3d(4px,0,0);
  -webkit-transform: translate3d(4px,0,0);
  -ms-transform: translate3d(4px,0,0);
  transform: translate3d(4px,0,0);
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
  border-color: transparent transparent transparent #98A4AE;
}

<a
  class="c0"
  color="gray"
  href="https://www.brown.edu"
>
  Button
</a>
`);
      });

      it('should render disabled anchor element when variant is provided', () => {
        const { button } = renderButton({
          props: { disabled: true, href: 'http://www.brown.edu' }
        });

        expect(button).toHaveStyleRule('cursor', 'pointer');
        expect(button).toHaveStyleRule('opacity', '0.65');
        expect(button).toHaveStyleRule('pointer-events', 'none');
      });
    });

    it('should render small button when size variant is provided', () => {
      const { button } = renderButton({ props: { size: 'small' } });

      expect(button).toHaveStyleRule('font-size', '0.55em');
    });

    it('should render large button when size variant is provided', () => {
      const { button } = renderButton({ props: { size: 'large' } });

      expect(button).toHaveStyleRule('font-size', '0.95em');
    });
  });

  describe('onClick', () => {
    it('should call onClick when disabled is false', () => {
      const onClick = jest.fn();
      const { getByText } = renderButton({
        props: { onClick },
        children: 'Click Me'
      });

      fireEvent.click(getByText('Click Me'));
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should not call onClick when disabled is true', () => {
      const onClick = jest.fn();
      const { getByText } = renderButton({
        props: { disabled: true, onClick },
        children: 'Click Me'
      });

      fireEvent.click(getByText('Click Me'));
      expect(onClick).not.toHaveBeenCalled();
    });
  });
});

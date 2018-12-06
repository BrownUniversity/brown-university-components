import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import Button from '../Button';

const renderButton = ({ props = {}, children = 'Click Me' } = {}) => {
  const rtlUtils = render(<Button {...props}>{children}</Button>);

  return {
    tree: rtlUtils.container.firstChild,
    ...rtlUtils
  };
};

describe('Button', () => {
  describe('children', () => {
    it('should render children', () => {
      const { getByText } = renderButton({ children: 'Button Text' });

      expect(getByText('Button Text')).toBeInTheDocument();
    });
  });

  describe('tag', () => {
    it('should render a button element by default', () => {
      const { container } = renderButton();

      expect(container.getElementsByTagName('button')).toHaveLength(1);
    });

    it('should render an anchor element when an href is provided', () => {
      const { container } = renderButton({
        props: { href: 'https://www.brown.edu/' }
      });

      expect(container.getElementsByTagName('a')).toHaveLength(1);
    });

    it('should render a custom element when provided', () => {
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
      const { tree } = renderButton();

      expect(tree).not.toHaveAttribute('type');
    });

    it('should render type as button when tag is button and onClick is provided', () => {
      const { tree } = renderButton({
        props: { onClick: jest.fn() }
      });

      expect(tree).toHaveAttribute('type', 'button');
    });

    it('should render custom type when provided', () => {
      const { tree } = renderButton({
        props: { type: 'submit' }
      });

      expect(tree).toHaveAttribute('type', 'submit');
    });

    it('should render type as undefined when the type is not provided and the tag is not button', () => {
      const { tree } = renderButton({
        props: { tag: 'a' }
      });

      expect(tree).not.toHaveAttribute('type');
    });

    it('should render type as undefined when the type is not provided and an href is provided', () => {
      const { tree } = renderButton({
        props: { href: 'https://www.brown.edu/' }
      });

      expect(tree).not.toHaveAttribute('type');
    });
  });

  describe('style', () => {
    it('should render a solid red button by default', () => {
      const { tree } = renderButton();

      expect(tree).toMatchInlineSnapshot(`
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
  padding: 12px 25px 12px 20px;
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
>
  Click Me
</button>
`);
    });

    it('should render a solid button of another color when color variant is provided', () => {
      const { tree } = renderButton({ props: { color: 'yellow' } });

      expect(tree).toMatchInlineSnapshot(`
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
  padding: 12px 25px 12px 20px;
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
>
  Click Me
</button>
`);
    });

    it('should render a small button when size variant is provided', () => {
      const { tree } = renderButton({ props: { size: 'small' } });

      expect(tree).toHaveStyleRule('font-size', '0.55em');
    });

    it('should render a large button when size variant is provided', () => {
      const { tree } = renderButton({ props: { size: 'large' } });

      expect(tree).toHaveStyleRule('font-size', '0.95em');
    });

    it('should render an outlined red button when outline variant is provided', () => {
      const { tree } = renderButton({ props: { outline: true } });

      expect(tree).toMatchInlineSnapshot(`
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
  padding: 12px 25px 12px 20px;
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
>
  Click Me
</button>
`);
    });

    it('should render an outlined button of another color when color and outline variants are provided', () => {
      const { tree } = renderButton({
        props: { color: 'brown', outline: true }
      });

      expect(tree).toMatchInlineSnapshot(`
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
  padding: 12px 25px 12px 20px;
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
>
  Click Me
</button>
`);
    });

    it('should render a solid inverse red button when inverse variant is provided', () => {
      const { tree } = renderButton({
        props: { inverse: true }
      });

      expect(tree).toMatchInlineSnapshot(`
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
  padding: 12px 25px 12px 20px;
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
>
  Click Me
</button>
`);
    });

    it('should render a solid inverse button of another color when color and inverse variants are provided', () => {
      const { tree } = renderButton({
        props: { color: 'gray', inverse: true }
      });

      expect(tree).toMatchInlineSnapshot(`
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
  padding: 12px 25px 12px 20px;
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
>
  Click Me
</button>
`);
    });

    it('should render an outlined inverse red button when outline and inverse variants are provided', () => {
      const { tree } = renderButton({
        props: { outline: true, inverse: true }
      });

      expect(tree).toMatchInlineSnapshot(`
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
  padding: 12px 25px 12px 20px;
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
>
  Click Me
</button>
`);
    });

    it('should render an outlined inverse button of another color when color, outline and inverse variants are provided', () => {
      const { tree } = renderButton({
        props: { color: 'emerald', outline: true, inverse: true }
      });

      expect(tree).toMatchInlineSnapshot(`
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
  padding: 12px 25px 12px 20px;
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
>
  Click Me
</button>
`);
    });

    it('should render button with pseudo-element when an href is provided', () => {
      const { tree } = renderButton({
        props: { href: 'https://www.brown.edu/' }
      });

      expect(tree).toMatchInlineSnapshot(`
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
  padding: 12px 25px 12px 20px;
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
  href="https://www.brown.edu/"
>
  Click Me
</a>
`);
    });
  });

  describe('disabled', () => {
    it('should render a disabled button when disabled variant is provided', () => {
      const { tree } = renderButton({
        props: { disabled: true }
      });

      expect(tree).toHaveStyleRule('cursor', 'not-allowed');
      expect(tree).toHaveStyleRule('opacity', '0.65');
      expect(tree).toHaveStyleRule('pointer-events', 'auto');
    });

    it('should render a disabled button when an an href and disabled variant are provided', () => {
      const { tree } = renderButton({
        props: { href: 'http://www.brown.edu', disabled: true }
      });

      expect(tree).toHaveStyleRule('cursor', 'pointer');
      expect(tree).toHaveStyleRule('opacity', '0.65');
      expect(tree).toHaveStyleRule('pointer-events', 'none');
    });
  });

  describe('onClick', () => {
    it('should call onClick when disabled is false', () => {
      const onClick = jest.fn();
      const { getByText } = renderButton({
        props: { onClick }
      });

      fireEvent.click(getByText('Click Me'));
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should not call onClick when disabled is true', () => {
      const onClick = jest.fn();
      const { getByText } = renderButton({
        props: { disabled: true, onClick }
      });

      fireEvent.click(getByText('Click Me'));
      expect(onClick).not.toHaveBeenCalled();
    });
  });
});

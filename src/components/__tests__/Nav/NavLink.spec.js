import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import NavContext from '../../Nav/NavContext';
import NavLink from '../../Nav/NavLink';

const renderNavLink = ({
  context = {},
  props = {},
  children = 'Link'
} = {}) => {
  const {
    navbar = false,
    mobile = false,
    sub = false,
    color = 'red'
  } = context;
  const rtlUtils = render(
    <NavContext.Provider value={{ navbar, mobile, sub, color }}>
      <NavLink {...props}>{children}</NavLink>
    </NavContext.Provider>
  );

  return {
    navLink: rtlUtils.container.firstChild,
    ...rtlUtils
  };
};

describe('NavLink', () => {
  describe('children', () => {
    it('should render children', () => {
      const { getByText } = renderNavLink({ children: 'Click Me' });

      expect(getByText('Click Me')).toBeInTheDocument();
    });
  });

  describe('tag', () => {
    it('should render a button element by default', () => {
      const { container } = renderNavLink();

      expect(container.getElementsByTagName('button')).toHaveLength(1);
    });

    it('should render an anchor element when an href is provided', () => {
      const { container } = renderNavLink({
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

      const { getByTestId } = renderNavLink({
        props: { tag: Link }
      });

      expect(getByTestId('custom-element')).toBeInTheDocument();
    });
  });

  describe('type', () => {
    it('should render type as undefined by default', () => {
      const { navLink } = renderNavLink();

      expect(navLink).not.toHaveAttribute('type');
    });

    it('should render type as button when tag is button and onClick is provided', () => {
      const { navLink } = renderNavLink({
        props: { onClick: jest.fn() }
      });

      expect(navLink).toHaveAttribute('type', 'button');
    });

    it('should render custom type when provided', () => {
      const { navLink } = renderNavLink({
        props: { type: 'submit' }
      });

      expect(navLink).toHaveAttribute('type', 'submit');
    });

    it('should render type as undefined when the type is not provided and the tag is not button', () => {
      const { navLink } = renderNavLink({
        props: { tag: 'a' }
      });

      expect(navLink).not.toHaveAttribute('type');
    });

    it('should render type as undefined when the type is not provided and an href is provided', () => {
      const { navLink } = renderNavLink({
        props: { href: 'https://www.brown.edu/' }
      });

      expect(navLink).not.toHaveAttribute('type');
    });
  });

  describe('style', () => {
    describe('with onClick', () => {
      describe('without variant', () => {
        it('should render red button element with default styles', () => {
          const { navLink } = renderNavLink({ props: { onClick: jest.fn() } });

          expect(navLink).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  display: block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  padding: 0;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  color: #3B302C;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: 700;
  line-height: 1;
  opacity: 1;
  pointer-events: auto;
}

.c0::after {
  content: '';
  display: block;
  height: 3px;
  background: #C00404;
  margin-top: 1em;
  width: 0;
}

.c0:hover {
  color: #C00404;
}

.c0:hover::after {
  width: 100%;
}

@media (min-width:1200px) {
  .c0 {
    font-size: 1.2em;
  }
}

<button
  class="c0"
  color="red"
  type="button"
>
  Link
</button>
`);
        });

        it('should render red button element with active default styles when variant is provided', () => {
          const { navLink } = renderNavLink({
            props: { active: true, onClick: jest.fn() }
          });

          expect(navLink).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  display: block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  padding: 0;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  color: #C00404;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: 700;
  line-height: 1;
  opacity: 1;
  pointer-events: auto;
}

.c0::after {
  content: '';
  display: block;
  height: 3px;
  background: #C00404;
  margin-top: 1em;
  width: 100%;
}

.c0:hover {
  color: #C00404;
}

.c0:hover::after {
  width: 100%;
}

@media (min-width:1200px) {
  .c0 {
    font-size: 1.2em;
  }
}

<button
  class="c0"
  color="red"
  type="button"
>
  Link
</button>
`);
        });

        it('should render red button element with disabled default styles when variant is provided', () => {
          const { navLink } = renderNavLink({
            props: { disabled: true, onClick: jest.fn() }
          });

          expect(navLink).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  display: block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  padding: 0;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  color: #3B302C;
  cursor: not-allowed;
  font-size: 1.1em;
  font-weight: 700;
  line-height: 1;
  opacity: 0.65;
  pointer-events: auto;
}

.c0::after {
  content: '';
  display: block;
  height: 3px;
  background: #C00404;
  margin-top: 1em;
  width: 0;
}

.c0:hover {
  color: #3B302C;
}

.c0:hover::after {
  width: 0;
}

@media (min-width:1200px) {
  .c0 {
    font-size: 1.2em;
  }
}

<button
  class="c0"
  color="red"
  disabled=""
  type="button"
>
  Link
</button>
`);
        });
      });

      describe('with navbar variant', () => {
        describe('when color is red', () => {
          it('should render red button element with navbar styles', () => {
            const { navLink } = renderNavLink({
              props: { onClick: jest.fn() },
              context: { navbar: true }
            });

            expect(navLink).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  display: block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  padding: 0;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  color: #3B302C;
  cursor: pointer;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5;
  opacity: 1;
  pointer-events: auto;
}

.c0::after {
  content: '';
  display: block;
  height: 3px;
  background: #C00404;
  margin-top: 0.25em;
  width: 0;
}

.c0:hover {
  color: #C00404;
}

.c0:hover::after {
  width: 100%;
}

<button
  class="c0"
  color="red"
  type="button"
>
  Link
</button>
`);
          });

          it('should render red button element with active navbar styles when variant is provided', () => {
            const { navLink } = renderNavLink({
              context: { navbar: true },
              props: { active: true, onClick: jest.fn() }
            });

            expect(navLink).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  display: block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  padding: 0;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  color: #C00404;
  cursor: pointer;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5;
  opacity: 1;
  pointer-events: auto;
}

.c0::after {
  content: '';
  display: block;
  height: 3px;
  background: #C00404;
  margin-top: 0.25em;
  width: 100%;
}

.c0:hover {
  color: #C00404;
}

.c0:hover::after {
  width: 100%;
}

<button
  class="c0"
  color="red"
  type="button"
>
  Link
</button>
`);
          });

          it('should render red button element with disabled navbar styles when variant is provided', () => {
            const { navLink } = renderNavLink({
              context: { navbar: true },
              props: { disabled: true, onClick: jest.fn() }
            });

            expect(navLink).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  display: block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  padding: 0;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  color: #3B302C;
  cursor: not-allowed;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5;
  opacity: 0.65;
  pointer-events: auto;
}

.c0::after {
  content: '';
  display: block;
  height: 3px;
  background: #C00404;
  margin-top: 0.25em;
  width: 0;
}

.c0:hover {
  color: #3B302C;
}

.c0:hover::after {
  width: 0;
}

<button
  class="c0"
  color="red"
  disabled=""
  type="button"
>
  Link
</button>
`);
          });
        });

        describe('when color is white', () => {
          it('should render white button element with navbar styles', () => {
            const { navLink } = renderNavLink({
              context: { navbar: true, color: 'white' },
              props: { onClick: jest.fn() }
            });

            expect(navLink).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  display: block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  padding: 0;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5;
  opacity: 1;
  pointer-events: auto;
}

.c0::after {
  content: '';
  display: block;
  height: 3px;
  background: #CCC6B8;
  margin-top: 0.25em;
  width: 0;
}

.c0:hover {
  color: #CCC6B8;
}

.c0:hover::after {
  width: 100%;
}

<button
  class="c0"
  color="white"
  type="button"
>
  Link
</button>
`);
          });

          it('should render white button element with active navbar styles when variant is provided', () => {
            const { navLink } = renderNavLink({
              context: { navbar: true, color: 'white' },
              props: { active: true, onClick: jest.fn() }
            });

            expect(navLink).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  display: block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  padding: 0;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  color: #CCC6B8;
  cursor: pointer;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5;
  opacity: 1;
  pointer-events: auto;
}

.c0::after {
  content: '';
  display: block;
  height: 3px;
  background: #CCC6B8;
  margin-top: 0.25em;
  width: 100%;
}

.c0:hover {
  color: #CCC6B8;
}

.c0:hover::after {
  width: 100%;
}

<button
  class="c0"
  color="white"
  type="button"
>
  Link
</button>
`);
          });

          it('should render white button element with disabled navbar styles when variant is provided', () => {
            const { navLink } = renderNavLink({
              context: { navbar: true, color: 'white' },
              props: { disabled: true, onClick: jest.fn() }
            });

            expect(navLink).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  display: block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  padding: 0;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  color: #FFFFFF;
  cursor: not-allowed;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5;
  opacity: 1;
  pointer-events: auto;
}

.c0::after {
  content: '';
  display: block;
  height: 3px;
  background: #CCC6B8;
  margin-top: 0.25em;
  width: 0;
}

.c0:hover {
  color: #FFFFFF;
}

.c0:hover::after {
  width: 0;
}

<button
  class="c0"
  color="white"
  disabled=""
  type="button"
>
  Link
</button>
`);
          });
        });
      });

      describe('with mobile variant', () => {
        describe('when color is red', () => {
          it('should render red button element with mobile styles', () => {
            const { navLink } = renderNavLink({
              context: { mobile: true },
              props: { onClick: jest.fn() }
            });

            expect(navLink).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  display: block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  padding: 0;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  color: #C00404;
  cursor: pointer;
  font-size: 1em;
  font-weight: 700;
  line-height: 1.5;
  opacity: 1;
  pointer-events: auto;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
}

.c0:hover {
  color: #3B302C;
}

<button
  class="c0"
  color="red"
  type="button"
>
  Link
</button>
`);
          });

          it('should render red button element with active mobile styles when variant is provided', () => {
            const { navLink } = renderNavLink({
              context: { mobile: true },
              props: { active: true, onClick: jest.fn() }
            });

            expect(navLink).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  display: block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  padding: 0;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  color: #3B302C;
  cursor: pointer;
  font-size: 1em;
  font-weight: 700;
  line-height: 1.5;
  opacity: 1;
  pointer-events: auto;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
}

.c0:hover {
  color: #3B302C;
}

<button
  class="c0"
  color="red"
  type="button"
>
  Link
</button>
`);
          });

          it('should render red button element with disabled mobile styles when variant is provided', () => {
            const { navLink } = renderNavLink({
              context: { mobile: true },
              props: { disabled: true, onClick: jest.fn() }
            });

            expect(navLink).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  display: block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  padding: 0;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  color: #C00404;
  cursor: not-allowed;
  font-size: 1em;
  font-weight: 700;
  line-height: 1.5;
  opacity: 0.65;
  pointer-events: auto;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
}

.c0:hover {
  color: #C00404;
}

<button
  class="c0"
  color="red"
  disabled=""
  type="button"
>
  Link
</button>
`);
          });
        });

        describe('when color is white', () => {
          it('should render white button element with mobile styles', () => {
            const { navLink } = renderNavLink({
              context: { mobile: true, color: 'white' },
              props: { onClick: jest.fn() }
            });

            expect(navLink).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  display: block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  padding: 0;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 1em;
  font-weight: 700;
  line-height: 1.5;
  opacity: 1;
  pointer-events: auto;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
}

.c0:hover {
  color: #CCC6B8;
}

<button
  class="c0"
  color="white"
  type="button"
>
  Link
</button>
`);
          });

          it('should render white button element with active mobile styles when variant is provided', () => {
            const { navLink } = renderNavLink({
              context: { mobile: true, color: 'white' },
              props: { active: true, onClick: jest.fn() }
            });

            expect(navLink).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  display: block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  padding: 0;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  color: #CCC6B8;
  cursor: pointer;
  font-size: 1em;
  font-weight: 700;
  line-height: 1.5;
  opacity: 1;
  pointer-events: auto;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
}

.c0:hover {
  color: #CCC6B8;
}

<button
  class="c0"
  color="white"
  type="button"
>
  Link
</button>
`);
          });

          it('should render white button element with disabled mobile styles when variant is provided', () => {
            const { navLink } = renderNavLink({
              context: { mobile: true, color: 'white' },
              props: { disabled: true, onClick: jest.fn() }
            });

            expect(navLink).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  display: block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  padding: 0;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  color: #FFFFFF;
  cursor: not-allowed;
  font-size: 1em;
  font-weight: 700;
  line-height: 1.5;
  opacity: 1;
  pointer-events: auto;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
}

.c0:hover {
  color: #FFFFFF;
}

<button
  class="c0"
  color="white"
  disabled=""
  type="button"
>
  Link
</button>
`);
          });
        });
      });

      describe('with sub variant', () => {
        it('should render red button element with sub styles', () => {
          const { navLink } = renderNavLink({
            context: { sub: true },
            props: { onClick: jest.fn() }
          });

          expect(navLink).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  display: block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  padding: 0;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  color: #C00404;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: 400;
  line-height: 1.5;
  opacity: 1;
  pointer-events: auto;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
}

.c0:hover {
  color: #3B302C;
}

<button
  class="c0"
  color="red"
  type="button"
>
  Link
</button>
`);
        });

        it('should render red button element with active sub styles when variant is provided', () => {
          const { navLink } = renderNavLink({
            context: { sub: true },
            props: { active: true, onClick: jest.fn() }
          });

          expect(navLink).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  display: block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  padding: 0;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  color: #3B302C;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: 400;
  line-height: 1.5;
  opacity: 1;
  pointer-events: auto;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
}

.c0:hover {
  color: #3B302C;
}

<button
  class="c0"
  color="red"
  type="button"
>
  Link
</button>
`);
        });

        it('should render red button element with disabled sub styles when variant is provided', () => {
          const { navLink } = renderNavLink({
            context: { sub: true },
            props: { disabled: true, onClick: jest.fn() }
          });

          expect(navLink).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  display: block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  padding: 0;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  color: #C00404;
  cursor: not-allowed;
  font-size: 1.1em;
  font-weight: 400;
  line-height: 1.5;
  opacity: 0.65;
  pointer-events: auto;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
}

.c0:hover {
  color: #C00404;
}

<button
  class="c0"
  color="red"
  disabled=""
  type="button"
>
  Link
</button>
`);
        });
      });
    });

    describe('with href', () => {
      describe('without variants', () => {
        it('should render red anchor element with default styles', () => {
          const { navLink } = renderNavLink({
            props: { href: 'https://www.brown.edu' }
          });

          expect(navLink).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  display: block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  padding: 0;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  color: #3B302C;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: 700;
  line-height: 1;
  opacity: 1;
  pointer-events: auto;
  -webkit-transition: background-color .55s linear,border-color .25s linear,box-shadow .25s linear,color .25s linear;
  transition: background-color .55s linear,border-color .25s linear,box-shadow .25s linear,color .25s linear;
}

.c0::after {
  content: '';
  display: block;
  height: 3px;
  -webkit-transition: width 0.3s;
  transition: width 0.3s;
  background: #C00404;
  margin-top: 1em;
  width: 0;
}

.c0:hover {
  color: #C00404;
}

.c0:hover::after {
  width: 100%;
}

@media (min-width:1200px) {
  .c0 {
    font-size: 1.2em;
  }
}

<a
  class="c0"
  color="red"
  href="https://www.brown.edu"
>
  Link
</a>
`);
        });

        it('should render red anchor element with active default styles when variant is provided', () => {
          const { navLink } = renderNavLink({
            props: { active: true, href: 'https://www.brown.edu' }
          });

          expect(navLink).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  display: block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  padding: 0;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  color: #C00404;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: 700;
  line-height: 1;
  opacity: 1;
  pointer-events: auto;
  -webkit-transition: background-color .55s linear,border-color .25s linear,box-shadow .25s linear,color .25s linear;
  transition: background-color .55s linear,border-color .25s linear,box-shadow .25s linear,color .25s linear;
}

.c0::after {
  content: '';
  display: block;
  height: 3px;
  -webkit-transition: width 0.3s;
  transition: width 0.3s;
  background: #C00404;
  margin-top: 1em;
  width: 100%;
}

.c0:hover {
  color: #C00404;
}

.c0:hover::after {
  width: 100%;
}

@media (min-width:1200px) {
  .c0 {
    font-size: 1.2em;
  }
}

<a
  class="c0"
  color="red"
  href="https://www.brown.edu"
>
  Link
</a>
`);
        });

        it('should render red anchor element with disabled default styles when variant is provided', () => {
          const { navLink } = renderNavLink({
            props: { disabled: true, href: 'https://www.brown.edu' }
          });

          expect(navLink).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  display: block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  padding: 0;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  color: #3B302C;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: 700;
  line-height: 1;
  opacity: 0.65;
  pointer-events: none;
  -webkit-transition: background-color .55s linear,border-color .25s linear,box-shadow .25s linear,color .25s linear;
  transition: background-color .55s linear,border-color .25s linear,box-shadow .25s linear,color .25s linear;
}

.c0::after {
  content: '';
  display: block;
  height: 3px;
  -webkit-transition: width 0.3s;
  transition: width 0.3s;
  background: #C00404;
  margin-top: 1em;
  width: 0;
}

.c0:hover {
  color: #3B302C;
}

.c0:hover::after {
  width: 0;
}

@media (min-width:1200px) {
  .c0 {
    font-size: 1.2em;
  }
}

<a
  class="c0"
  color="red"
  disabled=""
  href="https://www.brown.edu"
>
  Link
</a>
`);
        });
      });

      describe('with navbar variant', () => {
        describe('when color is red', () => {
          it('should render red anchor element with navbar styles', () => {
            const { navLink } = renderNavLink({
              context: { navbar: true },
              props: { href: 'https://www.brown.edu' }
            });

            expect(navLink).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  display: block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  padding: 0;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  color: #3B302C;
  cursor: pointer;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5;
  opacity: 1;
  pointer-events: auto;
  -webkit-transition: background-color .55s linear,border-color .25s linear,box-shadow .25s linear,color .25s linear;
  transition: background-color .55s linear,border-color .25s linear,box-shadow .25s linear,color .25s linear;
}

.c0::after {
  content: '';
  display: block;
  height: 3px;
  -webkit-transition: width 0.3s;
  transition: width 0.3s;
  background: #C00404;
  margin-top: 0.25em;
  width: 0;
}

.c0:hover {
  color: #C00404;
}

.c0:hover::after {
  width: 100%;
}

<a
  class="c0"
  color="red"
  href="https://www.brown.edu"
>
  Link
</a>
`);
          });

          it('should render red anchor element with active navbar styles when variant is provided', () => {
            const { navLink } = renderNavLink({
              context: { navbar: true },
              props: { active: true, href: 'https://www.brown.edu' }
            });

            expect(navLink).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  display: block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  padding: 0;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  color: #C00404;
  cursor: pointer;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5;
  opacity: 1;
  pointer-events: auto;
  -webkit-transition: background-color .55s linear,border-color .25s linear,box-shadow .25s linear,color .25s linear;
  transition: background-color .55s linear,border-color .25s linear,box-shadow .25s linear,color .25s linear;
}

.c0::after {
  content: '';
  display: block;
  height: 3px;
  -webkit-transition: width 0.3s;
  transition: width 0.3s;
  background: #C00404;
  margin-top: 0.25em;
  width: 100%;
}

.c0:hover {
  color: #C00404;
}

.c0:hover::after {
  width: 100%;
}

<a
  class="c0"
  color="red"
  href="https://www.brown.edu"
>
  Link
</a>
`);
          });

          it('should render red anchor element with disabled navbar styles when variant is provided', () => {
            const { navLink } = renderNavLink({
              context: { navbar: true },
              props: { disabled: true, href: 'https://www.brown.edu' }
            });

            expect(navLink).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  display: block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  padding: 0;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  color: #3B302C;
  cursor: pointer;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5;
  opacity: 0.65;
  pointer-events: none;
  -webkit-transition: background-color .55s linear,border-color .25s linear,box-shadow .25s linear,color .25s linear;
  transition: background-color .55s linear,border-color .25s linear,box-shadow .25s linear,color .25s linear;
}

.c0::after {
  content: '';
  display: block;
  height: 3px;
  -webkit-transition: width 0.3s;
  transition: width 0.3s;
  background: #C00404;
  margin-top: 0.25em;
  width: 0;
}

.c0:hover {
  color: #3B302C;
}

.c0:hover::after {
  width: 0;
}

<a
  class="c0"
  color="red"
  disabled=""
  href="https://www.brown.edu"
>
  Link
</a>
`);
          });
        });

        describe('when color is white', () => {
          it('should render white anchor element with navbar styles', () => {
            const { navLink } = renderNavLink({
              context: { navbar: true, color: 'white' },
              props: { href: 'https://www.brown.edu' }
            });

            expect(navLink).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  display: block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  padding: 0;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5;
  opacity: 1;
  pointer-events: auto;
  -webkit-transition: background-color .55s linear,border-color .25s linear,box-shadow .25s linear,color .25s linear;
  transition: background-color .55s linear,border-color .25s linear,box-shadow .25s linear,color .25s linear;
}

.c0::after {
  content: '';
  display: block;
  height: 3px;
  -webkit-transition: width 0.3s;
  transition: width 0.3s;
  background: #CCC6B8;
  margin-top: 0.25em;
  width: 0;
}

.c0:hover {
  color: #CCC6B8;
}

.c0:hover::after {
  width: 100%;
}

<a
  class="c0"
  color="white"
  href="https://www.brown.edu"
>
  Link
</a>
`);
          });

          it('should render white anchor element with active navbar styles when variant is provided', () => {
            const { navLink } = renderNavLink({
              context: { navbar: true, color: 'white' },
              props: { active: true, href: 'https://www.brown.edu' }
            });

            expect(navLink).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  display: block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  padding: 0;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  color: #CCC6B8;
  cursor: pointer;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5;
  opacity: 1;
  pointer-events: auto;
  -webkit-transition: background-color .55s linear,border-color .25s linear,box-shadow .25s linear,color .25s linear;
  transition: background-color .55s linear,border-color .25s linear,box-shadow .25s linear,color .25s linear;
}

.c0::after {
  content: '';
  display: block;
  height: 3px;
  -webkit-transition: width 0.3s;
  transition: width 0.3s;
  background: #CCC6B8;
  margin-top: 0.25em;
  width: 100%;
}

.c0:hover {
  color: #CCC6B8;
}

.c0:hover::after {
  width: 100%;
}

<a
  class="c0"
  color="white"
  href="https://www.brown.edu"
>
  Link
</a>
`);
          });

          it('should render white anchor element with disabled navbar styles when variant is provided', () => {
            const { navLink } = renderNavLink({
              context: { navbar: true, color: 'white' },
              props: { disabled: true, href: 'https://www.brown.edu' }
            });

            expect(navLink).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  display: block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  padding: 0;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5;
  opacity: 1;
  pointer-events: none;
  -webkit-transition: background-color .55s linear,border-color .25s linear,box-shadow .25s linear,color .25s linear;
  transition: background-color .55s linear,border-color .25s linear,box-shadow .25s linear,color .25s linear;
}

.c0::after {
  content: '';
  display: block;
  height: 3px;
  -webkit-transition: width 0.3s;
  transition: width 0.3s;
  background: #CCC6B8;
  margin-top: 0.25em;
  width: 0;
}

.c0:hover {
  color: #FFFFFF;
}

.c0:hover::after {
  width: 0;
}

<a
  class="c0"
  color="white"
  disabled=""
  href="https://www.brown.edu"
>
  Link
</a>
`);
          });
        });
      });

      describe('with mobile variant', () => {
        describe('when color is red', () => {
          it('should render red anchor element with mobile styles', () => {
            const { navLink } = renderNavLink({
              context: { mobile: true },
              props: { href: 'https://www.brown.edu' }
            });

            expect(navLink).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  display: block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  padding: 0;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  color: #C00404;
  cursor: pointer;
  font-size: 1em;
  font-weight: 700;
  line-height: 1.5;
  opacity: 1;
  pointer-events: auto;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
}

.c0:hover {
  color: #3B302C;
}

<a
  class="c0"
  color="red"
  href="https://www.brown.edu"
>
  Link
</a>
`);
          });

          it('should render red anchor element with active mobile styles when variant is provided', () => {
            const { navLink } = renderNavLink({
              context: { mobile: true },
              props: { active: true, href: 'https://www.brown.edu' }
            });

            expect(navLink).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  display: block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  padding: 0;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  color: #3B302C;
  cursor: pointer;
  font-size: 1em;
  font-weight: 700;
  line-height: 1.5;
  opacity: 1;
  pointer-events: auto;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
}

.c0:hover {
  color: #3B302C;
}

<a
  class="c0"
  color="red"
  href="https://www.brown.edu"
>
  Link
</a>
`);
          });

          it('should render red anchor element with disabled mobile styles when variant is provided', () => {
            const { navLink } = renderNavLink({
              context: { mobile: true },
              props: { disabled: true, href: 'https://www.brown.edu' }
            });

            expect(navLink).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  display: block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  padding: 0;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  color: #C00404;
  cursor: pointer;
  font-size: 1em;
  font-weight: 700;
  line-height: 1.5;
  opacity: 0.65;
  pointer-events: none;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
}

.c0:hover {
  color: #C00404;
}

<a
  class="c0"
  color="red"
  disabled=""
  href="https://www.brown.edu"
>
  Link
</a>
`);
          });
        });

        describe('when color is white', () => {
          it('should render white anchor element with mobile styles', () => {
            const { navLink } = renderNavLink({
              context: { mobile: true, color: 'white' },
              props: { href: 'https://www.brown.edu' }
            });

            expect(navLink).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  display: block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  padding: 0;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 1em;
  font-weight: 700;
  line-height: 1.5;
  opacity: 1;
  pointer-events: auto;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
}

.c0:hover {
  color: #CCC6B8;
}

<a
  class="c0"
  color="white"
  href="https://www.brown.edu"
>
  Link
</a>
`);
          });

          it('should render white anchor element with active mobile styles when variant is provided', () => {
            const { navLink } = renderNavLink({
              context: { mobile: true, color: 'white' },
              props: { active: true, href: 'https://www.brown.edu' }
            });

            expect(navLink).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  display: block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  padding: 0;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  color: #CCC6B8;
  cursor: pointer;
  font-size: 1em;
  font-weight: 700;
  line-height: 1.5;
  opacity: 1;
  pointer-events: auto;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
}

.c0:hover {
  color: #CCC6B8;
}

<a
  class="c0"
  color="white"
  href="https://www.brown.edu"
>
  Link
</a>
`);
          });

          it('should render white anchor element with disabled mobile styles when variant is provided', () => {
            const { navLink } = renderNavLink({
              context: { mobile: true, color: 'white' },
              props: { disabled: true, href: 'https://www.brown.edu' }
            });

            expect(navLink).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  display: block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  padding: 0;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 1em;
  font-weight: 700;
  line-height: 1.5;
  opacity: 1;
  pointer-events: none;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
}

.c0:hover {
  color: #FFFFFF;
}

<a
  class="c0"
  color="white"
  disabled=""
  href="https://www.brown.edu"
>
  Link
</a>
`);
          });
        });
      });

      describe('with sub variant', () => {
        it('should render red anchor element with sub styles', () => {
          const { navLink } = renderNavLink({
            context: { sub: true },
            props: { href: 'https://www.brown.edu' }
          });

          expect(navLink).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  display: block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  padding: 0;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  color: #C00404;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: 400;
  line-height: 1.5;
  opacity: 1;
  pointer-events: auto;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
}

.c0:hover {
  color: #3B302C;
}

<a
  class="c0"
  color="red"
  href="https://www.brown.edu"
>
  Link
</a>
`);
        });

        it('should render red anchor element with active sub styles when variant is provided', () => {
          const { navLink } = renderNavLink({
            context: { sub: true },
            props: { active: true, href: 'https://www.brown.edu' }
          });

          expect(navLink).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  display: block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  padding: 0;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  color: #3B302C;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: 400;
  line-height: 1.5;
  opacity: 1;
  pointer-events: auto;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
}

.c0:hover {
  color: #3B302C;
}

<a
  class="c0"
  color="red"
  href="https://www.brown.edu"
>
  Link
</a>
`);
        });

        it('should render red anchor element with disabled sub styles when variant is provided', () => {
          const { navLink } = renderNavLink({
            context: { sub: true },
            props: { disabled: true, href: 'https://www.brown.edu' }
          });

          expect(navLink).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  display: block;
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  padding: 0;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  color: #C00404;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: 400;
  line-height: 1.5;
  opacity: 0.65;
  pointer-events: none;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
}

.c0:hover {
  color: #C00404;
}

<a
  class="c0"
  color="red"
  disabled=""
  href="https://www.brown.edu"
>
  Link
</a>
`);
        });
      });
    });
  });

  describe('onClick', () => {
    it('should call onClick when disabled is false', () => {
      const onClick = jest.fn();
      const { getByText } = renderNavLink({
        props: { onClick },
        children: 'Click Me'
      });

      fireEvent.click(getByText('Click Me'));
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should not call onClick when disabled is true', () => {
      const onClick = jest.fn();
      const { getByText } = renderNavLink({
        props: { disabled: true, onClick },
        children: 'Click Me'
      });

      fireEvent.click(getByText('Click Me'));
      expect(onClick).not.toHaveBeenCalled();
    });
  });
});

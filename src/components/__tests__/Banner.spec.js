import React from 'react';
import { render } from 'react-testing-library';

import Banner from '../Banner';

const renderBanner = ({ props = {}, children = null } = {}) => {
  const rtlUtils = render(<Banner {...props}>{children}</Banner>);

  return {
    tree: rtlUtils.container.firstChild,
    ...rtlUtils
  };
};

describe('Button', () => {
  describe('children', () => {
    it('should render BannerText as child if provided', () => {
      const BannerChild = <Banner.Text>Banner Text</Banner.Text>;
      const { getByText } = renderBanner({ children: BannerChild });

      expect(getByText('Banner Text')).toBeInTheDocument();
    });
  });

  describe('style', () => {
    it('should render a banner with an emerald background by default', () => {
      const { tree } = renderBanner();

      expect(tree).toMatchInlineSnapshot(`
.c0 {
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: relative;
  z-index: 5;
  width: 100%;
  background-color: #00B398;
  height: 200px;
}

<div
  class="c0"
  color="emerald"
/>
`);
    });

    it('should render a banner with a background of another color when color variant is provided', () => {
      const { tree } = renderBanner({ props: { color: 'red' } });

      expect(tree).toHaveStyleRule('background-color', '#C00404');
    });

    it('should render a small banner when size variant is provided', () => {
      const { tree } = renderBanner({ props: { size: 'small' } });

      expect(tree).toHaveStyleRule('height', '150px');
    });

    it('should render a medium banner when size variant is provided', () => {
      const { tree } = renderBanner({ props: { size: 'medium' } });

      expect(tree).toHaveStyleRule('height', '300px');
    });

    it('should render a large banner when size variant is provided', () => {
      const { tree } = renderBanner({ props: { size: 'large' } });

      expect(tree).toHaveStyleRule('height', '600px');
    });

    it('should render a background image when src is provided', () => {
      const { tree } = renderBanner({
        props: { src: './path/to/img.jpg' }
      });

      expect(tree).toHaveStyleRule(
        'background-image',
        'url(./path/to/img.jpg)'
      );
    });
  });
});

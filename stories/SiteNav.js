import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';

import { SiteNav, Banner } from '../src';
import breakpoints from '../src/constants/breakpoints';
import bannerImage from './images/banner.png';

const getCommonProps = () => ({
  mobileMenuTitle: text('mobileMenuTitle', 'Site Navigation'),
  mobileNavBreakpoint: number('mobileNavBreakpoint', breakpoints.md)
});

const renderSiteNav = additionalProps => (
  <SiteNav {...getCommonProps()} {...additionalProps}>
    <SiteNav.Item>
      <SiteNav.Link>Link</SiteNav.Link>
    </SiteNav.Item>
    <SiteNav.Item>
      <SiteNav.Link active>Active Link</SiteNav.Link>
    </SiteNav.Item>
    <SiteNav.Item>
      <SiteNav.Link disabled>Disabled Link</SiteNav.Link>
    </SiteNav.Item>
  </SiteNav>
);
storiesOf('SiteNav', module)
  .addDecorator(withKnobs)
  .add('default', () => renderSiteNav())
  .add('with banner', () => (
    <React.Fragment>
      <Banner src={bannerImage}>
        <Banner.Text>University Theme</Banner.Text>
      </Banner>
      {renderSiteNav({ banner: boolean('banner', true) })}
    </React.Fragment>
  ));

import React from 'react';
import { storiesOf } from '@storybook/react';

import { SiteNav } from '../src';

storiesOf('SiteNav', module).add('default', () => (
  <SiteNav>
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
));

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Nav } from '../src';

storiesOf('Nav', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Nav vertical={boolean('vertical', false)} sub={boolean('sub', false)}>
      <Nav.Item>
        <Nav.Link onClick={action('clicked')}>Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link active onClick={action('clicked')}>
          Active Link
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link disabled onClick={action('clicked')}>
          Disabled Link
        </Nav.Link>
      </Nav.Item>
    </Nav>
  ))
  .add('with hrefs', () => (
    <Nav vertical={boolean('vertical', false)} sub={boolean('sub', false)}>
      <Nav.Item>
        <Nav.Link href="https://www.brown.edu/">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" active>
          Active Link
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://www.brown.edu/" disabled>
          Disabled Link
        </Nav.Link>
      </Nav.Item>
    </Nav>
  ));

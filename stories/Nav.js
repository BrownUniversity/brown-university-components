import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Nav } from '../src';

const getCommonProps = () => ({
  navbar: boolean('navbar', false),
  vertical: boolean('vertical', false),
  mobile: boolean('mobile', false),
  sub: boolean('sub', false)
});

storiesOf('Nav', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Nav {...getCommonProps()}>
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
    <Nav {...getCommonProps()}>
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

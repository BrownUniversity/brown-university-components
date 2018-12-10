import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import { Navbar } from '../src';

const getColorProp = () => select('color', ['brown', 'white']);

storiesOf('Navbar', module)
  .addDecorator(withKnobs)
  .add('default', () => <Navbar color={getColorProp()} />)
  .add('with Nav', () => (
    <Navbar color={getColorProp()}>
      <Navbar.Nav>
        <Navbar.Nav.Item>
          <Navbar.Nav.Link active>Active Link</Navbar.Nav.Link>
        </Navbar.Nav.Item>
        <Navbar.Nav.Item>
          <Navbar.Nav.Link>Link</Navbar.Nav.Link>
        </Navbar.Nav.Item>
        <Navbar.Nav.Item>
          <Navbar.Nav.Link>Link</Navbar.Nav.Link>
        </Navbar.Nav.Item>
      </Navbar.Nav>
    </Navbar>
  ));

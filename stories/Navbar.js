import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import { Navbar } from '../src';

storiesOf('Navbar', module)
  .addDecorator(withKnobs)
  .add('default', () => <Navbar color={select('color', ['brown', 'white'])} />)
  .add('with Nav', () => (
    <Navbar color="white">
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

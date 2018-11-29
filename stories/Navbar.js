import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import { Navbar, Nav } from '../src';

storiesOf('Navbar', module)
  .addDecorator(withKnobs)
  .add('default', () => <Navbar color={select('color', ['brown', 'white'])} />)
  .add('with children', () => (
    <Navbar color="white">
      <Nav>
        <Nav.Item>
          <Nav.Link>Foo</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Bar</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Baz</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  ));

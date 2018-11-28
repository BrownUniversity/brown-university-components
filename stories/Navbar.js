import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import { Navbar } from '../src';

storiesOf('Navbar', module)
  .addDecorator(withKnobs)
  .add('default', () => <Navbar color={select('color', ['brown', 'white'])} />);
/* .add('with children', () => (
    <Navbar>
      <span>
        <Hamburger color="white" />
      </span>
    </Navbar>
  )); */

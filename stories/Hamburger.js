import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Hamburger } from '../src';

storiesOf('Hamburger', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Hamburger
      color={select('color', [
        'red',
        'yellow',
        'brown',
        'gray',
        'emerald',
        'skyblue',
        'navy',
        'white'
      ])}
      onOpen={action('open')}
      onClose={action('close')}
    />
  ));

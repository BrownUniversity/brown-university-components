import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';

import Button from '../src/components/Button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Button
      color={select('color', [
        'red',
        'yellow',
        'brown',
        'gray',
        'emerald',
        'skyblue',
        'navy'
      ])}
      size={select('size', ['default', 'small', 'large'])}
      outline={boolean('outline', false)}
      inverse={boolean('inverse', false)}
      onClick={() => alert('Click!')}
    >
      Click Me
    </Button>
  ))
  .add('as a link', () => (
    <Button href={text('href', 'https://www.brown.edu/')}>Click Me</Button>
  ));

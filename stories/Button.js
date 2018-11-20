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
    >
      Click Me
    </Button>
  ))
  .add('disabled', () => (
    <Button disabled={boolean('disabled', true)}>Click Me</Button>
  ))
  .add('with href', () => (
    <Button href={text('href', 'https://www.brown.edu/')}>Click Me</Button>
  ));

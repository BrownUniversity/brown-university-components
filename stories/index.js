import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import Button from '../src/components/Button';

const stories = storiesOf('Brown University Theme', module);

stories.addDecorator(withKnobs).add('Button', () => (
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
));

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import { Background } from '../src';
import backgroundURL from '../src/svg/background.svg';

storiesOf('Background', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Background url={backgroundURL} color={select('color', ['white', 'gray'])}>
      <div style={{ height: '3000px' }} />
    </Background>
  ));

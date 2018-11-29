import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import { Banner } from '../src';
import bannerImage from './images/banner.png';

storiesOf('Banner', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Banner
      color={select('color', [
        'emerald',
        'red',
        'yellow',
        'gray',
        'skyblue',
        'navy'
      ])}
      size={select('size', ['default', 'small', 'medium', 'large'])}
    />
  ))
  .add('with src', () => <Banner src={bannerImage} />)
  .add('with children', () => (
    <Banner>
      <h1 style={{ color: 'white' }}>Banner</h1>
    </Banner>
  ));

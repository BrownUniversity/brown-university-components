import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/Button');
}

configure(loadStories, module);

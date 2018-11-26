import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/Button');
  require('../stories/Nav');
}

configure(loadStories, module);

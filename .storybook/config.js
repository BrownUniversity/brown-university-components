import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/Button');
  require('../stories/Hamburger');
  require('../stories/Nav');
  require('../stories/Navbar');
}

configure(loadStories, module);

import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/Banner');
  require('../stories/Button');
  require('../stories/Hamburger');
  require('../stories/Loader');
  require('../stories/Nav');
  require('../stories/Navbar');
}

configure(loadStories, module);

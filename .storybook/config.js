import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/Banner');
  require('../stories/Button');
  require('../stories/Code');
  require('../stories/Collapse');
  require('../stories/Hamburger');
  require('../stories/Loader');
  require('../stories/Nav');
  require('../stories/Navbar');
  require('../stories/SiteNav');
}

configure(loadStories, module);

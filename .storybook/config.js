import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/Background');
  require('../stories/Banner');
  require('../stories/Button');
  require('../stories/Code');
  require('../stories/Hamburger');
  require('../stories/Loader');
  require('../stories/Nav');
  require('../stories/Navbar');
  require('../stories/SiteNav');
  require('../stories/SubNav');
}

configure(loadStories, module);

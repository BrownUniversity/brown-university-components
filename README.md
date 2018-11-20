# Brown University Theme

React components for the [Brown University Theme](https://www.brown.edu/university-communications/digital/university-theme).

## Install

### Add Brown University Theme

```
  // TODO
```

### Dependencies

#### Required Peer Dependencies

These libraries are not bundled with Brown University Theme and are required at runtime:

- [**react**](https://www.npmjs.com/package/react)
- [**react-dom**](https://www.npmjs.com/package/react-dom)

## Documentation

_Components marked with ✘ have not been implemented yet._

### Basic Features

- Tables ✘

- [Button](https://www.brown.edu/university-communications/digital/university-theme/formatting/buttons)

  _Props:_

  | property | propType                                                                | required | default   |
  | -------- | ----------------------------------------------------------------------- | -------- | --------- |
  | color    | oneOf(['red', 'yellow', 'brown', 'gray', 'emerald', 'skyblue', 'navy']) | -        | 'red'     |
  | size     | oneOf(['default', 'large', 'small'])                                    | -        | 'default' |
  | outline  | bool                                                                    | -        | false     |
  | inverse  | bool                                                                    | -        | false     |

  _Example:_

  ```
  import React from 'react';
  import { Button } from 'brown-university-theme';

  export default (props) => {
    return (
      <Button color="yellow">
        Click Me
      </Button>
    );
  };

  ```

- Block Quote ✘

- Lists ✘

- Banners ✘

### People, News & Events

- People ✘

- News ✘

- Events ✘

### Components

- Text Cards ✘

- Image Cards ✘

- Highlights ✘

- Callouts ✘

- Quotes ✘

- Statistics ✘

- Accordions ✘

- Flexslider ✘

## Development

Install dependencies:

```sh
npm install
```

Run examples at [http://localhost:8080/](http://localhost:8080/) with storybook:

```sh
npm start
```

Run tests:

```sh
npm test
```

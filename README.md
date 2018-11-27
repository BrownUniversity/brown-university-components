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
- [**styled-components**](https://www.npmjs.com/package/styled-components)

## Documentation

### Components

- [Buttons](https://www.brown.edu/university-communications/digital/university-theme/formatting/buttons)

  **Example:**

  ```
  import React from 'react';
  import { Button } from 'brown-university-theme';

  export default () => {
    return (
      <Button color="yellow">
        Click Me
      </Button>
    );
  };

  ```

  **Properties:**

  | property | propType                                                                | required | default   |
  | -------- | ----------------------------------------------------------------------- | -------- | --------- |
  | color    | oneOf(['red', 'yellow', 'brown', 'gray', 'emerald', 'skyblue', 'navy']) | -        | 'red'     |
  | size     | oneOf(['default', 'large', 'small'])                                    | -        | 'default' |
  | outline  | bool                                                                    | -        | false     |
  | inverse  | bool                                                                    | -        | false     |
  | disabled | bool                                                                    | -        | false     |
  | tag      | oneOfType([func, string])                                               | -        | 'button'  |
  | onClick  | func                                                                    | -        | null      |
  | href     | string                                                                  | -        | null      |

- Navs

  **Example:**

  ```
  import React from 'react';
  import { Nav } from 'brown-university-theme';

  export default () => {
    return (
      <Nav>
        <Nav.Item>
          <Nav.Link>Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link active>
            Active Link
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link disabled>
            Disabled Link
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  };

  ```

  **`Nav` Properties:**

  | property | propType          | required | default   |
  | -------- | ----------------- | -------- | --------- |
  | vertical | bool              | -        | false     |
  | sub      | bool              | -        | false     |
  | children | arrayOf(Nav.Item) | true     | undefined |

  **`Nav.Item` Properties:**

  | property | propType | required | default   |
  | -------- | -------- | -------- | --------- |
  | children | Nav.Link | true     | undefined |

  **`Nav.List` Properties:**

  | property | propType                  | required | default  |
  | -------- | ------------------------- | -------- | -------- |
  | active   | bool                      | -        | false    |
  | disabled | bool                      | -        | false    |
  | tag      | oneOfType([func, string]) | -        | 'button' |
  | onClick  | func                      | -        | null     |
  | href     | string                    | -        | null     |

- Hamburger

  **Example:**

  ```
  import React from 'react';
  import { Hamburger } from 'brown-university-theme';

  export default () => {
    return (
      <Hamburger />
    );
  };

  ```

  **Properties:**

  | property | propType                                                                         | required | default |
  | -------- | -------------------------------------------------------------------------------- | -------- | ------- |
  | color    | oneOf(['red', 'yellow', 'brown', 'gray', 'emerald', 'skyblue', 'navy', 'white']) | -        | 'red'   |
  | isOpen   | bool                                                                             | -        | false   |
  | onOpen   | func                                                                             | -        | null    |
  | onClose  | func                                                                             | -        | null    |

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

Run tests with code coverage:

```sh
npm test:coverage
```

Run tests with code coverage and open report:

```sh
npm test:coverage:open
```

Watch tests:

```sh
npm run test:watch
```

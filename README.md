# Brown University Theme

Styles and components for building web applications based on the [Brown University Theme](https://www.brown.edu/university-communications/digital/university-theme).

## Install

### Add Brown University Theme

Ensure you're on the network and that your SSH key has been added to the ssh-agent (`ssh-add ~/.ssh/id_rsa`) and uploaded to [bitbucket.brown.edu](https://bitbucket.brown.edu/plugins/servlet/ssh/account/keys), then run:

```
  yarn add git+https://bitbucket.brown.edu/scm/ccum/brown-university-theme.git#^0.3
```

### Dependencies

#### Required Peer Dependencies

These libraries are not bundled with Brown University Theme and are required at runtime:

- [**react**](https://www.npmjs.com/package/react)
- [**styled-components**](https://www.npmjs.com/package/styled-components)

## Documentation

### Styles

```javascript
// Includes fonts. This only needs to be done once; probably where you're
// calling `ReactDOM.render`.
import 'brown-university-theme/dist/styles.css';
```

### Components

- `Banner`

  **Example:**

  ```javascript
  import React from 'react';
  import { Banner } from 'brown-university-theme';

  export default () => (
    <Banner src={'./path/to/img.jpg'}>
      <Banner.Text>App Name</Banner.Text>
    </Banner>
  );
  ```

  **Properties:**

  | property | propType                                                                                                     | required | default   |
  | -------- | ------------------------------------------------------------------------------------------------------------ | -------- | --------- |
  | color    | oneOf(['emerald', 'red', 'brown', 'yellow', 'gray', 'sand', 'lightBrown', 'mediumBrown', 'navy', 'skyblue']) | -        | 'emerald' |
  | size     | oneOf(['default', 'small', 'medium', 'large'])                                                               | -        | 'default' |
  | src      | string                                                                                                       | -        | false     |
  | children | node                                                                                                         | -        | false     |

* [`Button`](https://www.brown.edu/university-communications/digital/university-theme/formatting/buttons)

  **Example:**

  ```javascript
  import React from 'react';
  import { Button } from 'brown-university-theme';

  export default () => <Button color="yellow">Click Me</Button>;
  ```

  **Properties:**

  | property | propType                                                                | required | default   |
  | -------- | ----------------------------------------------------------------------- | -------- | --------- |
  | color    | oneOf(['red', 'yellow', 'brown', 'gray', 'emerald', 'skyblue', 'navy']) | -        | 'red'     |
  | size     | oneOf(['default', 'small', 'large'])                                    | -        | 'default' |
  | outline  | bool                                                                    | -        | false     |
  | inverse  | bool                                                                    | -        | false     |
  | disabled | bool                                                                    | -        | false     |
  | tag      | oneOfType([func, string])                                               | -        | 'button'  |
  | onClick  | func                                                                    | -        | null      |
  | href     | string                                                                  | -        | null      |

- `Code`

  **Example:**

  ```javascript
  import React from 'react';
  import { Code } from 'brown-university-theme';

  export default () => <Code>small</Code>;
  ```

  **Properties:**

  | property | propType | required | default |
  | -------- | -------- | -------- | ------- |
  | children | node     | true     | -       |

* `Hamburger`

  _This is a primitive used by `NavbarNav` and `SiteNav`. You might want to use one of those components instead._

  **Example:**

  ```javascript
  import React from 'react';
  import { Hamburger } from 'brown-university-theme';

  export default () => (
    <Hamburger
      onOpen={() => 'your `handleOpen` fn'}
      onClose={() => 'your `handleClose` fn'}
    />
  );
  ```

  **Properties:**

  | property | propType                                                                         | required | default |
  | -------- | -------------------------------------------------------------------------------- | -------- | ------- |
  | color    | oneOf(['red', 'yellow', 'brown', 'gray', 'emerald', 'skyblue', 'navy', 'white']) | -        | 'red'   |
  | isOpen   | bool                                                                             | -        | false   |
  | onOpen   | func                                                                             | true     | -       |
  | onClose  | func                                                                             | true     | -       |

* `Loader`

  **Example:**

  ```javascript
  import React from 'react';
  import { Loader } from 'brown-university-theme';

  export default () => <Loader height={300} />;
  ```

  **Properties:**

  | property | propType | required | default |
  | -------- | -------- | -------- | ------- |
  | height   | number   | -        | 250     |

- `Nav`

  _This is a primitive used by `NavbarNav`, `SiteNav`, and `SubNav`. You might want to use one of those components instead._

  **Example:**

  ```javascript
  import React from 'react';
  import { Nav } from 'brown-university-theme';

  export default () => (
    <Nav>
      <Nav.Item>
        <Nav.Link>Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link active>Active Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link disabled>Disabled Link</Nav.Link>
      </Nav.Item>
    </Nav>
  );
  ```

  **`Nav` Properties:**

  | property | propType | required | default   |
  | -------- | -------- | -------- | --------- |
  | navbar   | bool     | -        | false     |
  | mobile   | bool     | -        | false     |
  | sub      | bool     | -        | false     |
  | children | node     | true     | undefined |

  **`Nav.Item` Properties:**

  | property | propType | required | default   |
  | -------- | -------- | -------- | --------- |
  | mobile   | bool     | -        | false     |
  | sub      | bool     | -        | false     |
  | children | node     | true     | undefined |

  _`mobile` and `sub` props are passed down implicitly from `Nav` through `NavContext`._

  **`Nav.Link` Properties:**

  | property | propType                  | required | default  |
  | -------- | ------------------------- | -------- | -------- |
  | active   | bool                      | -        | false    |
  | disabled | bool                      | -        | false    |
  | tag      | oneOfType([func, string]) | -        | 'button' |
  | navbar   | bool                      | -        | false    |
  | mobile   | bool                      | -        | false    |
  | sub      | bool                      | -        | false    |
  | onClick  | func                      | -        | null     |
  | href     | string                    | -        | null     |

  _`navbar`, `mobile` and `sub` props are passed down implicitly from `Nav` through `NavContext`._

- `Navbar`

  **Example:**

  ```javascript
  import React from 'react';
  import { Navbar } from 'brown-university-theme';

  export default () => <Navbar color="white" />;
  ```

  **Properties:**

  | property | propType                  | required | default |
  | -------- | ------------------------- | -------- | ------- |
  | color    | oneOf(['brown', 'white']) | -        | 'brown' |
  | children | node                      | -        | false   |

- `NavbarNav`

  TODO

- `SiteNav`

  **Example:**

  ```javascript
  import React from 'react';
  import { SiteNav } from 'brown-university-theme';

  export default () => (
    <SiteNav>
      <SiteNav.Item>
        <SiteNav.Link>Link</SiteNav.Link>
      </SiteNav.Item>
      <SiteNav.Item>
        <SiteNav.Link active>Active Link</SiteNav.Link>
      </SiteNav.Item>
      <SiteNav.Item>
        <SiteNav.Link disabled>Disabled Link</SiteNav.Link>
      </SiteNav.Item>
    </SiteNav>
  );
  ```

  **`SiteNav` Properties:**

  | property            | propType | required | default         |
  | ------------------- | -------- | -------- | --------------- |
  | mobileMenuTitle     | string   | -        | Site Navigation |
  | mobileNavBreakpoint | number   | -        | 768             |
  | banner              | bool     | -        | false           |
  | children            | node     | true     | undefined       |

  **`SiteNav.Item` Properties:**

  _See `Nav.Item`_

  **`SiteNav.Link` Properties:**

  _See `Nav.Link`_

- `SubNav`

  **Example:**

  ```javascript
  import React from 'react';
  import { SubNav } from 'brown-university-theme';

  export default () => (
    <SubNav>
      <SubNav.Item>
        <SubNav.Link>Link</SubNav.Link>
      </SubNav.Item>
      <SubNav.Item>
        <SubNav.Link active>Active Link</SubNav.Link>
      </SubNav.Item>
      <SubNav.Item>
        <SubNav.Link disabled>Disabled Link</SubNav.Link>
      </SubNav.Item>
    </SubNav>
  );
  ```

  **`SubNav` Properties:**

  | property | propType | required | default   |
  | -------- | -------- | -------- | --------- |
  | children | node     | true     | undefined |

  **`SubNav.Item` Properties:**

  _See `Nav.Item`_

  **`SubNav.Link` Properties:**

  _See `Nav.Link`_

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

# Brown University Components

Components for building React-based applications at Brown University.

_On-prem Bitbucket doesn't render markdown very nicely; view this in a markdown editor like [Dillinger](https://dillinger.io/)._

---

## Install

### Add Brown University Components

```
  // npm
  npm i -D eslint git+https://bitbucket.brown.edu/scm/react/brown-university-components.git#semver:^0.7
  // yarn
  yarn add -D eslint git+https://bitbucket.brown.edu/scm/react/brown-university-components.git#^0.7
```

_Ensure you're on the network and that your SSH key has been added to the ssh-agent (`ssh-add ~/.ssh/id_rsa`) and uploaded to [bitbucket.brown.edu](https://bitbucket.brown.edu/plugins/servlet/ssh/account/keys)._

### Dependencies

#### Required Peer Dependencies

These libraries are not bundled with Brown University Components and are required at runtime:

- [**brown-university-styles**](https://bitbucket.brown.edu/projects/REACT/repos/brown-university-styles)
- [**react**](https://www.npmjs.com/package/react)
- [**styled-components**](https://www.npmjs.com/package/styled-components)

---

## Documentation

### Styles

Import styles from Brown University Styles.

### Components

#### `Background`

- **Example:**

  ```
  import React from 'react';
  import { Background } from 'brown-university-components';
  import backgroundURL from 'brown-university-components/dist/background.svg';

  export default () => (
    <Background url={backgroundURL}>
      <div>Content...</div>
    </Background>
  );
  ```

- **Properties:**

  | property  | propType                 | required | default |
  | --------- | ------------------------ | -------- | ------- |
  | url       | string                   | true     | -       |
  | color     | oneOf(['white', 'gray']) | -        | 'white' |
  | full      | bool                     | -        | true    |
  | marginTop | number                   | -        | 0       |
  | children  | node                     | true     | -       |

#### `Banner`

- **Example:**

  ```
  import React from 'react';
  import { Banner } from 'brown-university-components';

  export default () => (
    <Banner src={'./path/to/img.jpg'}>
      <Banner.Text>App Name</Banner.Text>
    </Banner>
  );
  ```

- **Properties:**

  | property | propType                                                                                                     | required | default   |
  | -------- | ------------------------------------------------------------------------------------------------------------ | -------- | --------- |
  | color    | oneOf(['emerald', 'red', 'brown', 'yellow', 'gray', 'sand', 'lightBrown', 'mediumBrown', 'navy', 'skyblue']) | -        | 'emerald' |
  | size     | oneOf(['default', 'small', 'medium', 'large'])                                                               | -        | 'default' |
  | src      | string                                                                                                       | -        | null      |
  | children | node                                                                                                         | -        | null      |

#### `Button`

- **Example:**

  ```
  import React from 'react';
  import { Button } from 'brown-university-components';

  export default () => <Button color="yellow">Click Me</Button>;
  ```

- **Properties:**

  | property  | propType                                                                | required | default   |
  | --------- | ----------------------------------------------------------------------- | -------- | --------- |
  | tag       | oneOfType([func, string])                                               | -        | 'button'  |
  | color     | oneOf(['red', 'yellow', 'brown', 'gray', 'emerald', 'skyblue', 'navy']) | -        | 'red'     |
  | size      | oneOf(['default', 'small', 'large'])                                    | -        | 'default' |
  | uppercase | bool                                                                    | -        | true      |
  | rounded   | bool                                                                    | -        | false     |
  | outline   | bool                                                                    | -        | false     |
  | inverse   | bool                                                                    | -        | false     |
  | disabled  | bool                                                                    | -        | false     |
  | onClick   | func                                                                    | -        | null      |
  | href      | string                                                                  | -        | null      |

#### `Code`

- **Example:**

  ```
  import React from 'react';
  import { Code } from 'brown-university-components';

  export default () => <Code>code</Code>;
  ```

- **Properties:**

  | property | propType | required | default |
  | -------- | -------- | -------- | ------- |
  | children | node     | true     | -       |

#### `Hamburger`

_This is a primitive used by `NavbarNav`, `NavbarGlobalNav` and `SiteNav`. You might want to use one of those components instead._

- **Example:**

  ```
  import React from 'react';
  import { Hamburger } from 'brown-university-components';

  export default () => <Hamburger />;
  ```

- **Properties:**

  | property  | propType                 | required | default             |
  | --------- | ------------------------ | -------- | ------------------- |
  | tag       | oneOf(['button', 'div']) | -        | 'button'            |
  | color     | oneOf(['red', 'white'])  | -        | 'red'               |
  | ariaLabel | string                   | false    | 'Toggle navigation' |
  | isOpen    | bool                     | -        | false               |
  | onOpen    | func                     | -        | null                |
  | onClose   | func                     | -        | null                |

#### `Loader`

- **Example:**

  ```
  import React from 'react';
  import { Loader } from 'brown-university-components';

  export default () => <Loader height={300} />;
  ```

- **Properties:**

  | property | propType | required | default |
  | -------- | -------- | -------- | ------- |
  | height   | number   | -        | 250     |

#### `Nav`

_This is a primitive used by `NavbarNav`, `NavbarGlobalNav`, `SiteNav`, and `SubNav`. You might want to use one of those components instead._

- **Example:**

  ```
  import React from 'react';
  import { Nav } from 'brown-university-components';

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

- **Properties:**

  - `Nav`

    | property | propType              | required | default |
    | -------- | --------------------- | -------- | ------- |
    | navbar   | bool                  | -        | false   |
    | mobile   | bool                  | -        | false   |
    | sub      | bool                  | -        | false   |
    | color    | oneOf('red', 'white') | -        | 'red'   |
    | children | node                  | true     | -       |

    _`mobile`, `sub` and `children` are used directly; `navbar`, `mobile`, `sub` and `color` are passed down through `NavContext`._

  - `Nav.Item`

    | property | propType | required | default |
    | -------- | -------- | -------- | ------- |
    | children | node     | true     | -       |

    _`mobile` and `sub` are passed in implicitly from `Nav` through `NavContext`._

  - `Nav.Link`

    | property | propType                  | required | default  |
    | -------- | ------------------------- | -------- | -------- |
    | tag      | oneOfType([func, string]) | -        | 'button' |
    | active   | bool                      | -        | false    |
    | disabled | bool                      | -        | false    |
    | onClick  | func                      | -        | null     |
    | href     | string                    | -        | null     |

    _`navbar`, `mobile`, `sub` and `color` are passed in implicitly from `Nav` through `NavContext`._

#### `Navbar`

- **Example:**

  ```
  import React from 'react';
  import { Navbar } from 'brown-university-components';

  export default () => <Navbar color="white" />;
  ```

- **Properties:**

  | property         | propType                  | required | default |
  | ---------------- | ------------------------- | -------- | ------- |
  | color            | oneOf(['brown', 'white']) | -        | 'brown' |
  | mobileBreakpoint | number                    | -        | null    |
  | toggleTitle      | string                    | -        | null    |
  | children         | node                      | -        | null    |

  _`color` and `children` are used directly; `color`, `mobileBreakpoint` and `toggleTitle` are passed down through `NavbarContext`._

#### `Navbar` with `NavbarNav`

- **Example:**

  ```
  import React from 'react';
  import { Navbar } from 'brown-university-components';

  export default () => (
    <Navbar>
      <Navbar.Nav>
        <Navbar.Nav.Item>
          <Navbar.Nav.Link active>Active Link</Navbar.Nav.Link>
        </Navbar.Nav.Item>
        <Navbar.Nav.Item>
          <Navbar.Nav.Link>Link</Navbar.Nav.Link>
        </Navbar.Nav.Item>
        <Navbar.Nav.Item>
          <Navbar.Nav.Link disabled>Disabled Link</Navbar.Nav.Link>
        </Navbar.Nav.Item>
      </Navbar.Nav>
    </Navbar>
  );
  ```

- **Properties:**

  - `Navbar.Nav`

    | property | propType | required | default |
    | -------- | -------- | -------- | ------- |
    | children | node     | true     | -       |

    _`color` and `mobileBreakpoint` are passed in implicitly from `Navbar` through `NavbarContext`._

  - `Navbar.Nav.Item`

    _See `Nav.Item`_

  - `Navbar.Nav.Link`

    _See `Nav.Link`_

#### `Navbar` with `NavbarGlobalNav`

- **Example:**

  ```
  import React from 'react';
  import { Navbar } from 'brown-university-components';

  export default () => (
    <Navbar>
      <Navbar.GlobalNav>
        <Navbar.GlobalNav.Item>
          <Navbar.GlobalNav.Link active>Active Link</Navbar.GlobalNav.Link>
        </Navbar.GlobalNav.Item>
        <Navbar.GlobalNav.Item>
          <Navbar.GlobalNav.Link>Link</Navbar.GlobalNav.Link>
        </Navbar.GlobalNav.Item>
        <Navbar.GlobalNav.Item>
          <Navbar.GlobalNav.Link disabled>Disabled Link</Navbar.GlobalNav.Link>
        </Navbar.GlobalNav.Item>
      </Navbar.GlobalNav>
    </Navbar>
  );
  ```

- **Properties:**

  - `Navbar.GlobalNav`

    | property | propType | required | default |
    | -------- | -------- | -------- | ------- |
    | children | node     | true     | -       |

    _`color`, `mobileBreakpoint` and `toggleTitle` are passed in implicitly from `Navbar` through `NavbarContext`._

  - `Navbar.GlobalNav.Item`

    _See `Nav.Item`_

  - `Navbar.GlobalNav.Link`

    _See `Nav.Link`_

#### `SiteNav`

- **Example:**

  ```
  import React from 'react';
  import { SiteNav } from 'brown-university-components';

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

- **Properties:**

  - `SiteNav`

    | property          | propType | required | default         |
    | ----------------- | -------- | -------- | --------------- |
    | banner            | bool     | -        | false           |
    | mobileBreakpoint  | number   | -        | 768             |
    | mobileToggleTitle | string   | -        | Site Navigation |
    | children          | node     | true     | -               |

  - `SiteNav.Item`

    _See `Nav.Item`_

  - `SiteNav.Link`

    _See `Nav.Link`_

#### `SubNav`

- **Example:**

  ```
  import React from 'react';
  import { SubNav } from 'brown-university-components';

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

- **Properties:**

  - `SubNav`

    | property | propType | required | default |
    | -------- | -------- | -------- | ------- |
    | children | node     | true     | -       |

  - `SubNav.Item`

    _See `Nav.Item`_

  - `SubNav.Link`

    _See `Nav.Link`_

---

## Development

Install dependencies:

```sh
npm install
```

Run examples at [http://localhost:8080](http://localhost:8080/) with [storybook](https://storybook.js.org/):

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

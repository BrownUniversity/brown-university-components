# Brown University Components

Components for building React-based applications at Brown University.

---

## Usage

### 1. Install packages

#### Brown University Components

```sh
// npm
npm i BrownUniversity/brown-university-components

// yarn
yarn add git+https://github.com/BrownUniversity/brown-university-components.git#^1.7
```

#### Required Peer Dependencies

These libraries are not bundled with Brown University Components and are required at runtime:

- [**brown-university-styles**](https://github.com/BrownUniversity/brown-university-styles)
- [**react**](https://www.npmjs.com/package/react)
- [**styled-components**](https://www.npmjs.com/package/styled-components)

### 2. Import styles from Brown University Styles

---

## Documentation

The documentation is available at https://brownuniversity.github.io/brown-university-components/.

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

---

## Deployment

To publish a new version, do the following:

1. Bump version in `package.json` and `package-lock.json`
2. Bump version in `README.md` install instructions (for major and minor version bumps only)
3. Update `CHANGELOG.md`
4. `npm run build`
5. Commit changes
6. Tag new version
7. Push master and tags to all remotes

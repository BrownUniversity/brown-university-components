# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 1.7.1 - 2021-03-22

### Changed

- Peer dependency for `brown-university-styles` moved from Bitbucket to Github

## 1.7.0 - 2020-01-06

### Added

- `darkEmerald` as a valid `Button` and `Banner` color.

## 1.6.1 - 2019-11-18

### Fixed

- Post-process inline SVG components with babel-loader

## 1.6.0 - 2019-10-18

### Added

- Expose `<Collapse />`.

## 1.5.2 - 2019-09-27

### Changed

- Facebook logo.

## 1.5.1 - 2019-07-18

### Fixed

- Remove text decoration on hover for unstyled links.

## 1.5.0 - 2019-07-02

### Added

- SVG icons.

## 1.4.0 - 2019-06-24

### Added

- `Footer` component.

## 1.3.0 - 2019-06-13

### Changed

- Use `colors.backgroundGray` from `brown-university-styles` 0.6.0.
- Dependency updates.

## 1.2.2 - 2019-04-24

### Added

- Role to `<Banner />` for a11y purposes.

## 1.2.1 - 2019-04-15

### Changed

- `<Button disabled />` opacity from 65% to 45%.

## 1.2.0 - 2019-03-20

### Added

- `mobileBreakpoint` prop to `<Banner />`.

## 1.1.3 - 2019-03-21

### Added

- Documentation link to `README.md`.

### Changed

- Migrate to `storybook` 5.

## 1.1.2 - 2019-03-20

### Fixed

- `<Banner size="small" />` image height issue on mobile screens.

## 1.1.1 - 2019-03-20

### Changed

- Add `stories` directory to `lint` and `prettier` scripts.

## 1.1.0 - 2019-03-14

### Changed

- `breakpoints` from `brown-university-styles` version 0.3.0.

## 1.0.2 - 2019-03-13

### Fixed

- Renamed logo assets to align with the University's Visual Identity Policy.

## 1.0.1 - 2019-03-13

### Fixed

- Revised background color of `<SubNav />` so it doesn't match `<Background color="lightGray" />`.

## 1.0.0 - 2019-03-13

### Changed

- `colors` based on `brown-university-styles` version 0.2.0.

## 0.8.3 - 2019-03-13

### Fixed

- Added focus styles to `<Button />` component.

## 0.8.2 - 2019-03-08

### Fixed

- Added `brown-university-styles` to externals.

## 0.8.1 - 2019-03-08

### Added

- Expose `breakpoints` and `media`.

## 0.8.0 - 2019-03-08

### Changed

- Moved colors and typography to `brown-university-styles`, which is now a peer dependency.
- Renamed the project from `brown-university-theme` to `brown-university-components`.

## 0.7.1 - 2019-02-28

### Fixed

- Height of `<Banner />` SVG at small screen width.

## 0.7.0 - 2019-02-26

### Added

- `uppercase` and `rounded` props to `<Button />` component.

# Companies

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/companies/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-5.1.7-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/companies)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/companies.svg)](https://www.npmjs.com/package/@enso-ui/companies)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/companies)
[![Issues](https://img.shields.io/github/issues/enso-ui/companies.svg)](https://github.com/enso-ui/companies/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/companies.svg)](https://github.com/enso-ui/companies/pulls)

## Description

Companies administration pages and tabbed company detail widgets for Enso UI.

## Installation

Install the package:

```bash
yarn add @enso-ui/companies
```

This package is also available through the full `enso-ui` workspace bundle.

## Features

- ships company list and edit pages for the administration module
- combines forms, accessories, tabs, addresses, comments, documents, and people widgets in the edit page
- provides reusable company detail tabs and people-card helpers inside the page modules

## Usage

```js
import CompaniesIndex from '@enso-ui/companies/src/bulma/pages/companies/Index.vue';
import CompaniesEdit from '@enso-ui/companies/src/bulma/pages/companies/Edit.vue';
```

The package is page-oriented. The Enso shell typically imports the page modules directly from `src/bulma/pages/companies/...`.

## API

### `Index`

Table page for the companies list.

Import: `@enso-ui/companies/src/bulma/pages/companies/Index.vue`

### `Edit`

Detail page that composes company form tabs with people, addresses, comments, and documents widgets.

Import: `@enso-ui/companies/src/bulma/pages/companies/Edit.vue`

### `PeopleCard`

Reusable card wrapper around the company people list.

Import: `@enso-ui/companies/src/bulma/pages/companies/components/PeopleCard.vue`

## Depends On

- [`@enso-ui/accessories`](https://docs.laravel-enso.com/frontend/accessories.html) [↗](https://github.com/enso-ui/accessories)
- [`@enso-ui/addresses`](https://docs.laravel-enso.com/frontend/addresses.html) [↗](https://github.com/enso-ui/addresses)
- [`@enso-ui/comments`](https://docs.laravel-enso.com/frontend/comments.html) [↗](https://github.com/enso-ui/comments)
- [`@enso-ui/documents`](https://docs.laravel-enso.com/frontend/documents.html) [↗](https://github.com/enso-ui/documents)
- [`@enso-ui/forms`](https://docs.laravel-enso.com/frontend/forms.html) [↗](https://github.com/enso-ui/forms)
- [`@enso-ui/tables`](https://docs.laravel-enso.com/frontend/tables.html) [↗](https://github.com/enso-ui/tables)
- [`@enso-ui/tabs`](https://docs.laravel-enso.com/frontend/tabs.html) [↗](https://github.com/enso-ui/tabs)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/companies/blob/master/LICENSE)

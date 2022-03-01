# template-gatsby-theme

[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/smerth/template-GatsbyJS-theme#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/smerth/template-GatsbyJS-theme/graphs/commit-activity)
[![License: MIT](https://img.shields.io/github/license/smerth/template-GatsbyJS-theme)](https://github.com/smerth/template-GatsbyJS-theme/blob/master/LICENSE)

> A starter template for developing and publishing GatsbyJS themes. The project is structured as a monorepo with a folder for GatsbyJS themes and a folder for a GatsbyJS Demo site to test the themes you develop. Comes with semantic-release, lerna and github actions to help streamline your publishing workflow.

## Features

TODO:

explain these:

- learna
- semantic-release cli
- GatsbyJS demo site
- multiple themes
- 3 supported workflows
- 2 github actions
- Key configurations
- use private packages
- publish private package

## Use this template

Follow these steps **in order** to quickly setup your new project

### Create a repository from the template

On the GitHub page for this repository, click the `use this template` button to create a new repository from this template. Clone your new repository to your local dev environment.

### Update repository author

@ package.json - update the **author** property, do this before carrying out search and replace text

### Search and replace text

Open your project in your favorite IDE and **search and replace** the following items everywhere they occur with the exception of `package-lock` files and this `README.md` file:

| SEARCH                | REPLACE                |
| --------------------- | ---------------------- |
| smerth                | YOUR_ORGANIZATION_NAME |
| template-gatsby-theme | YOUR_REPOSITORY_NAME   |
| gatsby-theme-demo     | YOUR_THEME_NAME        |

### Review package.json files

Review and edit the package.json files found at the root of the project and the theme and edit any fields as necessary. For example: description, keywords,...

### Generate readme files

The readme files at the project root and the theme root should be updated. running `yarn readme` will generate a readme file at the project root.

### Setup authentication

This template supports developing a GatsbyJS theme which may use a private GitHub package. In order to install private GitHub packages and publish a private package to GitHub you will need to create a Personal Access Token (PAT) and give it permissions to install and write private packages.

Add the PAT as a secret to your repository. Name the secret: `NPM_TOKEN` .

### Last setup steps

In future you will publish packages by creating pull requests against the supported branches, according to the workflows outlined in the docs folder. When a pull request is merged a GitHub action will handle versioning and publish a release. However **a first package must be published manually** to start the ball rolling. 

To accomplish this you will need to: install dependancies, add, commit, and push the changes, and publish a package through lerna.  Luckily there is a script for that. 

```bash
yarn first-commit
```


## Important Considerations

### NPM versioning

TODO: Update This Section...

### Installing dependancies

TODO: Update This Section...



## Next steps

### Use a private package

TODO: Update This Section...

### Edit your test script

TODO: Update This Section...

### Review the supported workflows

TODO: Update This Section...

## Author

**Stephen Merth <stephen.merth@gmail.com> (<https://smerth.github.io/>)**

- Website: <http://smerth.github.io>
- Twitter: [@StephenMerth](https://twitter.com/StephenMerth)
- Github: [@smerth](https://github.com/smerth)

## Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/smerth/template-GatsbyJS-theme/issues). You can also take a look at the [contributing guide](https://github.com/smerth/template-GatsbyJS-theme/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## License

Copyright © 2022 [Stephen Merth <stephen.merth@gmail.com> (<https://smerth.github.io/>)](https://github.com/smerth).

This project is [MIT](https://github.com/smerth/template-GatsbyJS-theme/blob/master/LICENSE) licensed.

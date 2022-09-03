# TBD Docs Prototyping

Mock [TBD Developer Site](https://developer.tbd.website) to validate the process for publishing community-contributed
documentation publication process.

## Create Docusaurus Site

Steps to reproduce the creation of this mock instance of the TBD developer site.

### Prerequisites

* [Node.js](https://nodejs.org/en/download/) version 16.14 or above (which can be checked by running `node -v`).
* Initialized git repository to track changes.

### Scaffold Docusaurus Site

Run the following command in your newly created git repository to create a `developer-site` directory containing a
skeleton Docusaurus website.

```shell
npx create-docusaurus@2.1.0 developer-site classic
```

The expected output should begin with:

```shell
[SUCCESS] Created developer-site.
[INFO] Inside that directory, you can run several commands:
```

Relocate the generated files to the root of the git repository:

```shell
rm developer-site/README.md
mv developer-site/* .
```
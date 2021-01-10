# Local dev

## Postgres

Download correct Postgres installer from here: https://www.postgresql.org/download/ .
Version 12 is the lastest supported version not in 'preview' status in AWS right now.
12.3, 12.4, or 12.5 doesn't matter, I get the latest one that is 12.x.
`psql -U postgres` should get to a postgres command line prompt. \q to quit.

## Nodejs:

Install LTS version of Nodejs from https://nodejs.org/en/
Click the checkbox for the additional tools in the installer.

## Update Npm after installing Nodejs:

`npm install npm@latest -g`

## Yarn:

Install yarn package manager from: https://classic.yarnpkg.com/en/docs/install#windows-stable

## VS Code:

Download installer from here: https://code.visualstudio.com/
Install the eslint and prettier extensions in VS Code

## Download dependencies:

`yarn install`

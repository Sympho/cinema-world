# Cinema world

## Global dependencies
To start this project you need to install [**yarn**](https://yarnpkg.com/) (or you can use `npm`), [**deno**](https://deno.land/), [**denon**](https://deno.land/x/denon)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn serve`

Runs deno server using [denon](https://github.com/denosaurs/denon) for running server and watching files in directory `server/`
(You can use `denon` globally or `~/.deno/bin/denon` from your home directory).

Listening on [http://localhost:5000](http://localhost:5000)

### `yarn createTable %ModelName%`

To create a new table in the database you should run `yarn createTable UserModel` (Be careful: this command drops table if it has been already created)

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


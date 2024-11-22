Here is how to deploy this project on GitHub Pages:

### Steps

1. Install dev dependency `gh-pages`
2. Add the script `"deploy": "gh-pages -d dist"` in package.json file
3. Specifiy app `baseURL` in nuxt.config.ts
4. Specifiy `buildAssetsDir` in nuxt.config.ts that doesn't start with an underscore `_`. See the router config example below
5. Create an empty file `.nojekyll` at the root of the project
6. Generate with `npm run generate`
7. Deploy with `npm run deploy`

### Router config:

```ts
export default defineNuxtConfig({
  app: {
    baseURL: '/nuxt-github-pages/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
  }
}
```

```sh
npx npm-check-updates -u
```

```sh
npm install
```

Visit [SFDC Tools](https://rohitasare7.github.io/SFDC-Tools)
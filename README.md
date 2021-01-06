# @white-matrix/eslint-config-ts

[![npm](https://img.shields.io/npm/v/@white-matrix/eslint-config-ts.svg?style=plastic)](https://npmjs.org/package/@white-matrix/eslint-config-ts) [![npm](https://img.shields.io/npm/dm/@white-matrix/eslint-config-ts.svg?style=plastic)](https://npmjs.org/package/@white-matrix/eslint-config-ts) [![npm](https://img.shields.io/npm/dt/@white-matrix/eslint-config-ts.svg?style=plastic)](https://npmjs.org/package/@white-matrix/eslint-config-ts)

## 规则说明

参考 Airbnb JavaScript 代码规范： <https://github.com/airbnb/javascript>

## 安装说明

依赖项：

- typescript
- prettier
- eslint
- eslint-plugin-import

依赖项安装示例：

```bash
npm install --save-dev typescript prettier eslint eslint-plugin-import
```

安装：

```bash
npm install --save-dev @white-matrix/eslint-config-ts
```

## 配置

### .eslintrc.yml

```yaml
root: true
extends:
  - '@white-matrix/eslint-config-ts'
  - plugin:@typescript-eslint/recommended-requiring-type-checking
parserOptions:
  project: ./tsconfig.json
```

注意： 同时需要在项目根目录下配置 `tsconfig.json`， 一个参考的示例配置：

```js
{
  "compilerOptions": {
    "target": "es2017",
    "module": "commonjs",
    "esModuleInterop": true,
    "noImplicitAny": true,
    "removeComments": true,
    "strict": true,
    "strictNullChecks": true,
    "preserveConstEnums": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "pretty": true,
    "sourceMap": true,
    "forceConsistentCasingInFileNames": true,
    "allowSyntheticDefaultImports": true,
    "declaration": true,
    "moduleResolution": "node",
    "outDir": "lib",
    "strictFunctionTypes": true,
    "strictPropertyInitialization": true,
    "strictBindCallApply": true,
    "alwaysStrict": true,
    "lib": ["es2017"]
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

更多 tsconfig 详情请参阅： <http://www.typescriptlang.org/docs/handbook/tsconfig-json.html>

### .prettier.yml

```yaml
tabWidth: 2
semi: true
singleQuote: true
jsxSingleQuote: true
trailingComma: none
```

## 在 VS Code 中使用

VS Code 中搜索并添加以下两个插件

- esbenp.prettier-vscode
- dbaeumer.vscode-eslint

然后在用户配置中参考以下方案进行配置：

```js
{
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "editor.formatOnType": true,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.minimap.enabled": true,
  "files.autoSave": "afterDelay",
  "files.eol": "\n",
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html"
  ],
  "typescript.updateImportsOnFileMove.enabled": "always",
  "typescript.validate.enable": false,
  "javascript.validate.enable": false,
  "javascript.format.enable": false,
  "javascript.preferences.quoteStyle": "single",
  "prettier.jsxSingleQuote": true,
  "prettier.singleQuote": true,
  "prettier.trailingComma": "none",
  "prettier.semi": true,
  "prettier.tabWidth": 2
}
```

## License

Apache 2.0

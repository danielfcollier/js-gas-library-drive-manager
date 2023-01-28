# [Library for Google Apps Script] Drive Manager

## Using the Library

There are two ways to import the library to your project:

- Set in your script project dashboard
- Add the configuration into your `appsscript.json`

1. Script Id:

```
1vJEBHQvu_imGmAKfiRKrA_MwDmniguLTsA307h0XLTRIptGJogI3XdpW
```

2. Add the latest version: for example, `1`
3. Use the identifier `DriveManager`

These actions will update your `appsscript.json`.

Or, you can update it directly adding to the `dependencies` object:

```json
"dependencies": {
    "libraries": [
      {
        "userSymbol": "DriveManager",
        "version": "1",
        "libraryId": "1vJEBHQvu_imGmAKfiRKrA_MwDmniguLTsA307h0XLTRIptGJogI3XdpW"
      }
    ]
}
```

> The script runs in the timezone `Etc/GMT`.

## DriveManager

This library has only one method that receives two arguments:

- `baseDirId`: a folder id fort the location of the base folder where the new tree with files and folders will be created
- `tree`: a custom object with folders, sub folders, documents, and data to be replaced in templates

Example:

```javascript
const baseDirId = "1V-9TQLkGTh9EM0u-RYHp8xUQ5VyM6RWi";
const tree = {
  folders: {
    root: {
      name: "Daniel Collier",
      files: [
        {
          id: "19vklLgc_RwVwcKwA7_i22Sr823PQOpPLKlwTxf3y5hk",
          name: "Daniel Collier",
        },
      ],
    },
    sub: [
      {
        name: "Exames",
      },
      {
        name: "Receitas",
        files: [
          {
            id: "19vklLgc_RwVwcKwA7_i22Sr823PQOpPLKlwTxf3y5hk",
            name: "Daniel Collier",
            data: {
              Test: "Substitui teste",
              Var1: "003.212.781-27",
              Var2: "28/01/2023",
            },
          },
        ],
      },
    ],
  },
};

const folderId = DriveManager.MakeTree(baseDirId, tree);
console.log({ folderId });
```

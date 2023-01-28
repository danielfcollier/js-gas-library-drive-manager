# [Library for Google Apps Script] Test Framework

## Using the Library

There are two ways to import the library to your project:

- Set in your script project dashboard
- Add the configuration into your `appsscript.json`

1. Script Id:

```
11sp2QF8_jZxJMjESptnsNJ7PeLEU8RNXRAR8wEQ4etJJ8vnUGPudyS_p
```

2. Add the latest version: for example, `1`
3. Use the identifier `TestFramework`

These actions will update your `appsscript.json`.

Or, you can update it directly adding to the `dependencies` object:

```json
"dependencies": {
    "libraries": [
      {
        "userSymbol": "TestFramework",
        "version": "1",
        "libraryId": "11sp2QF8_jZxJMjESptnsNJ7PeLEU8RNXRAR8wEQ4etJJ8vnUGPudyS_p"
      }
    ]
}
```

> The script runs in the timezone `Etc/GMT`.

## TestFramework

Methods:
- `TestFramework.ExpectToBeEqual(testName, expected, actual)`
- `TestFramework.HaveOwnProperty(testName, object, property)`


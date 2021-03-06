# Flutter Cloud Functions

A sample project demonstrating how to run backend tasks in Flutter using [Firebase Cloud Functions](https://firebase.google.com/docs/functions).

![](screenshots/firebase_function.gif)

## Functions

### 1. HTTPS Function

```js
exports.sendEmailToUserRequest = functions.https.onRequest((_, __) => {
    // ...
});
```

### 2. Callable Function

```js
exports.sendEmailToUserCall = functions.https.onCall((_, __) => {
    // ...
});
```

### 3. Background Function - Authentication

```js
exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
    // ...
});
```

## License

Copyright (c) 2022 Souvik Biswas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

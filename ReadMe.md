# Install Jest

Open a Terminal and run:

```
npm i --save-dev jest
```

This creates the following **package.json**:

```json
{
  "devDependencies": {
    "jest": "^29.7.0"
  }
}
```

Now add a script line that runs Jest so that your package.json will look like this:

```json
{
  "devDependencies": {
    "jest": "^29.7.0"
  },
  "scripts": {
    "test": "jest"
  }
}
```

# Example

Create a `src` directory for source files and a `test` directory for test files.

Create the `fibonacci.js` file in the src directory with the following content:

```js
function fibonacci(n = 1) {
  return -1;
}

module.exports = { fibonacci };
```

We will implement the function later, for now this dummy implementation will do as we want to use Jest to develop using the test driven development approach (TDD).

Thus, we create our first test, add the `fibonacci.test.js` file in the test directory with the following content:

```js
const { fibonacci } = require("../src/fibonacci");

describe("fibonacci function", () => {
  test("fibonacci(1)", () => {
    expect(fibonacci(1)).toBe(1);
  });
});
```

If we now run `npm run test` we get the following result:

```
> test
> jest

 FAIL  test/fibonacci.test.js
  fibonacci function
    × fibonacci(1) (4 ms)

  ● fibonacci function › fibonacci(1)

    expect(received).toBe(expected) // Object.is equality

    Expected: 1
    Received: -1

      3 | describe("fibonacci function", () => {
      4 |   test("fibonacci(1)", () => {
    > 5 |     expect(fibonacci(1)).toBe(1);
        |                          ^
      6 |   });
      7 | });
      8 |

      at Object.toBe (test/fibonacci.test.js:5:26)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.375 s, estimated 1 s
Ran all test suites.
```

We see that Jest finds our test automatically and we fail the test.

As we now have a failing test, we want to implement the minimum amount of code to pass the test!

Thus, we change the `fibonacci.js` file:

```js
function fibonacci(n = 1) {
  return n;
}

module.exports = { fibonacci };
```

This will still not return all the fibonacci numbers, but it is the minimum change to pass the test:

```
 PASS  test/fibonacci.test.js
  fibonacci function
    √ fibonacci(1) (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.372 s, estimated 1 s
Ran all test suites.
```

Thus, we create another test to make sure that our function actually calculates fibonacci numbers!

Thus, we append our `fibonacci.test.js` file like this:

```js
const { fibonacci } = require("../src/fibonacci");

describe("fibonacci function", () => {
  test("fibonacci(1)=1", () => {
    expect(fibonacci(1)).toBe(1);
  });
  test("fibonacci(6)=8", () => {
    expect(fibonacci(6)).toBe(8);
  });
});
```

When we now run `npm run jest` again, we get the following result:

```
  FAIL  test/fibonacci.test.js
  fibonacci function
    √ fibonacci(1)=1 (1 ms)
    × fibonacci(6)=8 (2 ms)

  ● fibonacci function › fibonacci(6)=8

    expect(received).toBe(expected) // Object.is equality

    Expected: 8
    Received: 6

       6 |   });
       7 |   test("fibonacci(6)=8", () => {
    >  8 |     expect(fibonacci(6)).toBe(8);
         |                          ^
       9 |   });
      10 | });
      11 |

      at Object.toBe (test/fibonacci.test.js:8:26)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        0.282 s, estimated 1 s
Ran all test suites.
```

Now we can fix the fibonacci function again:

```js
function fibonacci(n = 1) {
  if (n <= 1) {
    return Math.max(n, 0);
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = { fibonacci };
```

When we now run `npm run test` we pass the tests, and we can confidently say that our fibonacci function is sound:

```
 PASS  test/fibonacci.test.js
  fibonacci function
    √ fibonacci(1)=1 (2 ms)
    √ fibonacci(6)=8

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.392 s, estimated 1 s
Ran all test suites.
```

Now it is your time to unit test in your JavaScript projects as well as to introduce the test driven development approach 🚀🥊🚀

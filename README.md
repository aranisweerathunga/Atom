# Atom

## Overview

This project automates the process of making multiple git commits with random dates within the past year. It uses the `jsonfile`, `moment`, `simple-git`, and `random` libraries to achieve this functionality.

## Dependencies

- `jsonfile`: For reading and writing JSON files.
- `moment`: For manipulating and formatting dates.
- `simple-git`: For interacting with Git.
- `random`: For generating random numbers.

## Installation

To install the dependencies, run:

```sh
npm install
```

## Usage

To use this script, simply call the `markCommit` function with the desired number of commits. For example:

```javascript
markCommit(50);
```

## Functions

### `markCommit(n)`

This function creates a git commit with a random date within the past year. It recursively calls itself to create multiple commits.

#### Parameters

- `n` (number): The number of commits to create. If `n` is 0, the function will push the commits to the remote repository.

#### Functionality

1. If `n` is 0, the function pushes the commits to the remote repository and returns.
2. Generates a random date within the past year.
3. Creates a data object with the generated date.
4. Logs the commit date to the console.
5. Writes the date to the JSON file specified by `path`.
6. Adds the JSON file to the git staging area.
7. Commits the changes with the generated date.
8. Recursively calls itself with `n - 1` to create the next commit.

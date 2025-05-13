# Folder Summary: `Dispensables`

## Overview

This folder contains notes and examples related to the "Dispensables" category of code smells in software development. Dispensables refer to unnecessary code that can be removed to improve clarity and maintainability.

## Topics

### `Comments`
    - The best comment is a good name for a method or class.
    - When to ignore:
        - When explaining why something is being implemented in a particular way.

### `Duplicate code`
    - Parts of code look different but actually perform the same job.
    - Strive to eliminate duplication by identifying common patterns and refactoring them into reusable components.
    - When to ignore:
        - In very rare cases, merging two identical fragments of code can make the code less intuitive and obvious.

### `Lazy Class`
    - A class was designed to be fully functional but after some of the refactoring it has become ridiculously small.
    - When to Ignore:
        - Sometimes a Lazy Class is created in order to delineate intentions for future development.

### `Dead Code`
    - When requirements for the software have changed or corrections have been made, nobody had time to clean up the old code.
    - Delete unused code, parameters and unneeded files.

### `Speculative Generality`
    - Sometimes code is created “just in case” to support anticipated future features that never get implemented. As a result, code becomes hard to understand and support.
    - Avoid creating features or code for hypothetical future needs. Focus on addressing current requirements to maintain clarity and reduce unnecessary complexity.

## Notes

- Focus on practical examples and actionable steps.
- Encourages iterative improvement through small, incremental changes.

This folder serves as a guide for identifying and addressing dispensable code to enhance software quality.
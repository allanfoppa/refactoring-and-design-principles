# Folder Summary: `Change Preventers`

## Overview

This folder contains notes and examples related to the "Change Preventers" category of code smells in software development. Change preventers refer to code structures that make it difficult to modify or extend the software, hindering maintainability and adaptability.

## Topics

### `Divergent Change`
    - A single class is commonly changed in different ways for different reasons.
    - Refactor by splitting the class into smaller, more focused classes, each handling a specific responsibility.
    - When to ignore:
        - If the changes are infrequent and the cost of refactoring outweighs the benefits.

### `Shotgun Surgery`
    - A single change requires modifications in multiple classes or methods.
    - Refactor by consolidating related functionality into a single class or module to localize changes.
    - When to ignore:
        - If the changes are rare and the current structure is otherwise efficient.

### `Parallel Inheritance Hierarchies`
    - Every time a new subclass is created in one hierarchy, a corresponding subclass must be created in another hierarchy.
    - Refactor by merging hierarchies or using composition instead of inheritance.
    - When to ignore:
        - If the hierarchies are stable and unlikely to grow further.

## Notes

- Focus on identifying patterns that hinder change and applying targeted refactoring techniques.
- Encourages modular design and adherence to the Single Responsibility Principle.

This folder serves as a guide for recognizing and addressing change-preventing code smells to improve software flexibility and maintainability.
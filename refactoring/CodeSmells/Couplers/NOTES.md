# Folder Summary: `Couplers`

## Overview

This folder contains notes and examples related to the "Couplers" category of code smells in software development. Couplers refer to excessive dependencies between classes or modules, which can make the code harder to maintain and evolve.

## Topics

### `Feature Envy`
- A method that seems more interested in the data of another class than its own.
- Refactor by moving the method to the class it envies or by introducing a new class to handle the behavior.

### `Inappropriate Intimacy`
- Two classes are overly familiar with each other’s internal details.
- Refactor by reducing direct dependencies, using interfaces, or introducing a mediator.

### `Message Chains`
- A series of calls where one object asks another for something, which then asks another, and so on.
- Refactor by introducing a middleman or simplifying the chain with a single method call.

### `Middle Man`
- A class that delegates most of its responsibilities to another class, adding unnecessary complexity.
- Refactor by removing the middleman and allowing direct communication between classes.

## Notes

- Focus on reducing tight coupling and improving modularity.
- Encourages the use of design patterns like Dependency Injection and Facade to manage dependencies effectively.

This folder serves as a guide for identifying and addressing coupling-related code smells to improve software design.
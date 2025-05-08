# WHAT IS REFACTORING

Based on this https://refactoring.guru/refactoring

## Clean Code

Clean code is code that’s easy to read, easy to change, and doesn’t surprise anyone. Think of it like a well-organized room — everything has its place.

What makes code clean?:

- Clear and simple — good names, short functions, no weird tricks.
- No copy-paste mess — don’t repeat the same code everywhere.
- Less is more — fewer files and functions = fewer problems.
- All tests pass — clean code doesn’t break stuff.
- Easy to fix or upgrade — future you (and others) will thank you.

## Technical Debt

Technical debt means writing code quickly now but paying the price later because it’s harder to maintain.

Causes of technical debt:

- Rushing to deliver features
- Skipping tests
- Poor team communication
- Code is too tangled (one change breaks everything)
- No documentation
- Delaying cleanup (refactoring)

Like taking a shortcut today but getting lost tomorrow.

## When to refactor

- Before adding a feature — to understand and prepare the code.
- While fixing a bug — messy code hides bugs.
- During a code review — final cleanup before sharing your work.

### Rule of 3

- Do something once — just do it.
- Do it again — hmm, feels repetitive.
- Do it a third time — time to refactor and clean it up!

## How to refactor

- Make small changes one at a time.
- After each step, the code should be cleaner.
- Don’t add new features during refactoring.
- Run all tests after every change — they should still pass.

If the code still feels messy, you might need to rewrite bigger parts — but only after adding tests.

Big refactorings all at once are risky. \
Small steps keep things safe and understandable.

Refactoring Done Right – Simple Checklist:

- Did the code get cleaner?
- Did you avoid adding new features?
- Do all tests still pass?
- Was the change small and focused?

If the answer is "no" to any of these, pause and rethink your approach.


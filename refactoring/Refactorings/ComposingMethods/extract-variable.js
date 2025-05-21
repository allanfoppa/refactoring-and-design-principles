// EXTRACT VARIABLE

/**
 * Problem
 *
 * You have an expression that’s hard to understand.
 */

function renderBanner() {
  if (
    platform.toUpperCase().indexOf("MAC") > -1 &&
    browser.toUpperCase().indexOf("IE") > -1 &&
    wasInitialized() &&
    resize > 0
  ) {
    // do something
  }
}

/**
 * Solution
 *
 * Place the result of the expression or its parts in separate variables that are self-explanatory.
 */

function renderBanner() {
  const isMacOs = platform.toUpperCase().indexOf("MAC") > -1;
  const isIE = browser.toUpperCase().indexOf("IE") > -1;
  const wasResized = resize > 0;

  if (isMacOs && isIE && wasInitialized() && wasResized) {
    // do something
  }
}

// FINAL NOTE:
// - The new code is much easier to read and understand. The variable names are self-explanatory, making it clear what each condition checks for.

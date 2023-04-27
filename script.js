//your code here
class OutOfRangeError extends Error {
  constructor(arg) {
    super(`Expression should only consist of integers and +-/* characters and not ${arg}`);
    this.name = "OutOfRangeError";
  }
}

class InvalidExprError extends Error {
  constructor() {
    super("Expression should not have an invalid combination of expression");
    this.name = "InvalidExprError";
  }
}

function evalString(expr) {
  try {
    if (/(\+\+|\-\-|\*\*|\/\/|\+\*|\-\*|\*\+|\/\+)/.test(expr)) {
      throw new InvalidExprError();
    }
    if (/^[+/*]/.test(expr)) {
      throw new SyntaxError("Expression should not start with invalid operator");
    }
    if (/[\+\/*-]$/.test(expr)) {
      throw new SyntaxError("Expression should not end with invalid operator");
    }
    if (!/^[\d\s+\-*/]+$/.test(expr)) {
      throw new OutOfRangeError(expr);
    }
    return eval(expr);
  } catch (err) {
    if (err instanceof OutOfRangeError || err instanceof InvalidExprError) {
      console.error(`${err.name}: ${err.message}`);
    } else {
      throw err;
    }
  }
}

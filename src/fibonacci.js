function fibonacci(n = 1) {
  if (n <= 1) {
    return Math.max(n, 0);
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = { fibonacci };

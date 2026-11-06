export function isPowerOfTwo(value: number): boolean {
  if (!Number.isSafeInteger(value)) throw new TypeError('Expected safe integer');
  if (value <= 0) return false;
  const n = BigInt(value);
  return (n & (n - 1n)) === 0n;
}

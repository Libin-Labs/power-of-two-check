import * as api from '@lp-labs/power-of-two-check';
import { isPowerOfTwo } from '@lp-labs/power-of-two-check';
console.log(isPowerOfTwo(1024));
// @ts-expect-error invalid argument must be rejected by declarations
api.isPowerOfTwo('8');

import { afterEach, describe, expect, it, test } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers)
afterEach(() => {
    cleanup()
})

globalThis.describe = describe;
globalThis.expect = expect;
globalThis.test = test;
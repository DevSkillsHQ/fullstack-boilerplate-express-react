import {afterEach, vi} from 'vitest';
import '@testing-library/jest-dom';

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
    vi.clearAllTimers();
    vi.clearAllMocks();
});
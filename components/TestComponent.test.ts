// @vitest-environment node
import { test, describe, it, expect } from 'vitest'
import { MustReturnTrue } from './TestComponent.ts'

describe('MustReturnTrue-function-test', () => {
    it('expect true', () => {
        const TrueValue = true;
        expect(MustReturnTrue(TrueValue)).toBeTruthy();
    })
})

test('my test', () => {
  // ... test without Nuxt environment!
})
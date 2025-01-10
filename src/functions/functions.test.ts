import {describe, expect, it} from 'vitest'
import { factorial, findLongestWord, countVowels, isSubset, findCommonObjects } from './functions';


describe('factorial', () => {
    it('calculate factorial for positive numbers', () => {
        expect(factorial(5)).toBe(120);
        expect(factorial(3)).toBe(6);
    });

    it('1 for factorial of 0', () => {
        expect(factorial(0)).toBe(1);
    });

    it('error for negative numbers', () => {
        expect(() => factorial(-3)).toThrowError('Factorial is not defined for negative numbers');
    });
});


describe('findLongestWord', () => {
    it('find the longest word in a sentence', () => {
        expect(findLongestWord("The quick brown fox jumps over the lazy dog")).toBe("quick");
    });

    it('return the only word in a single-word sentence', () => {
        expect(findLongestWord("Hello")).toBe("Hello");
    });

    it('return an empty string for an empty sentence', () => {
        expect(findLongestWord("")).toBe("");
    });

    it('ignore extra spaces', () => {
        expect(findLongestWord("  A   quick test  ")).toBe("quick");
    });
});


describe('countVowels', () => {
    it('normal sentence', () => {
        expect(countVowels("Hello World")).toBe(3);
    });

    it('no vowels', () => {
        expect(countVowels("bcdfg")).toBe(0);
    });

    it('case vowels', () => {
        expect(countVowels("AeIoU")).toBe(5);
    });

    it('return 0 for an empty string', () => {
        expect(countVowels("")).toBe(0);
    });
});


describe('isSubset', () => {
    it('true for subsets', () => {
        const obj1 = { a: 1}, obj2 = {a: 1, b: 2};
        expect((isSubset(obj1,obj2))).toBe(true);
    });
    it('false for non-subsets', () => {
        const obj1 = { c: 3}, obj2 = {a: 1, b: 2};
        expect((isSubset(obj1,obj2))).toBe(false);
    });
});


describe('findCommonObjects', () => {
    it('common objects in two arrays', () => {
        const arr1 = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
        const arr2 = [{ id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }];
        expect(findCommonObjects(arr1, arr2)).toEqual([{ id: 2, name: 'Bob' }]);
    });

    it('empty array if no objects are common', () => {
        const arr1 = [{ id: 1, name: 'Alice' }];
        const arr2 = [{ id: 3, name: 'Charlie' }];
        expect(findCommonObjects(arr1, arr2)).toEqual([]);
    });

    it('empty array if both arrays are empty', () => {
        const arr1 = [];
        const arr2 = [];
        expect(findCommonObjects(arr1, arr2)).toEqual([]);
    });

    it('empty array if one array is empty', () => {
        const arr1 = [{ id: 1, name: 'Alice' }];
        const arr2 = [];
        expect(findCommonObjects(arr1, arr2)).toEqual([]);
    });
});

import {
    stringLength,
    palindrome,
    sortNumArr,
    sqrt,
    sumArray,
    fetchUserData,
    Fibonacci
} from './test';
import { test, expect, describe } from 'vitest';


describe('length string', () => {
    test('calculateStringLength returns the correct length', () => {
        const inputString = 'abcdefgh';
        const expectedLength = 8;

        const result = stringLength(inputString);

        expect(result).toBe(expectedLength);
    });

    test('check if palindrome', () => {
        const chack: string = 'abcddcba';
        const resultbool: boolean = true;

        const result: boolean = palindrome(chack);

        expect(result).toBe(resultbool);
    })

    test('return arr sorted', () => {
        const arr: number[] = [40, 100, 1, 5, 25, 10];
        const resultarr: number[] = [1, 5, 10, 25, 40, 100];

        const result: number[] = sortNumArr(arr);

        expect(result).toStrictEqual(resultarr);
    })

    test('return arr sorted', () => {
        const arr: number = 100;
        const resultarr: number = 10;
        const resulterr: string = 'number is a negetiv number!!!';

        const result: number = sqrt(arr);

        expect(result).toBe(resultarr)
        expect(() => sqrt(-100)).toThrowError(resulterr)
    })

    test('return arr sum', () => {
        const arr: number[] = [40, 100, 1, 5, 25, 10];
        const resultarr: number = 181;

        const result: number = sumArray(arr);

        expect(result).toBe(resultarr)
    })

    test('check if big of num', () => {
        const arr: number[] = [40, 100, 1, 5, 25, 10];
        expect(sumArray(arr)).toBeGreaterThanOrEqual(18)
    })

    test('fetch user', async () => {
        const userId = 3
        const resulterr = 'Failed to fetch user data'
        const userData = await fetchUserData(userId)
        expect(userData.id).toBe(userId)
        expect(userData.name).toBeDefined()
        expect(userData.email).toBeDefined()
        await expect(fetchUserData(100)).rejects.toThrowError(resulterr)
    })

    test('Fibonacci', () => {
        const arr = [1, 1, 2, 3, 5, 8, 13, 21];
        const resultFibo = 34;

        const result = Fibonacci(arr);

        expect(result).toBe(resultFibo);
        const arrError = [1, 1, 2, 5, 8, 13, 21]
        expect(() => Fibonacci(arrError)).toThrowError('the arr is not Fibonacci!')
    })
});

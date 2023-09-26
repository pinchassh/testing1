

export function stringLength(inputString: string): number {
    const length: number = inputString.length;
    return length;
}

export function palindrome(chack: string): boolean {
    return chack === chack.split("").reverse().join("") ? true : false;
}

export function sortNumArr(num: number[]): number[] {
    return num.sort((a, b) => {
        return a - b;
    });
}

export function sqrt(num: number): number {
    if (num <= 0) throw new Error("number is a negetiv number!!!");
    return num ** 0.5;
}

export function sumArray(num: number[]): number {
    return num.reduce((a, b) => a + b, 0);
}

export async function fetchUserData(id: number) {
    try {
        const user = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );
        if (!user.ok) throw new Error("Failed to fetch user data");
        const userData = await user.json();
        // console.log(userData);
        return userData;
    } catch (error) {
        throw new Error("Failed to fetch user data");
    }
}

export function Fibonacci(arr: number[]): number {
    try {
        for (let i = 0; i < arr.length - 2; i++) {
            if (arr[i] + arr[i + 1] !== arr[i + 2]) {
                throw new Error("the arr is not Fibonacci!");
            }
        }
        // console.log(arr[arr.length-2],arr[arr.length-1]);
        return arr[arr.length - 2] + arr[arr.length - 1];
    } catch (error) {
        // console.log(error);
        throw new Error("the arr is not Fibonacci!");
    }
}

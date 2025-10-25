export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            const currentElement = arr[j];
            const adjacentElement = arr[j + 1];

            if (currentElement > adjacentElement) {
                arr[j] = adjacentElement;
                arr[j + 1] = currentElement;
            }
        }
    }
}


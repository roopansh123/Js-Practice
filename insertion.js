
// simple algo that builds the final sorted array one element 
// at a time by insertingg each element into its correct position of the array ;

// let arr = [5,6,8,0,1];
// for(let i = 1; i < arr.length; i++){
//     let current  = arr[i]
//     let j = i-1

//     while (j>=0 && arr[j]> current){
//         arr[j+1]= arr[j] 
//         j--
//     }

//     arr[j+1] = current
// }

// console.log(arr);

// Bubble Sort - count swaps
function bubbleSort(arr) {
    let swaps = 0;
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {

            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swaps++;
            }
        }
    }
    return swaps;
}

// Selection Sort - count swaps
function selectionSort(arr) {
    let swaps = 0;
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) minIdx = j;
        }
        if (minIdx !== i) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
            swaps++;
        }
    }
    return swaps;
}

// Insertion Sort - count swaps
function insertionSort(arr) {
    let swaps = 0;
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            swaps++;
            j--;
        }
        arr[j + 1] = current;
    }
    return swaps;
}

let testArr = [5, 2, 4, 6, 1, 3];
console.log("Bubble Sort swaps:", bubbleSort([...testArr]));
console.log("Selection Sort swaps:", selectionSort([...testArr]));
console.log("Insertion Sort swaps:", insertionSort([...testArr]));

const arr = [-2, -1, 0, 3, 5, 9, 12];

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);

        if (arr[mid] == target) {
            return mid;
        } 
        else if (arr[mid] < target) {
            low = mid + 1; 
        } 
        else {
            high = mid - 1;
        }
    }

    return low; 
}

console.log(binarySearch(arr, 9)); 
console.log(binarySearch(arr, 2));  



function sortedFrequency(arr, num) {
    let firstIndex = findFirstIndex(arr, num);
    let lastIndex = findLastIndex(arr, num);

    if (firstIndex === -1) {
        return -1; 
    }

    return lastIndex - firstIndex + 1;
}

function findFirstIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let firstIndex = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === num) {
            firstIndex = mid;
            right = mid - 1; 
        } else if (arr[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return firstIndex;
}

function findLastIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let lastIndex = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === num) {
            lastIndex = mid;
            left = mid + 1; 
        } else if (arr[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return lastIndex;
}

module.exports = sortedFrequency;

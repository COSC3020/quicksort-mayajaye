//Maya Conway
//code.js
//Iterative Quicksort
//3-30-25

function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function partition(arr, low, high) {
    let p = low;                      //pivot is the first element of the subarray
    let i = low + 1                   //i is the next

    for (; i <= high; i++)              
        if (arr[i] < arr[low]) swap(arr, ++p, i); //swap if i is less than the pivot
    swap(arr, low, p);                            //put pivot in it's place
    return p;
}

function quicksort(arr, lo = 0, hi = arr.length - 1) {
    if (lo >= hi) return arr; //already sorted
    let stack = new Array(hi - lo + 1); //create a stack to store the indices of the subarrays
    let top = 1;                        //track the top of the stack

    stack[0] = lo; //start with the whole array
    stack[1] = hi;

    while (top >= 0) {
        hi = stack[top--]; //pop hi and lo to use them for the current partition
        lo = stack[top--];

        let p = partition(arr, lo, hi);

        //add the new indices to the stack
        if (p - 1 > lo) {
            stack[++top] = lo;
            stack[++top] = p - 1;
        }
        if (p + 1 < hi) {
            stack[++top] = p + 1;
            stack[++top] = hi;
        }
    }
    return arr;
}



# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

#### I've deduced that $T(n) \in \Theta(n^{2})$ by this reasoning:


The worst case for this quicksort algorithm is if the first pivot is the 
greatest/least element, making partitions of size 0 and n - 1.

##### The steps in this algorithm are:

1. Check base cases and initialize stack (1 compare, constant time)
2. A while loop that checks if there are still indices in the stack and 
   pushes new indices onto the stack. On the worst case this will push 
   subarrays onto the stack n times.

   3. A partitioning for loop that compares elements to the pivot and swaps them 
       if they are less than the pivot. On the worst case this will compare all 
       elements for a linear runtime (n)

The runtime equation for these steps is:
$1 + n \cdot n$

This is equivalent to:
$1 + n^{2}$

The constant factor is insignificant, so, the $\Theta$ bound for T(n) is:
$\Theta(n^{2})$


#### Sources

I looked at [this](https://www.geeksforgeeks.org/iterative-quick-sort/) to see how to use the stack, then adapted it for Bentley's algorithm

"I certify that I have listed all sources used to complete this exercise,
including the use of any Large Language Models. All of the work is my own, except
where stated otherwise. I am aware that plagiarism carries severe penalties and
that if plagiarism is suspected, charges may be filed against me without prior
notice."

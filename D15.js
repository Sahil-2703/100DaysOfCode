function selectionSort(arr) {
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
  
      // Find the index of the minimum element in the remaining unsorted portion of the array
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      // Swap the minimum element with the current element
      if (minIndex !== i) {
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
  }
  
  const arrayToSort = [64, 25, 12, 22, 11];
  selectionSort(arrayToSort);
  console.log(arrayToSort);
  
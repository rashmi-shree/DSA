// Heap Sort

//algorithm
// 1. create a max heap form the array 
// 2. swap the first and the last values
// 3. reduce the size of heap
// 4. Heapify Down
// 5. kep repeating (2 to 4) until all is sorted.
  
//algo - to create a max heap: -
// we will start from the end of the Array, and we will heapify down every Node. ignore leaf nodes
arr = [4,10,3,5,1]


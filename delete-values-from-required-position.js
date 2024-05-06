const array=[6,2,4,5,3]

// Delete all behined values from 4

for(i = 0; i<array.length; i++){
    if(array[i] == 4){
        // console.log(i)
        for(j=array.length, j>=0; j--;){
            console.log(array.slice(i,array.length))
            break;
        }
    }
}

// Delete All Next values from 4

let newArray = [];

// Iterate over the array to find the index of '4'
for (let i = 0; i < array.length; i++) {
  if (array[i] === 4) {
    // Found '4', break the loop
    break;
  }
  // Push current element to the new array
  newArray.push(array[i]);
  
}

console.log(newArray); // Output: [6, 2]

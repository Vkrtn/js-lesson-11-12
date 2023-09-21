let arr = [1, 0, -2, -1, 58, -4, 2, 23];
let arrOne = [1, 2, 3, 4, 5, 6];

function isNegativePresent(dataArr) {
  for (i = 0; i < arrOne.length; i++) {
    if (arrOne[i] < 0) {
        return false;
    }
  }
  return true;
}

console.log(isNegativePresent(arrOne));

// function showPositive(dataArr){

//     for(i = 0; i < arr.length; i++){
//         let positive = arr[i]
//         if(positive >= 0){
//             console.log(positive)
//         }
//         // else{
//         //     break
//         // }
//     }
// }
// showPositive(arr);

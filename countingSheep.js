//Consider an array or list of sheep where some sheep may be missing from their place. 
//We need a function that counts the number of sheep present in the array (true means present). 

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

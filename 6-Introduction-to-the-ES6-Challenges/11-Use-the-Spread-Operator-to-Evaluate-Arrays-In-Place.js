<!-- The spread oprator allow me to expand an array/expressions in multiple parameters. -->
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
const arr2 = [...arr1];
 arr1.push('JUN'); // change this line
console.log(arr2);

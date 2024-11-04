// 2-vazifa
function countOccurrences(num:number[],num2:number):number {
    let i :number = 0;
    let a :number = 0;
     while (num[i]) {
          if (num[i]===num2) a++;
          i++;
     }
     return a;
}
console.log(countOccurrences([1, 2, 3, 2, 4, 2, 5], 2));
 console.log(countOccurrences([1, 2, 3, 4, 5], 6));
 //3-vazifa
 function findMax(arr: number[]): number | null {
     if (arr.length === 0) {
         return null;
     }
     
     let max: number = arr[0];
     for (let i = 1; i < arr.length; i++) {
         if (arr[i] > max) {
             max = arr[i];
         }
     }
     
     return max;
 }
 
 console.log(findMax([3, 1, 4, 1, 5, 9, 2])); // 9
 console.log(findMax([])); // null
 //4-vazifa
 function filterAndSort(arr: number[], n: number): number[] {
     return arr.filter(x => x < n).sort((a, b) => a - b);
 }
 
 console.log(filterAndSort([5, 3, 8, 1, 2, 7], 5)); // [1, 2, 3]
 console.log(filterAndSort([10, 15, 3, 8, 2], 9));  // [2, 3, 8]
 //5-vazifa
 function fibonacci(n: number): number {
     if (n <= 0) return 0;
     if (n === 1) return 1;
     return fibonacci(n - 1) + fibonacci(n - 2);
 }
 
 console.log(fibonacci(5)); // 5
 console.log(fibonacci(7)); // 13
 console.log(fibonacci(10));
 console.log(fibonacci(9));
 
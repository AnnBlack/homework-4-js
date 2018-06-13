// 1 - largest and smallest

// первый вариант
/*function largest() {
	let largest = 0;
	for (let i = 0; i < arguments.length - 1; i++) {
		if(arguments[i] > largest) {
			largest = arguments[i];
		}
	}
	return largest;
}
console.log(largest(2, 0.1, -5, 100, 3)) // 100
*/
/* function smallest() {
	let smallest = 0;
	for(let i = 0; i < arguments.length - 1; i++) {
		if(arguments[i] < smallest) {
			smallest = arguments[i];
		}
	}
	return smallest;
}
console.log(smallest(2, 0.1, -5, 100, 3));
*/

// второй вариант
const smallest = (...arg) => console.log(Math.min(...arg));
smallest(2, 0.1, -5, 100, 3);

const largest = (...arg) => console.log(Math.max(...arg));
largest(2, 0.1, -5, 100, 3);

// 2 - transform
const transform = arr => arr.map(i => () => i);
const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
console.log(newArray[3]());

// 3 - sum
// первый пример
  function sum() {
    let result = 0;
    for(let i = 0; i < arguments.length; i++) {
      result += arguments[i];
    }
    return result;
  }
  console.log(sum(1,3,5,7,1));


// пример со стрелочной функцией
  function sumStr(...theArgs) {
    return theArgs.reduce((previous, current) => {
      return previous + current;
    });
  }
  console.log(sumStr(1,2,3,4));


// пример с рекурсией
  const sumRecurcion = function() {
    function sumString(args, index) {
      if(index < args.length) {
        return args[index] + sumString(args, index + 1);
      }
      return 0;
    }
    return sumString(arguments, 0);
  }
  console.log(sumRecurcion(1,2,3,2));

  // 4 - countDown
  function countDown(n) {
    var i = n;
    var timerId = setTimeout(function go() {
      console.log(i);
      if (i > 0) setTimeout(go, 1000);
      i--;
    }, 100);
  }
  countDown(10);

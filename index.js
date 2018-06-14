// 1 - largest and smallest
const smallest = (...arg) => (Math.min(...arg));
smallest(2, 0.1, -5, 100, 3);

const largest = (...arg) => (Math.max(...arg));
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
      if (i > 0) {
        setTimeout(go, 1000);
        i--;
      }
      if(i < 0) {
        setTimeout(go, 1000);
        i++;
      }
    }, 1000);
  }
  countDown(10);


// 5
function myBind(context) {
    var self = this;
    var r = function() {
       return self.apply(context,arguments);
    }
    return r;
  }

 Function.prototype.myBind = myBind;

  function addPropToNumber(number) {
    return this.prop + number;
  }

  var bound = addPropToNumber.myBind({ prop: 9 });
  console.log(bound(1)); // 10


// второй вариант
  /*var myBind = function(fn, prop) {
    return function() {
      var fnArgs = [].slice.call(arguments);
      return fn.apply(prop, fnArgs);
    }
  }

  function addPropToNumber(number) {
    return this.prop + number;
  }

  var bound = myBind(addPropToNumber, { prop: 9 });
  console.log(bound(10)); */

var ispnum = function(num) {
    for(var i = 2; i < num; i++)
      if  (num % i === 0) return false;
    return num > 1;
};

const fibonacci = (num) => {
    if (num <= 1)return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
};

function nxtPrmFib(number) {
    let r = 0;
    let l = 1;
    while (true) {
        var fib = fibonacci(l);
        console.log('fib', fib, number);
        if (fib > number) {
            if (ispnum(fib)) {
                r = fib;
                break;
                } else {
                    l = l + 1;    
                    console.warn('bumping to ', fib);
                }
            } else {
                l = l + 1;
                console.warn('bumping to', fib);
            }
    }
    console.warn('Next prime fib ', r);
}

nxtPrmFib(20);

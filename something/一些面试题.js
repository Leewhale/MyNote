// 1.

var a = (function(){
    return [
        (()=>this.x).bind({x:"inner"})(),
        (()=>this)()
    ]
}).call({x:"outer"});

console.log(a);


// 2.
const a = (x) => x + 1;
const b = (x) => x * 2;
const c = (x) => x * x;

const compose = (...fns) => (x) => fns.reduce((accmulate, fn) => fn(accumulate), x);

const composedFn = compose(a, b, c);
const result = composedFn(4);
console.log(result);
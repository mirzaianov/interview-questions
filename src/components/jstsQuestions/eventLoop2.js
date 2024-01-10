console.log('Start');

setTimeout(() => console.log('ST 1'));

Promise.resolve().then(() => console.log('P 1'));

Promise.resolve().then(setTimeout(() => console.log('ST 2'))); // NOTE:

Promise.resolve().then(() => console.log('P 2'));

setTimeout(() => console.log('ST 3'));

console.log('End');

/**

The difference between Promise.resolve().then(setTimeout(() => console.log('ST 2'))); and Promise.resolve().then(() => setTimeout(() => console.log('ST 2'))); lies in how they handle the timing and execution of the setTimeout function within the Promise.resolve().then() chain.

Promise.resolve().then(setTimeout(() => console.log('ST 2')));:

In this case, the setTimeout(() => console.log('ST 2')) function is executed immediately when Promise.resolve().then() is called, not after the promise resolves. This is because setTimeout is invoked directly within the then() method, causing it to execute immediately and return a timer identifier, not a function. Essentially, the setTimeout function is executed before the promise chain.

Consequently, this code does not wait for the promise resolution to trigger the setTimeout. Instead, it runs the setTimeout right away, which likely results in an error or unexpected behavior because setTimeout expects a function as its first argument.

Promise.resolve().then(() => setTimeout(() => console.log('ST 2')));:

Here, the setTimeout(() => console.log('ST 2')) is wrapped inside the function passed to then(). This means the setTimeout function will be executed only after the promise resolves due to being inside the function block attached to then(). When the promise is resolved, this function containing setTimeout will be placed in the microtask queue, waiting for its turn to be executed. Once it's executed, the setTimeout function will start its countdown for 'ST 2' to be logged after the given time delay.

In summary, the crucial difference between these two code snippets is that the first one (with setTimeout directly within then()) executes the setTimeout immediately, while the second one (with setTimeout inside a function within then()) waits for the promise to resolve before scheduling the setTimeout operation.

 */

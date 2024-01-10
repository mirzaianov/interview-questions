// var a = 1;

class A {
  a = 1;

  f1 = () => console.log(this.a); // refers to the a property of the A class instance

  f2 = function () {
    console.log(this.a); // refers to the a property of the A class instance
  };
}

const b = new A(); // creates an object b based on the A class

b.f1(); // 1 -> log the value of a, which is 1
b.f2(); // 1 -> log the value of a, which is 1

const c = b.f1; //  store reference to the f1 method of object b in c
const d = b.f2; //  store reference to the f2 method of object b in d

c(); // 1 -> results in 1 being logged because the arrow function f1 retains the context of the object where it was defined (object b), hence this.a still refers to the a property of object b.

d(); // TypeError -> results in undefined being logged. This happens because d contains a reference to f2, which is a regular function. When called independently (d()), it loses the context of the object b, causing this.a to be undefined as this inside f2 is not bound to any object.

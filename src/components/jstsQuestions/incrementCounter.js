function Increment(start = 0) {
  this.value = start;
}

Increment.prototype.valueOf = function () {
  return ++this.value;
};

Increment.prototype.toString = function () {
  return this.valueOf().toString();
};

// Пример использования:
let increment = new Increment();

alert(increment); // 1
alert(increment); // 2
alert(increment + increment); // 7

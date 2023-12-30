const auto = {
  brand: 'BMW',
  drive() {
    console.log(this);
    return `Заведем наш ${this.brand}`;
  },
};

const motorBike = {
  brand: 'Suzuki',
};

const autoDrive = auto.drive.bind(auto);
const bikeDrive = auto.drive.bind({ brand: 'Корабль' });

const $ = document.querySelector.bind(document);
const header = $('h2');
console.log(header);

const bill = {
  tip: 0.1,
  calculate(total) {
    console.log(this);
    return total + total * this.tip;
  },
  detail(dish1, dish2, sum) {
    return `Ваш обед (${dish1}, ${dish2}) стоит ${this.calculate(sum)} руб.`;
  },
};

//   const pay = bill.calculate(1000);
//   console.log(pay)
const pay = bill.detail('pizza', 'salad', 1000);
const payCount = bill.detail.apply(bill, ['pizza', 'salad', 1000]);
const payCount2 = bill.detail.call(bill, ...['pizza', 'salad', 1000]);

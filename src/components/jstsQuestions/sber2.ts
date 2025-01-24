const capitalizeWords = (s: string): string => {
  let res = '';
  let nextCap = true;

  for (let i = 0; i < s.length; i += 1) {
    const l = s[i].toLowerCase();

    if (l === '-' || l === '_') {
      nextCap = true;
      continue;
    }

    if (nextCap) {
      res += l.toUpperCase();
      nextCap = false;
    } else {
      res += l;
    }
  }

  return res;
};

console.log(capitalizeWords('what-a-nice-day-today')); // 'WhatANiceDayToday'
console.log(capitalizeWords('What_A_Nice_Day_Today')); // 'WhatANiceDayToday'
console.log(capitalizeWords('What_a_Nice-Day-Today')); // 'WhatANiceDayToday'
console.log(capitalizeWords('--What_a_Nice-Day-Today__')); // 'WhatANiceDayToday'

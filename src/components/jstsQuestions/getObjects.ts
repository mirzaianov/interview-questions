/*

* !!! Ответ с помощью ChatGPT не принимается!!!
* - Объект связан с типом через object_type
* - Тип объекта имеет класс (class) "Устройства"
*/
// Написать функцию вывода строкой через запятую названий (name) объектов. Брать только объекты связанные с типами у которых класс "Устройства". Желательно минимизировать использование дополнительных переменных.

const objects = [
  { id: 1, name: 'Test 1', object_type: 1 },
  { id: 2, name: 'Test 2', object_type: 1 },
  { id: 3, name: 'Test 3', object_type: 2 },
  { id: 4, name: 'Test 4', object_type: 3 },
];

const object_types = [
  { id: 1, class: 'Устройства' },
  { id: 2, class: 'Устройства' },
  { id: 3, class: 'Порты' },
  { id: 4, class: 'Кабели' },
] as const;

type Object = {
  id: number;
  name: string;
  object_type: number;
};

type TargetClass = (typeof object_types)[number]['class'];

type TypedObject = {
  id: number;
  class: TargetClass;
};

const getObjects = (
  data: readonly Object[],
  types: readonly TypedObject[],
  target: TargetClass,
): string => {
  if (!data.length) throw new Error('Error: Invalid data');

  if (!types.length) throw new Error('Error: No types found');

  if (!target) throw new Error('Error: Target not found');

  const targetIds: number[] = types
    .filter((type) => {
      if (!type.class || !type.id) throw new Error('Error: Invalid type');

      return type.class === target;
    })
    .map((type) => type.id);

  const res: string[] = [];

  for (const item of data) {
    if (!item.object_type || !item.name) {
      throw new Error('Error: Incomplete object');
    }

    if (targetIds.includes(item.object_type)) {
      res.push(item.name);
    }
  }

  return res.join(', ');
};

console.log(getObjects(objects, object_types, 'Устройства')); // "Test 1, Test 2, Test 3"
console.log(getObjects(objects, object_types, 'Порты')); // "Test 4"
console.log(getObjects(objects, object_types, 'Кабели')); // ""
console.log(getObjects(objects, object_types, 'DDD')); // ""
console.log(getObjects(objects, object_types, '')); // ""

// У нас есть массив с цветами. При его помощи нам нужно вернуть (return) формулу флага Германии («черный-красный-желтый»). Для этого тебе понадобятся следующие методы: filter() и join(), а заодно вспомнить, что это такое ||- это пригодится для условия в методе filter()

const colors = ['синий', 'черный', 'зеленый', 'красный', 'желтый', 'зеленый'];

function createColorString() {
  return colors
    .filter((color) => color === 'черный' || color === 'красный' || color === 'желтый')
    .join('-');
}

console.log(createColorString());

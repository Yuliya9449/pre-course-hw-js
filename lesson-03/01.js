const colors = ['синий', 'черный', 'зеленый', 'красный', 'желтый', 'зеленый'];

function createColorString(first, second, third) {
  return colors
    .filter((color) => color === first || color === second || color === third)
    .join('-');
}

console.log(createColorString('черный', 'красный', 'желтый'));

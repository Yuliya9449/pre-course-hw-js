// Дан объект passport. Создай его копию и поменяй имя с "Petr" на "Ivan", и убедись в консоли, что у объекта passport имя осталось "Petr", а у твоего нового объекта "Ivan".

let passport = {
  name: 'Petr',
  surname: 'Petrov',
};

let copyPassport = { ...passport };

copyPassport.name = 'Ivan';

console.log(passport.name);
console.log(copyPassport.name);

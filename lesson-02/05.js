let passport = {
  name: 'Petr',
  surname: 'Petrov',
};

let copyPassport = {};

for (let key in passport) {
  copyPassport[key] = passport[key];
}

copyPassport.name = 'Ivan';

console.log(passport);
console.log(copyPassport);

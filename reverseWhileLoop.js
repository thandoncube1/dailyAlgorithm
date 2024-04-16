let numbers = [1,2,3,4,5,6,7,8];
numbers[8] = "Thando";
numbers[9] = "William";
numbers[10] = "";
numbers[11] = 12;
numbers[12] = {
  name: "Eric",
  age: 27,
  occupation: "Water and Heating Technician"
}

let count = 0;

let reversed = [];

while (count < numbers.length/2) {
  let temp = numbers[count];
  reversed.unshift(temp);
  count++;
}

let restOftheElements = numbers.slice((numbers.length/2)+1, numbers.length);
reversed = [...reversed, ...restOftheElements];

console.log(reversed);
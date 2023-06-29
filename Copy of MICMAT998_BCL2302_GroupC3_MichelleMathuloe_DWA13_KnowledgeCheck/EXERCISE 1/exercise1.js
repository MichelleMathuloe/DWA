const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];


// Use forEach to console log each name with a matching province
names.forEach((name, index) => {
  console.log(`${name}`.concat( `(${provinces[index]})`));
});

// Using map loop over all province names and turn the string to all uppercase.
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

// Create a new array with map that has the amount of characters in each name.
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// Using toSorted to sort all provinces alphabetically.
/*const sortedProvinces = provinces.sort();
console.log(sortedProvinces);
Need to come back to this one, doesnt sort alphabetically*/

// Use filter to remove all provinces that have the word Cape in them
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(filteredProvinces.length);

// Create a boolean array by using map and some to determine whether a name contains an S character`
const containsS = names.map(name => name.toLowerCase().includes('s'));
console.log(containsS);


// Using only reduce, turn the above into an object that indicates the province of an individual.
const nameProvinceObj = names.reduce((obj, name, index) => {
  obj[name] = provinces[index];
  return obj;
}, {});
console.log(nameProvinceObj);

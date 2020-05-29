// Write your solution in this file!
let driver = {};

<<<<<<< HEAD
function updateDriverWithKeyAndValue(driver, key, value) {
  let newDriver = Object.assign({}, driver)
  newDriver[key] = value;
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  let newDriver = Object.assign({}, driver);
  delete newDriver[key];
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
=======
function updateDriverWithKeyAndValue(Object, key, value) {
  return Object.assign({}, Object, {key: value});
}

function destructivelyUpdateDriverWithKeyAndValue(Object, key, value) {
  return Object.assign(Object, {key: value});
>>>>>>> b5ffb154130384df9231bb207cfec37376d383b1
}

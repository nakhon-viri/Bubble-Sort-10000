const fs = require("fs");

function randomNumber() {
  let number = [];
  for (let index = 0; index < 10000; index++) {
    number.push(Math.floor(Math.random() * 10000) + 1);
  }
  return number;
}

function writeFile(fileName, arr) {
  const writeStream = fs.createWriteStream(fileName);
  writeStream.on("error", (err) => console.log(err));
  arr.forEach((value, index, array) => {
    let newValue;
    if (index === array.length - 1) {
      newValue = `${value}`;
    } else {
      newValue = `${value}\n`;
    }
    writeStream.write(newValue);
  });
  writeStream.end();
}

function bubbleSort(arr) {
  let i, j;
  let len = arr.length;

  let isSwapped = false;

  for (i = 0; i < len; i++) {
    isSwapped = false;

    for (j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }

    if (!isSwapped) {
      break;
    }
  }
  return arr;
}

function homework() {
  writeFile("Input1000.txt", randomNumber());

  fs.readFile("Input1000.txt", "utf-8", (err, result) => {
    if (err) console.log(err);
    let arr = result.split("\n");
    let data = arr.map(function (x) {
      return parseInt(x, 10);
    });
    writeFile("Output10000.txt", bubbleSort(data));
  });
}

homework();

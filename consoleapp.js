function phone(number) {
  let numArr = [];
  let timesPushed = [];
  for (let i = 0; i < String(number).length; i++) {
    if (String(number).charAt(i) !== String(number).charAt(i + 1)) {
      numArr.push(+String(number).charAt(i));
    }
  }
  for (let j = 0; j < numArr.length; j++) {
    let count = 0;
    for (let k = 0; k < String(number).length; k++) {
      if (String(number).charAt(k) == numArr[j]) {
        count++;
      }
    }
    timesPushed.push(count);
  }
  console.log(timesPushed, numArr);
  let letters = [];
  for (let n = 0; n < numArr.length; n++) {
    switch (numArr[n]) {
      case 2:
        letters = ["a", "b", "c"];
        loop = letters.length;
        numArr[n] = [];
        if (timesPushed[n] > letters.length) {
          for (let l = 0; l < Math.ceil(timesPushed[n] / letters.length); l++) {
            numArr[n] += letters[loop - 1];
            loop = timesPushed[n] - letters.length;
          }
        } else {
          numArr[n] = letters[timesPushed[n] - 1];
          break;
        }
      case 3:
        letters = ["d", "e", "f"];
        loop = letters.length;
        numArr[n] = [];
        if (timesPushed[n] > letters.length) {
          for (let l = 0; l < Math.ceil(timesPushed[n] / letters.length); l++) {
            numArr[n] += letters[loop - 1];
            loop = timesPushed[n] - letters.length;
          }
        } else {
          numArr[n] = letters[timesPushed[n] - 1];
          break;
        }
      case 4:
        letters = ["g", "h", "i"];
        loop = letters.length;
        numArr[n] = [];
        if (timesPushed[n] > letters.length) {
          for (let l = 0; l < Math.ceil(timesPushed[n] / letters.length); l++) {
            numArr[n] += letters[loop - 1];
            loop = timesPushed[n] - letters.length;
          }
        } else {
          numArr[n] = letters[timesPushed[n] - 1];
          break;
        }
      case 5:
        letters = ["j", "k", "l"];
        loop = letters.length;
        numArr[n] = [];
        if (timesPushed[n] > letters.length) {
          for (let l = 0; l < Math.ceil(timesPushed[n] / letters.length); l++) {
            numArr[n] += letters[loop - 1];
            loop = timesPushed[n] - letters.length;
          }
        } else {
          numArr[n] = letters[timesPushed[n] - 1];
          break;
        }
      case 6:
        letters = ["m", "n", "o"];
        loop = letters.length;
        numArr[n] = [];
        if (timesPushed[n] > letters.length) {
          for (let l = 0; l < Math.ceil(timesPushed[n] / letters.length); l++) {
            numArr[n] += letters[loop - 1];
            loop = timesPushed[n] - letters.length;
          }
        } else {
          numArr[n] = letters[timesPushed[n] - 1];
          break;
        }
      case 7:
        letters = ["p", "q", "r", "s"];
        loop = letters.length;
        numArr[n] = [];
        if (timesPushed[n] > letters.length) {
          for (let l = 0; l < Math.ceil(timesPushed[n] / letters.length); l++) {
            numArr[n] += letters[loop - 1];
            loop = timesPushed[n] - letters.length;
          }
        } else {
          numArr[n] = letters[timesPushed[n] - 1];
          break;
        }
      case 8:
        letters = ["t", "u", "v"];
        loop = letters.length;
        numArr[n] = [];
        if (timesPushed[n] > letters.length) {
          for (let l = 0; l < Math.ceil(timesPushed[n] / letters.length); l++) {
            numArr[n] += letters[loop - 1];
            loop = timesPushed[n] - letters.length;
          }
        } else {
          numArr[n] = letters[timesPushed[n] - 1];
          break;
        }
      case 9:
        letters = ["w", "x", "y", "z"];
        loop = letters.length;
        numArr[n] = [];
        if (timesPushed[n] > letters.length) {
          for (let l = 0; l < Math.ceil(timesPushed[n] / letters.length); l++) {
            numArr[n] += letters[loop - 1];
            loop = timesPushed[n] - letters.length;
          }
        } else {
          numArr[n] = letters[timesPushed[n] - 1];
          break;
        }
      case 0:
        numArr[n] = " ";
        break;
    }
  }

  return numArr.join("");
}


console.log(phone(222558892));

var solveMeFirst = function (a, b) {
  return a + b;
};

var multiply = function (a, b) {
  return a * b;
};

var evenOrOdd = function (number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

var makeNegative = function (number) {
  if (number < 0) {
    return number;
  } else {
    return -number;
  }
};

var opposite = function (number) {
  return -number;
};

var simpleArraySum = function (ar) {
  return ar.reduce((sum, number) => sum + number, 0);
};

var sleepIn = function (weekday, vacation) {
  if (weekday === true && vacation === false) {
    return false;
  } else {
    return true;
  }
};

var monkeyTrouble = function (aSmile, bSmile) {
  if (aSmile === bSmile) {
    return true;
  } else {
    return false;
  }
};

var sumDouble = function (a, b) {
  if (a === b) {
    return (a + b) * 2;
  } else {
    return a + b;
  }
};

var diff21 = function (n) {
  if (n > 21) {
    return (n - 21) * 2;
  }
  return 21 - n;
};

var parrotTrouble = function (talking, hour) {
  if (talking && (hour < 7 || hour > 20)) {
    return true;
  } else {
    return false;
  }
};

var makes10 = function (a, b) {
  return a === 10 || b === 10 || a + b === 10;
};

var nearHundred = function (n) {
  return (n >= 90 && n <= 110) || (n >= 190 && n <= 210);
};

var posNeg = function (a, b, negative) {
  if (negative === true) {
    return a < 0 && b < 0;
  } else {
    return (a < 0 && b > 0) || (a > 0 && b < 0);
  }
};

var notString = function (str) {
  if (str.startsWith("not")) {
    return str;
  } else {
    return "not " + str;
  }
};

var compareTriplets = function (a, b) {
  let alice = 0;
  let bob = 0;

  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      alice++;
    } else if (a[i] < b[i]) {
      bob++;
    }
  }

  return [alice, bob];
};

var aVeryBigSum = function (ar) {
  return ar.reduce((sum, number) => sum + number, 0);
};

var staircase = function (n) {
  let result = "";

  for (let i = 1; i <= n; i++) {
    result += " ".repeat(n - i) + "#".repeat(i);

    if (i < n) {
      result += "\n";
    }
  }

  return result;
};

var gradingStudents = function (grades) {
  return grades.map((grade) => {
    let remainder = grade % 5;

    if (grade < 38) {
      return grade;
    } else if (5 - remainder < 3) {
      return grade + (5 - remainder);
    } else {
      return grade;
    }
  });
};

var timeConversion = function (s) {
  let hour = parseInt(s.slice(0, 2));
  let period = s.slice(-2);
  let time = s.slice(0, 8);

  if (period === "AM" && hour === 12) {
    hour = 0;
  } else if (period === "PM" && hour !== 12) {
    hour += 12;
  }

  return String(hour).padStart(2, "0") + time.slice(2);
};

var repeatStr = function (n, s) {
  return s.repeat(n);
};

var solution = function (str) {
  return str.split("").reverse().join("");
};

var positiveSum = function (arr) {
  let sum = 0;

  arr.forEach((number) => {
    if (number > 0) {
      sum += number;
    }
  });

  return sum;
};

var summation = function (num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum += i;
  }

  return sum;
};

var booleanToString = function (b) {
  return String(b);
};

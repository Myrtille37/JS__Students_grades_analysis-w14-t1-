const grades = [];

for (i = 0; i < 12; i++) {
  grades.push(Math.round(Math.random() * 100));
}
console.log(grades);

function calcAvarage(array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
    sum += array[i];
    }
    return Math.round(sum / array.length);
}
console.log(calcAvarage(grades));

function calcMax(array) {
    return Math.max(...array);
}
console.log(calcMax(grades));

function calcMin(array) {
    return Math.min(...array);
}
console.log(calcMin(grades));

function calcHighGrade(grade) {
    if (grade >= 60) {
    return true;
    }
    return false;
}

const bestStudentsFilter = grades.filter(calcHighGrade);
console.log(bestStudentsFilter);
const bestStudentsNumber = bestStudentsFilter.length;
console.log(`Number of students with high grade: ${bestStudentsNumber}`);

function calcLowerGrade(grade) {
    if (grade < 60) {
    return true;
    }
    return false;
}

const lowerGradesFilter = grades.filter(calcLowerGrade);
console.log(lowerGradesFilter);
const lowerGradeStudentsNumber = lowerGradesFilter.length;
console.log(`Number of students with low grade: ${lowerGradeStudentsNumber}`);

const gradesToLetters = grades.map(function (grade) {
    if (grade > 79) {
    grade = "A";
    } else if (grade > 59 && grade < 80) {
    grade = "B";
    } else if (grade > 39 && grade < 60) {
    grade = "C";
    } else if (grade > 19 && grade < 40) {
    grade = "D";
    } else {
    grade = "E";
    }
    return grade;
});
console.log(gradesToLetters);
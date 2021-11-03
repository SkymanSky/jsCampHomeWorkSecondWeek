function findPrimeNumbers(...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let isPrime = true;

    for (let j = 2; j < numbers[i]; j++) {
      if (numbers[i] % j == 0) {
        isPrime = false;
      }
    }

    if (isPrime) {
      console.log("Girdiğiniz sayı: " + numbers[i] + " asaldır.");
    } else {
      console.log("Girdiğiniz sayı: " + numbers[i] + " asal değildir.");
    }
  }
}

findPrimeNumbers(2, 5, 8, 21, 13);

function checkIsFriendNumbers(x, y) {
  let xDividersTotal = 0;
  let yDividersTotal = 0;

  for (let i = 1; i < x; i++) {
    if (x % i == 0) {
      xDividersTotal = i + xDividersTotal;
    }
  }

  //console.log(xDividersTotal);

  for (let j = 1; j < y; j++) {
    if (y % j == 0) {
      yDividersTotal = j + yDividersTotal;
    }
  }

  //console.log(yDividersTotal);

  if (xDividersTotal == y && yDividersTotal == x) {
    console.log(x + " ve " + y + " arkadaş sayılardır.");
  } else {
    console.log(x + " ve " + y + " arkadaş sayı değildirler.");
  }
}

checkIsFriendNumbers(1184, 1210);
checkIsFriendNumbers(32, 45);

function listPerfectNumbersUntilThousand() {
  let dividerTotals = 0;

  for (let i = 1; i < 1000; i++) {
    for (let j = 0; j <= i; j++) {
      if (i % j == 0) {
        dividerTotals = j + dividerTotals;
      }
    }
    if (dividerTotals == i * 2) {
      console.log(i + " mükemmel sayıdır.");
    }
    dividerTotals = 0;
  }
}

listPerfectNumbersUntilThousand();

function listPrimeNumbersUntilThousand() {
    for (let i = 2; i < 1000; i++) {
        let isPrime = true;
    
        for (let j = 2; j <i; j++) {
          if (i % j == 0) {
            isPrime = false;
          }
        }
    
        if (isPrime) {
          console.log(i + " asaldır.");
        } 
      }
}

listPrimeNumbersUntilThousand()

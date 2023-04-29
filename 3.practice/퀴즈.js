// //소수알아내기
// function isPrime(num) {
//     // 소수는 1과 자기 자신만으로만 나누어 떨어지는 수 임으로
//     // num > i
//     for(let i = 2; num > i; i++) {
//     if(num % i === 0) 
//       return false;
//      }
//     }
//    // 소수는 1보다 큰 정수임으로
//    // 1보다 작으면 false를 리턴한다
//    return num > 1;
//   }


  let s = "97 75 88 99 95 92 73";
  //문자열 숫자를 배열로 전환시킨다.
let arr = s.split(" ").map(Number);
//소수 최대값을 0으로 하고 
let maxPrime = 0;
//소수가아닌 최소값을 infinity로 초기화
let minNonPrime = Infinity;

//숫자가 2보다 작으면 false를 return 한다.
function isPrime(num) {
  if (num < 2) {
    return false;
  }// 소수 체크 판별에서 Math.sqrt()를 사용할 수 있다. 
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // 소수는 1과 자기 자신만으로만 나누어 떨어지는 수 임으로
    if (num % i === 0) {//이 부분에서 num이  다른 수로 나눠떨어진다면 소수가 아님
      return false;
    }
  }
  return true;
}
//배열의 반복 (num) 변수에 요소 값이 들어간다.
for (let num of arr) {
    //prime(소수일 경우)
  if (isPrime(num) && num > maxPrime) {
    maxPrime = num;
    //prime이 아닌 수이 일 경우
  } else if (!isPrime(num) && num < minNonPrime) {
    minNonPrime = num;
  }
}
//소수가 아닌 최소값이 75가 된다.
console.log(minNonPrime);
//소수인 최대값은 97이며
console.log(maxPrime);


console.log(`${minNonPrime},${maxPrime}`);
//output = '75, 97'
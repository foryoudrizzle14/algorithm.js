function total_score(str) {
    //점수를 초기화
      let score = 0; 
    // 연속된 동그라미의 개수를 저장할 변수, 일단 0으로 초기화
      let combo = 0;  
    
    //for 반복문으로 특정 횟수만큼 (str.length)반복 
      for (let i = 0; i < str.length; i++) {
        if (str[i] === "O") {  
    // 문제를 맞춘 경우에  연속된 O의 개수 증가됨
          combo++; 
     // 해당 연속된 O의 개수에 따른 점수 누적을 보여줌
          score += combo; 
        } else { 
     // 문제를 틀린 경우에는 연속된 O의 개수 초기화하도록 함.
          combo = 0; 
        }
      }
    
      return score;  // 총 점수 반환
    }
    
    let str = "OXOOOXXXOXOOXOOOOOXO";
    console.log(total_score(str));  
    
    
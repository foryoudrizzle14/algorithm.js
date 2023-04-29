



//풀이1
function solution(lottos, win_nums) {
    const ranks = [6, 6, 5, 4, 3, 2, 1];
    let matchingCount = 0;
    let zeroCount = 0;
  
    for (let num of lottos) {
      if (num === 0) {
        zeroCount++;
      } else if (win_nums.includes(num)) {
        matchingCount++;
      }
    }
  
    const maxRank = ranks[matchingCount + zeroCount];
    const minRank = ranks[matchingCount];
  
    return [maxRank, minRank];
  }
  


//풀이 2
  function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];
  
    const matchingCount = lottos.filter(num => win_nums.includes(num)).length;
    const zeroCount = lottos.filter(num => num === 0).length;
  
    const maxRank = rank[matchingCount + zeroCount];
    const minRank = rank[matchingCount];
  
    return [maxRank, minRank];
  }
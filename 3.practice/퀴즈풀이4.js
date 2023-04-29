function solution(num){
    let change = 1000 - num;
    let coin = 0;
    const coin_kind = [500, 100, 50, 10];
    
    for (let i = 0; i<coin_kind.length ; i++){

        if (change >= coin_kind[i])
           
        coin += Math.floor(change/coin_kind[i])
            
        change = change%coin_kind[i];


    }
}return coin;
let num1 = 160;
console.log(solution(num1))
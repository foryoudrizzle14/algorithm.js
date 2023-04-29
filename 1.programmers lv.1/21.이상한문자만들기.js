// 이상한 문자 만들기
// 문제 설명
// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// 제한 사항
// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.
// 입출력 예
// s	return
// "try hello world"	"TrY HeLlO WoRlD"
// 입출력 예 설명
// "try hello world"는 세 단어 "try", "hello", "world"로 구성되어 있습니다. 각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면 "TrY", "HeLlO", "WoRlD"입니다. 따라서 "TrY HeLlO WoRlD" 를 리턴합니다.




function solution(s) {
    let answer = '';
    let arr = s.split(" ");
  //매개변수 s를 공백 기준으로 split
    
    for(let i = 0; i<arr.length; i++){
  //반복문을 만들어준다. 조건은 변수 arr의 길이만큼 설정.
   
        for(let j = 0; j<arr[i].length; j++){
  //이중반복문 만들기. 조건은 변수의 i번째 배열의 내용물만큼의 길이로설정
        if(j%2 == 0) {
  //j를 2로 나누어 나머지 0이라면(짝수자리)
        answer += arr[i][j].toUpperCase();
 //변수 arr의 i번째 배열내의 j번째 문자열을 대문자로 변환하여 변수answer에 더하여 저장
        } else{
        answer += arr[i][j].toLowerCase();}         
 //변수 arr의 i번째 배열내의 j번째 문자열을 소문자로 변환하여 변수answer에 더하여 저장
        }
        if(!(i==arr.length-1)){
            answer+=" ";
//조건문 만들어 공백을 생성. 조건에있는 -1의 의미는 마지막 i번째 배열을 조건에서 제외하기 위함   
                              
    
    }
}
    return answer;
    

}
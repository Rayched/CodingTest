/**
 * 입 / 출력 예시
 * 
 * Test Case 1
 * cards1 : ["i", "drink", "water"]
 * cards2 : ["want", "to"]
 * goal : ["i", "want", "to", "drink", "water"]
 * result => "Yes"
 * 
 * Test Case 2
 * cards1 : ["i", "water", "drink"]
 * cards2 : ["want", "to"]
 * goal : ["i", "want", "to", "drink", "water"]
 * result => "No"
 */

function Solution(cards1, cards2, goal){
    let answer = "";
    cards1.splice(1, 0, ...cards2);
    const ExamWord = goal.join(", ");
    const result = cards1.join(", ");

    if (ExamWord === result){
        answer = "Yes";
    } else {
        answer = "No";
    }
    console.log(result);
    console.log(answer);
    //return answer;
}

Solution(["i", "drink", "water"], ["want", "to"], ["i", "want", "to", "drink", "water"]);
Solution(["i", "water", "drink"], ["want", "to"], ["i", "want", "to", "drink", "water"]);

function Solution(array, height){
    const FriendsHeight = array.map((CurrentValue) => {
        if (CurrentValue > height){
            return CurrentValue;
        } else {
            return 0;
        }
    });

    const answer = FriendsHeight.filter((elm) => elm !== 0);
    console.log(answer);
    console.log(answer.length);
    //return answer.length;
}

Solution()

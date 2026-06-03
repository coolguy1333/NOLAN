document.getElementById("clubForm").addEventListener("submit",
    (event) => {
        event.preventDefault();
       
        let yes = 0;
        let no = 0;

        meetUp = document.getElementById("meet").value;
        meetUpHours = (Number)(meetUp.split(":")[0]);
        meetUpMinutes = (Number)(meetUp.split(":")[1]);
        if(meetUpHours <= 3){
            no++;
        }
        else if(meetUpHours <= 8){
            no++;
        }
        else if(meetUpHours <= 12){
            yes++;
        }
        else if(meetUpHours <= 20){
            yes++;
        }
        else{
            no++;
        }

        if(document.getElementById("car").checked){
            yes++;
        }
        if(document.getElementById("give").checked){
            no++;
            no++;
            no++;
        }
        if(document.getElementById("save").checked){
            yes++;        }
        if(document.getElementById("whatever").checked){
            yes++;
        }

        lastQuestionAnswer = document.getElementById('lastQuestion').value;
        if(lastQuestionAnswer == "Yes"){
            yes++;
            yes++;
            yes++;
        }
        if(lastQuestionAnswer == "No"){
            no++;
            no++;
            no++;
        }


        winner = [];
        if(yes > no
            ){
                winner.push("Yes, you may join my Clerb :)")
            }
        if(no > yes
            ){
                winner.push("No, you may not join my clerb. Go away! :( ")
            }
        if(no == yes
            ){
                winner.push("I guess man, I GOT MY EYE ON YOU ...")
            }

        
        winningIndex = Math.floor(Math.random() * winner.length)
        actualWinner = winner[winningIndex]
        
        document.getElementById("resultParagraph").textContent = winner;
        
    }
)

function displayOtherInput(){
    document.getElementById("otherText").hidden = false;
}

function hideOtherInput(){
    document.getElementById("otherText").hidden = true;
}

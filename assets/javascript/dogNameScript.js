document.addEventListener('DOMContentLoaded', function() {
   
    let gender;
    const btn = document.getElementById("submitName");
    btn.addEventListener("click", saveName);

    const possibleAnswers = {
        boyorgirl: "girl",
        boyorgirl: "boy",
        boyorgirl: "both",
    };

    function saveResults(){
        const form = document.querySelector("#nameForm");
        const resultsContainer = document.getElementById("lista");
        const nimilista = document.getElementById("nimilista");

        for ( const question in possibleAnswers) {
            const selectedOption = form[question].value;
            if (selectedOption === possibleAnswers[question]){
               gender=selectedOption;
               console.log(gender);
               
            }
        }
    }
        
        function saveName(){
            const nameInput = document.getElementById("name").value;

            if(nameInput.trim()!==""){
    
                const listItem = document.createElement("li");
                listItem.textContent = nameInput;
                nimilista.appendChild(listItem);
    
                
            }


        }
    

});
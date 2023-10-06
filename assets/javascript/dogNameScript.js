document.addEventListener('DOMContentLoaded', function() {

    const gender="";

    const btn = document.getElementById("submitName");
    btn.addEventListener("click", submitClicked);

    function submitClicked(){
        alert("submit clicked");

    }
    const possibleAnswears = {
        boyorgirl: "girl",
        boyorgirl: "boy",
        boyorgirl: "both",
    };

    function saveResults(){
        const form = document.querySelector("nameForm");
        const resultsContainer = document.getElementById("nimilista");

        for ( const question in possibleAnswears) {
            const selectedOption = form[question].value;
            if (selectedOption === possibleAnswers[question]){
                gender=selectedOption;
            }
        }
        resultsContainer.innerHTML = gender;
    }
    








});
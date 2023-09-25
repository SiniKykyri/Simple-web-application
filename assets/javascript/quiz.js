

const submitButton = document.getElementById("Submit");
submitButton.addEventListener("click", calculateResults);



const correctAnswers = {
    luovutus: "8",
    montako: "2",
    kauanko: "2"
};

function calculateResults(){
    const form = document.querySelector("form");
    const resultsContainer = document.getElementById("quizResults");
    let score = 0;

    for ( const question in correctAnswers) {
        const selectedOption = form[question].value;
        if (selectedOption === correctAnswers[question]){
            score++;
        }
    }
    resultsContainer.innerHTML =' Your score ${score} / ${Object.keys(correctAnswers).length}'

   
}
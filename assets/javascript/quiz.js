document.addEventListener('DOMContentLoaded', function () {

    const submitButton = document.getElementById("Submit");
    submitButton.addEventListener("click", calculateResults);

    const correctAnswers = {
        luovutus: "8",
        montako: "2",
        kauanko: "2"
    };

    function createImage(src, parent) {
        const img = document.createElement("img");
        img.src = src;
        parent.appendChild(img);
    }

    function calculateResults() {
        const form = document.querySelector("form");
        const resultsContainer = document.getElementById("quizResults");
        let score = 0;

        for (const question in correctAnswers) {
            const selectedOption = form[question].value;
            if (selectedOption === correctAnswers[question]) {
                score++;
            }
        }

        

        if (score === 0) {
            resultsContainer.innerHTML += ` Pisteesi ovat: ${score} / ${Object.keys(correctAnswers).length}<br>`;
            resultsContainer.innerHTML += "Höh! Et saanut ainuttakaan pistettä. Kokeilehan uudestaan!";
            createImage("assets/pictures/upset.jpg", resultsContainer);
            return;
        }
        else if (score === 1) {
            resultsContainer.innerHTML += ` Pisteesi ovat: ${score} / ${Object.keys(correctAnswers).length}<br>`;
            resultsContainer.innerHTML += "Sait yhden pisteen. Oliko tämä nyt tietoa vai arvausta?";
            createImage("assets/pictures/akita.jpg", resultsContainer);
            return;
        }
        else if (score === 2) {
            resultsContainer.innerHTML += ` Pisteesi ovat: ${score} / ${Object.keys(correctAnswers).length}<br>`;
            resultsContainer.innerHTML += "Sait kaksi pistettä. Jippii!";
            createImage("assets/pictures/happy.jpg", resultsContainer);

            return;
        }
        else if (score === 3) {
            resultsContainer.innerHTML += ` Pisteesi ovat: ${score} / ${Object.keys(correctAnswers).length}<br>`;
            resultsContainer.innerHTML += "Sait kaikki kolme pistettä. Hienoa! Olet oikein koiratietäjä!";
            createImage("assets/pictures/winner.jpg", resultsContainer);
            return;
        }

       


    } 
});
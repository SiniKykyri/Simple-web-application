document.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelector('#nameForm');
    const nameInput = document.querySelector('#name');
    const submitButton = document.querySelector('#submitName');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();

        const name = nameInput.value;
        const genderRadios = document.getElementsByName("boyorgirl");
        let selectedGender = "";

        const genderRadiosArray = Array.from(genderRadios);
        genderRadiosArray.forEach(function(radio){
            if(radio.checked){
                selectedGender = radio.value;
            }
        });

      for (let i =0; i<genderRadios.length; i++){
        if(genderRadios[i].checked){
            selectedGender = genderRadios[i].value;
            break;
        }
    }
        if(name.trim() !==""){
            const nimilista = document.getElementById("nimilista");
            const listItem = document.createElement("li");
            listItem.textContent = name ;
            nimilista.appendChild(listItem);
            nameInput.value = "";
        }

    });

   
   

});
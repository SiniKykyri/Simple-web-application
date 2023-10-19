
document.addEventListener('DOMContentLoaded', function () {

    const btn = document.getElementById("clickbtn");
    btn.addEventListener("click", alertMessage);
    function alertMessage() {
        alert("Painoit onnistuneesti nappia! :)");
    }
});
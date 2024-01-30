// Membuat function untuk mengubah elemen pada html menggunakan method getElemenById
function replaceName() {
    let name = prompt("Helo, What your name?", "insert name");
    document.getElementById("name").innerHTML = name;
}

// Memanggil function replaceName() sehingga pop up akan ada ketika memasuki website, namun hanya muncul ketika diawal membuka website.
// replaceName(); 

// Membuat botton untuk function replaceName() hanya muncul pop up ketika tombol di click.
document.getElementById("changeName").addEventListener("click", function() {replaceName();})


// Membuat function validate form
function validateForm() {
    const fullname = document.forms["message-form"]["fullname"].value;
    const birthDate = document.forms["message-form"]["birthDate"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (fullname == "" || birthDate == "" || gender == "" || messages == ""){
        // alert("Please fill the form correctly");
        document.getElementById("error-messages").innerHTML = "Please fill the form correctly!";
        return false;
    } else {
        document.getElementById("error-messages").innerHTML = "";
    };

    setSenderUI(fullname, birthDate, gender, messages);
    return false;
}

function setSenderUI(sendFullname, semdBirthDate, sendGender, sendMessages) {
    document.getElementById("sender-fullname").innerHTML = sendFullname;
    document.getElementById("sender-birthDate").innerHTML = semdBirthDate;
    document.getElementById("sender-gender").innerHTML = sendGender;
    document.getElementById("sender-messages").innerHTML = sendMessages;
}
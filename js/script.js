let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 2000); 
}

function validateForm() {
    const fullname = document.forms["contactForm"]["fullname"].value;
    const email = document.forms["contactForm"]["email"].value;
    const interest = document.forms["contactForm"]["interest"].value;

    if (fullname == "" || email == "" || interest == ""){
        // alert("Please fill the form correctly");
        document.getElementById("error-messages").innerHTML = "Please fill the form correctly!";
        return false;
    } else {
        document.getElementById("error-messages").innerHTML = "";
    };

    setSenderUI(fullname, email, interest);
    return false;
}
function setSenderUI(sendFullname, sendEmail, sendInterest, ) {
    document.getElementById("sender-fullname").innerHTML = sendFullname;
    document.getElementById("sender-birthDate").innerHTML = sendEmail;
    document.getElementById("sender-gender").innerHTML = sendInterest;
}
registerAccount = () => {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let contact = +document.getElementById("contact").value
    let subject = document.getElementById("subject").value
    let password = document.getElementById("password").value

    let exampleCheck1 = document.getElementById("exampleCheck1").checked;

    if(exampleCheck1){
        alert("Welcome " + name + "! Thank you for your interest in " + subject + "! We will contact you via the email provided: " + email + ", or alternatively on the phone number: " + contact + ".");
    } else {
        alert("Well, well, well... why don't you want to sign up for our newsletter... you don't seem to be that interested " + name + "! If you want to sign up, you better CHECK that newsletter box!");
    }
}
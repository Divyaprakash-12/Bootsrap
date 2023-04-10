function validateform1() {
    var username = document.form1.name.value;
    var email = document.form1.email.value;
    var phone_number = document.form1.ph_no.value;
    var letters = /^[A-Za-z]+$/;
    var mail= "^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
    var number=/^[0-9]{10}+$/;
    if (username == null || username == "") {
        alert("enter a username");
        return false;
    }
    else if (!letters.test(username)) {
        alert("username only required albhabets");
        return false;
    }
    
    else if (email == null || email == "") {
        alert("enter a email");
        return false;
    }
    else if (!mail.test(email)) {
        alert("mail id format wrong");
        return false;
    }
    else if (phone_number == null || phone_number == "") {
        alert("enter a phone number");
        return false;
    }
    else if (!number.test(phone_number)) {
        alert("phone number format is wrong");
        return false;
    }
    else {
        alert(" <h1>thank you! you have login successfully </h1>" + " <br>" + 
        " <h2> welcome to the best real estate analysis software </h2> ");
       
    }
}

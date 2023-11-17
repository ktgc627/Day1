let getAllInputs = document.querySelectorAll(".form_val");
console.log(getAllInputs);
getAllInputs.forEach((element) => {
  element.addEventListener("blur", function () {
    errorhandling(element);
    element.id == "email" && emailValidation(element);
    element.id == "phnum" && phoneValidation(element);
    element.id == "password" && passwordValidation(element);
  });
});

function errorhandling(err) {
  if (err.value == "") {
    return err.classList.add("error");
  } else {
    return err.classList.remove("error");
  }
}

/* function checkemail(email) {
   var regexemail =/^[a-zA-Z0-9\.\_]+\@@{1}[a-zA-Z0-9]+\.\w{2,4}$/;
   if(!regexemail.test(email))
   {
       alert('Please enter valid email id');
       this.focus();
    }
    return false;
    
    email.preventDefault();
    email.stopPropagation();
  }

function checkpassword(pword) {
  var regexpass = /^[A-Za-z]\w{7,14}$/;
  if(!regexpass.test(pword)){
    alert('please enter valid password');
  }
}

function checkPhoneNumber(pnum){
  var regexph = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(!regexph.test(pnum)) {
    alert('please enter phone number');
  }
}  */

/* var regexemail =/^[a-zA-Z0-9\.\_]+\@@{1}[a-zA-Z0-9]+\.\w{2,4}$/;
var regexpass = /^[A-Za-z]\w{7,14}$/;
var regexph = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;  */

let emailError = document.querySelector(".validation_errmsg");
let phoneError = document.querySelector(".phnum_errmsg");
let passwordError = document.querySelector(".password_errmsg");
console.log(emailError);
console.log(phoneError);
console.log(passwordError);
/* function checkemail(email) {
  var regexemail =/^[a-zA-Z0-9\.\_]+\@@{1}[a-zA-Z0-9]+\.\w{2,4}$/;
  if(!email.endsWith('@gmail.com'))
  {
    emailError.classList.remove('d-none');
    email.classList.add('error'); 
   }
   else {
    emailError.classList.add('d-none');
    email.classList.remove('error'); 
   }
 } */
function emailValidation(element) {
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  if (element.value != "") {
    if (regex.test(element.value) == true) {
      emailError.classList.add("d-none");
      element.classList.remove("error");
    } else {
      emailError.classList.remove("d-none");
      element.classList.add("error");
    }
  }
}

function phoneValidation(element) {
  let regex = new RegExp("[0-9]+");
  if (element.value != "") {
    if (regex.test(element.value) == true) {
      phoneError.classList.add("d-none");
      element.classList.remove("error");
    } else {
      phoneError.classList.remove("d-none");
      element.classList.add("error");
    }
  }
}

/* password matches a1b2c3 | abcdefg123 | 12345a */
function passwordValidation(element) {
  let regex = new RegExp("^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$");
  if (element.value != "") {
    if (regex.test(element.value) == true) {
      passwordError.classList.add("d-none");
      element.classList.remove("error");
    } else {
      passwordError.classList.remove("d-none");
      element.classList.add("error");
    }
  }
}

let getButtonElement = document.querySelector(".formSubmit");
console.log(getButtonElement);
let storeData = [];
getButtonElement.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Click check");
  console.log(document.getElementById("fname").value);
  getAllInputs.forEach((ele) => {
    errorhandling(ele);
  });
  if (document.querySelectorAll("error").length == "0") {
    getAllInputs.forEach((element) => {
      let fnamed = document.getElementById("fname").value;
      storeData["fname"] = fnamed;
      /*switch(element.id) {
       case fname:
       storeData['fname'] = element.value;
       break;
       case lname:
        storeData['lname'] = element.value;
        break;
        case email:
          storeData['email'] = element.value;
          break;
          case phnum:
            storeData['phnum'] = element.value;
            break;   
            default :
              storeData['password'] = element.value;
              break; 
     } */
    });
    console.log(storeData);
    document.querySelector(".firstname").innerHTML = storeData["fname"];
    document.querySelector(".userdetail").classList.add("d-none");
    document.querySelector(".success_screen").classList.remove("d-none");
  }
});

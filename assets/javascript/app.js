$(document).ready(function () {
//1.FIREBASE FOR USER DATA
    var userData = new Firebase("https://kukluxlove.firebaseio.com/")

    $("button").on("click",function(e){
        e.preventDefault();
        
        var firstNameInput = $("#firstName").val().trim();
        var lastNameInput = $("#lastName").val().trim();
        var emailInput =$("#email").val().trim();
        var passwordInput = $("#password").val().trim();
        var birthMonthInput = $("#month").val().trim();
        var birthDateInput = $("#day").val().trim();
        var birthYearInput = $("#year").val().trim();
        var birthdayInput = moment(birthMonthInput+birthDateInput+birthYearInput).format("MM/DD/YYYY");
        var genderChecked = $(".gender:checked").val();
       

        console.log(firstNameInput);
        console.log(lastNameInput);
        console.log(emailInput);
        console.log(passwordInput)
        console.log(birthMonthInput);
        console.log(birthDateInput);
        console.log(birthYearInput);
        console.log(birthdayInput);
        console.log(genderChecked);
        var newUser = {
            firstName: firstNameInput,
            lastName: lastNameInput,
            email:emailInput,
            password: passwordInput,
            birthMonth: birthMonthInput,
            birthDate: birthDateInput,
            birthYear: birthYearInput,
            gender:genderChecked
        }
        //uploads this new data onto the database
        userData.push(newUser)
        
                        


    })
    
});
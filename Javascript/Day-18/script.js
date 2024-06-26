var Submit = document.getElementById("submit-button");

Submit.addEventListener('click', function() {
    var Name = document.getElementById("name");
    var Mobile = document.getElementById('mobile');
    var Gender = document.getElementById('gender');
    var Dob = document.getElementById('dob');
    var Address=document.getElementById('address');
    var Accepted=document.getElementById("accept-rules");

    var Output = document.getElementsByClassName("display-output")[0]; 

    // Create an array of the input values
    var infoArray = [
        `Name: ${Name.value}`,
        `Mobile: ${Mobile.value}`,
        `Gender: ${Gender.value}`,
        `DOB: ${Dob.value}`,
        `Address:${Address.value}`,
        `Accepted Rules:${Accepted.value}`
    ];
    
    // Loop through the array and create a new element for each piece of information
    for (var i = 0; i < infoArray.length; i++) {
        var newElement = document.createElement('h4');
        newElement.textContent = infoArray[i];
        Output.appendChild(newElement); // Append the new element to the output
    }

    console.log(Output);
});

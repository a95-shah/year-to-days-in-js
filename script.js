function convertDateToDays() {
    const birthDate = new Date(document.getElementById('birthDate').value);
    const currentDate = new Date();
    
    if (!isNaN(birthDate.getTime()) && birthDate <= currentDate) {  
        const timeDifference = currentDate - birthDate;
        const ageInDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));  
        
        document.getElementById('result').innerText = 
            `You are: ${ageInDays} days old.`;
    } else {
        document.getElementById('result').innerText = 
            "Please select a valid birthdate.";
    }
}
function reset() {
    document.getElementById('birthDate').value = ''; 
    document.getElementById('result').innerText = '';  
}




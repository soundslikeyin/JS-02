document.getElementById("input-names").addEventListener("click", greetNames);

function greetNames(){
    const name1 = window.prompt("Enter the name of the first of your friends");
    const name2 = window.prompt("Enter the name of the second of your friends");
    const name3 = window.prompt("Enter the name of the third of your friends");
    
    window.alert("Welcome " + name1 + ", " + name2 + ", " + name3 + "." );
};

document.getElementById("calculate-age").addEventListener("click", (e) => {
    const birthYear = window.prompt("Which year were you born?");
    window.alert("Your age is " + calculateAge(birthYear));
});

function calculateAge(birthYear){
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return age;
}
    
document.getElementById("greet-name-age").addEventListener("click", (e) => {
    const fren1 = window.prompt("Enter the name of the first of your friends");
    const birthYear1 = window.prompt("Which year was " + fren1 + " born?");
    const age1 = calculateAge(birthYear1);

    const fren2 = window.prompt("Enter the name of the second of your friends");
    const birthYear2 = window.prompt("Which year was " + fren2 + " born?");
    const age2 = calculateAge(birthYear2);


    const fren3 = window.prompt("Enter the name of the third of your friends");
    const birthYear3 = window.prompt("Which year was " + fren3 + " born?");
    const age3 = calculateAge(birthYear3);

    window.alert("Welcome " + fren1 + ", you are " + age1 + " years old. Welcome "  + fren2 + ", you are " + age2 + " years old.  Welcome "  + fren3 + ", you are " + age3 + " years old."  );
});
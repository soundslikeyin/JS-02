document.getElementById("rubric-grade").addEventListener("click", gradeScore);

function gradeScore() { 
    const score = Number(window.prompt("Enter your score (1-11)"));

    checkPass(score);

    function checkPass(score) {        
        if (score<5) {
            window.alert("You failed.");
            return false;
        }
        else if (score === 11) {
            window.alert("You have passed with a Perfect score!");
            return true;
        } else if (score > 8 ) {
            window.alert("You have passed with an Excellent score.");
            return true;
        } else {
            window.alert("You have passed.");
            return true;
        }
    }
}

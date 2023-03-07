const button = document.getElementById("factBtn");
button.addEventListener("click", fact);


function fact() {
    let n = document.querySelector("input").value;
    if(n < 0) {
        document.getElementById("display").innerHTML = "undefined";
    } else if 
    (n === 0) {
        return 1;
        } 
    else {
        let answer = 1;
        for(i = 1; i <= n; i++) {
            answer *= i;
        }
        document.getElementById("display").innerHTML = answer;
    }            
}



// const button = document.getElementById("addListBtn");
// button.addEventListener("click", addList);

var feedback = document.getElementById("feedback");
var btn = document.getElementById("btn");
var text = document.getElementById("text");

btn.addEventListener("click", function(){
    text.innerHTML = `
        <div class ="content">
            <p id="fb">Thank you for your feedback!!!!</p>
        </div>
    `;
})

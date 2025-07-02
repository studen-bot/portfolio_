document.querySelector("#myForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let firstName = document.querySelector("input[name='first-name']").value.trim();
    let lastName = document.querySelector("input[name='last-name']").value.trim();
    let phone = document.querySelector("input[name='phone']").value.trim();
    let email = document.querySelector("input[name='email']").value.trim();

    if (firstName && lastName && phone && email) {
        document.querySelector("#message").textContent = "Thank you for submitting!";
    } else {
        alert("Please fill in all the fields!");
    }
});
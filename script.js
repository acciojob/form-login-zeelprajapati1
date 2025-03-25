function getFormvalue(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    let firstName = document.querySelector("input[name='fname']").value.trim();
    let lastName = document.querySelector("input[name='lname']").value.trim();

    if (firstName === "" || lastName === "") {
        alert("Please enter both first and last name.");
    } else {
        alert(`${firstName} ${lastName}`);
    }
}

// Attach the function to the form submission
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", getFormvalue);
});

// Toggle Menu Function
function myFunction() {
    var dropDownMenu = document.getElementById("myDropdown");
    dropDownMenu.classList.toggle("show");
}

// Close Dropdown When Clicking Outside
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Redirect to Profile Page
document.getElementById('profile').addEventListener('click', function() {
    window.location.href = "/Profile/signup.html";
});

  
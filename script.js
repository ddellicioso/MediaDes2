document.addEventListener("DOMContentLoaded", function() {

  function toggleMenu() {
    const dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.classList.toggle("show");
  }

  function filterMenu() {
  const input = document.getElementById("mySearch");
  const filter = input.value.toUpperCase();
  const ul = document.getElementById("myMenu");
  const li = ul.getElementsByTagName("li");

  for (let i = 0; i < li.length; i++) {
    const a = li[i].getElementsByTagName("a")[0];
    const txtValue = a.textContent || a.innerText; // Handle potential textContent issues
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
  }

  // Initialize the dropdown to be hidden by default
  window.onload = function() {
  dropdownContent.classList.remove("show");
  }
});
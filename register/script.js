// -----togle menu-----

function toggleMenu() {
  var menu = document.querySelector('.menu');
  menu.style.right = (menu.style.right === '0%' || menu.style.right === '') ? '-100%' : '0%';

  gsap.from('.menu-socials', {
    x: '-100%',
    duration: 1
  })
}


// landing animations
function animateElements() {
  // Animation for the header
  gsap.fromTo('.header', { y: '-100%', opacity: 0 }, { y: '0%', opacity: 1, duration: 1, ease: 'power2.out' });

  baffle('.header nav a')
    .reveal(1000)
    .set({
        characters: '▒░░░░█░░▒█▓▓░█/░░>▒/▒/▓▒░',
        speed: 150
    });
  
    elemAnimation();
}

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(animateElements);
});

function elemAnimation() {
  gsap.from('.container-left', {
    x: '-100%',
    opacity: 0,
    duration:1
  })

  gsap.from('.wrapper', {
    y: '100%',
    opacity: 0,
    duration:1
  })
}



// ---------------checkbox---------------


function showOptions() {
  var checkbox = document.getElementById("participate");
  var optionsDiv = document.getElementById("teamOptions");

  if (checkbox.checked) {
      optionsDiv.style.display = "block";
  } else {
      optionsDiv.style.display = "none";
      clearInputBoxes();
  }
}

function clearInputBoxes() {
  var form = document.querySelector('form');
  var existingInputBoxes = form.querySelectorAll('.team-member-input');
  existingInputBoxes.forEach(function (inputBox) {
      inputBox.remove();
  });
}

function generateInputBoxes() {
  var teamSize = document.getElementById("teamSize").value;
  var form = document.querySelector('form');

  // Remove previous input boxes
  clearInputBoxes();

  // Generate new input boxes based on team size
  for (var i = 1; i <= teamSize; i++) {
      var inputBox = document.createElement("div");
      inputBox.className = "input-box team-member-input";

      var input = document.createElement("input");
      input.type = "text";
      input.name = "memberName" + i;
      input.placeholder = "Member " + i + " Name";
      inputBox.appendChild(input);

      var uidInput = document.createElement("input");
      uidInput.type = "text";
      uidInput.name = "memberUID" + i;
      uidInput.placeholder = "Member " + i + " Email";
      inputBox.appendChild(uidInput);

      form.insertBefore(inputBox, form.lastElementChild);
  }
}

const myForm = document.getElementById("myForm");
// Function to check UID existence before form submission
myForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  var uid = document.getElementById("uid").value; // Get UID from the form

  // You'll need to implement Google Sheets API call to check UID existence.
  // For simplicity, let's assume existingUIDs is an array of existing UIDs
  var existingUIDs = [];

  

  // Check if UID already exists
  if (existingUIDs.includes(uid)) {
    alert("UID already exists! Please choose a different one.");
  } else {
    // If UID doesn't exist, submit the form
    event.target.submit();
    myForm.reset();
  }
});

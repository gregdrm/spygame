 
      // Get references to the toggle button's checkbox and the command element
      const toggleCheckbox = document.getElementById("toggle-checkbox");
      const command = document.querySelector(".command");

      // Listen for the toggle button's click event
      toggleCheckbox.addEventListener("click", function() {
        // If the checkbox is checked, set the background color to red and change the text of the command
        if (toggleCheckbox.checked) {
          document.body.style.backgroundColor = "red";
          command.textContent = "Warning: Security cameras are INACTIVE";
        }
        else {
          document.body.style.backgroundColor = "#333";
          command.textContent = "Active";
        }
      });
    

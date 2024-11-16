          const toggleLink = document.getElementById('imgConta');
          const popup = document.getElementById('popUp');

          // Show the div when the link is clicked
          toggleLink.addEventListener('click', (event) => {
              event.preventDefault(); // Prevent the default link behavior
              popup.classList.toggle('hidden'); // Toggle visibility of the div
          });

          // Hide the div when clicking anywhere else in the document
          document.addEventListener('click', (event) => {
              if (!toggleLink.contains(event.target) && !popup.contains(event.target)) {
                  popup.classList.add('hidden'); // Hide the div
              }
          });
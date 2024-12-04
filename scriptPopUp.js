          const toggleLink = document.getElementById('imgConta');
          const popup = document.getElementById('popUp');

          toggleLink.addEventListener('click', (event) => {
              event.preventDefault(); 
              popup.classList.toggle('hidden');
          });

          document.addEventListener('click', (event) => {
              if (!toggleLink.contains(event.target) && !popup.contains(event.target)) {
                  popup.classList.add('hidden');
              }
          });
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

//MASKED CPF------------------------------------------------------------------------------------------

    const cpfInput = document.getElementById('cpf');

    cpfInput.addEventListener('input', function() {
      let value = cpfInput.value.replace(/\D/g, ''); // Remove all non-digit characters
      if (value.length > 11) {
        value = value.slice(0, 11); // Limit to 11 digits
      }
      // Format the input as XXX.XXX.XXX-XX
      if (value.length <= 3) {
        cpfInput.value = value;
      } else if (value.length <= 6) {
        cpfInput.value = value.slice(0, 3) + '.' + value.slice(3);
      } else if (value.length <= 9) {
        cpfInput.value = value.slice(0, 3) + '.' + value.slice(3, 6) + '.' + value.slice(6);
      } else {
        cpfInput.value = value.slice(0, 3) + '.' + value.slice(3, 6) + '.' + value.slice(6, 9) + '-' + value.slice(9, 11);
      }
    });


//MASKED RG------------------------------------------------------------------------------------------


    const rgInput = document.getElementById('rg');

    rgInput.addEventListener('input', function() {
      let value = rgInput.value.replace(/\D/g, ''); // Remove all non-digit characters
      if (value.length > 9) {
        value = value.slice(0, 9); // Limit to 9 digits
      }
      // Format the input as XX.XXX.XXX-X
      if (value.length <= 2) {
        rgInput.value = value;
      } else if (value.length <= 5) {
        rgInput.value = value.slice(0, 2) + '.' + value.slice(2);
      } else if (value.length <= 8) {
        rgInput.value = value.slice(0, 2) + '.' + value.slice(2, 5) + '.' + value.slice(5);
      } else {
        rgInput.value = value.slice(0, 2) + '.' + value.slice(2, 5) + '.' + value.slice(5, 8) + '-' + value.slice(8, 9);
      }
    });


//MASKED CELULAR------------------------------------------------------------------------------------------

const celularInput = document.getElementById('celular');

celularInput.addEventListener('input', function() {
  let value = celularInput.value.replace(/\D/g, ''); // Remove all non-digit characters
  if (value.length > 11) {
    value = value.slice(0, 11); // Limit to 11 digits (two digits for area code and nine digits for the phone number)
  }
  // Format the input as (XX) XXXXX-XXXX
  if (value.length <= 2) {
    celularInput.value = `(${value}`;
  } else if (value.length <= 7) {
    celularInput.value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
  } else {
    celularInput.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
  }
});


//MASKED TELEFONE------------------------------------------------------------------------------------------


const telefoneInput = document.getElementById('telefone');

    telefoneInput.addEventListener('input', function() {
      let value = telefoneInput.value.replace(/\D/g, ''); // Remove all non-digit characters
      if (value.length > 10) {
        value = value.slice(0, 10); // Limit to 10 digits (two digits for area code and eight digits for the phone number)
      }
      // Format the input as (XX) XXXX-XXXX
      if (value.length <= 2) {
        telefoneInput.value = `(${value}`;
      } else if (value.length <= 6) {
        telefoneInput.value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
      } else {
        telefoneInput.value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6, 10)}`;
      }
    });


// Variável privada do módulo (só acessível dentro deste arquivo)
let isLoggedIn = false;

// Função para alterar o estado
export const setLoggedIn = (value) => {
  isLoggedIn = value;
  // Sincroniza com sessionStorage para persistência
  sessionStorage.setItem('isLoggedIn', value.toString());
};

// Função para ler o estado
export const getLoggedIn = () => {
  // Verifica tanto a variável local quanto o sessionStorage
  return isLoggedIn || sessionStorage.getItem('isLoggedIn') === 'true';
};

// Função para logout
export const logout = () => {
  isLoggedIn = false;
  sessionStorage.removeItem('isLoggedIn');
};
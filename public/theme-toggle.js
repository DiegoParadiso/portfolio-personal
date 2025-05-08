document.addEventListener('DOMContentLoaded', () => {
    // Aplicar el tema guardado en localStorage o 'light' por defecto
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  
    // Definir la función para alternar el tema
    const toggleTheme = () => {
      const currentTheme = localStorage.getItem('theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
      // Cambiar el tema
      document.documentElement.setAttribute('data-theme', newTheme);
  
      // Guardar el nuevo tema en localStorage
      localStorage.setItem('theme', newTheme);
    };
  
    // Agregar el listener al botón de cambio de tema
    const themeButton = document.getElementById('theme-toggle');
    if (themeButton) {
      themeButton.addEventListener('click', toggleTheme);
    }
  });
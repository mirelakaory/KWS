function toggleMenu() {
    document
      .querySelector('.nav_list')
      .classList.toggle('active');
  }
  document.querySelectorAll('.nav_link').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('.nav_list').classList.remove('active');
    });
  });
  
  
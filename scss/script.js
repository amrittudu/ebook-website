function userScroll() {
   const navbar = document.querySelector('.navbar');
   const nameText = document.getElementById('namee');
   window.addEventListener('scroll', () => {

      if(window.scrollY > 50) {
         navbar.classList.add('bg-dark');
         nameText.style.color = 'red';
      }
      
      else {
         navbar.classList.remove('bg-dark');
         navbar.classList.remove('navbar-sticky');
         nameText.style.color = 'yellow';
      }

   });

}

document.addEventListener('DOMContentLoaded',userScroll);
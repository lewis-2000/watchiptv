
document.addEventListener("DOMContentLoaded", function () {
      function openNav() {
          console.log('clicked');
          document.getElementById("mySidenav").style.width = "250px";
        }
        
        /* Set the width of the side navigation to 0 */
        function closeNav() {
          document.getElementById("mySidenav").style.width = "0";
        }


});

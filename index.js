$(document).ready(function(){
  $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      arrows: true,
      infinite: true,
      pauseOnHover: false,
      responsive: [
          {
              breakpoint: 1024,  // Screens smaller than 1024px
              settings: {
                  slidesToShow: 1,  // Show 2 slides instead of 3 on medium screens
                  slidesToScroll: 1,
                  dots: true,
                  arrows: false    // Disable arrows for a cleaner view on smaller screens
              }
          },
          {
              breakpoint: 768,   // Screens smaller than 768px (tablets)
              settings: {
                  slidesToShow: 1,  // Show only 1 slide on smaller devices
                  slidesToScroll: 1,
                  dots: true,
                  arrows: false
              }
          }
      ]
  });
});




// JavaScript for toggling the search bar
function toggleSearch() {
    // Get the search container element
    var searchContainer = document.querySelector('.search-container');
    
    // Toggle the 'active' class to show/hide the search bar
    searchContainer.classList.toggle('active');
  }

  
  function closeSearchBar() {
    const searchBar = document.getElementById('search-bar');
    const searchContainer = document.querySelector('.search-container'); // Assuming the search bar is wrapped in a container
    searchBar.value = ''; // Optionally clear the input field
    searchContainer.classList.remove('active'); // Hide the search bar container
}

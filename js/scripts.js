/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box-project-one'
      },{
        overlay:true
      });
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box-project-two'
      });
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box-project-three'
      });
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box-project-four'
      });
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box-project-five'
      });
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box-project-six'
      });




});

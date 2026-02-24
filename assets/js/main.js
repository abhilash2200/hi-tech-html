
var item = document.getElementById("MAIN");

  window.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) item.scrollLeft += 65;
    else item.scrollLeft -= 65;
  });

  

  document.addEventListener('DOMContentLoaded', function () {
    const ele = document.getElementById('MAIN');
    ele.style.cursor = 'auto';

    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function (e) {
        ele.style.cursor = 'grabbing';
        ele.style.userSelect = 'none';

        pos = {
            left: ele.scrollLeft,
            top: ele.scrollTop,
            // Get the current mouse position
            x: e.clientX,
            y: e.clientY,
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener("mouseup", mouseUpHandler);
    };

    const mouseMoveHandler = function (e) {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;

        // Scroll the element
        ele.scrollTop = pos.top - dy;
        ele.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function () {
        ele.style.cursor = 'auto';
        ele.style.removeProperty('user-select');

        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    // Attach the handler
    ele.addEventListener('mousedown', mouseDownHandler);
});



$(window).on('load', function() {
    setTimeout(()=>{
        $('#popup1').modal('show');
    },5000)
    
});

// Hero Section - Optimized Parallax Effects using GSAP ScrollTrigger
(function() {
    'use strict';
    
    if (typeof gsap === 'undefined' || !window.AnimationUtils) return;
    if (window.AnimationUtils.shouldDisableAnimations()) return;
    
    const heroSection = document.querySelector('.hero_sec_left');
    if (!heroSection) return;
    
    const smokeLayer = heroSection.querySelector('.bg-layer-smoke');
    const divineLayer = heroSection.querySelector('.bg-layer-divine');
    const radialGlow = heroSection.querySelector('.hero-radial-glow');
    
    // Use GSAP ScrollTrigger for performant, transform-only parallax
    if (smokeLayer) {
        gsap.to(smokeLayer, {
            y: 20,
            opacity: 0.7,
            ease: 'none',
            scrollTrigger: {
                trigger: heroSection,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                invalidateOnRefresh: true
            }
        });
    }
    
    if (divineLayer) {
        gsap.to(divineLayer, {
            y: 10,
            opacity: 0.8,
            ease: 'none',
            scrollTrigger: {
                trigger: heroSection,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                invalidateOnRefresh: true
            }
        });
    }
    
    if (radialGlow) {
        gsap.to(radialGlow, {
            scale: 1.05,
            opacity: 0.4,
            ease: 'none',
            scrollTrigger: {
                trigger: heroSection,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                invalidateOnRefresh: true
            }
        });
    }
})();
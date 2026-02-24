/**
 * Standardized Animation System
 * Production-ready GSAP/ScrollTrigger utilities for consistent scroll animations
 */

(function() {
    'use strict';

    // Early exit if GSAP not available
    if (typeof gsap === 'undefined') {
        console.warn('GSAP not loaded. Animations disabled.');
        return;
    }

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // ============================================
    // ANIMATION SYSTEM CONSTANTS
    // ============================================

    const MotionSystem = {
        // Duration presets (seconds)
        duration: {
            short: 0.4,
            medium: 0.8,
            long: 1.2
        },

        // Easing presets
        easing: {
            enter: 'power2.out',      // Smooth entry
            exit: 'power2.in',       // Smooth exit
            scrub: 'power1.inOut',    // Scroll-linked motion
            smooth: 'power3.out'     // Extra smooth
        },

        // Transform distances (pixels)
        distance: {
            small: 20,
            medium: 40,
            large: 60
        },

        // Stagger delays (seconds)
        stagger: {
            tight: 0.05,
            normal: 0.1,
            loose: 0.15
        },

        // ScrollTrigger defaults
        trigger: {
            start: 'top 85%',         // Trigger when element is 85% down viewport
            end: 'bottom 20%',
            once: true,               // Play once by default
            markers: false            // Set to true for debugging
        }
    };

    // ============================================
    // ACCESSIBILITY CHECK
    // ============================================

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    // ============================================
    // UTILITY FUNCTIONS
    // ============================================

    /**
     * Check if animations should be disabled
     */
    function shouldDisableAnimations() {
        return prefersReducedMotion || isMobile;
    }

    /**
     * Create a fade + translate animation
     * @param {Element|NodeList} elements - Elements to animate
     * @param {Object} options - Animation options
     */
    function fadeInUp(elements, options = {}) {
        if (!elements || (elements.length !== undefined && elements.length === 0)) return;
        
        if (shouldDisableAnimations()) {
            gsap.set(elements, { opacity: 1, y: 0 });
            return;
        }

        const {
            distance = MotionSystem.distance.medium,
            duration = MotionSystem.duration.medium,
            ease = MotionSystem.easing.enter,
            stagger = 0,
            trigger = null,
            start = MotionSystem.trigger.start,
            once = MotionSystem.trigger.once
        } = options;

        const config = {
            opacity: 0,
            y: distance
        };

        const animation = {
            opacity: 1,
            y: 0,
            duration: duration,
            ease: ease
        };

        if (stagger > 0) {
            animation.stagger = stagger;
        }

        if (trigger || elements.length > 1) {
            const triggerElement = trigger || (elements.length > 0 ? elements[0].parentElement : null);
            animation.scrollTrigger = {
                trigger: triggerElement || elements,
                start: start,
                toggleActions: once ? 'play none none none' : 'play none none reverse',
                once: once
            };
        }

        gsap.fromTo(elements, config, animation);
    }

    /**
     * Create a scale + fade animation (for images)
     * @param {Element|NodeList} elements - Elements to animate
     * @param {Object} options - Animation options
     */
    function scaleIn(elements, options = {}) {
        if (!elements || (elements.length !== undefined && elements.length === 0)) return;
        
        if (shouldDisableAnimations()) {
            gsap.set(elements, { opacity: 1, scale: 1 });
            return;
        }

        const {
            scale = 1.05,
            duration = MotionSystem.duration.medium,
            ease = MotionSystem.easing.enter,
            stagger = 0,
            trigger = null,
            start = MotionSystem.trigger.start,
            once = MotionSystem.trigger.once
        } = options;

        const config = {
            opacity: 0,
            scale: scale
        };

        const animation = {
            opacity: 1,
            scale: 1,
            duration: duration,
            ease: ease
        };

        if (stagger > 0) {
            animation.stagger = stagger;
        }

        if (trigger || elements.length > 1) {
            const triggerElement = trigger || (elements.length > 0 ? elements[0].parentElement : null);
            animation.scrollTrigger = {
                trigger: triggerElement || elements,
                start: start,
                toggleActions: once ? 'play none none none' : 'play none none reverse',
                once: once
            };
        }

        gsap.fromTo(elements, config, animation);
    }

    /**
     * Create a subtle parallax effect (transform-only, performance-optimized)
     * @param {Element} element - Element to parallax
     * @param {Object} options - Parallax options
     */
    function parallax(element, options = {}) {
        if (shouldDisableAnimations() || !element) return;

        const {
            speed = 0.5,              // 0.5 = moves at half scroll speed
            direction = 'y',          // 'y' or 'x'
            start = 'top bottom',
            end = 'bottom top'
        } = options;

        const property = direction === 'y' ? 'y' : 'x';
        const value = direction === 'y' ? speed * 100 : speed * 100;

        gsap.to(element, {
            [property]: value,
            ease: 'none',
            scrollTrigger: {
                trigger: element,
                start: start,
                end: end,
                scrub: true,
                invalidateOnRefresh: true
            }
        });
    }

    /**
     * Animate text with character/word stagger
     * @param {Element|NodeList} elements - Text elements
     * @param {Object} options - Animation options
     */
    function animateText(elements, options = {}) {
        if (shouldDisableAnimations()) {
            gsap.set(elements, { opacity: 1, y: 0 });
            return;
        }

        const {
            distance = MotionSystem.distance.small,
            duration = MotionSystem.duration.medium,
            ease = MotionSystem.easing.enter,
            stagger = MotionSystem.stagger.tight,
            trigger = null,
            start = MotionSystem.trigger.start,
            once = MotionSystem.trigger.once
        } = options;

        fadeInUp(elements, {
            distance,
            duration,
            ease,
            stagger,
            trigger,
            start,
            once
        });
    }

    /**
     * Batch animate children with stagger
     * @param {Element} container - Parent container
     * @param {string} selector - Child selector
     * @param {Object} options - Animation options
     */
    function staggerChildren(container, selector, options = {}) {
        if (!container) return;

        const children = container.querySelectorAll(selector);
        if (children.length === 0) return;

        const {
            distance = MotionSystem.distance.medium,
            duration = MotionSystem.duration.medium,
            ease = MotionSystem.easing.enter,
            stagger = MotionSystem.stagger.normal,
            start = MotionSystem.trigger.start,
            once = MotionSystem.trigger.once
        } = options;

        fadeInUp(children, {
            distance,
            duration,
            ease,
            stagger,
            trigger: container,
            start,
            once
        });
    }

    // ============================================
    // EXPOSE TO GLOBAL SCOPE
    // ============================================

    window.MotionSystem = MotionSystem;
    window.AnimationUtils = {
        fadeInUp,
        scaleIn,
        parallax,
        animateText,
        staggerChildren,
        shouldDisableAnimations
    };

})();

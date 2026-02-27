<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="./assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/css/style.css">
    <link rel="stylesheet" href="./assets/css/responsive.css">
</head>

<body style="overflow: scroll;">
    <?php include 'components/header.php'; ?>
    <section class="innerBlog">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div>
                        <h1 class="fs-4">
                            WHY BENGALI NEW YEAR IS A GREAT DIGITAL MARKETING OPPORTUNITY?
                        </h1>
                    </div>
                    <div>
                        <img class="rounded" src="./assets/img/blogs/seo-services-17-02-2024.jpg" alt="" width="100%"
                            height="100%">
                    </div>
                    <div class="d-flex gap-3 pt-2">
                        <div>
                            <p>By Admin</p>
                        </div>
                        <div>
                            <p>24 Apr 2024</p>
                        </div>
                    </div>
                    <div>
                        <h4>Table Of Content</h4>
                        <a href="#">
                            <p># Google My Business: Stimulating Kolkata Businesses</p>
                        </a>
                        <a href="#">
                            <p># laiming Your Throne: The Rudiments of GMB Setup</p>
                        </a>
                        <a href="#">
                            <p># Maintaining Your Reign Strategies for an Important GMB Profile</p>
                        </a>
                        <a href="#">
                            <p># Professional Local SEO Company in Kolkata: Your Royal Advisors</p>
                        </a>
                    </div>
                    <div class="mt-3">
                        <p>
                            In the fastest-evolving realm of local SEO (Search Engine Optimization), Google My Business
                            (GMB) stands as your digital kingdom. It's your gateway to dominating Kolkata's search
                            results and attracting a loyal legion of local customers. But conquering this digital sphere
                            requires learning its secrets. Here is your guide to claiming your throne and ruling the
                            local SEO terrain with the power of Google My Business.
                        </p>
                        <h2 class="fs-4">Google My Business: Stimulating Kolkata Businesses</h2>
                    </div>
                    <div class="mt-3">
                        <p>
                            In the fastest-evolving realm of local SEO (Search Engine Optimization), Google My Business
                            (GMB) stands as your digital kingdom. It's your gateway to dominating Kolkata's search
                            results and attracting a loyal legion of local customers. But conquering this digital sphere
                            requires learning its secrets. Here is your guide to claiming your throne and ruling the
                            local SEO terrain with the power of Google My Business.
                        </p>
                        <p>
                            In the fastest-evolving realm of local SEO (Search Engine Optimization), Google My Business
                            (GMB) stands as your digital kingdom. It's your gateway to dominating Kolkata's search
                            results and attracting a loyal legion of local customers. But conquering this digital sphere
                            requires learning its secrets. Here is your guide to claiming your throne and ruling the
                            local SEO terrain with the power of Google My Business.
                        </p>
                        <h2 class="fs-4">Google My Business: Stimulating Kolkata Businesses</h2>
                    </div>
                    <div class="mt-3">
                        <p>
                            In the fastest-evolving realm of local SEO (Search Engine Optimization), Google My Business
                            (GMB) stands as your digital kingdom. It's your gateway to dominating Kolkata's search
                            results and attracting a loyal legion of local customers. But conquering this digital sphere
                            requires learning its secrets. Here is your guide to claiming your throne and ruling the
                            local SEO terrain with the power of Google My Business.
                        </p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div>
                        <div class="login-box p-4">
                            <div class="mb-0">
                                <svg viewBox="0 0 1320 300" style="width: 40%;">
                                    <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                                        Admission Open
                                    </text>
                                </svg>
                            </div>
                            <form>
                                <div class="user-box">
                                    <input type="text" name="name" required="">
                                    <label>Name</label>
                                </div>
                                <div class="user-box">
                                    <input type="email" name="email" required="">
                                    <label>Email</label>
                                </div>
                                <div class="user-box">
                                    <input type="tel" name="phone" required="">
                                    <label>Phone No.</label>
                                </div>
                                <div class="user-box">
                                    <input type="text" name="course" required="">
                                    <label>Course</label>
                                </div>
                                <a href="#">
                                    Apply Now
                                    <span></span>
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <script src="./assets/js/jquery.min.js"></script>
    <script src="./assets/js/bootstrap.bundle.min.js"></script>
    <!-- GSAP Core & Plugins -->
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
    <!-- Animation System -->
    <script src="./assets/js/animations.js"></script>
    <script src="./assets/js/main.js"></script>
    <!-- Page-specific animations -->
    <script>
        (function () {
            'use strict';
            if (typeof gsap === 'undefined' || !window.AnimationUtils) return;

            // Blog content sections
            const blogSections = document.querySelectorAll('main section, article, .blog-content');
            if (blogSections.length > 0) {
                blogSections.forEach((section) => {
                    const headings = section.querySelectorAll('h1, h2, h3');
                    const paragraphs = section.querySelectorAll('p');
                    const images = section.querySelectorAll('img');

                    if (headings.length > 0) {
                        window.AnimationUtils.fadeInUp(headings, {
                            distance: 30,
                            duration: 0.8,
                            stagger: 0.1,
                            trigger: section,
                            start: 'top 85%',
                            once: true
                        });
                    }

                    if (paragraphs.length > 0) {
                        window.AnimationUtils.fadeInUp(paragraphs, {
                            distance: 20,
                            duration: 0.6,
                            stagger: 0.05,
                            trigger: section,
                            start: 'top 80%',
                            once: true
                        });
                    }

                    if (images.length > 0) {
                        window.AnimationUtils.scaleIn(images, {
                            scale: 1.05,
                            duration: 0.8,
                            stagger: 0.1,
                            trigger: section,
                            start: 'top 80%',
                            once: true
                        });
                    }
                });
            }

            // Refresh ScrollTrigger on resize
            let resizeTimer;
            window.addEventListener('resize', function () {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(function () {
                    ScrollTrigger.refresh();
                }, 250);
            });
        })();
    </script>
</body>

</html>
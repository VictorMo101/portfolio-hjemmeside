document.addEventListener("DOMContentLoaded", () => {
    const mediaQuery = window.matchMedia("(max-width: 770px)");

    // Function to check if animations should run
    function shouldRunAnimations() {
        return !mediaQuery.matches; // Only run animations if screen width is greater than 770px
    }

    // Smooth scrolling logic (unchanged)
    const addSmoothScroll = (selector, targetId) => {
        const link = document.querySelector(selector);
        if (link) {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                document.querySelector(targetId).scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            });
        }
    };

    addSmoothScroll('a[href="#about_Me"]', "#about_Me");
    addSmoothScroll('a[href="#experience"]', "#experience");
    addSmoothScroll('a[href="#projects"]', "#projects");
    addSmoothScroll('a[href="#gallery"]', "#gallery");
    addSmoothScroll('a[href="#contactMe"]', "#contactMe");
    addSmoothScroll('a[href="#home"]', "#home");

    
    
    
    // Hero Blob Animation
    const heroBlob = document.getElementById("heroBlob");
    if (heroBlob && shouldRunAnimations()) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    anime({
                        targets: "#heroBlob",
                        opacity: [0, 1],
                        duration: 1500,
                        easing: "easeOutQuad",
                        complete: () => {
                            document.getElementById("heroBlob").style.opacity = "1";
                        },
                    });
                    observer.unobserve(heroBlob);
                }
            });
        });
        observer.observe(heroBlob);
    }






 // Initialize the current index of the slide to 0
 let currentIndex = 0;
 
 // Function to display a specific slide based on the given index
 function showSlide(index) {
     // Get the carousel element by its ID
     const carousel = document.getElementById('carousel');
     // Get the total number of slides in the carousel
     const totalSlides = carousel.children.length;
 
     // Wrap around the index if it goes out of bounds
     currentIndex = (index + totalSlides) % totalSlides;
 
     // Calculate the offset to move the carousel to the correct slide
     const offset = -currentIndex * 100; // Each slide is assumed to take up 100% width
     // Apply the calculated offset to the carousel's transform property
     carousel.style.transform = `translateX(${offset}%)`;
 }
 
 // Function to move to the next slide
 function nextSlide() {
     // Increment the current index and show the next slide
     showSlide(currentIndex + 1);
 }
 
 // Optional: Automatically move to the next slide every 5 seconds
 setInterval(() => {
     nextSlide();
 }, 3000);





    // Animated Text
    const animatedText = document.getElementById("animatedText");
    if (animatedText && shouldRunAnimations()) {
        const observer = new IntersectionObserver(([entry], obs) => {
            if (entry.isIntersecting) {
                anime({
                    targets: "#animatedText",
                    opacity: [0, 1],
                    translateX: ["0%", "-50%"],
                    duration: 800,
                    easing: "easeInQuad",
                });
                obs.unobserve(animatedText);
            }
        }, { threshold: 0.5 });
        observer.observe(animatedText);
    }

    const videoSection = document.getElementById("videoSection");
    if (videoSection && shouldRunAnimations()) {
        const observer = new IntersectionObserver(([entry], obs) => {
            if (entry.isIntersecting) {
                anime({
                    targets: "#videoSection",
                    opacity: [0, 1],
                    translateX: ["-50%", "0%"],
                    duration: 600,
                    easing: "easeInQuad",
                });
                obs.unobserve(videoSection);
            }
        }, { threshold: 0.5 });
        observer.observe(videoSection);
    }



    // Experience List Animation
    const experienceList = document.getElementById("experienceList");
    if (experienceList && shouldRunAnimations()) {
        const observer = new IntersectionObserver(([entry], obs) => {
            if (entry.isIntersecting) {
                anime({
                    targets: "#experienceList",
                    opacity: [0, 1],
                    translateY: ["30%", "0"],
                    duration: 600,
                    easing: "easeInQuad",
                });
                obs.unobserve(experienceList);
            }
        }, { threshold: 0.5 });
        observer.observe(experienceList);
    }

    // Project Pics Animation
    const projectPics = document.getElementById("projectPics");
    if (projectPics && shouldRunAnimations()) {
        const observer = new IntersectionObserver(([entry], obs) => {
            if (entry.isIntersecting) {
                anime({
                    targets: "#projectPics",
                    opacity: [0, 1],
                    translateY: ["30%", "0"],
                    duration: 600,
                    easing: "easeInQuad",
                });
                obs.unobserve(projectPics);
            }
        }, { threshold: 0.5 });
        observer.observe(projectPics);
    }

    // Gallery Pics Animation
    const galleryPics = document.getElementById("galleryPics");
    if (galleryPics && shouldRunAnimations()) {
        const observer = new IntersectionObserver(([entry], obs) => {
            if (entry.isIntersecting) {
                anime({
                    targets: "#galleryPics",
                    opacity: [0, 1],
                    translateY: ["30%", "0"],
                    duration: 600,
                    easing: "easeInQuad",
                });
                obs.unobserve(galleryPics);
            }
        }, { threshold: 0.5 });
        observer.observe(galleryPics);
    }

    // Popup Box Logic (unchanged)
    const popupBox = document.getElementById("popupBox");
    const ProjectLink = document.querySelector(".project a");
    const closePopup = document.getElementById("closePopup");

    if (popupBox && ProjectLink && closePopup) {
        ProjectLink.addEventListener("click", (e) => {
            e.preventDefault();
            popupBox.classList.remove("popupboxhidden");
        });

        closePopup.addEventListener("click", () => {
            popupBox.classList.add("popupboxhidden");
        });
    }
});


const dropdownButton = document.querySelector(".drop_Down button");
    const dropdownContent = document.querySelector(".drop_Down_Content");
    const dropdownLinks = document.querySelectorAll(".drop_Down_Content a");

    // Toggle the dropdown menu when the button is clicked
    dropdownButton.addEventListener("click", () => {
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none"; // Hide the menu
        } else {
            dropdownContent.style.display = "block"; // Show the menu
        }
    });

    // Close the dropdown menu when a link is clicked
    dropdownLinks.forEach((link) => {
        link.addEventListener("click", () => {
            dropdownContent.style.display = "none"; // Hide the menu
        });
    });
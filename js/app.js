document.addEventListener("DOMContentLoaded", () => {
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

    // Apply smooth scrolling to links
    addSmoothScroll('a[href="#about_Me"]', "#about_Me");
    addSmoothScroll('a[href="#experience"]', "#experience");
    addSmoothScroll('a[href="#projects"]', "#projects");
    addSmoothScroll('a[href="#gallery"]', "#gallery");
    addSmoothScroll('a[href="#contactMe"]', "#contactMe");
    addSmoothScroll('a[href="#home"]', "#home");
    


    const heroBlob = document.getElementById("heroBlob");
    if (heroBlob) {
        // Create an Intersection Observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Trigger Anime.js animation
                        anime({
                            targets: "#heroBlob",
                            opacity: [0, 1], // Fade in
                            duration: 1500, // Animation duration in ms
                            easing: "easeOutQuad", // Smooth easing
                            complete: () => {
                                // Explicitly set the final state
                                document.getElementById("heroBlob").style.opacity = "1";
                            },
                        });

                        // Stop observing after animation is triggered
                        observer.unobserve(heroBlob);
                    }
                });
            }
        );

        // Observe the target element
        observer.observe(heroBlob);
    }
});

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
}, 5000);



    // Animation for #animatedText
    const animatedText = document.getElementById("animatedText");
    if (animatedText) {
        new IntersectionObserver(([entry], obs) => {
            if (entry.isIntersecting) {
                anime({
                    targets: "#animatedText",
                    opacity: [0, 1],
                    translateX: ["70%", "-50%"],
                    duration: 800,
                    easing: "easeInQuad",
                });
                obs.unobserve(animatedText);
            }
        }, { threshold: 0.5 }).observe(animatedText);
    }



    const experienceList = document.getElementById("experienceList");
    if (experienceList) {
        new IntersectionObserver(([entry], obs) => {
            if (entry.isIntersecting) {
                anime({
                    targets: "#experienceList",
                    opacity: [0, 1],
                    duration: 600,
                    easing: "easeInQuad",
                });
                obs.unobserve(experienceList);
            }
        }, { threshold: 0.5 }).observe(experienceList);
    }

    
        const popupBox = document.getElementById("popupBox");
        const ProjectLink = document.querySelector(".project a");
        const closePopup = document.getElementById("closePopup");
    
        // Show the popup box when the link is clicked
        ProjectLink.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent the default link behavior
            popupBox.classList.remove("popupboxhidden"); // Show the popup box
        });
    
        // Hide the popup box when the close button is clicked
        closePopup.addEventListener("click", () => {
            popupBox.classList.add("popupboxhidden"); // Hide the popup box
        });

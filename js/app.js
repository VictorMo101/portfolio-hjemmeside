document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll for "About me" button
    const aboutMeLink = document.querySelector('a[href="#aboutMe"]');
    if (aboutMeLink) {
        aboutMeLink.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default anchor behavior
            document.querySelector("#aboutMe").scrollIntoView({
                behavior: "smooth", // Smooth scrolling
                block: "start", // Align to the top of the section
            });
        });
    }



    // Animation for #animatedText
    const animatedText = document.getElementById("animatedText");
    if (animatedText) {
        // Create an Intersection Observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Trigger Anime.js animation
                        anime({
                            targets: "#animatedText",
                            opacity: [0, 1], // Fade in
                            translateX: ["70%", "-50%"], // Slide in from the left
                            duration: 800, // Animation duration in ms
                            easing: "easeInQuad", // Easing function
                        });

                        // Stop observing after animation is triggered
                        observer.unobserve(animatedText);
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of the element is visible
        );

        // Observe the target element
        observer.observe(animatedText);
    }



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
            },
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



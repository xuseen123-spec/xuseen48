// ==============================
// MOBILE MENU
// ==============================

const menuToggle =
    document.getElementById("menuToggle");

const mainNav =
    document.getElementById("mainNav");


if (menuToggle && mainNav) {

    menuToggle.addEventListener(
        "click",
        function () {

            mainNav.classList.toggle("active");

        }
    );

}



// ==============================
// CONTACT FORM
// ==============================

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

const errorMessage =
    document.getElementById("errorMessage");

const nameInput =
    document.getElementById("name");

const emailInput =
    document.getElementById("email");

const messageInput =
    document.getElementById("message");


if (
    contactForm &&
    formMessage &&
    errorMessage &&
    nameInput &&
    emailInput &&
    messageInput
) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                nameInput.value.trim();

            const email =
                emailInput.value.trim();

            const message =
                messageInput.value.trim();


            // Clear previous messages

            errorMessage.textContent = "";

            errorMessage.classList.remove("show");

            formMessage.textContent = "";

            formMessage.classList.remove("success");


            // Name validation

            if (name.length < 3) {

                errorMessage.textContent =
                    "Please enter your full name.";

                errorMessage.classList.add("show");

                return;
            }


            // Email validation

            if (
                !email.includes("@") ||
                !email.includes(".")
            ) {

                errorMessage.textContent =
                    "Please enter a valid email address.";

                errorMessage.classList.add("show");

                return;
            }


            // Message validation

            if (message.length < 10) {

                errorMessage.textContent =
                    "Your message must be at least 10 characters.";

                errorMessage.classList.add("show");

                return;
            }


            // Success message

            formMessage.textContent =
                "Message sent successfully!";

            formMessage.classList.add("success");


            // Reset form

            contactForm.reset();


            // Show toast

            showToast(
                "Message sent successfully!"
            );

        }
    );

}



// ==============================
// DARK MODE
// ==============================

const themeToggle =
    document.getElementById("themeToggle");


if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "dark-mode"
            );


            if (
                document.body.classList.contains(
                    "dark-mode"
                )
            ) {

                themeToggle.textContent =
                    "☀️ Light Mode";

                localStorage.setItem(
                    "theme",
                    "dark"
                );

            } else {

                themeToggle.textContent =
                    "🌙 Dark Mode";

                localStorage.setItem(
                    "theme",
                    "light"
                );

            }

        }
    );

}


// Check saved theme

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add(
        "dark-mode"
    );


    if (themeToggle) {

        themeToggle.textContent =
            "☀️ Light Mode";

    }

}



// ==============================
// IMAGE SLIDER
// ==============================

const sliderImage =
    document.getElementById("sliderImage");

const prevButton =
    document.getElementById("prevButton");

const nextButton =
    document.getElementById("nextButton");


const sliderImages = [

    "images/image1.jpg",

    "images/image2.jpg",

    "images/image3.jpg"

];


let currentImage = 0;


if (
    sliderImage &&
    prevButton &&
    nextButton
) {


    nextButton.addEventListener(
        "click",
        function () {

            currentImage++;


            if (
                currentImage >=
                sliderImages.length
            ) {

                currentImage = 0;

            }


            sliderImage.src =
                sliderImages[currentImage];

        }
    );


    prevButton.addEventListener(
        "click",
        function () {

            currentImage--;


            if (currentImage < 0) {

                currentImage =
                    sliderImages.length - 1;

            }


            sliderImage.src =
                sliderImages[currentImage];

        }
    );

}



// ==============================
// SERVICES SEARCH
// ==============================

const serviceSearch =
    document.getElementById("serviceSearch");

const serviceCards =
    document.querySelectorAll(
        ".service-card"
    );


if (serviceSearch) {

    serviceSearch.addEventListener(
        "input",
        function () {

            const searchText =
                serviceSearch.value
                .toLowerCase()
                .trim();


            serviceCards.forEach(
                function (card) {

                    const heading =
                        card.querySelector("h3");


                    if (!heading) {

                        return;

                    }


                    const serviceName =
                        heading.textContent
                        .toLowerCase();


                    if (
                        serviceName.includes(
                            searchText
                        )
                    ) {

                        card.style.display =
                            "block";

                    } else {

                        card.style.display =
                            "none";

                    }

                }
            );

        }
    );

}



// ==============================
// SCROLL ANIMATION
// ==============================

const animatedElements =
    document.querySelectorAll(
        ".scroll-animation"
    );


if (
    animatedElements.length > 0 &&
    "IntersectionObserver" in window
) {

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "show"
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.2
            }
        );


    animatedElements.forEach(
        function (element) {

            observer.observe(element);

        }
    );

}



// ==============================
// BACK TO TOP BUTTON
// ==============================

const backToTop =
    document.getElementById("backToTop");


if (backToTop) {


    window.addEventListener(
        "scroll",
        function () {

            if (
                window.scrollY > 300
            ) {

                backToTop.classList.add(
                    "show"
                );

            } else {

                backToTop.classList.remove(
                    "show"
                );

            }

        }
    );


    backToTop.addEventListener(
        "click",
        function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}



// ==============================
// TOAST NOTIFICATION
// ==============================

const toast =
    document.getElementById("toast");


function showToast(message) {

    if (!toast) {

        return;

    }


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    setTimeout(
        function () {

            toast.classList.remove(
                "show"
            );

        },
        3000
    );

}



// ==============================
// LOADING SCREEN
// ==============================

const loadingScreen =
    document.getElementById(
        "loadingScreen"
    );


window.addEventListener(
    "load",
    function () {

        if (loadingScreen) {

            loadingScreen.classList.add(
                "hidden"
            );

        }

    }
);
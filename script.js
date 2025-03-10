document.addEventListener("DOMContentLoaded", function () {
    // Load the Navbar dynamically
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;

            const currentPage = window.location.pathname.split("/").pop();
            const navLinks = document.querySelectorAll("nav ul li a");

            navLinks.forEach(link => {
                if (link.getAttribute("href") === currentPage) {
                    link.classList.add("active");
                }
            });
        })
        .catch(error => console.error("Error loading navbar:", error));

    // Featured Edition
    const featuredEdition = document.getElementById('featured-edition');
    if (featuredEdition) {
        const editions = [
            { title: "Reproductive Health", color: "#ff5733", pdf: "pdfs/reproductive_health.pdf" },
            { title: "Environmental Health and Sustainability", color: "#28a745", pdf: "pdfs/environmental_health.pdf" }
        ];

        const randomEdition = editions[Math.floor(Math.random() * editions.length)];
        document.body.style.backgroundColor = randomEdition.color;

        featuredEdition.innerHTML = `
            <h3>Featured Edition: ${randomEdition.title}</h3>
            <a href="${randomEdition.pdf}" download>Download Now</a>
        `;
    }

    // Initialize Firebase using the CDN
    const firebaseConfig = {
        apiKey: "AIzaSyC0WfmZ6gpkzVt98cj7QgVX4NzvwbEQ7Bs",
        authDomain: "curam-magazine.firebaseapp.com",
        projectId: "curam-magazine",
        storageBucket: "curam-magazine.firebasestorage.app",
        messagingSenderId: "211994963594",
        appId: "1:211994963594:web:e9efee5c31f7c7acb90773",
        measurementId: "G-B971550HPM"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            auth.signInWithEmailAndPassword(email, password)
                .then(userCredential => {
                    console.log("Logged in as", userCredential.user.email);
                })
                .catch(error => {
                    console.error("Error signing in: ", error);
                });
        });
    }
});

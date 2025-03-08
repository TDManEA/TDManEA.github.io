// Magazine Rotation: Change featured edition on page load
const featuredEdition = document.getElementById('featured-edition');

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

// Firebase Login System (simplified for use with Firebase Auth)
firebase.initializeApp({
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    projectId: "your-project-id"
});

const auth = firebase.auth();
const loginForm = document.getElementById('login-form');

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

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CURAM Magazine</title>
    <link rel="stylesheet" href="styles.css">

    <!-- Firebase SDK (must be before script.js) -->
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js"></script>

    <!-- Load script.js after Firebase SDK -->
    <script defer src="script.js"></script>
</head>
<body>
    <!-- Navigation Bar is dynamically loaded from navbar.html -->
    <div id="navbar-container"></div>

    <header>
        <h1>CURAM Magazine</h1>
        <p>Advancing Health Literacy for USC and South Los Angeles Communities</p>
    </header>

    <main>
        <!-- Featured Section -->
        <section class="featured">
            <h2>Featured Magazine Edition</h2>
            <div id="featured-edition">
                <!-- Dynamic magazine content will load here -->
            </div>
        </section>

        <!-- About Us Section -->
        <section class="about">
            <h2>About Us</h2>
            <p>We are a non-profit organization dedicated to advancing health literacy and sustainability through our bilingual magazine.</p>
        </section>

        <!-- Spotify Playlist Section (with spinning effect) -->
        <!--
        <section class="spotify-section">
            <h2>Curated Playlist</h2>
            <p>Enjoy our featured playlist while browsing!</p>
            <div id="turntable-container">
                <img src="turntable-image.png" alt="Turntable" class="turntable-image">
                <iframe src="https://open.spotify.com/embed/playlist/5sBFFQsnPRolDYkrtjdyGx?utm_source=generator"
                        width="0" height="0" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
        </section>
        -->
    </main>

    <footer>
        <p>&copy; 2025 CURAM Magazine | All Rights Reserved</p>
    </footer>
</body>
</html>

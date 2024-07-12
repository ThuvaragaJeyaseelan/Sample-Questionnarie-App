<template>
  <div id="about" class="d-flex flex-column align-items-center text-center bg-light py-5">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Home</router-link>
        <router-link to="/about" class="navbar-brand">About</router-link>
      </div>
    </nav>
    <div class="container mt-5 pt-5 box-shadow">
      <h1 class="display-5 text-dark mb-4">About Science Questionnaire</h1>
      <p class="lead mb-4 text-black">Welcome to Science Questionnaire, your go-to platform for model questions in Maths, Biology, Chemistry, and Physics.</p>
      
      <section class="mb-5">
        <h2 class="h3 mb-3 text-dark">Our Mission</h2>
        <p class="mb-4 text-black">Our mission is to provide students with effective tools to enhance their understanding and preparation in science subjects through interactive quizzes and assessments.</p>
      </section>
      
      <section class="mb-5">
        <h2 class="h3 mb-3 text-dark">Why Choose Us?</h2>
        <ul class="list-unstyled text-black">
          <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>Comprehensive coverage of core science subjects</li>
          <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>Interactive and engaging learning experience</li>
          <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>Real-time feedback and performance tracking</li>
          <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>Accessible anytime, anywhere</li>
        </ul>
      </section>
      
      <section class="mb-5">
        <h2 class="h3 mb-3 text-dark">Contact Us</h2>
        <p class="mb-2 text-black">Have questions or feedback? Feel free to reach out to us:</p>
        <p class="mb-2 text-black"><i class="bi bi-envelope-fill me-2"></i>Email: contact@sciencequestionnaire.com</p>
        <p class="text-black">Follow us on 
          <a href="#" class="text-primary">Twitter</a> and 
          <a href="#" class="text-primary">Facebook</a> for updates.
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped>
#about {
  background-image: url('~@/assets/background.jpg'); /* Adjust the path to your background image */
  background-size: cover;
  background-position: center;
  color: #333;
  min-height: 90vh; /* Ensure it covers the full height of the viewport */
}

.navbar-brand {
  font-size: 18px;
  margin: 0 15px;
  transition: color 0.3s ease;
}

.navbar-brand:hover {
  color: #42b983 !important; /* Change to a color you prefer */
}

.container {
  background-color: rgba(255, 255, 255, 0.65);
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3); /* Shading effect */
}

h1 {
  font-size: 2.5rem; /* Reduced font size */
  color: #343a40; /* Darker color for better visibility */
}

h2 {
  color: #343a40; /* Darker color for better visibility */
}

.bi-check-circle-fill {
  font-size: 1.2em;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.text-black {
  color: #000 !important; /* Ensure content text is black */
}
</style>

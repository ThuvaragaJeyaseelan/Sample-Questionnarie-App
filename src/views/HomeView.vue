<template>
  <div id="home" class="bg-light min-vh-100 d-flex flex-column">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <router-link to="/" class="navbar-brand">Science Questionnaire</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container mt-5 pt-5">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <div class="card bg-dark text-white">
            <div class="card-body">
              <h1 class="card-title mb-4">Welcome to Science Questionnaire</h1> <!-- Added mb-4 class -->
              <p class="card-text">
                This website is dedicated to helping students excel in their studies by providing a wealth of model questions in various subjects. Our goal is to make learning engaging and effective through interactive quizzes and detailed explanations.
              </p>
              <ul class="list-group list-group-flush">
                <li class="list-group-item bg-dark text-white">Comprehensive model questions in Maths, Biology, Chemistry, and Physics</li>
                <li class="list-group-item bg-dark text-white">Interactive quizzes to test your knowledge</li>
                <li class="list-group-item bg-dark text-white">Detailed explanations for each question</li>
                <li class="list-group-item bg-dark text-white">User-friendly interface for a smooth learning experience</li>
                <li class="list-group-item bg-dark text-white">Regular updates with new questions and topics</li>
              </ul>
              <button class="btn btn-primary mt-3" @click="navigateToLogin">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    navigateToLogin() {
      this.$router.push('/login'); // Navigate to the login page
      console.log('Navigate to login page');
    }
  }
}
</script>

<style scoped>
#home {
  background-image: url('~@/assets/background.jpg');
  background-size: cover;
  background-position: center;
  color: white;
}

.navbar .nav-link {
  color: white;
}

.navbar .nav-link:hover {
  color: #42b983; /* Change to a color you prefer */
}

.container {
  text-align: left; /* Align text to the left for better readability */
  background-color: rgba(0, 0, 0, 0.4); /* Semi-transparent background to enhance text readability */
  padding: 20px;
  border-radius: 10px;
  margin-top: 40px; /* Adjust for the fixed navbar */
  max-width: 1000px; /* Set a max-width to center content */
}

ul {
  list-style-type: disc; /* Use disc bullets */
  padding-left: 20px; /* Add padding to indent the list */
  text-align: left; /* Align text to the left */
}

p, ul {
  margin-bottom: 20px;
}

.card-title {
  margin-top: 3rem; 
  margin-bottom: 1rem; /* Added margin bottom to create space */
  font-size: 2rem; /* Adjust font size as needed */
}
</style>

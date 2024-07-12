<template>
    <div id="dashboard" class="d-flex flex-column justify-content-center align-items-center text-center">
      <div class="container p-4 bg-light rounded shadow-lg">
        <nav class="navigation-links">
          <div class="profile mb-4 d-flex flex-column align-items-center"> <!-- Adjusted to flex-column -->
            <img :src="profileImage" alt="Profile Image" class="profile-image rounded-circle mb-3"> <!-- Added mb-3 -->
            <span class="username h4 text-black">{{ username }}</span> <!-- Changed text color to black -->
          </div>
          <ul class="nav nav-pills flex-column flex-sm-row justify-content-center">
            <li class="nav-item">
              <router-link to="/maths" class="nav-link">Maths</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/biology" class="nav-link">Biology</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/chemistry" class="nav-link">Chemistry</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/physics" class="nav-link">Physics</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Dashboard',
    data() {
      return {
        username: '', // Initially empty
        profileImage: require('@/assets/user-profile-icon.png') // Default profile image path
      };
    },
    created() {
      // Retrieve user data from local storage
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        this.username = user.username; // Set the username from stored user data
      } else {
        // Handle case when user data is not available (e.g., redirect to login)
        this.$router.push('/login');
      }
    }
  }
  </script>
  
  <style scoped>
  #dashboard {
    background-image: url('~@/assets/background.jpg');
    background-size: cover;
    background-position: center;
    color: white;
    height: 100vh;
  }
  
  .container {
    background-color: rgba(255, 255, 255, 0.9);
  }
  
  .profile {
    display: flex;
    flex-direction: column; /* Adjusted to flex-column */
    align-items: center; /* Center items horizontally */
    justify-content: center; /* Center items vertically */
  }
  
  .profile-image {
    width: 100px; /* Increased size */
    height: 100px; /* Increased size */
    border-radius: 50%;
  }
  
  .username {
    font-size: 24px;
    font-weight: bold;
    color: black; /* Set the text color to black */
  }
  
  .navigation-links ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;
  }
  
  .navigation-links ul li {
    margin-bottom: 10px;
  }
  
  .navigation-links ul li a {
    color: #700d8e;
    text-decoration: none;
    font-size: 18px;
  }
  
  .navigation-links ul li a:hover {
    text-decoration: underline;
  }
  
  @media (min-width: 576px) {
    .navigation-links ul {
      flex-direction: row;
    }
  
    .navigation-links ul li {
      margin-bottom: 0;
      margin-right: 15px;
    }
  }
  </style>
  
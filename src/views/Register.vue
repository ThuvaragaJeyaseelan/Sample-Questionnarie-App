<template>
    <div class="register-page d-flex justify-content-center align-items-center vh-100 bg-light">
      <div class="register-form card p-4 shadow-lg">
        <h2 class="text-center mb-4">Register</h2>
        <form @submit.prevent="register">
          <div class="mb-3">
            <label for="email" class="form-label">Email Address</label>
            <input type="email" id="email" v-model="email" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input type="text" id="username" v-model="username" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" id="password" v-model="password" class="form-control" required>
          </div>
          <button type="submit" class="btn btn-primary w-50">Register</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Register',
    data() {
      return {
        email: '',
        username: '',
        password: ''
      };
    },
    methods: {
      register() {
        // Create user object with registration data
        const newUser = {
          email: this.email,
          username: this.username,
          password: this.password
        };
  
        // Send POST request to server
        fetch('http://localhost:3000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUser)
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log('Success:', data);
          // Redirect to login page or show success message as needed
          this.$router.push('/login');
        })
        .catch(error => {
          console.error('Error:', error);
          // Handle error, show error message to user, etc.
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .register-page {
    height: 100vh; /* Full viewport height */
    background-color: #f7f7f7; /* Light background color */
  }
  
  .register-form {
    max-width: 400px;
    width: 100%;
    padding: 20px; /* Bootstrap padding */
    background-color: white; /* Background color for the form */
    border-radius: 10px; /* Rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Enhanced shadow for depth */
  }
  
  .form-control {
    font-size: 1rem; /* Bootstrap font size */
  }
  
  .btn-primary {
    font-size: 1rem; /* Bootstrap font size */
  }
  </style>
  
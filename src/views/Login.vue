<template>
    <div class="login-page d-flex justify-content-center align-items-center vh-100 bg-light">
      <div class="login-form card p-4 shadow-lg">
        <h2 class="text-center mb-4">Login</h2>
        <form @submit.prevent="login">
          <div class="form-group mb-3">
            <label for="username" class="form-label">Username</label>
            <input type="text" id="username" v-model="username" class="form-control" required>
          </div>
          <div class="form-group mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" id="password" v-model="password" class="form-control" required>
          </div>
          <button type="submit" class="btn btn-primary w-50">Login</button>
        </form>
        <div class="options text-center mt-3">
          <router-link to="/register" class="text-decoration-none">Register</router-link> |
          <router-link to="/forgot-password" class="text-decoration-none">Forgot Password?</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
  async login() {
    const user = {
      username: this.username,
      password: this.password
    };

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'An error occurred during login');
      }

      const data = await response.json();
      console.log('Success:', data);

      // Save user data in local storage
      localStorage.setItem('user', JSON.stringify(user));

      // Redirect to dashboard after successful login
      this.$router.push('/dashboard');
    } catch (error) {
      console.error('Error:', error);
      alert(error.message); // Show error message to user
    }
  }
}

  }
  </script>
  
  <style scoped>
  .login-page {
    height: 100vh; /* Full viewport height */
    background-color: #f7f7f7; /* Light background color */
  }
  
  .login-form {
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
  
  .options a {
    color: #007bff;
  }
  
  .options a:hover {
    text-decoration: underline;
  }
  </style>
  
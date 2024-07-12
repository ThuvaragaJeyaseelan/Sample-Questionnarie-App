<template>
    <div class="container my-5 p-4 bg-light rounded shadow-lg">
      <h2 class="section-heading text-primary mb-4">Maths Questions</h2>
      <div v-for="(question, index) in randomQuestions" :key="index" class="question mb-4 p-3 border rounded bg-white">
        <p class="question-text font-weight-bold">{{ question.question }}</p>
        <div class="options">
          <div v-for="(option, optionIndex) in question.options" :key="optionIndex" class="form-check">
            <input class="form-check-input" type="radio" v-model="selectedAnswers[index]" :value="option" :id="`question-${index}-option-${optionIndex}`">
            <label class="form-check-label" :for="`question-${index}-option-${optionIndex}`">{{ option }}</label>
          </div>
        </div>
      </div>
      <button @click="submitAnswers" class="btn btn-primary btn-lg">Submit</button>
      <div v-if="submitted" class="results mt-4">
        <p v-for="(result, index) in results" :key="index" :class="result.correct ? 'text-success' : 'text-danger'">
          Question {{ index + 1 }}: {{ result.correct ? 'Correct' : 'Wrong. Correct answer: ' + result.correctAnswer }}
        </p>
        <p class="total-score h4 mt-3">Total Score: {{ totalScore }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import questions from '@/questions.json';
  
  export default {
    name: 'MathsQuestions',
    data() {
      return {
        allQuestions: questions.maths,
        randomQuestions: [],
        selectedAnswers: [],
        submitted: false,
        results: [],
        totalScore: 0
      };
    },
    mounted() {
      this.getRandomQuestions();
    },
    methods: {
      getRandomQuestions() {
        this.randomQuestions = this.shuffleArray(this.allQuestions).slice(0, 10); // Get 10 random questions
        this.selectedAnswers = Array(this.randomQuestions.length).fill(null);
      },
      shuffleArray(array) {
        // Function to shuffle array (Fisher-Yates shuffle)
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      },
      submitAnswers() {
        this.results = this.randomQuestions.map((question, index) => ({
          correct: this.selectedAnswers[index] === question.correctAnswer,
          correctAnswer: question.correctAnswer
        }));
        this.totalScore = this.results.reduce((acc, result) => acc + (result.correct ? 1 : 0), 0);
        this.submitted = true;
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
  }
  
  .section-heading {
    font-size: 2rem;
  }
  
  .question {
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #ffffff;
  }
  
  .question-text {
    font-size: 1.125rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .options {
    display: flex;
    flex-wrap: wrap;
  }
  
  .form-check {
    margin-bottom: 10px;
  }
  
  .submit-button {
    margin-top: 20px;
  }
  
  .results {
    margin-top: 20px;
  }
  
  .correct-answer {
    color: green;
  }
  
  .wrong-answer {
    color: red;
  }
  
  .total-score {
    font-size: 1.125rem;
    font-weight: bold;
    margin-top: 10px;
  }
  </style>
  
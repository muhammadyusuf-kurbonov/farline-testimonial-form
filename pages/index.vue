<template>
  <div class="container">
    <div class="testimonial-form">
      <div class="headline">Far Line</div>

      <InputText :value="author" placeholder="Ваше имя"></InputText>
      
      <InputText :value="author" placeholder="Ваша должность"></InputText>

      <Textarea v-model="value" rows="5" cols="30" placeholder="Ваш отзыв" />

      <div class="buttons">
        <Button label="Отправить" class="submit-btn" />
        <Button label="Отменить" text class="cancel-btn" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import { ref } from 'vue';

const value = ref('');
const author = ref('');

useHead({
  title: 'Far Line Feedback',
  meta: [
    { name: 'description', content: 'Feedback for customers of Far Line' }
  ],
})
</script>

<style>
.container {
  width: 100vw;
  height: 100vh;

  overflow: hidden;
  background-color: #663F7A;

  position: absolute; /* Position absolute */
  top: 0;
  left: 0;
}

.testimonial-form {
  position: absolute; /* Position absolute */
  top: 50%; /* Move to 50% from top */
  left: 50%; /* Move to 50% from left */
  transform: translate(-50%, -50%); 

  display: flex;
  flex-direction: column;
  gap: 12px;

  text-align: center;

  padding: 32px;

  border-radius: 16px;

  background-color: white;

  box-shadow: 10px 10px 10px 0px rgba(0,0,0,0.1);
}

.headline {
  font-size: 4em;
  margin-bottom: 16px;
}

.buttons {
  display: flex;
  flex-direction: row;
  gap: 4px;

  margin-right: auto;
  margin-left: auto;
}

.submit-btn {
  background-color: #663F7A;
  border-color: #663F7A;
}

.cancel-btn {
  color: #663F7A;
}
</style>
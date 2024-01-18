<template>
  <div>
    <div>
      <h2>{{ post.title }}</h2>
      <p v-if="author">Written by: {{ author.name }}</p>
      <p>{{ post.body }}</p>
    </div>
    <hr />
    <h3>Comments:</h3>
    
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'

// define props
defineProps(['post', 'author'])

</script>
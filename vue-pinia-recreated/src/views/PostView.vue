<template>
  <div>
    <p v-if="storePost.loading">Loading post...</p>
    <p v-if="storePost.error">{{ storePost.error.message }}</p>
    <p v-if="storePost.post">
      <post :post="storePost.post" :author="storeAuthor.getPostAuthor"></post>
    </p>
    <p v-else>
      No data found.
    </p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useAuthorStore } from '../stores/author'
import { usePostStore } from '../stores/post'
import Post from '../components/Post.vue'

// define route
const route = useRoute() 

const storePost = usePostStore()
const storeAuthor = useAuthorStore()

storeAuthor.fetchAuthors()
storePost.fetchPost(route.params.id)
</script>
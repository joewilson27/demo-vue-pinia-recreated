<template>
  <div>
    <!-- posts is here {{ tester }} | {{ storePost.tester }} -->
    <p v-if="loading">Loading posts...</p>
    <p v-if="storePost.error">{{ storePost.error.message }}</p>
    <p v-if="storePost.posts.length > 0" v-for="post in storePost.posts" :key="post.id">
      <RouterLink :to="`/post/${post.id}`">{{ post.title }}</RouterLink>
      <p>{{ post.body }}</p>
    </p>
    <p v-else>
      no data found
    </p>
  </div>
</template>

<script setup>
import { usePostStore } from '@/stores/post'
import { storeToRefs } from 'pinia'

// other way, instead we can call them directly from usePostStore after defined to a variable
const { posts, loading, error, tester } = storeToRefs(usePostStore())

// define a pinia store
const storePost = usePostStore()
// call action fetchPosts
storePost.fetchPosts()
</script>
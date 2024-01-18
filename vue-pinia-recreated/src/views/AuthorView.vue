<template>
  <div>
    <author 
    :author="getAuthorByUserName" 
    :posts="storePost.getPostsPerAuthor(getAuthorByUserName.id)">
    </author>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthorStore } from '../stores/author'
import { usePostStore } from '../stores/post'
import Author from '../components/Author.vue'

const route = useRoute() 
const storeAuthor = useAuthorStore()
const storePost = usePostStore()

const getAuthorByUserName = computed(() => {
  return storeAuthor.authors.find((author) => author.username === route.params.username)
})

storePost.fetchPosts()
</script>
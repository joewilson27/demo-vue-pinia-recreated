<template>
  <div>
    <p v-if="storeAuthor.authors.length > 0" v-for="author in storeAuthor.authors" :key="author.id">
      <RouterLink :to="`/author/${author.username}`">{{ author.name }}</RouterLink>
    </p>
    <p v-else>
      No data found.
    </p>
  </div>
</template>

<script setup>
import { useAuthorStore } from '../stores/author'

const storeAuthor = useAuthorStore()

storeAuthor.fetchAuthors()
</script>
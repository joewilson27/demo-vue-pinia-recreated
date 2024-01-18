<template>
  <div>
    <div>
      <h2>{{ post.title }}</h2>
      <p v-if="author">Written by: {{ author.name }}
      | <span>Comments: {{ storeComment.getPostComments.length }}</span>
      </p>
      <p>{{ post.body }}</p>
    </div>
    <hr />
    <h3>Comments:</h3>
    <comment :comments="storeComment.getPostComments"></comment>
  </div>
</template>

<script setup>
import { useCommentStore } from '../stores/comment'
import Comment from '../components/Comment.vue'

// define props
defineProps(['post', 'author'])

const storeComment = useCommentStore()
storeComment.fetchComments()
</script>
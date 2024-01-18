<template>
  <div>
    <p v-if="storeOther.datas.length > 0" v-for="data in storeOther.datas" :key="data.id">
      Name: {{ data.name }}
      <br />
      Origin: {{ data.origin }}
      <br />
      Non-US: {{ storeOther.isCitizen(data.origin) }}
    </p>
    <p v-else>
      No data found.
    </p>
  </div>
</template>

<script setup>
import { useOtherStore } from '../stores/other'

const storeOther = useOtherStore()

storeOther.fetchOthers()
</script>
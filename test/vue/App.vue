<template>
  <div>
    <h2>Count: {{ count }}</h2>
    <button @click="incrementCount">+</button>
    <button @click="decrementCount">-</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    incrementCount() {
      this.count = this.count + 1;
    },
    decrementCount() {
      this.count = this.count - 1;
    }
  }
};
</script>

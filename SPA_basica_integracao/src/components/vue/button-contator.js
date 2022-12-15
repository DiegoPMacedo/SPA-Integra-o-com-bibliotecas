
// button-contator.js
export const ButtonContator = {
  data() {
    return { count: 0 }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  template: `<button @click="increment">Contador: {{ count }}</button>`
};


var app = new Vue({
  el: '#app',
  data: {
    active: 'news'
  },
  methods: {
    clickTabMenu(name) {
      this.active = name;
    }
  }
})

// テスト
var header = new Vue({
  el: '#header',
  data: {
    scrollPosition: null
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  }
})

var contact = new Vue({
  el: '#contact',
  data: {
    slideName: false,
    slideEmail: false,
    slideMessage: null,
    NameInput: null,
    EmailInput: null,
    MessageInput: null
  },
  methods: {
    upName() {
      this.slideName=! this.slideName
    },
    upEmail() {
      this.slideEmail=! this.slideEmail
    },
    upMessage() {
      this.slideMessage=! this.slideMessage
    }
  }
})


Vue.component('todo-item', {
    // template: "<li>This a todo item. </li>"
    props:['todo'],
    template: '<li>{{todo.text}}</li>'
})

var app = new Vue({
  el: "#app",
  data: {
        seen: true,
        message: "Hi Vue! " + (new Date()).toLocaleDateString(),
        todos: [
            {text: 'learn vue'},
            {text: 'learn react'},
            {text: 'learn finance'}
        ]
  },
  methods:{
    reverseMessage: function() {
        console.log(this)
        this.message = this.message.split(' ').reverse().join(' ')
    }
  }
});


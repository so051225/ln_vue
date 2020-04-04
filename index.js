

Vue.component('todo-item', {
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
        ],
        groceryList: [
            {id:0, text:'Vegetables'},
            {id:1, text:'Cheese'},
            {id:2, text:'Whatever'},
        ],
        selectedItem: ''
  },
  methods:{
    reverseMessage: function() {
        this.message = this.message.split(' ').reverse().join(' ')
    },
    selectItem: function(obj) {
        console.log(obj)
        this.selectedItem = 'test';
    }
  }
});


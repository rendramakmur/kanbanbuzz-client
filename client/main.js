var app = new Vue({
    el: '#app',
    data: {
      page: 'login',
      backlogs: [
          {
            title: 'Create kanban server',
            description: 'Using postgress & express'
          },
          {
            title: 'Deploy kanban server',
            description: 'Deploy on Heroku'
          },
          {
            title: 'Deploy kanban client',
            description: 'Deploy on firebase'
          }
      ],
      todos: [
        {
          title: 'Setup Vue.js',
          description: 'Setup Vue.js for kanban client.'
        },
        {
          title: 'Create add task form',
          description: 'Creat add task form, could be a pop up.'
        }
      ],
      doings: [
        {
          title: 'Learning Vue.js directive',
          description: 'Try some vue directive functions.'
        }
      ],
      dones: [
        {
          title: 'Create kanban HTML & CSS',
          description: 'For Kanban app client-side.'
        }
      ]
    },
    methods: {
        changePage(destination) {
            this.page = destination;
        }
    }
})
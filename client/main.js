var app = new Vue({
    el: '#app',
    data: {
      addTaskCategory: 'backlogs',
      page: 'homepage',
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
      ],
      inputTitleTask: '',
      inputDescTask: '',
    },
    methods: {
        changePage(destination) {
            this.page = destination;
        },
        changeAddTaskCategory(category) {
            this.addTaskCategory = category;
        },
        submitTask(){
            if (this.addTaskCategory === 'backlogs') {
                this.backlogs.push({
                    title: this.inputTitleTask,
                    description: this.inputDescTask
                })
            } else if (this.addTaskCategory === 'todos') {
                this.todos.push({
                    title: this.inputTitleTask,
                    description: this.inputDescTask
                })
            } if (this.addTaskCategory === 'doings') {
                this.doings.push({
                    title: this.inputTitleTask,
                    description: this.inputDescTask
                })
            } if (this.addTaskCategory === 'dones') {
                this.dones.push({
                    title: this.inputTitleTask,
                    description: this.inputDescTask
                })
            }
            this.inputTitleTask = '';
            this.inputDescTask = '';
        }
    }
})
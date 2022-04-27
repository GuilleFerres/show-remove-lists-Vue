const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            newTask: '',
            showTask: true
        }
    },
    computed: {
        buttonCaption(){
            return this.showTask ? 'Hide List' : 'Show List';
        }
    },
    methods: {
        addTask(){
            this.tasks.push(this.newTask);
        },
        toggleTaskList(){
            this.showTask = !this.showTask;
        }
    }
});
app.mount('#assignment');
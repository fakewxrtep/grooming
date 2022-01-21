function start(f) {
	/in/.test(document.readyState) ? setTimeout('start(' + f + ')', 9) : f();
  }
  start(function() {
var app = new Vue({
	el: '#ogo',
    data() {
      return {
        fieldName: '',
        fieldService: '',
	    	default: 'В обработке',  
        projects: [{
			img: 'images/dog.png',
			nickname:'Барбос',
			service: 'Стрижка',
			stage:'Выполнено' ,	
		  },
        { 
			img: 'images/dog.png',
			nickname:'Барбос',
			service: 'Стрижка',
			stage:'Выполнено' ,
        },
        { 
			img: 'images/dog.png',
			nickname:'Барбос',
			service: 'Стрижка',
			stage:'Выполнено' ,
        },
        {
			img: 'images/dog.png',
			nickname:'Барбос',
			service: 'Стрижка',
			stage:'Выполнено' ,
        },
        {
			img: 'images/dog.png',
			nickname:'Барбос',
			service: 'Стрижка',
			stage:'Выполнено' ,
        }
      ],
      }
    },
    methods: {
		loginName(event){
        this.fieldName = event.target.value;
      },
      loginService(event){
        this.fieldService = event.target.value;
      },
      submissionForm(){
        this.projects.push({
		      nickname: this.fieldName,
          service: this.fieldService,
          stage: this.default
        })}
    }
})
});
const app = new Vue({
    el: "#reg",
    data: {
      valueEmail: '',
      valuePassword: '',
  },
    methods: {
      inputEmail(event){
        this.valueEmail = event.target.value;
      },
      inputPassword(event){
        this.valuePassword = event.target.value;
      },
      consoleData(){
        console.log(`email: ${this.valueEmail} password: ${this.valuePassword}`);
        this.valueEmail = '';
        this.valuePassword = '';
      }}
  });
  
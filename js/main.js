const one = {
  template: `
      <div class='text-center'>
        <h3>This is an ilustration by Carlos Peña</h3>
        <img class="img-fluid" alt="Responsive image" src='img/1.png' alt='an image by Carlos Peña'>
    </div>
 `


}
const two = {
  template: `
      <div class='text-center'>
        <h3>This is an ilustration by Carlos Peña</h3>
        <img class="img-fluid" alt="Responsive image" src='img/2.png' alt='an image by Carlos Peña'>
      </div>
  `

}
const three = {
  template: `
      <div class='text-center'>
        <h3>This is an ilustration by Carlos Peña</h3>
        <img class="img-fluid" alt="Responsive image" src='img/3.png' alt='an image by Carlos Peña'>
      </div>
  `


}

const router = new VueRouter({
  routes: [
      {
          path: '/one',
          component: one
      },
      {
         path: '/two',
        component: two 
      },
      {
        path: '/three',
        component: three
      }

  ]

})

var routeTest = new Vue({
  router,
  el: '#app',
  data: {
    
  
  },
  methods: {
      
      }
    // btnClick: function() {

      // console.log(this.numer * 2);
      // this.isUser = !this.isUser;
    
  }).$mount('#app')
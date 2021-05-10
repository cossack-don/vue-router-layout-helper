<template>
  <div class="home">
    Home Page
  </div>
</template>

// для регистрации , вошел под учеткой или нет
// будем ли пускать на данный роут или нет, роутинговый хук beforeEnter

auth: false

create() {
  this.auth = localStorage.getItem('auth') ! == null
}

methods: {
changeUserState() {
  if(this.auth) {
    localStorage.removeItem('auth')
    this.router.push({name:'main'})
  } else {
    localStorage.setItem('auth', true)
    this.auth = true
  }
}
}

// далее
в router index js 

// например путь
    {
      path: ':id',
      name: 'AboutItem',
      component: AboutItem,
      beforeEnter:(to, from, next) => {

        // если все окей,пользователь зашел под нужной учеткой, пускаем смотреть роут
        if(localStorage.getItem('auth')) {
          next()
        } else {
          // редиректим на страницу about
          next({name:'about'})
        }
        
      }
    },
<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<router-view></router-view>-->
    <div id="wrapper">
      <nav class="navbar">
        <div class="container">
          <div class="col-sm-3 text-center">
            <img class="i_logo" src="https://avatars3.githubusercontent.com/u/17093534?v=3&s=400" />
            <div class= "logoText"> Allen's Blog </div>
          </div>
          <div class="col-sm-9">
            <ul class="nav navbar-nav i_lead_bar">
              <li>
                <router-link to="/index">index</router-link>
              </li>
              <li>
                <router-link to="/game">game</router-link>
              </li>
              <li>
                <router-link to="/blog">blog</router-link>
              </li>
              <li>
                <router-link to="/message">message</router-link>
              </li>
            </ul>
          </div>
  
        </div>
      </nav>
      <div class="container">
        <div class="col-sm-12">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.i_lead_bar {
  float: right
}

.i_logo {
  float: left;
  width: 50px;
  height: 50px;
}
.logoText {
  font-size:16px;
  margin-top:15px;
}
.i_text{
  line-height: 1.6em;
  margin: 1.2em 0 -1.2em;
  padding-bottom: 1.2em;
}
</style>

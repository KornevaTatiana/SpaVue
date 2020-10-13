<template>
  <div id="app">  
    <h1>Todo list</h1>
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Dosis', sans;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 100px;
  text-transform: uppercase;  
}
.router{
  background:#fff;
  width:225px;
  display:block;
  height:33px;
  padding-top:19px;
  margin: 20px auto;  
  font-size: 18px;
  font-weight:200;
  color:#000;  
  text-decoration:none;
  text-align:center;
  opacity:.8;
  letter-spacing: 1px;
  -webkit-transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750);
  -moz-transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750);
  -o-transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750);
  transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750); /* linear */
  &:hover{
    width:225px;
    height:33px;
    padding-top:19px;  
    margin: 20px auto;
    opacity:1;
    letter-spacing: 4px;
    -webkit-transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750);
    -moz-transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750);
      -o-transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750);
          transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750); /* linear */
  }
}
</style>
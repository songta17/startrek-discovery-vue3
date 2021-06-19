<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/docs">Docs</router-link> |
    <router-link to="/characters">Characters</router-link> |
    <router-link to="/episodes">Episodes</router-link> |
    <router-link to="/about">About</router-link> |
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: rgb(46, 96, 169);
}
</style>

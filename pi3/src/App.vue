<template>
<div>
    <div id="nav" bottom="0">
        <router-link to="/">Lista de Libros</router-link> |
        <router-link to="/create">Crear Libros</router-link>
    </div>
    <router-view />
</div>
</template>

<style>
#app {
    font-family: Avenir, Futura, Arial, sans-serif;
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
    color: white;
}

body {
    background-color: #92a8d1;
}
</style>

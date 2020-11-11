<template>
<div>
    <h1>Bienvenido a la biblioteca de Oliver</h1>
    <h2>Estos son los libros en la biblioteca: </h2>
    <ul>
        <li v-for="libros in librosArray" :key="libros.id">
            Titulo: "{{libros.titulo}}", Autor: {{libros.autor}} -
            Clasificacion: {{libros.clasificacion}} - Editorial: {{libros.editorial}}
            ID: {{libros.id}}
            -
            <router-link :to="{ name: 'EditarL', params: {id: libros.id}}"> Editar Libro</router-link>
        </li>
    </ul>

</div>
</template>

<script>
import {
    bdd
} from '../firebase.js'
export default {
    name: "ListaL",
    data() {
        return {
            librosArray: []
        }

    },
    created() {
        this.listarLibros();
    },
    methods: {
        async listarLibros() {
            const libros1 = await bdd.collection("Libros").get();
            this.librosArray = libros1.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            console.log(this.librosArray)
        }
    },
}
</script>

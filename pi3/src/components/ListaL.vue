<template>
<div>
    <h1>Bienvenido a la biblioteca de <a href="https://www.instagram.com/p/CHOjkumpTqj/">Oliver</a></h1>
    <h2>Estos son los libros en la biblioteca: </h2>
    <ul>
        <table align="center">
            <tbody>
                <li v-for="libros in librosArray" :key="libros.id">
                    <td>
                        Titulo: "{{libros.titulo}}" -
                    </td>
                    <td>
                        Autor: {{libros.autor}} -
                    </td>
                    <td>
                        Clasificacion: {{libros.clasificacion}} -
                    </td>
                    <td>
                        Editorial: {{libros.editorial}} -
                    </td>
                    <td>
                        ID: {{libros.idlibro}} -
                    </td>
                    <router-link :to="{ name: 'EditarL', params: { id: libros.id}}"> Editar Libro</router-link>
                    <hr>
                </li>
            </tbody>
        </table>
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

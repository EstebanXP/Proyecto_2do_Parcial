<template>
<div>
    <h1>Actualizar libros</h1>
    <form @submit.prevent="addActualizacion">
        <p>
            Inserta el nombre del nuevo libro: <input type="text" v-model="titulo">
        </p>

        <p>
            Inserta el nombre del autor: <input type="text" v-model="nombreAutor">
        </p>

        <p>
            Inserta la clasificacion del nuevo libro: <input type="text" v-model="clasificacion">
        </p>

        <p>
            Inserta la editorial del nuevo libro: <input type="text" v-model="editorial">
        </p>

        <p>
            Inserta el ID del nuevo libro: <input type="text" v-model="idLibro">
        </p>
        <button type="submit">Enviar</button>

    </form>
</div>
</template>

<script>
import {
    bdd
} from '../firebase.js'
//import {
//   router
//} from '../router'
export default {
    name: "EditarL",
    data() {
        return {
            nombreAutor: "",
            clasificacion: "",
            editorial: "",
            idLibro: "",
            titulo: "",
        }
    },
    created() {
        this.getLibro();
    },
    methods: {
        async getLibro() {
            const id = this.$route.params.id;
            console.log(id + "g");
            const data = await bdd.collection('Libros').doc(id).get();

            const lib = data.data();
            console.log(lib.autor);

            //this.nombreAutor = lib.autor;
            //this.clasificacion = lib.clasificacion;
            //this.editorial = lib.editorial;
            //this.idLibro = lib.id;
            //this.titulo = lib.titulo;
        },
        async addActualizacion() {
            const id = this.$route.params.id;
            await bdd.collection("Libros").doc(id).set({
                //autor: this.nombreAutor,
                //clasificacion: this.clasificacion,
                // editorial: this.editorial,
                //id: this.idLibro,
                // titulo: this.titulo,

            })

        },
    }
}
</script>

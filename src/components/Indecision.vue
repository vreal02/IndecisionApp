<template>
<section>
    <img :src=" imagen " >
    <div class="indecision-container">
        <div class="botones">
            <input v-model="pregunta" type="text" placeholder="Hazme una pregunta">
            <button @click="pregunta = ''"> Limpiar </button>
        </div>
        
        <p>Recuerda terminar con un signo de interrogación (?)</p>
        <div>
            <h1 v-if="pregunta.length > 0">¿{{pregunta}} </h1>
            <h1 v-if="respuesta"> {{respuesta}} </h1>
        </div>
    </div>

</section>
    
</template>

<script>
export default {
    name: 'Indecision',
    data(){
        return{
            pregunta: '',
            respuesta: null,
            imagen: 'https://cde.2.trome.pe/ima/0/0/9/2/2/922768.jpg'
        }
    },
    methods:{
        async obtenerRespuesta(){
            this.respuesta = 'Pensando...'
            const datos = await fetch('https://yesno.wtf/api')
            .then( res => res.json() )

            this.respuesta = datos.answer == 'yes' ? 'Si' : 'No'
            this.imagen = datos.image
        }
    },
    watch:{
        pregunta(value){
            
            if (value == ''){
                this.respuesta = null
                this.imagen = 'https://cde.2.trome.pe/ima/0/0/9/2/2/922768.jpg'
            }
            if (!value.includes('?')) return

            this.obtenerRespuesta()
        }
    }
}
</script>

<style lang="sass" >
img
    height: 100vh
    max-width: 100%
    max-height: 100%
    position: fixed
    width: 100vw

.indecision-container
    position: relative
    z-index: 99
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    background: rgba(0,0,0,.3)
    height: 100vh

input
    border: none
    padding: .7rem 1rem
    width: 50%
    border-radius: 15px
    font-size: 20px
    outline: none
    color: #565656

p,h1
    margin-top: .3rem
    text-align: center
h1
    font-size: 30px
    background: rgba(255, 255, 255,.4)
    padding: .3rem
    border-radius: 5px

p
    font-size: 20px
    background: rgba(255, 255, 255,.4)
    padding: .3rem
    border-radius: 5px

.botones
    display: flex 
    justify-content: center
    gap: 2rem
    width: 100%
    button
        border-radius: 15px
        border: none
        padding: .7rem 1rem
        cursor: pointer
        &:hover
            background: #333
            color: whitesmoke
    

</style>
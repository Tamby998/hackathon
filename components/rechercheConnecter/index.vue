<template>
    <form action="" method = "post" @submit.prevent="onSubmit()">
            <div class="row">
                <div>
                    <label>Recherche</label>
                    <input 
                        type="text" 
                        name="recherche" 
                        id="recherche" 
                        placeholder="Entrez votre recherche ici"
                        v-model="recherche"
                    >
                    <button type="submit">Rechercher</button>
                </div>
                <div v-for="(i,titre) in titres" :key="titre">
                    <span>
                            {{ i.snippet.title}}
                    </span>
                     <iframe width="560" height="315" :src="'https://www.youtube.com/embed/'+ i.id.videoId" frameborder="0" allowfullscreen></iframe>

                </div>
            </div>
    </form>
  </template>
    
  <script>
    import axios from "axios";
    export default {
       data() {
            return {
                 titres : []
            };
        },
        methods: {
            onSubmit(){
                let data = {
                    recherche : this.recherche,
                    
                };
                
                axios
                    .get("http://localhost:8000/api/searchVideo?search="+ data.recherche, {
                    headers: {
                        Accept: "application/json"
                    }
                    })
                    .then(
                    response => {
                        console.log(response.data.items);
                        if(response.data.items)
                        {
                            for(let i = 0; i < response.data.items.length;i++){
                                    this.titres.push(response.data.items[i]);
                                }
                                this.isSuccess = response.data.success ? true : false;
                                }
                       
                    },
                    response => {
                        // Error
                    }
                    );
            }
        }
    }
  
  </script>
  
  <style>
  
  </style>
  
<template>
<!--Start Our NavBar-->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Coding <em class='text-info'>Chalenge</em></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link class='nav-link home' :to="{name: 'home'}">Home</router-link> 
          </li>
          <li class="nav-item">
            <router-link class='nav-link pro' :to="{name: 'indexProduct'}">Product</router-link> 
          </li>
          <li class="nav-item">
            <router-link class='nav-link cat' :to="{name: 'index'}">Categorie</router-link> 
          </li>
        </ul>
      </div>
    </div>
  </nav>
<!--End Our NavBar-->

<div class="container text-center mx-auto">
  <router-view @showPro='showSuccessPro' :successPro='successPro' @showCat='showSuccessCat' :successCat='successCat'/>
</div>

</template>

<script>
import {ref} from 'vue';

export default {
  setup(){
    const successPro = ref(null);
    const successCat = ref(null);

    function showSuccessPro(message){
      successPro.value = message;
    }

    function showSuccessCat(message){
      successCat.value = message;
    }

    return{
      successPro, 
      showSuccessPro, 
      successCat, 
      showSuccessCat
    };
  }
}
</script>

<style>

  body{
    background: rgb(245, 245, 245);
  }

  .navbar{
      padding: 20px;
  }

  .navbar .nav-link{
    font-size: 1.1em;
  }

  .container{
    margin: 35px 0;
  }
</style>
<template>
  <h3>Categorie Creation</h3>

  <!--Start Our Form-->
  <div class="form-container mx-auto">
    <form @submit.prevent="addFunc(form)">
      <div class="input-group mb-3">
        <input type="text" class="form-control" v-model="form.name" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
      <div class="error" v-if="errors.name">{{ errors.name[0] }}</div>
      <div class="input-group mb-3">
          <input type="text" class="form-control" v-model="form.parent" placeholder="Parent" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
      <div class="error" v-if="errors.parent">{{ errors.parent[0] }}</div>
      <button class='btn btn-primary'>Add Category</button>
    </form>
  </div>
  <!--End Our Form-->
</template>

<script>
import { reactive } from 'vue';
import manageCategorie from '../../composables/manageCategorie.js';

export default{
  props: ['success'],
  setup(props, context){
    const form = reactive({
      name: '',
      parent: ''
    });

    const {addItem, errors} = manageCategorie();

    function addFunc(form2){
      addItem(form2);
      context.emit('showCat', 'The Category Has Been Added!!');
    }

    return {form, addFunc, errors};
  }
}
</script>

<style>



</style>
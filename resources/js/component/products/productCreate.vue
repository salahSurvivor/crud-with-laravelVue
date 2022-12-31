<template>
  <h3>Create Product</h3>

  <!--Start Our Form-->
  <div class="form-container mx-auto">
    <form @submit.prevent="addFunc" enctype="multipart/form-data">
      <div class="input-group mb-3">
        <input type="text" v-model='form.name' class="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
      <div class="error" v-if="errors.name">{{ errors.name[0] }}</div>
      <div class="input-group mb-3">
          <input type="text" v-model='form.description' class="form-control" placeholder="Description" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
      <div class="error" v-if="errors.description">{{ errors.description[0] }}</div>

      <div class="input-group mb-3">
          <input type="text" v-model='form.price' class="form-control" placeholder="Price" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
      <div class="error" v-if="errors.price">{{ errors.price[0] }}</div>

      <div class="mb-3">
        <input class="form-control" @input="form.image = $event.target.files[0]" type="file" id="formFileMultiple" multiple>
      </div>

      <div class="error" v-if="errors.image">{{ errors.image[0] }}</div>

      <select class="form-control" v-model="form.idC" aria-label="Default select example">
        <option v-for='item in itemsC' :key='item.id' :value="item.id">{{ item.name }}</option>
      </select>
      <div class="error" v-if="errors.idC">{{ errors.idC[0] }}</div>
      <button class='btn btn-primary'>Add Product</button>
    </form>
  </div>
  <!--End Our Form-->
</template>

<script>
import manageProduct from '../../composables/manageProduct.js';
import manageCategorie from '../../composables/manageCategorie.js';
import { reactive } from 'vue';

export default {
  props: ['success'],
  setup(props, context){
    const {addItem, errors} = manageProduct();
    const {itemsC, getItemsC} = manageCategorie();
    const form = reactive({
      name: '',
      description: '',
      price: '',
      image: '',
      idC: 3
    });

    function addFunc(){
      console.log(form);
      addItem(form);
      context.emit('showPro', 'The Product Has Been Added!!');
    }

    getItemsC();

    return {errors, form, itemsC, addFunc};
  }
}
</script>

<style>

</style>
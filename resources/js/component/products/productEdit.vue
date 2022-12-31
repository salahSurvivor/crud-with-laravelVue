<template>
  <h3>Updating Product</h3>

  <!--Start Our Form-->
  <div class="form-container mx-auto">
    <form @submit.prevent="updateFunc" enctype="multipart/form-data">
      <div class="input-group mb-3">
        <input type="text" v-model='item.name' class="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
      <div class="error" v-if="errors.name">{{ errors.name[0] }}</div>
      <div class="input-group mb-3">
          <input type="text" v-model='item.description' class="form-control" placeholder="Description" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
      <div class="error" v-if="errors.description">{{ errors.description[0] }}</div>

      <div class="input-group mb-3">
          <input type="text" v-model='item.price' class="form-control" placeholder="Price" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
      <div class="error" v-if="errors.price">{{ errors.price[0] }}</div>

      <div class="mb-3">
        <input class="form-control" @input="item.image = $event.target.files[0]" type="file" id="formFileMultiple" multiple>
      </div>

      <div class="error" v-if="errors.image">{{ errors.image[0] }}</div>

      <select class="form-control" v-model="item.idC" aria-label="Default select example">
        <option v-for='item in itemsC' :key='item.id' :value="item.id">{{ item.name }}</option>
      </select>
      <div class="error" v-if="errors.idC">{{ errors.idC[0] }}</div>
      <button class='btn btn-success'>Update Product</button>
    </form>
  </div>
  <!--End Our Form-->
</template>

<script>
import manageProduct from '../../composables/manageProduct.js';
import manageCategorie from '../../composables/manageCategorie.js';

export default {
  props: ['id'],
  setup(props, context){
    const {item, errors, updateItem, getItem} = manageProduct();
    const {itemsC, getItemsC} = manageCategorie();

    getItemsC();
    getItem(props.id);

    function updateFunc(){
      updateItem(props.id);
      context.emit('showPro', 'The Product Has Been Updated!!');
    }

    return{
      item,
      itemsC,
      errors,
      updateFunc
    }
  }
}
</script>

<style>

</style>
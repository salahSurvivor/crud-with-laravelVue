<template>
  <h3>Updating Category</h3>

    <!--Start Our Form-->
    <div class="form-container mx-auto">
      <form @submit.prevent='updateFunc(id)'>
        <div class="input-group mb-3">
          <input type="text" v-model="item.name" class="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div class="error" v-if="errors.name">{{ errors.name[0] }}</div>
        <div class="input-group mb-3">
            <input type="text" v-model="item.parent" class="form-control" placeholder="Parent" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div class="error" v-if="errors.parent">{{ errors.parent[0] }}</div>
        <button class='btn btn-success'>Update Category</button>
      </form>
    </div>
    <!--End Our Form-->
</template>

<script>
import manageCategorie from '../../composables/manageCategorie.js';

export default {
  props: ['id'],
  setup(props, context){
    const {item, errors, updateItem, getItem} = manageCategorie();

    function updateFunc(id){
      updateItem(id);
      context.emit('showCat', 'The Category Has Been Updated!!');
    }

    getItem(props.id);

    return{
      item, 
      errors,
      updateFunc
    }
  }
}
</script>

<style>

</style>
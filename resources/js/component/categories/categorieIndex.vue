<template>
  <h3>Categories</h3>

  <div v-if='successCat' class="alert alert-success alert-dismissible fade show" role="alert">
    <i class="fa-solid fa-check"></i>
    {{successCat}}
    <i  data-bs-dismiss="alert" aria-label="Close" class="fa-solid fa-x"></i>
  </div>

  <div class='btn-container'>
    <router-link :to="{name: 'create'}" class='btn btn-success'>Add Categorie</router-link>
  </div>
  <table class="table table-striped table-hover">
    <tr class="table-info">
      <th class="table-primary">Name</th>
      <th class="table-primary">Parent</th>
      <th class="table-primary">Date</th>
      <th class="table-primary">Actions</th>
    </tr>
    <tr class="table-light" v-for="item in itemsC" :key='item.id'>
        <td class="table-light">{{ item.name }}</td>
        <td class="table-light">{{ item.parent }}</td>
        <td class="table-light">{{ item.created_at }}</td>
        <td class="table-light">
            <button class='btn btn-danger' data-bs-toggle="modal" data-bs-target="#exampleModal" @click='setup(item.id)'>Delete</button>
            <router-link :to="{name: 'edit', params: {id: item.id}}" class='btn router btn-info'>Update</router-link>
        </td>
    </tr>
  </table>

  <!--Start Delete Modal-->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Delete Category</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button>
        </div>
        <div class="modal-body float-start text-left">
          Are You Sure You Want To Delete This Category!!
        </div>
        <div class="modal-footer">
          <form @submit.prevent="deleteFunc(idD)">
            <button type="submit" class="btn btn-danger" data-bs-dismiss="modal">Yes, Delete</button>
          </form>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>

        </div>
      </div>
    </div>
  </div>
  <!--End Delete Modal-->
</template>

<script>
import manageCategorie from '../../composables/manageCategorie.js';
import { ref } from 'vue';

export default {
  props: ['successCat'],
  setup(props, context){
    document.querySelector('.cat').classList.add('active');
    const {itemsC, getItemsC, deleteItem} = manageCategorie();
    const idD = ref(null);

    getItemsC();

    function setup(id){
      idD.value = id;
    }

    function deleteFunc(id){
      deleteItem(id);
      context.emit('showCat', 'The Category Has Been Deleted!!');
    }

    return{
      itemsC,
      idD,
      deleteFunc,
      setup
    }
  }
}
</script>

<style>

</style>
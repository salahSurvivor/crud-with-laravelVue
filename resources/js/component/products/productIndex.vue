<template>
  <h3>Products</h3>

  <div v-if='successPro' class="alert alert-success alert-dismissible fade show" role="alert">
    <i class="fa-solid fa-check"></i>
    {{successPro}}
    <i  data-bs-dismiss="alert" aria-label="Close" class="fa-solid fa-x"></i>
  </div>

  <div class='table-container'>
    <div class='btn-container'>
      <router-link :to="{name: 'createProduct'}" class='btn btn-success'>Add Product</router-link>
    </div>
    <table class="table table-striped table-hover">
      <tr class="table-info">
        <th class="table-primary"></th>
        <th class="table-primary">Name</th>
        <th class="table-primary">Price</th>
        <th class="table-primary">Date</th>
        <th class="table-primary">Actions</th>
      </tr>
      <tr class="table-light" v-for='item in filterItems' :key='item.id'>
          <td class="table-light">
            <img class='imgProduct' :src="'/storage/img/'+ item.image" alt=''/>
          </td>
          <td class="table-light">
            {{ item.name }}
          </td>
          <td class="table-light">{{ item.price }} DH</td>
          <td class="table-light">{{ item.created_at }}</td>
          <td class="table-light">
              <button type='button' class='btn btn-danger' data-bs-toggle="modal" data-bs-target="#exampleModal" @click='setup(item.id)'>Delete</button>
              <router-link :to="{name: 'editProduct', params: {id: item.id}}" class='btn router btn-info'>Update</router-link>
          </td>
      </tr>
    </table>
  </div>
 

<!--Start Our Filer-->

  <div class="filter-container">
    <div class="category-edit">
      <strong>Categories</strong>
    </div>
    <div class="filter">
      <div class="form-check" v-for='item in itemsC' :key='item.id'>
        <table>
          <tr>
            <td>
              <input class="form-check-input" type="radio" v-model='idC' :value='item.id' name="flexRadioDefault" :id="item.id">
              <label :for="item.id">{{item.name}}</label>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>

<!--End Our Filer-->

  <!--Start Delete Modal-->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Delete Product</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button>
        </div>
        <div class="modal-body float-start text-left">
          Are You Sure You Want To Delete This Product!!
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
import manageProduct from '../../composables/manageProduct.js';
import manageCategorie from '../../composables/manageCategorie.js';
import {ref, computed} from 'vue';

export default {
  props: ['successPro'],
  setup(props, context){
    document.querySelector('.pro').classList.add('active');
    const {items, getItems, deleteItem} = manageProduct();
    const {itemsC, getItemsC} = manageCategorie();
    const idC = ref(null);
    const idD = ref(null);

    function setup(id){
      idD.value = id;
    }

    function deleteFunc(id){
      deleteItem(id);
      context.emit('showPro', 'The Product Has Been Deleted!!');
    }

    getItems();
    getItemsC();

    const filterItems = computed(() => {
      if(idC.value == null)
        return items.value.filter((item) => item.idC == item.idC);
      else
        return items.value.filter((item) => item.idC == idC.value);
    });

    return {filterItems, setup, deleteFunc, idD, idC, itemsC};
  }
}
</script>

<style>
  .table-container{
    float: right;
    width: 85%;
  }

  .imgProduct{
    width: 50px;
    height: 50px;
  }

  .filter-container{
    position: fixed;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .filter, .category-edit{
    background: #fff;
    padding: 25px;
    border-radius: 12px;
    width: 250px;
  }

  .category-edit{
    padding: 10px;
    margin: 10px 0;
  }

  @media (max-width: 1000px){
    .filter-container{
      display: none;
    }

    .table-container{
      float: auto;
      width: 100%;
    }
  }
</style>
import axios from 'axios';
import {ref, reactive} from 'vue';
import { useRouter } from 'vue-router';

const manageProduct = () =>{
    const items = ref([]);
    const item = ref([]);
    const errors = ref({});
    const router = useRouter();

    const getItems = async() =>{
        const data = await axios.get('http://127.0.0.1:8000/api/product');
        items.value = data.data;
    }

    const getItem = async(id) =>{
        const data = await axios.get('http://127.0.0.1:8000/api/product/'+ id);
        item.value = data.data;
    }

    const addItem = async(data) =>{
        const config = {
            headers: { 'content-type': 'multipart/form-data'}
        }

        let formData = new FormData();
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('price', data.price);
        formData.append('image', data.image);
        formData.append('idC', data.idC);
              
        axios.post('http://127.0.0.1:8000/api/product', formData, config)
        .then(function () {
              router.push({name: 'indexProduct'});
        })
        .catch(function (e){
            if(e.response.status === 422)
              errors.value = e.response.data.errors;
        });
    }

    const updateItem = async(id) =>{
        const config = {
            headers: { 'content-type': 'multipart/form-data'}
        }
                
        let formData = new FormData();
        formData.append('name', item.value.name);
        formData.append('description', item.value.description);
        formData.append('price', item.value.price);
        formData.append('image', item.value.image);
        formData.append('idC', item.value.idC);
              
        axios.post('http://127.0.0.1:8000/api/product/'+ id, formData, config)
        .then(function (){
              router.push({name: 'indexProduct'});
        })
        .catch(function (e){
            if(e.response.status === 422)
              errors.value = e.response.data.errors;
        });
    }

    const deleteItem = async(id) => {
        await axios.delete('http://127.0.0.1:8000/api/product/'+ id);
        getItems();    
    }

    return{
        items,
        item,
        errors,
        getItems,
        getItem,
        addItem,
        updateItem,
        deleteItem
    }
}

export default manageProduct;
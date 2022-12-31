import axios from 'axios';
import {ref} from 'vue';
import { useRouter } from 'vue-router';

const manageCategorie = () =>{
    const itemsC = ref([]);
    const item = ref([]);
    const errors = ref({});
    const router = useRouter();

    const getItemsC = async() => {
        const data = await axios.get('http://127.0.0.1:8000/api/categories');
        itemsC.value = data.data;
    }

    const getItem = async(id) =>{
        const data = await axios.get('http://127.0.0.1:8000/api/categories/'+ id);
        item.value = data.data;
    }

    const addItem = async(data) =>{
        try{
            await axios.post('http://127.0.0.1:8000/api/categories', data);
            await router.push({name: 'index'});
        }
        catch(e){
            if(e.response.status === 422)
                errors.value = e.response.data.errors;
        }
    }

    const updateItem = async(id) =>{
        try{
            await axios.put('http://127.0.0.1:8000/api/categories/' +id, item.value);
            await router.push({name: 'index'});
        }
        catch(e){
            if(e.response.status == 422)
                errors.value = e.response.data.errors;
        }
    }

    const deleteItem = async(id) =>{
        await axios.delete('http://127.0.0.1:8000/api/categories/' + id);  
        getItemsC();
    }

    return{
        itemsC,
        item,
        errors,
        getItemsC,
        getItem,
        addItem,
        updateItem,
        deleteItem
    }
}

export default manageCategorie;
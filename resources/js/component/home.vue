<template>
    <div class="home">
      <h3>Welcome To My First Laravel And Vuejs App</h3>
    </div>
</template>

<script>
export default {
    setup(){
        document.querySelector('.home').classList.add('active');

    }
}
</script>

<style>
    .home h3{
        position: absolute;
        background: #fff;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 35px;
        border-radius: 16px;
    }
</style>
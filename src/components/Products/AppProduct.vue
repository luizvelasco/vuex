<template>
    <div class="card">
        {{ product.name }} - {{ product.price }} <br>
        <button @click="addProduct()">
            Adicionar
        </button>
    </div>
</template>

<script>
export default {
    props: {
        product: Object
    },

    methods: {
        addProduct(){
            this.$store.commit('addProduct', this.product);
        }
    }
}
</script>

<style>
    .card {
        background: bisque;
        padding: 6px;
        margin-bottom: 5px;
    }
</style>
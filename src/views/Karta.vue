<template>
<div class="Mapa">
    <Navbar></Navbar>   
    <iframe src="https://snazzymaps.com/embed/317824" width="100%" height="1000px" style="border:none;"></iframe>
    <Footer></Footer>
</div>   
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: "Mapa",
    components: {
        Navbar,
        Footer
    },
};
</script>
<style>
.Mapa {
    background-color: black;
}
.proba {
    color: black;
    font-weight: bold;
}
</style>
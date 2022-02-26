<template>
    <div class="grid grid-cols-3 gap-4 items-center">
        <NavLink to="/challenges/qrcode">QRCode</NavLink>
        <NavLink to="/challenges/stats">Stats</NavLink>
        <NavLink to="/challenges/article-preview">Article</NavLink>
        <NavLink to="/challenges/testimonials">Testimonials</NavLink>
    </div>
</template>

<script>
    import NavLink from "../../components/NavLink.vue";

    export default {
        name: "Index",
        components: { NavLink }
    }
</script>

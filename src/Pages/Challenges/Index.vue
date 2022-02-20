<template>
    <div class="grid grid-cols-3 gap-4 items-center">
        <NavLink to="/challenges/qrcode">QRCode</NavLink>
        <NavLink to="/challenges/stats">Stats</NavLink>
    </div>
</template>

<script>
    import NavLink from "../../components/NavLink.vue";

    export default {
        name: "Index",
        components: { NavLink }
    }
</script>

<template>
    <div class="grid grid-cols-3 gap-4 items-center">
        <NavLink to="/401">401 Pages</NavLink>
        <NavLink to="/403">403 Pages</NavLink>
        <NavLink to="/404">404 Pages</NavLink>
    </div>
</template>

<script>
import NavLink from "../components/NavLink.vue";

export default {
    name: "Home",
    components: { NavLink }
}
</script>

<style scoped>

</style>
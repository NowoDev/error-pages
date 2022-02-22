<template>
    <div class="grid grid-cols-3 gap-4 items-center">
        <NavLink to="/errors/401">401 Pages</NavLink>
        <NavLink to="/errors/403">403 Pages</NavLink>
        <NavLink to="/errors/404">404 Pages</NavLink>
    </div>
</template>

<script>
    import NavLink from "../../components/NavLink.vue";

    export default {
        name: "Errors",
        components: { NavLink }
    }
</script>

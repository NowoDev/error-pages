<template>
    <div class="grid grid-cols-3 gap-4 items-center">
        <NavLink to="/errors/404/first">First</NavLink>
        <NavLink to="/errors/404/healthly">Healthly</NavLink>
    </div>
</template>

<script>
    import NavLink from "../../../components/NavLink.vue";

    export default {
        name: "Error404",
        components: { NavLink }
    }
</script>

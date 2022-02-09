<template>
    <div class="grid grid-cols-3 gap-4 items-center">
        <NavLink to="/404/first">First</NavLink>
    </div>
</template>

<script>
import NavLink from "../components/NavLink.vue";

export default {
    name: "404",
    components: { NavLink }
}
</script>

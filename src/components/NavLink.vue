<template>
    <router-link :to="to" class="p-3 font-bold text-center uppercase bg-white rounded-lg cursor-pointer">
        <slot />
    </router-link>
</template>

<script>
export default {
    name: "NavLink",
    props: ['to']
}
</script>
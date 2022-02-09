<template>
    <router-link :to="to" class="bg-white rounded-lg p-3 text-center uppercase font-bold cursor-pointer">
        <slot />
    </router-link>
</template>

<script>
export default {
    name: "NavLink",
    props: ['to']
}
</script>
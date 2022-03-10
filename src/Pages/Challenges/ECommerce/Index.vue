<template>
    <div>
        <nav class="p-5 bg-white">
            <div class="flex justify-between">
                <div class="flex items-center space-x-4">
                    <button @click="toggleNav">
                        <img alt="Menu" class="p-1 w-7" src="../../../assets/images/ecommerce/icon-menu.svg">
                    </button>

                    <h1 class="text-3xl font-bold text-e-very-dark-blue">sneakers</h1>
                </div>

                <div class="flex items-center space-x-6">
                    <img alt="Cart" class="w-8 h-7" src="../../../assets/images/ecommerce/icon-cart.svg">
                    <img alt="Avatar" class="w-8" src="../../../assets/images/ecommerce/image-avatar.png">
                </div>
            </div>

            <!-- mobile nav-->
            <div :class="showNav === true ? 'block' : 'hidden'"
                 class="absolute inset-0 p-6 w-2/3 h-screen bg-white">
                <button @click="toggleNav">
                    <img alt="Close" class="p-3" src="../../../assets/images/ecommerce/icon-close.svg">
                </button>
                <div class="px-3 py-12 space-y-4">
                    <h3 class="text-lg font-bold text-e-very-dark-blue">Collections</h3>
                    <h3 class="text-lg font-bold text-e-very-dark-blue">Men</h3>
                    <h3 class="text-lg font-bold text-e-very-dark-blue">Women</h3>
                    <h3 class="text-lg font-bold text-e-very-dark-blue">About</h3>
                    <h3 class="text-lg font-bold text-e-very-dark-blue">Contact</h3>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Index.vue",

        data() {
            return {
                showNav: false,
            }
        },

        methods: {
            toggleNav: function () {
                this.showNav = !this.showNav
            }
        },
    }
</script>

<style scoped>

</style>
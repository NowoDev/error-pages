<template>
    <div>
        <nav class="p-5 bg-white">
            <div class="flex justify-between">
                <div class="flex items-center space-x-4">
                    <button @click="toggleNav">
                        <img alt="Menu" class="p-1 w-7" src="../../../assets/images/ecommerce/icon-menu.svg">
                    </button>

                    <img alt="sneakers" src="../../../assets/images/ecommerce/logo.svg">
                </div>

                <div class="flex items-center space-x-6">
                    <img alt="Cart" class="w-8 h-7" src="../../../assets/images/ecommerce/icon-cart.svg">
                    <img alt="Avatar" class="w-8" src="../../../assets/images/ecommerce/image-avatar.png">
                </div>
            </div>

            <!-- mobile nav-->
            <div :class="showNav === true ? 'block' : 'hidden'"
                 class="absolute inset-0 p-6 w-2/3 h-screen bg-white z-50">
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

        <main :class="showNav === true ? 'blur' : 'blur-0'">
            <div class="relative">
                <img alt="Product 1" src="../../../assets/images/ecommerce/image-product-1.jpg">

                <div class="flex absolute inset-0 justify-between items-center mx-6">
                    <button class="p-3 bg-white rounded-full">
                        <img alt="Previous" class="bg-white"
                             src="../../../assets/images/ecommerce/icon-previous.svg">
                    </button>

                    <button class="p-3 bg-white rounded-full">
                        <img alt="Next" class="bg-white"
                             src="../../../assets/images/ecommerce/icon-next.svg">
                    </button>
                </div>
            </div>

            <div class="p-6 bg-white">
                <h3 class="text-sm font-semibold uppercase text-e-orange">Sneaker Company</h3>

                <h4 class="text-2xl font-semibold text-e-very-dark-blue mt-3">Fall Limited Edition Sneakers</h4>

                <p class="text-e-dark-grayish-blue mt-3">
                    These low-profile sneakers are your perfect casual wear companion. Featuring a
                    durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>

                <div class="flex items-center py-4 mt-3">
                    <span class="text-3xl font-bold text-e-very-dark-blue">$125.00</span>
                    <span class="p-1 ml-5 font-bold rounded-md bg-e-pale-orange text-e-orange">50%</span>
                    <span class="ml-auto font-semibold line-through text-e-grayish-blue">$250.00</span>
                </div>

                <div class="flex justify-between mt-3 items-center p-4 rounded-md bg-e-light-grayish-blue">
                    <button @click="quantity--" class="p-2">
                        <img alt="Minus" src="../../../assets/images/ecommerce/icon-minus.svg">
                    </button>
                    <p class="font-bold text-e-very-dark-blue text-lg">{{ quantity }}</p>
                    <button @click="quantity++" class="p-2">
                        <img alt="Plus" src="../../../assets/images/ecommerce/icon-plus.svg">
                    </button>
                </div>

                <button class="flex items-center mt-4 py-4 w-full rounded-md bg-e-orange text-white font-bold justify-center gap-x-4">
                    <img alt="Cart" class="w-5 h-5" src="../../../assets/images/ecommerce/icon-cart.svg">
                    Add to cart
                </button>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: "Index.vue",

        data() {
            return {
                showNav: false,
                quantity: 0,
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
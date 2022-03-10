<template>
    <div>
        <nav class="p-5 bg-white">
            <div class="flex justify-between mx-auto max-w-7xl">
                <div class="flex items-center space-x-4 w-full md:space-x-0">
                    <button class="md:hidden" @click="toggleNav">
                        <svg class="w-8 h-8 text-e-dark-grayish-blue" fill="currentColor"
                             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd"
                                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  fill-rule="evenodd" />
                        </svg>
                    </button>

                    <img alt="sneakers" src="../../../assets/images/ecommerce/logo.svg">

                    <div class="hidden items-center pl-9 space-x-4 md:flex">
                        <h3 class="text-lg font-bold text-e-very-dark-blue">Collections</h3>
                        <h3 class="text-lg font-bold text-e-very-dark-blue">Men</h3>
                        <h3 class="text-lg font-bold text-e-very-dark-blue">Women</h3>
                        <h3 class="text-lg font-bold text-e-very-dark-blue">About</h3>
                        <h3 class="text-lg font-bold text-e-very-dark-blue">Contact</h3>
                    </div>
                </div>

                <div class="flex items-center space-x-6">
                    <button @click="toggleCart">
                        <svg class="w-6 h-6 text-e-dark-grayish-blue" fill="none" stroke="currentColor"
                             stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                  stroke-linecap="round"
                                  stroke-linejoin="round" />
                        </svg>
                    </button>

                    <img alt="Avatar" class="w-8" src="../../../assets/images/ecommerce/image-avatar.png">
                </div>
            </div>

            <!-- mobile nav-->
            <div :class="showNav === true ? 'block' : 'hidden'"
                 class="absolute inset-0 z-50 p-6 w-2/3 h-screen bg-white">
                <button @click="toggleNav">
                    <svg class="w-6 h-6 text-e-dark-grayish-blue" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              fill-rule="evenodd" />
                    </svg>
                </button>
                <div class="py-12 space-y-4">
                    <h3 class="text-lg font-bold text-e-very-dark-blue">Collections</h3>
                    <h3 class="text-lg font-bold text-e-very-dark-blue">Men</h3>
                    <h3 class="text-lg font-bold text-e-very-dark-blue">Women</h3>
                    <h3 class="text-lg font-bold text-e-very-dark-blue">About</h3>
                    <h3 class="text-lg font-bold text-e-very-dark-blue">Contact</h3>
                </div>
            </div>
        </nav>

        <main :class="showNav === true ? 'blur' : 'blur-0'" class="mx-auto max-w-7xl bg-white">
            <!-- cart item-->
            <div :class="showCart === true ? 'block' : 'hidden'" class="absolute z-30 px-3 w-full">
                <div class="mt-4 w-full max-w-md bg-white rounded-xl md:ml-auto">
                    <h1 class="px-9 py-6 font-semibold border-b text-e-very-dark-blue">Cart</h1>

                    <div class="flex justify-center items-center h-56 bg-white rounded-xl">
                        <p class="font-semibold text-e-dark-grayish-blue">Your cart is empty.</p>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 items-center md:grid-cols-2">
                <div class="relative md:p-9">
                    <img alt="Product 1" class="md:rounded-2xl"
                         src="../../../assets/images/ecommerce/image-product-1.jpg">

                    <div class="flex absolute inset-0 justify-between items-center mx-6">
                        <button class="p-3 bg-white rounded-full md:hidden">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path clip-rule="evenodd"
                                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                      fill-rule="evenodd" />
                            </svg>
                        </button>

                        <button class="p-3 bg-white rounded-full md:hidden">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path clip-rule="evenodd"
                                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                      fill-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div class="p-6 bg-white md:pl-6 xl:pr-24 md:pr-12">
                    <h3 class="text-sm font-semibold uppercase text-e-orange">Sneaker Company</h3>

                    <h4 class="mt-3 text-2xl font-semibold md:text-4xl text-e-very-dark-blue">Fall Limited Edition
                        Sneakers</h4>

                    <p class="mt-3 text-e-dark-grayish-blue">
                        These low-profile sneakers are your perfect casual wear companion. Featuring a
                        durable rubber outer sole, they’ll withstand everything the weather can offer.
                    </p>

                    <div class="flex items-center py-4 mt-3">
                        <span class="text-3xl font-bold text-e-very-dark-blue">$125.00</span>
                        <span class="p-1 ml-5 font-bold rounded-md bg-e-pale-orange text-e-orange">50%</span>
                    </div>
                    <span class="flex justify-end -mt-12 font-semibold line-through md:block md:-mt-0 text-e-grayish-blue">$250.00</span>

                    <div class="flex flex-col md:flex-row">
                        <div class="flex justify-between items-center p-4 mt-3 rounded-md md:w-2/5 bg-e-light-grayish-blue">
                            <button class="p-2" @click="quantity--">
                                <img alt="Minus" src="../../../assets/images/ecommerce/icon-minus.svg">
                            </button>
                            <p class="text-lg font-bold text-e-very-dark-blue">{{ quantity }}</p>
                            <button class="p-2" @click="quantity++">
                                <img alt="Plus" src="../../../assets/images/ecommerce/icon-plus.svg">
                            </button>
                        </div>

                        <button class="flex gap-x-4 justify-center items-center py-4 mt-4 w-full font-bold text-white rounded-md md:w-3/5 bg-e-orange">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
                                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                      stroke-linecap="round"
                                      stroke-linejoin="round" />
                            </svg>
                            Add to cart
                        </button>
                    </div>
                </div>
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
                showCart: false,
                quantity: 0,
            }
        },

        methods: {
            toggleNav: function () {
                this.showNav = !this.showNav
            },

            toggleCart: function () {
                this.showCart = !this.showCart
            }
        },
    }
</script>
<template>
    <nav class="fixed z-10 p-5 w-full bg-white border-b md:px-10 md:py-0">
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

                <div class="hidden items-center pl-9 space-x-10 md:flex">
                    <h3 class="py-10 text-lg cursor-pointer hover:border-b-e-orange hover:border-b-4 text-e-very-dark-blue">
                        Collections</h3>
                    <h3 class="py-10 text-lg cursor-pointer hover:border-b-e-orange hover:border-b-4 text-e-very-dark-blue">
                        Men</h3>
                    <h3 class="py-10 text-lg cursor-pointer hover:border-b-e-orange hover:border-b-4 text-e-very-dark-blue">
                        Women</h3>
                    <h3 class="py-10 text-lg cursor-pointer hover:border-b-e-orange hover:border-b-4 text-e-very-dark-blue">
                        About</h3>
                    <h3 class="py-10 text-lg cursor-pointer hover:border-b-e-orange hover:border-b-4 text-e-very-dark-blue">
                        Contact</h3>
                </div>
            </div>

            <div class="flex items-center mr-5 space-x-6">
                <button @click="toggleCart">
                    <svg class="w-6 h-6 text-e-dark-grayish-blue hover:text-black" fill="none" stroke="currentColor"
                         stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                              stroke-linecap="round"
                              stroke-linejoin="round" />
                    </svg>
                </button>

                <img alt="Avatar"
                     class="w-8 rounded-full transition duration-300 ease-in-out cursor-pointer hover:ring-2 md:w-12 hover:scale-110 hover:ring-e-orange"
                     src="../../../assets/images/ecommerce/image-avatar.png">
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

    <main :class="showNav === true ? 'blur' : 'blur-0'"
          class="flex inset-0 h-screen bg-white">
        <div class="flex m-auto max-w-7xl">
            <!-- cart item-->
            <div :class="showCart === true ? 'block' : 'hidden'"
                 class="absolute right-0 top-20 z-20 px-3 w-full max-w-md md:top-32">
                <div class="bg-white rounded-xl shadow-2xl md:ml-auto">
                    <h1 class="px-9 py-6 font-semibold border-b-[2.5px] text-e-very-dark-blue">Cart</h1>

                    <div class="flex justify-center items-center h-56">
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

                    <!-- thumbnail images -->
                    <div class="grid hidden relative grid-cols-4 gap-x-6 mt-6 md:inline-flex">
                        <button class="rounded-2xl focus:ring-e-orange transition duration-300 ease-in-out delay-75 focus:opacity-60 hover:opacity-75 hover:-translate-y-1 hover:scale-110 focus:ring-[3px]">
                            <img alt="Thumbnail 1" class="rounded-2xl"
                                 src="../../../assets/images/ecommerce/image-product-1-thumbnail.jpg">
                        </button>

                        <button class="rounded-2xl focus:ring-e-orange transition duration-300 ease-in-out delay-75 focus:opacity-60 hover:opacity-75 hover:-translate-y-1 hover:scale-110 focus:ring-[3px]">
                            <img alt="Thumbnail 2" class="rounded-2xl"
                                 src="../../../assets/images/ecommerce/image-product-2-thumbnail.jpg">
                        </button>

                        <button class="rounded-2xl focus:ring-e-orange transition duration-300 ease-in-out delay-75 focus:opacity-60 hover:opacity-75 hover:-translate-y-1 hover:scale-110 focus:ring-[3px]">
                            <img alt="Thumbnail 3" class="rounded-2xl"
                                 src="../../../assets/images/ecommerce/image-product-3-thumbnail.jpg">
                        </button>

                        <button class="rounded-2xl focus:ring-e-orange transition duration-300 ease-in-out delay-75 focus:opacity-60 hover:opacity-75 hover:-translate-y-1 hover:scale-110 focus:ring-[3px]">
                            <img alt="Thumbnail 4" class="rounded-2xl"
                                 src="../../../assets/images/ecommerce/image-product-4-thumbnail.jpg">
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
                        <span class="px-2 py-1 ml-5 font-bold rounded-md bg-e-pale-orange text-e-orange">50%</span>
                    </div>
                    <span class="flex justify-end -mt-12 font-semibold line-through md:block md:-mt-0 text-e-grayish-blue">$250.00</span>

                    <div class="flex flex-col mt-4 md:flex-row">
                        <div class="flex justify-between items-center p-4 mt-3 rounded-md md:w-2/5 bg-e-light-grayish-blue">
                            <button class="p-2 hover:opacity-75" @click="quantity--">
                                <img alt="Minus" src="../../../assets/images/ecommerce/icon-minus.svg">
                            </button>

                            <p class="text-lg font-bold text-e-very-dark-blue">{{ quantity }}</p>

                            <button class="p-2 hover:opacity-75" @click="quantity++">
                                <img alt="Plus" src="../../../assets/images/ecommerce/icon-plus.svg">
                            </button>
                        </div>

                        <button class="flex gap-x-4 justify-center items-center py-4 mt-4 w-full font-bold text-white rounded-md md:w-3/5 bg-e-orange hover:opacity-75 hover:shadow-2xl hover:shadow-orange-300">
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
        </div>
    </main>
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
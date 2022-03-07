<template>
    <header class="w-full bg-white">
        <nav class="container flex flex-col mx-auto w-full outline md:justify-between md:flex-row">
            <div class="flex justify-between items-center">
                <h1 class="mx-2 font-bold uppercase text-3xl text-[#46B892]">Healthly</h1>

                <button class="mr-2 md:hidden" @click="toggleNav">
                    <svg viewBox="0 0 448 512" class="fill-[#46B892] w-5" xmlns="http://www.w3.org/2000/svg">
                        <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                        <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
                    </svg>
                </button>
            </div>

            <ul :class="nav ? 'block' : 'hidden'"
                class="items-center p-2 mt-4 space-y-3 w-full font-bold uppercase md:mt-0 md:space-y-0 md:max-w-xl lg:max-w-5xl md:justify-evenly md:flex md:flex-row">
                <li class="text-sm">Home</li>
                <li class="text-sm">Services</li>
                <li class="text-sm">About Us</li>
                <li class="text-sm">Blog</li>
                <li>
                    <button class="text-sm font-bold uppercase bg-[#B0F8E5] py-2 rounded-md px-6 text-[#45B793]">Login
                    </button>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "First",

        data() {
            return {
                nav: false,
            }
        },

        methods: {
            toggleNav: function () {
                this.nav = !this.nav
            }
        }
    }
</script>

<style scoped>

</style>
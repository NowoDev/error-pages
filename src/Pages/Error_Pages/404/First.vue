<template>
    <div class="relative min-h-screen bg-white">
        <header class="absolute inset-0 z-20 items-center lg:container lg:mx-auto">
            <nav class="flex relative flex-wrap justify-between items-center px-8 py-4 w-full bg-white">
                <div class="flex relative justify-between p-3 w-full md:p-0 md:w-auto">
                    <div class="inline-flex gap-x-4 px-2 items-center text-2xl font-bold text-[#A8892F]">
                        <i class="fa-brands fa-searchengin"></i>
                        <h1 class="font-light">The Review</h1>
                    </div>

                    <button type="button" @click="toggle"
                            class="px-2 bg-[#] md:hidden rounded-lg text-black cursor-pointer">
                        <i class="fas fa-bars text-[#A8892F]"></i>
                    </button>
                </div>

                <ul id="nav"
                    class="hidden space-y-6 pl-14 md:pl-0 md:py-0 py-3 md:inline-flex md:space-x-8 md:space-y-0 justify-between items-center text-lg font-bold text-[#A8892F] lg:space-x-14">
                    <li>About Us</li>
                    <li>Community</li>
                    <li>CV Templates</li>
                    <li>
                        <button class="px-6 py-2 font-bold text-gray-300 bg-gray-700 rounded-xl shadow-md">Join Us
                        </button>
                    </li>
                </ul>
            </nav>
        </header>

        <section
                class="flex relative z-10 flex-col-reverse gap-x-16 justify-center items-center pt-12 min-h-screen sm:pt-0 lg:container md:flex-row lg:mx-auto">
            <div class="p-4 text-center md:ml-12 md:p-12 md:text-left">
                <h1 class="text-5xl font-light text-gray-600 lg:text-6xl xl:text-8xl">Uh Oh, page is
                    broken.
                </h1>
                <p class="pt-4 font-thin text-[#A8892F] text-3xl">Don't panic, we won't need <br> to put it
                    in rice.</p>
                <button class="px-6 py-2 mt-4 text-sm font-bold text-gray-300 bg-gray-700 rounded-xl shadow-md md:text-lg">
                    Return
                    to
                    Homepage
                </button>
            </div>

            <div class="right-0 mb-12 max-w-md md:mb-0 md:max-w-xl xl:max-w-2xl md:p-12 md:mr-12">
                <img src="../../../assets/images/flame-error.png" alt="">
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "First404",
        methods: {
            toggle() {
                document.getElementById('nav').classList.toggle('hidden')
            }
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Chewy');

    h1, p {
        font-family: 'Chewy', sans-serif;
    }
</style>
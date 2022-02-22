<template>
    <section class="min-h-screen text-gray-400 bg-gray-900">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col mb-20 w-full text-center">
                <h1 class="mb-1 text-2xl font-medium tracking-widest text-indigo-400">PAGES</h1>
                <p class="mx-auto text-base leading-relaxed lg:w-2/3">Tons of frontend pages built from scratch using
                    Tailwind Css and Vue JS.
                    All inspirations gotten from the internet</p>
            </div>
            <div class="flex flex-wrap">
                <div class="px-8 py-6 border-l-2 border-gray-800 xl:w-1/3 lg:w-1/2 md:w-full">
                    <h2 class="mb-2 text-lg font-medium text-white sm:text-xl">Landing Pages</h2>
                    <p class="mb-4 text-base leading-relaxed">Fingerstache flexitarian street art 8-bit waistcoat.
                        Distillery hexagon disrupt edison bulbche.</p>
                    <router-link to="/landing" class="inline-flex items-center text-indigo-400">View
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                             stroke-width="2" class="ml-2 w-4 h-4" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </router-link>
                </div>
                <div class="px-8 py-6 border-l-2 border-gray-800 xl:w-1/3 lg:w-1/2 md:w-full">
                    <h2 class="mb-2 text-lg font-medium text-white sm:text-xl">Error Pages</h2>
                    <p class="mb-4 text-base leading-relaxed">Fingerstache flexitarian street art 8-bit waistcoat.
                        Distillery hexagon disrupt edison bulbche.</p>
                    <router-link to="/errors" class="inline-flex items-center text-indigo-400">View
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                             stroke-width="2" class="ml-2 w-4 h-4" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </router-link>
                </div>
                <div class="px-8 py-6 border-l-2 border-gray-800 xl:w-1/3 lg:w-1/2 md:w-full">
                    <h2 class="mb-2 text-lg font-medium text-white sm:text-xl">Challenges</h2>
                    <p class="mb-4 text-base leading-relaxed">Fingerstache flexitarian street art 8-bit waistcoat.
                        Distillery hexagon disrupt edison bulbche.</p>
                    <router-link to="/challenges" class="inline-flex items-center text-indigo-400">View
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                             stroke-width="2" class="ml-2 w-4 h-4" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </router-link>
                </div>
            </div>

            <button class="flex p-4 mx-auto mt-16 text-white bg-white rounded-full border-0 focus:outline-none hover:bg-indigo-600">
                <a href="https://github.com/nowodev/pages" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="w-16">
                        <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                </a>
            </button>
        </div>
    </section>
</template>

<script>
    import NavLink from "../components/NavLink.vue";

    export default {
        name: "Home",
        components: { NavLink }
    }
</script>

<style scoped>

</style>
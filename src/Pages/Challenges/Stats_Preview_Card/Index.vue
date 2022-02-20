<template>
    <div class="flex flex-col p-4 w-full min-h-screen bg-stats-dark-blue">
        <div class="flex justify-center m-auto">
            <div class="w-full rounded-xl md:flex md:flex-row-reverse bg-stats-desaturated-blue">
                <div class="relative">
                    <div class="absolute w-full h-full rounded-t-xl opacity-50 bg-stats-soft-violet md:rounded-tl-none md:rounded-r-xl" />
                    <img src="../../../assets/images/image-header-mobile.jpg"
                         class="object-cover rounded-t-xl md:hidden"
                         alt="stats card">
                    <img src="../../../assets/images/image-header-desktop.jpg"
                         class="hidden object-cover h-full rounded-t-xl md:block md:rounded-tl-none md:rounded-r-xl"
                         alt="stats card">
                </div>

                <div class="py-8 my-auto md:pl-12 md:pr-16">
                    <div>
                        <h4 class="text-3xl font-bold text-center md:text-4xl md:text-left text-stats-white">
                            Get <span class="text-stats-soft-violet">insights</span> that
                            <br class="md:hidden">help
                            <br class="hidden md:block">your business
                            <br class="md:hidden">grow.
                        </h4>
                        <p class="mt-5 text-lg text-center md:text-left text-stats-trans-white">
                            Discover the benefits of data
                            <br class="md:hidden"> analytics and make
                            <br class="hidden md:block"> better decisions
                            <br class="md:hidden"> regarding revenue, customer
                            <br> experience, and overall efficiency.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 md:mt-6">
                        <div class="mt-5 text-center md:text-left">
                            <h4 class="text-2xl font-bold text-stats-white">10k+</h4>
                            <p class="uppercase text-stats-trans-white-headings">Companies</p>
                        </div>
                        <div class="mt-5 text-center md:text-left">
                            <h4 class="text-2xl font-bold text-stats-white">314</h4>
                            <p class="uppercase text-stats-trans-white-headings">Templates</p>
                        </div>
                        <div class="mt-5 text-center md:text-left">
                            <h4 class="text-2xl font-bold text-stats-white">12M+</h4>
                            <p class="uppercase text-stats-trans-white-headings">Queries</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="text-center attribution text-stats-white">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
            Coded by <a href="https://github.com/nowodev" target="_blank">Favour Okunowo</a>.
        </div>
    </div>
</template>

<script>
    export default {
        name: "Index"
    }
</script>

<style scoped>
    @import url('https://fonts.google.com/specimen/Inter');
    @import url('https://fonts.google.com/specimen/Lexend+Deca');

    p {
        font-family: 'Inter', sans-serif;
    }

    h4 {
        font-family: 'Lexend Deca', sans-serif;
    }

    .attribution a {
        color: hsl(228, 45%, 44%);
    }
</style>
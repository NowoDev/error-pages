<template>
    <div class="flex flex-col p-4 w-full min-h-screen bg-stats-dark-blue">
        <div class="container flex justify-center m-auto">
            <div class="w-80 rounded-xl sm:w-96 md:w-full lg:w-9/12 md:flex md:flex-row-reverse bg-stats-desaturated-blue">
                <div class="relative lg:w-1/2">
                    <div class="absolute w-full h-full rounded-t-xl opacity-50 bg-stats-soft-violet md:rounded-tl-none md:rounded-r-xl" />
                    <img alt="stats card"
                         class="object-cover rounded-t-xl md:hidden"
                         src="../../../assets/images/image-header-mobile.jpg">
                    <img alt="stats card"
                         class="hidden object-cover w-full h-full rounded-t-xl md:block md:rounded-tl-none md:rounded-r-xl"
                         src="../../../assets/images/image-header-desktop.jpg">
                </div>

                <div class="py-8 px-2 md:w-[860px] lg:w-1/2 my-auto md:pl-12 md:pr-16">
                    <div>
                        <h4 class="text-3xl font-bold text-center md:text-4xl md:text-left text-stats-white">
                            Get <span class="text-stats-soft-violet">insights</span> that help
                            your business grow.
                        </h4>
                        <p class="mt-5 leading-relaxed text-center md:text-lg md:text-left text-stats-trans-white">
                            Discover the benefits of data analytics and make better decisions
                            regarding revenue, customer experience, and overall efficiency.
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
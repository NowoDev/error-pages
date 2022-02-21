<template>
    <div class="flex flex-col p-4 w-full min-h-screen bg-article-light-grayish-blue">
        <div class="flex justify-center m-auto">
            <div class="w-full bg-white rounded-xl shadow shadow-2xl md:flex md:flex-row">
                <div class="md:w-80">
                    <img src="../../../assets/images/article/drawers.jpg"
                         class="object-cover h-full rounded-t-xl md:rounded-tr-none md:rounded-l-xl"
                         alt="article card">
                </div>

                <div class="p-8 md:p-10">
                    <div>
                        <h5 class="text-[16px] md:text-xl font-semibold text-article-dark-grayish-blue">
                            Shift the overall look and feel
                            <br class="hidden sm:block md:hidden"> by
                            <br class="hidden md:block"> adding these wonderful touches
                            <br class="hidden sm:block"> to furniture in your home

                        </h5>
                        <h6 class="mt-5 text-sm md:text-left text-article-dark-blue">
                            Ever been in a room and felt like
                            <br class="hidden xs:block md:hidden"> something was missing?
                            <br class="hidden md:block"> Perhaps it felt
                            <br class="hidden xs:block md:hidden"> slightly bare and inviting. I've got some
                            <br class="hidden xs:block"> simple tips to help you make any room
                            <br class="hidden xs:block md:hidden"> feel complete.
                        </h6>
                    </div>

                    <div class="flex justify-between items-center mt-8">
                        <div class="flex gap-x-4 items-center">
                            <img src="../../../assets/images/article/avatar-michelle.jpg" class="w-12 rounded-full"
                                 alt="">
                            <div class="text-sm">
                                <h5 class="font-semibold text-article-dark-grayish-blue">Michelle Appleton</h5>
                                <h6 class="text-article-dark-blue">28 Jun 2020</h6>
                            </div>
                        </div>
                        <div class="p-3 rounded-full bg-article-light-grayish-blue ease-in-out transition duration-500 md:hover:bg-article-grayish-blue flex-items-center">
                            <img src="../../../assets/images/article/icon-share.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="text-center attribution">
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
    @import url('https://fonts.google.com/specimen/Manrope');

    * {
        font-family: 'Manrope', sans-serif;
    }

    .attribution a {
        color: hsl(228, 45%, 44%);
    }
</style>
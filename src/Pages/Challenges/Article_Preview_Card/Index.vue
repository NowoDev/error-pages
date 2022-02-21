<template>
    <div class="flex flex-col p-4 w-full min-h-screen bg-article-light-grayish-blue">
        <div class="flex justify-center m-auto">
            <div class="w-full bg-white rounded-xl shadow-2xl md:flex md:flex-row">
                <div class="md:w-80">
                    <img src="../../../assets/images/article/drawers.jpg"
                         class="object-cover h-full rounded-t-xl md:rounded-tr-none md:rounded-l-xl"
                         alt="article card">
                </div>

                <div class="p-8 md:p-10" :class="show ? 'pb-0' : ''">
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

                    <div :class="show ? 'hidden' : 'block'" class="flex justify-between items-center mt-8">
                        <div class="flex gap-x-4 items-center">
                            <img src="../../../assets/images/article/avatar-michelle.jpg" class="w-12 rounded-full"
                                 alt="">
                            <div class="text-sm">
                                <h5 class="font-semibold text-article-dark-grayish-blue">Michelle Appleton</h5>
                                <h6 class="text-article-dark-blue">28 Jun 2020</h6>
                            </div>
                        </div>
                        <!--                        hidden button on medium screens-->
                        <button @click="swapFooter"
                                class="p-3 rounded-full transition duration-500 ease-in-out md:hidden bg-article-light-grayish-blue md:hover:bg-article-grayish-blue flex-items-center">
                            <img src="../../../assets/images/article/icon-share.svg" alt="">
                        </button>

                        <!--                        popover button for medium screens-->
                        <div class="hidden md:block">
                            <Popper arrow placement="top">
                                <button class="p-3 rounded-full transition duration-500 ease-in-out bg-article-light-grayish-blue focus:bg-article-grayish-blue flex-items-center">
                                    <img src="../../../assets/images/article/icon-share.svg" alt="">
                                </button>
                                <template #content>
                                    <div class="flex justify-between items-center px-8 py-4 -mx-8 rounded-lg bg-article-dark-grayish-blue">
                                        <div class="flex gap-x-4 items-center">
                                            <h6 class="text-sm tracking-widest uppercase text-article-grayish-blue">
                                                Share</h6>
                                            <img src="../../../assets/images/article/icon-facebook.svg" class="w-5"
                                                 alt="">
                                            <img src="../../../assets/images/article/icon-twitter.svg" class="w-5"
                                                 alt="">
                                            <img src="../../../assets/images/article/icon-pinterest.svg" class="w-5"
                                                 alt="">
                                        </div>
                                    </div>
                                </template>
                            </Popper>
                        </div>
                    </div>

                    <div :class="!show ? 'hidden' : 'block'"
                         class="flex justify-between items-center px-8 py-3 -mx-8 mt-8 rounded-b-xl md:hidden bg-article-dark-grayish-blue">
                        <div class="flex gap-x-4 items-center">
                            <h6 class="tracking-widest uppercase text-article-grayish-blue">Share</h6>
                            <img src="../../../assets/images/article/icon-facebook.svg" class="w-6"
                                 alt="">
                            <img src="../../../assets/images/article/icon-twitter.svg" class="w-6"
                                 alt="">
                            <img src="../../../assets/images/article/icon-pinterest.svg" class="w-6"
                                 alt="">
                        </div>
                        <button @click="swapFooter"
                                class="p-3 rounded-full transition duration-500 ease-in-out bg-article-light-grayish-blue md:hover:bg-article-grayish-blue flex-items-center">
                            <img src="../../../assets/images/article/icon-share.svg" alt="">
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-6 text-center attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
            Coded by <a href="https://github.com/nowodev" target="_blank">Favour Okunowo</a>.
        </div>
    </div>
</template>

<script>
    import { defineComponent } from "vue";
    import Popper from "vue3-popper";

    export default defineComponent({
        name: "Index",

        components: {
            Popper
        },

        data() {
            return {
                show: false,
            }
        },

        methods: {
            swapFooter: function () {
                this.show = !this.show
            },
        }
    })
</script>

<style scoped>
    @import url('https://fonts.google.com/specimen/Manrope');

    * {
        font-family: 'Manrope', sans-serif;
    }

    .attribution a {
        color: hsl(228, 45%, 44%);
    }

    :deep(.popper #arrow::before) {
        background: hsl(217, 19%, 35%);
    }
</style>
<template>
    <div class="relative min-h-screen bg-white">
        <header class="absolute inset-0 z-10 items-center lg:container lg:mx-auto">
            <nav class="flex justify-between items-center px-8 py-4 border-b border-red-300">
                <div class="inline-flex gap-x-4 items-center text-2xl font-bold text-[#A8892F]">
                    <i class="fa-brands fa-searchengin"></i>
                    <h1 class="font-[chewy] font-light">The Review</h1>
                </div>

                <ul class="inline-flex gap-x-4 justify-between items-center text-lg font-bold text-[#A8892F] lg:gap-x-14">
                    <li>About Us</li>
                    <li>Community</li>
                    <li>CV Templates</li>
                    <li>
                        <button class="px-6 py-2 font-bold text-gray-300 bg-gray-700 rounded-full shadow-md">Join Us
                        </button>
                    </li>
                </ul>
            </nav>
        </header>

        <section
                class="flex relative z-20 flex-col-reverse gap-x-16 justify-center items-center min-h-screen lg:container md:flex-row lg:mx-auto">
            <div class="p-4 text-center border border-cyan-400 md:ml-12 md:p-12 md:text-left">
                <h1 class="text-5xl lg:text-6xl xl:text-8xl font-light text-gray-600 font-[chewy]">Uh Oh, page is
                    broken.
                </h1>
                <p class="pt-4 font-thin text-[#A8892F] font-[chewy] text-3xl">Don't panic, we won't need <br> to put it
                    in rice.</p>
                <button class="px-6 py-2 mt-4 text-sm font-bold text-gray-300 bg-gray-700 rounded-xl shadow-md md:text-lg">
                    Return
                    to
                    Homepage
                </button>
            </div>

            <div class="right-0 mb-12 max-w-md md:mb-0 md:max-w-xl xl:max-w-2xl outline outline-cyan-600 md:p-12 md:mr-12">
                <img src="../../assets/images/flame-error.png" class="border border-red-300" alt="">
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "FirstPage"
}
</script>
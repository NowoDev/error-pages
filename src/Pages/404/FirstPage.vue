<template>
    <div class="relative min-h-screen bg-white">
        <header class="container absolute inset-0 z-10 items-center mx-auto">
            <nav class="flex justify-between items-center px-8 py-4 border-b border-red-300">
                <div class="inline-flex gap-x-4 items-center text-2xl font-bold text-orange-700">
                    <i class="fa-brands fa-searchengin"></i>
                    <h1>The Review</h1>
                </div>

                <ul class="inline-flex gap-x-4 justify-between items-center text-lg font-bold text-orange-700 lg:gap-x-14">
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

        <section class="container flex relative z-20 justify-center items-center mx-auto min-h-screen">
            <div>
                <h1>Uh Oh, page is <br> broken.</h1>
                <p>Don't panic, we won't need <br> to put it in rice.</p>
            </div>

            <div>
                <img src="../../assets/Alpaca.jpg" alt="">
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "FirstPage"
}
</script>
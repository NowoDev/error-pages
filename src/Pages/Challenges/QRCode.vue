<template>
    <div class="flex flex-col w-full h-screen bg-[#D5E1EF]">
        <div class="flex justify-center m-auto">
            <div class="p-4 pb-10 space-y-5 w-72 bg-white rounded-2xl">
                <img src="../../assets/images/image-qr-code.png" class="rounded-xl" alt="qr code">
                <h3 class="text-xl font-bold text-center text-gray-700">
                    Improve your front-end <br> skills by building projects
                </h3>
                <p class="text-sm text-center text-gray-400">
                    Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
                </p>
            </div>
        </div>

        <div class="attribution text-center">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
            Coded by <a href="https://github.com/nowodev" target="_blank">Favour Okunowo</a>.
        </div>
    </div>
</template>

<script>

    export default {
        name: "QRCode",
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Outfit&display=swap');

    * {
        font-family: 'Outfit', sans-serif;
    }

    .attribution a {
        color: hsl(228, 45%, 44%);
    }
</style>
<template>
    <header class="bg-gray-800" x-data="{ isOpen: false }">
        <nav class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div class="flex items-center justify-between">
                <a class="text-xl font-bold text-white transition-colors duration-300 transform md:text-2xl hover:text-indigo-400" href="#">Brand</a>
    
                <!-- Mobile menu button -->
                <div @click="isOpen = !isOpen" class="flex md:hidden">
                    <button type="button" class="text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                        aria-label="toggle menu">
                        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                            <path fill-rule="evenodd"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
    
            <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
            <div :class="isOpen ? 'flex' : 'hidden'"
                class="flex-col mt-2 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
                <a class="text-sm font-medium text-gray-200 transition-colors duration-300 transform hover:text-indigo-400"
                    href="#">Home</a>
                <a class="text-sm font-medium text-gray-200 transition-colors duration-300 transform hover:text-indigo-400"
                    href="#">Templates</a>
                <a class="text-sm font-medium text-gray-200 transition-colors duration-300 transform hover:text-indigo-400"
                    href="#">Price</a>
                <a class="text-sm font-medium text-gray-200 transition-colors duration-300 transform hover:text-indigo-400"
                    href="#">Help</a>
                <a class="px-4 py-1 text-sm font-medium text-center text-gray-200 transition-colors duration-300 transform border rounded hover:bg-indigo-400"
                    href="#">Get In Touch</a>
            </div>
        </nav>

        <slot name="get-in-touch"></slot>
    </header>
</template>

<script>
export default {

}
</script>

<style>
    
</style>
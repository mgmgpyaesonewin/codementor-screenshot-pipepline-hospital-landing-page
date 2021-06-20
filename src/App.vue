<template>
  <div>
    <navigation>
      <template v-slot:get-in-touch>
        <get-in-touch></get-in-touch>
      </template>
    </navigation>
    <section class="bg-white">
      <appointment></appointment>
    </section>
    <services></services>

    <section class="bg-white">
        <div class="max-w-5xl px-6 py-16 mx-auto">
            <div class="px-8 py-12 bg-gray-800 rounded-md md:px-20 md:flex md:items-center md:justify-between">
                <div>
                    <h3 class="text-2xl font-semibold text-white">Contact Us</h3>
                    <p class="max-w-md mt-4 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac
                        volutpat, viverra magna risus aliquam massa.</p>
                </div>
    
                <a class="block px-8 py-2 mt-6 text-lg font-medium text-center text-white transition-colors duration-300 transform bg-indigo-600 rounded md:mt-0 hover:bg-indigo-500"
                    href="#">Get In Touch</a>
            </div>
        </div>
    </section>    
    <footer class="border-t">
        <div class="container flex items-center justify-between px-6 py-8 mx-auto">
            <p class="text-gray-500">© 2019-2021 All Rights Reserved.</p>
            <p class="font-medium text-gray-700">Terms of Service</p>
        </div>
    </footer>
</div>
</template>

<script setup>
import Navigation from './components/Navigation.vue'
import GetInTouch from './components/GetInTouch.vue'
import Appointment from './components/Appointment.vue'
import Services from './components/Services.vue'
</script>

<style>
</style>
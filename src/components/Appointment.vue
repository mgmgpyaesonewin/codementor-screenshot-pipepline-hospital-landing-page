<template>
  <div class="p-4">
    <h3 class="text-lg font-medium leading-6 text-gray-900 my-4 md:text-center">Get an Appointment Now</h3>
      <div class="md:shadow-md md:rounded-md md:px-6 md:py-4 lg:mx-32 lg:mt-8">  
        <form action="#" method="POST">
          <div class="grid grid-cols-1 gap-5">
            <div>
              <label for="full_name" class="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" name="full_name" id="full_name" autocomplete="full-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />            
            </div>
            <div>
              <label for="age" class="block text-sm font-medium text-gray-700">Age</label>
              <input type="text" name="age" id="age" autocomplete="age" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />            
            </div>
            <div>
              <label for="gender" class="block text-sm font-medium text-gray-700 mb-2">Gender</label>
              <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input id="gender" name="gender" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="comments" class="font-medium text-gray-700">Male</label>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input id="gender" name="gender" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="candidates" class="font-medium text-gray-700">Female</label>
                    </div>
                  </div>
            </div>
            <div>
              <label for="phone_number" class="block text-sm font-medium text-gray-700">Phone Number</label>
              <input type="text" name="phone_number" id="phone_number" autocomplete="phone_number" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />            
            </div>
            <div>
              <label for="appointment_date" class="block text-sm font-medium text-gray-700">Appointment Date</label>
              <input type="text" name="appointment_date" id="appointment_date" autocomplete="appointment_date" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />            
            </div>
            <div>
              <label for="first_name" class="block text-sm font-medium text-gray-700">Consultant Hour</label>
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input id="comments" name="comments" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                </div>
                <div class="ml-3 text-sm">
                  <label for="comments" class="font-medium text-gray-700">Morning</label>
                </div>
              </div>
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input id="candidates" name="candidates" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                </div>
                <div class="ml-3 text-sm">
                  <label for="candidates" class="font-medium text-gray-700">Evening</label>
                </div>
              </div>
            </div>
            <div>
              <label for="department" class="block text-sm font-medium text-gray-700">Department</label>
              <select id="department" name="department" autocomplete="department" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option>Coronary Department</option>
                <option>Intensive Department</option>
                <option>Neurology</option>
              </select>
            </div>
            <div>
              <label for="department" class="block text-sm font-medium text-gray-700">Doctor</label>
              <select id="department" name="department" autocomplete="department" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option>Select Doctor</option>
              </select>
            </div>
            <div>
              <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 md:w-full">
                Submit Request
              </button>
            </div>
          </div>
        </form>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
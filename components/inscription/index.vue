<template>
<div class="mainContainer">
    <div class="box">
        <form action="">
            <div class="row">
                <div>
                    <label>Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter your name">
                </div>
                <div>
                    <label>First name</label>
                    <input type="text" name="firstName" id="firstName" placeholder="Enter your first name">
                </div>
            </div>
            <div class="row">
                <div>
                    <div class="datepicker relative form-floating mb-3 xl:w-96">
                        <input type="text"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Select a date" />
                        <label for="floatingInput" class="text-gray-700">Select your birth date</label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div>
                    <label for="parentNumber">Parent's phone number</label>
                    <input type="text" id="parentNumber">
                </div>
            </div>
        </form>
    </div>
</div>
</template>
<style>

</style>
<template>
<div>
  <div class="bg-white">
  <div class="flex items-center justify-between flex-wrap mr-2 ml-4">
      <div class="flex items-center flex-shrink-0 text-white mt-12">
          <img src="../../../assets/gif/logo.gif" alt="Logo" class="w-20 h-20">
          <span class="font-semibold text-xl tracking-tight text-black">Mon Site</span>
      </div>
      <nav class="bg-size-cover mx-auto" style="background-image: url(https://live.templateelementor.com/little-talk/wp-content/uploads/sites/57/2022/08/Group-28516.png); background-size: cover; height: 100px;">
          <!-- Contenu de la navbar -->
          <div class="flex items-center">
              <nuxt-link to="/" class="px-4 py-2 text-lg font-medium text-gray-800 hover:text-gray-600 ml-8 mr-8 mt-12 text-gray-200">Home</nuxt-link>
              <nuxt-link to="/divertissement" class="px-4 py-2 text-lg font-medium text-gray-800 hover:text-gray-600 ml-8 mr-8 mt-12">Divertisement</nuxt-link>
              <nuxt-link to="/discussion" class="px-4 py-2 text-lg font-medium text-gray-800 hover:text-gray-600 ml-8 mr-8 mt-12">Discussion</nuxt-link>
              <nuxt-link to="/education" class="px-4 py-2 text-lg font-medium text-gray-800 hover:text-gray-600 ml-8 mr-8 mt-12">Education</nuxt-link>
              <nuxt-link to="/recherche" class="px-4 py-2 text-lg font-medium text-gray-800 hover:text-gray-600 ml-8 mr-8 mt-12">Recherche</nuxt-link>
          </div>
      </nav>
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-12">
    <nuxt-link to="/login" >Se Connecter</nuxt-link>
  </button>
</div>
</div>
<div class="bg-white flex justify-center">

  </div>
</div>
</template>
<style>
/* .nuxt-link-exact-active::after{
  content: '';
  position: absolute;
  bottom: 0;
  width: 3rem;
  height: 5px;
  background: blue;
} */
.nuxt-link-exact-active{
  font-weight: bold;
}
nuxt-link{
  transition: .5s ease;
}

</style>
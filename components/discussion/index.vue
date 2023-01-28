<template>
    <div class="bg-white flex justify-center">
      <div class="lg:flex items-center justify-between mt-6 ml-5">
            <div class="lg:w-1/2 w-full px-10">
                <h1 role="heading" class="md:text-5xl text-3xl font-bold leading-10 mt-3 text-gray-800">Echange entre Parents et Enfants</h1>
                <p role="contentinfo" class="text-base leading-5 mt-5 text-gray-600">l est bon d'aider les enfants à rester informés de ce qui se passe dans leur monde, mais, les journaux ordinaires peuvent ne pas être le moyen idéal de le faire. Sites Web de nouvelles sécuritaires pour les enfants 8 Sites Web sécuritaires pour les enfants où les enfants peuvent écouter toutes les nouvelles récentes</p>
                <div class="w-56">
                    <button onclick="toggleIt()" class="bg-gray-100 shadow rounded-full flex items-center mt-10 rounded-full">
                        Commencer à discuter
                    </button>
                </div>
            </div>
            <div class="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8 my-12 listContainer" role="list">
                <img src="https://i.ibb.co/0n6DSS3/bgimg.png" class="absolute w-full -ml-12 mt-24" alt="background circle images" />
                <div role="listitem" class="bg-white cursor-pointer shadow rounded-lg p-8 relative z-30">
                    <div class="md:flex items-center justify-between">
                        <h2 class="text-2xl font-semibold leading-6 text-gray-800">Starter</h2>
                        <p class="text-2xl font-semibold md:mt-0 mt-4 leading-6 text-gray-800">FREE</p>
                    </div>
                    <p class="md:w-80 text-base leading-6 mt-4 text-gray-600">Full access to all features and no credit card required</p>
                </div>
                <div role="listitem" class="bg-white cursor-pointer shadow rounded-lg mt-3 flex relative z-30">
                    <div class="w-2.5 h-auto bg-indigo-700 rounded-tl-md rounded-bl-md"></div>
                    <div class="w-full p-8">
                        <div class="md:flex items-center justify-between">
                            <h2 class="text-2xl font-semibold leading-6 text-gray-800">Personal</h2>
                            <p class="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800"><span class="font-normal text-base">/mo</span></p>
                        </div>
                        <p class="md:w-80 text-base leading-6 mt-4 text-gray-600">Unlimited products features and dedicated support channels</p>
                    </div>
                </div>
                <div role="listitem" class="bg-white cursor-pointer shadow rounded-lg p-8 relative z-30 mt-7">
                    <div class="md:flex items-center justify-between">
                        <h2 class="text-2xl font-semibold leading-6 text-gray-800">Team</h2>
                        <p class="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800"><span class="font-normal text-base">/mo</span></p>
                    </div>
                    <p class="md:w-80 text-base leading-6 mt-4 text-gray-600">Unlimited products features and dedicated support channels</p>
                </div>
            </div>
            <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->
        </div>
    </div>
</template>

<style>
.w-56 button {
    background: #fc6d0e;
    transition: .5s ease;
}
.w-56 button:hover {
    background: #ee6c15;
}
.listContainer {
    margin-block: 2rem;
}
.listContainer>div:hover {
    transform: translateX(-1rem);
    transition: .5s ease;
    box-shadow: 0 0 1rem #0000003b;
}
</style>
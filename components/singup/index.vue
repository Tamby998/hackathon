<template>
<div class="mainContainer">
    <div class="box" id='box1'>
        <div class="logo">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
            <h3>App Name</h3>
        </div>
        <h3 class="title">Create your account <span>(step 1/2)</span> </h3>
        <form action="">
            <div class="row">
                <div class="formInput">
                    <label>Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter your name">
                </div>
                <div class="formInput">
                    <label>First name</label>
                    <input type="text" name="firstName" id="firstName" placeholder="Enter your first name">
                </div>
            </div>
            <div class="row">
                <div class="formInput">
                    <label>Birth date</label>
                    <input type="date" name="birthDate" id="birthDate" placeholder="Enter your birth date">
                </div>
            </div>
            <div class="row">
                <div class="formInput">
                    <label for="parentNumber">Parent's phone number</label>
                    <input type="text" id="parentNumber" placeholder="+261*********">
                </div>
            </div>
            <button>Next</button>
            

            
        </form>
        </div>
        <div class="box" id="box2">
            <div class="logo">
                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
                <h3>App Name</h3>
            </div>
            <h3 class="title">Create your account <span>(step 2/2)</span> </h3>
            <form action="">
            <div class="row">
                <div class="formInput">
                    <label>Code</label>
                    <input type="text" name="passCode" id="passCode" placeholder="Enter the pass code">
                </div>
            </div>
            <div class="row">
                <div class="formInput">
                    <label>Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter your">
                </div>
            </div>
            <button>Singup</button>
        </form>
        </div>
</div>
</template>
<style>

* {
    color: #1d1d1d;
}
.mainContainer {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(45deg, #6bb3a7, #a1c267);
}
.box {
    background: #91cde4;
    padding: 2.3rem;
    box-shadow: 0 0 1rem #0000001f;
    border-radius: .3rem;
    position: relative;
    transition: .5s ease;
}
.box.left {
    transform: translateX(-10rem);
}
.box.right {
    transform: translateX(10rem);
    /* right: -10rem; */
}
.box .logo {
    display: flex;
    align-items: center;
    gap: .7rem;
    position: absolute;
    transform: translate(-50%, -50%);
    top: -2rem;
    left: 50%;
}
.box .logo h3 {
    color: white;
    font-size: 1.3rem;
    font-weight: 600;
}
.box .title {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1rem;
}
.box .title span {
    font-size: 1rem;
    font-weight: 600;
}
.formInput {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}
.formInput label {
    margin-bottom: .5rem;
    font-size: 12px;
}
input[type=text], input[type=password], input[type=date] {
    padding: .5rem 1rem;
    border-radius: .2rem;
    background: #ffffff6e;
}
button {
    width: 100%;
    padding: .5rem;
    background: #FC6D0E;
    border-radius: .3rem;
    color: white;
    transition: .5s ease;
}
button:hover {
    background: #ff802c;
}
#box2 {
    position: absolute;
    display: none;
}
</style>
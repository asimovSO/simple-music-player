<template>
  <div class="flex align-center gap-2 text-track-duration font-light">
    <span class="start-position">0:00</span>
    <input type="range" name="" id="" class="w-[330px] h-[5px] slider-input" step="1" value="20"/>
    <span class="end-position">3:23</span>
  </div>
</template>
<style>
.slider-input {
  -webkit-appearance: none;
	appearance: none;
	width: 100%;
	height: 4px;
	border-radius: 2px;
	background: #c2c2c2;
	outline: none;
	opacity: 0.7;
	-webkit-transition: .2s;
	transition: opacity .2s;
 
}
.slider-input::-webkit-slider-thumb {
  -webkit-appearance: none;
	appearance: none;
	width: 18px;
	height: 18px;
	background: #D8A22E;
	cursor: pointer;
	border-radius: 50%;
}
.slider-input::-moz-range-thumb {
  width: 18px;
	height: 18px;
	background: #D8A22E;
	cursor: pointer;
	border-radius: 50%;
}
</style>

<template>
    <div class="w-[262px] h-[262px] ">
        <img :src="img_src" alt="" class="w-full ">
    </div>
</template>
<script setup>
defineProps({
    img_src: String
})
</script>
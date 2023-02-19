<template>
    <div class="w-[300px] h-[300px] ">
        <img :src="img_src" alt="" class="w-full ">
    </div>
</template>
<script setup>
defineProps({
    img_src: String
})
</script>
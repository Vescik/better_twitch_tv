<template>
    <div>
        <h1>test</h1>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
    console.log('test-1');
    onMounted(() => {
        console.log('test-2');
    });
</script>

<style lang="scss" scoped>
    div {
        background-color: red;}
</style>
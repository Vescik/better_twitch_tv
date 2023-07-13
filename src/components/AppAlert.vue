<template>
    <transition name="fade">
        <div v-if="alertStore.alert.show" 
            class="alert_container"
            :class="alertStore.alert.type === 'success' ? 'success' : 'error'"
            >
        <p>{{ alertStore.alert.message }}</p>
    </div>
    </transition>
</template>

<script lang="ts" setup>
import { useAlertStore } from '@/store/AlertStore';

const alertStore = useAlertStore();



</script>

<style lang="scss" scoped>
.alert_container {

    background-color: red;
    padding: 10px 20px;
    border-radius: 10px;
    position: absolute;
    left: 10px;
    bottom: 10px;
    z-index: 100;
}
.success {
    background-color: green;
}
.error {
    background-color: red;
}

</style>
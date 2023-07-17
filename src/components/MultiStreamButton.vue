<template>
    <div class="multi_button" @click="handleToggleMultiModal">
    
      <span class="material-symbols-rounded">grid_view</span>
      <p class="multi_button-text">WatchTogether</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useWatchTogetherStore } from '@/store/WatchTogetherStore';
  import { useAlertStore } from '@/store/AlertStore';
  
  const watchTogetherStore = useWatchTogetherStore();
  const alertStore = useAlertStore();
  const multiList = watchTogetherStore.watchTogetherList;

  const handleToggleMultiModal = () => {
    if (multiList.length !== 0) {
      watchTogetherStore.toggleMultiModal();
    }else{
      alertStore.showAlert("Dodaj wiecej streamow do WatchTogether!", "error")
    }
  };

  </script>
  
  <style lang="scss" scoped>
  .multi_button {
    position: fixed;
    top: 90%;
    right: 55px;
    width: 50px;
    height: 50px;
    background-color: #9147ff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  
    &:hover {
      background-color: #7a2eeb;
  
      .multi_button-text,
      .multi_list {
        display: block;
        animation: showText 0.3s ease-in-out;
      }
    }
  
    &-text {
      background-color: #9147ff;
      padding: 2px 5px;
      border-radius: 5px;
      position: absolute;
      right: 100%;
      margin-right: 10px;
      display: none;
    }
  }
  
  .multi_list {
    position: absolute;
    bottom: 110%;
    width: 125px;
    background-color: #9147ff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 0;
    justify-content: center;
    z-index: 100;
    display: none;
  
    & h4 {
      color: #fff;
    }
  
    & li {
      color: #fff;
      width: 100%;
      background-color: #25024d;
      margin-bottom: 5px;
    }
  }
  
  .--visible {
    display: block;
  }
  
  @keyframes showText {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  </style>
  
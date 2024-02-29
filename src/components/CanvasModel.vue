<script setup lang="ts">
import {watch, ref} from 'vue'
import { TresCanvas } from '@tresjs/core';
import { Sky, OrbitControls, Sampler  } from '@tresjs/cientos'
import { MouseParallax, TorusKnot } from '@tresjs/cientos'


const torusRef = ref()
const instancesRef = ref()


</script>

<template>
  <TresCanvas clear-color="#82DBC5" window-size>
    
    <TresPerspectiveCamera
      :position="[3, 3, 3]"
      :fov="25"
      :look-at="[0, 0, 0]"
    />
    <Sampler :count="500">
      <TresMesh>
        <TresPlaneGeometry  :rotate-x="200" :args="[20,20,32,32]" /> 
        <TresMeshBasicMaterial color="black" />
      </TresMesh>

      <TresInstancedMesh :args="[null!, null!, 1000]">
        <TresTorusGeometry :args="[1,1.5,50]" />
        <MouseParallax
      :factor="3"
      :ease="1"
    />
        <TresMeshNormalMaterial />
      </TresInstancedMesh>
    </Sampler>

    <TresAmbientLight :intensity="1" />


  </TresCanvas>
</template>
<style>
canvas{
  position: absolute;
  z-index: -1;
  width: 100% !important;
  height: 100% !important;

}
</style>

<template>
    <div class="loading">
        loading...
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>
<style lang="less">
.loading{
    // width: 100%;
    // height: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.3);
    z-index: 100;
}
</style>
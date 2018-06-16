<template>
    <div>
        <p>{{msg}}</p>
        <p><button @click="fn">按钮</button></p>
    </div>
</template>
<script>
import home from './home.js';
export default {
    ...home
}
</script>
<style  scope>
@import "./home.css";
</style>

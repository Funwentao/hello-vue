<template>
    <div>
        <p>{{msg}}</p>
        <p><button @click="fn">按钮</button></p>
        <p>
            <input type="text" v-model.lazy="input" @input="inputHandler">
        </p>
    </div>
</template>
<script>
import home from './home.js';
export default {
    ...home
}
</script>
<style  src="./home.css" scope></style>

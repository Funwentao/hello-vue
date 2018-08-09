<template>
    <div>
        <p>{{msg}}</p>
        <p><button @click="fn">按钮</button></p>
        <div>
            <template v-if="true">
                <p>123</p>    
            </template>
            <template>
                <p>456</p>    
            </template>
        </div>
        <div class="app">
            <div ref="msgDiv">{{msg}}</div>
            <div v-if="msg1">Message got outside $nextTick: {{msg1}}</div>
            <div v-if="msg2">Message got inside $nextTick: {{msg2}}</div>
            <div v-if="msg3">Message got outside $nextTick: {{msg3}}</div>
            <button @click="changeMsg">
                Change the Message
            </button>
        </div>
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

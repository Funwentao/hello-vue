<template>
    <el-container>
        <el-header>
            <div class="btn-content">
                <el-button v-for="(theme, index) in themes" 
                    :key="index" 
                    :type="theme"
                    @click="themeChange(theme)">{{theme}}</el-button>
            </div>
        </el-header>
        <el-main>
            <div class="m20">
                <el-button>这是按钮</el-button>
            </div>
            <div class="m20">
                <el-checkbox v-model="checked">选项</el-checkbox>
            </div>
            <div class="m20">
                <el-input v-model="input" placeholder="请输入内容"></el-input>
            </div>
            <div class="m20">
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="m20">
                <el-switch v-model="value2"></el-switch>
            </div>
            <div class="m20">
                <el-slider v-model="value1"></el-slider>
            </div>
        </el-main>
        <el-footer ></el-footer>
    </el-container>
</template>
<script>
import home from './home.js';
export default {
    ...home
}
</script>
<style  src="./home.less" scope lang="less"></style>

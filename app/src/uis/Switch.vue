<template>
    <div class="switch" @click="click" :class="['switch-'+size,{active:bool}]">
        <slot name="open" v-if="bool"></slot>
        <div class="slide" :class="{selected:bool}"></div>
        <slot name="close" v-if="!bool"></slot>
    </div>
</template>

<script>
    export default {
        name: "iSwitch",
        props: {
            size: {
                type: String,
                default: "default"
            },
            disabled: Boolean,
            value: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                bool: this.value
            }
        },
        watch: {
            value (newVal) {
                this.bool = newVal;
            },
            bool (newVal) {
                this.$emit("input",newVal);
            }
        },
        methods: {
            click () {
                if (this.disabled) {
                    this.bool = !this.disabled; // 控制开关是状态，此时为关闭，若要打开则删除这行
                    return;
                };
                this.bool = !this.bool;
                this.$emit ("click");
            }
        },
    }
</script>

<style lang="less" scoped>
    .switch {
        background: #cccccc;
        border: 1px solid #cccccc;
        display: inline-block;
        font-size: 12px;
        color: #ffffff;
        cursor: pointer;
        span {
            position:absolute;
            display: block;
        }
        span:first-child {
            left: 8px;
        }
        span:last-child {
            right: 8px;
        }
        &.active {
            background: #2d8cf0;
            border-color: #2d8cf0;;
        }
        .render (@w,@h) {
            width: @w;
            height: @h;
            line-height: @h;
            border-radius: @h;
            position: relative;
            left: 0;
            top: 0;
            transition: all 0.2s linear;
            .slide {
                position:absolute;
                width: @h;
                height: @h;
                border-radius: @h;
                background: #ffffff;
                &.selected {
                    left: @w - @h;
                }
            }
        }
        &.switch-large {
            .render(60px,24px);
        }
        &.switch-default {
            .render(48px,24px);
        }
        &.switch-small {
            .render(24px,12px);
        }
        
    }
    
</style>
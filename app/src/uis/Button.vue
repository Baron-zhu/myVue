<template>
    <button class="btn" @click="$emit('click')" :disabled="disabled" :class="['btn-'+type,{long:long}]" >
        <slot>{{type}}</slot>
    </button>
</template>

<script>
    export default {
        name: "Button",
        props: {
            type: {
                type: String,
                required: true
            },
            long: Boolean,
            disabled: Boolean
        }
    }
</script>

<style lang="less" scoped>
    @import url("./var.less");
    .render (@r,@bgcolor,) {
        border-radius: @r;
        background: @bgcolor;
        &:hover {
            cursor: pointer;
            background: rgba(@bgcolor, 80%);
            transition: all 0.4s linear; 
        }
    }
    .btn {
        border: none;
        padding: 8px 10px;
        &.btn-disabled {
            .render(4px,@Disabled);
            &:hover {
                cursor: no-drop;
            }
        }
        &.btn-info {
            .render(4px,@Info);
        }
        &.btn-success {
            .render(4px,@Success);
        }
        &.btn-primary {
            .render(4px,@Primary);
        }
        &.btn-warning {
            .render(4px,@Warning);
        }
        &.btn-error {
            .render(4px,@Error);
        }
        &.btn-dashed {
            border: 1px dashed #aaaaaa;
            .render(4px,@Dashed);
            color: #aaaaaa;
            &:hover {
                border: 1px dashed #2d8cf0;
                color: #2d8cf0;
            }
        }
        &.long {
            display: block;
            width: 100%;
        }
    }
</style>
<template lang="">
    <button>
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'my-button'
}
</script>
<style scoped>
    button{
        background: none;
        border: none;
        border-bottom: 1px solid #333;
        padding: 1px 0;
    }
</style>
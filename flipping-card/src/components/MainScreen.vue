<template>
    <div>
        <h1>POKE MEMORIES</h1>
        <h3>Select mode to start game</h3>
        <div class="actions">
            <button @click="onStart($event, 16)">
                <span>4x4</span>
                <span>Easy</span>
            </button>
            <button @click="onStart($event, 36)">
                <span>6x6</span>
                <span>Normal</span>
            </button>
            <button @click="onStart($event, 64)">
                <span>8x8</span>
                <span>Hard</span>
            </button>
            <button @click="onStart($event, 100)">
                <span>10x10</span>
                <span>Super Hard</span>
            </button>
        </div>
    </div>
</template>

<script>
export default{
    name: 'MainScreen',
    data() {
        return {
            mode: "",
        }
    },
    methods: {
        onStart(event, gameMode){
            this.$emit("onStart",{totalBlocks: gameMode})
        }
    },
}
</script>
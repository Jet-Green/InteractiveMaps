<script setup>
import { useRouter } from "vue-router";

let router = useRouter();

function toStartPage() {
    router.push("/");
}
</script>
<template>
    <v-row>
        <v-col>
            <span class="back-btn" @click="toStartPage" style="cursor: pointer;">
                <span class="mdi mdi-24px mdi-arrow-left my-4"></span>
                Назад
            </span>
        </v-col>
    </v-row>
</template>
<style lang="scss" scoped>
.back-btn {
    display: flex;
    align-items: center;
}

.mdi-arrow-left {
    height: 40px;
    width: 40px;
}
</style>
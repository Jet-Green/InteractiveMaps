<script setup>
import background from '../assets/images/sunset.svg'
import fountain from '../assets/images/fountain.svg'
import map from '../assets/images/map.svg'

import { useRouter } from 'vue-router'

let router = useRouter()
</script>
<template>
    <v-row>
        <v-col cols="12" class="pa-0">
            <v-parallax :src="background" height="70vh" class="d-flex align-center">
                <h1 class="title">
                    Удмуртия - Родниковый край
                </h1>
            </v-parallax>
        </v-col>
    </v-row>
    <v-row class="gray-section d-flex justify-center align-center pt-2">
        <v-col cols="10" sm="8" md="10" lg="6">
            <v-row>
                <v-col md="6" cols="12" class="d-flex justify-center">
                    <v-card class="nav-card" @click="router.push('/info')">
                        <v-row>
                            <v-col lg="4" md="3" cols="6">
                                <img :src="fountain" alt="родник" height="100">
                            </v-col>
                            <v-col lg="8" md="9" cols="6" class="d-flex align-center justify-center">
                                <h2>Родники</h2>
                            </v-col>
                        </v-row>
                        <v-tooltip location="bottom" activator="parent">
                            <span>О родниках Удмуртии</span>
                        </v-tooltip>
                    </v-card>
                </v-col>
                <v-col md="6" cols="12" class="d-flex justify-center">
                    <v-card class="nav-card" @click="router.push('/map')">
                        <v-row>
                            <v-col lg="4" md="3" cols="6">
                                <img :src="map" alt="карта" height="100">
                            </v-col>
                            <v-col lg="8" md="9" cols="6" class="d-flex align-center justify-center">
                                <h2>Интерактивная Карта</h2>
                            </v-col>
                        </v-row>
                        <v-tooltip location="bottom" activator="parent">
                            <span>Посмотрите подробную карту родников</span>
                        </v-tooltip>
                    </v-card>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>
<style scoped lang="scss">
.title {
    text-align: center;
    color: white;
}

.gray-section {
    min-height: 40vh;
    background: linear-gradient(0, #EEBEA5, #EFC8AD);
    // #F9E3BB;
    //  rgba(0, 0, 0, 0.2)
}

.nav-card {
    padding: 16px;
    border-radius: 20px;
    width: 100%;

    background-color: #F9E3BB;

    cursor: pointer;
}
</style>

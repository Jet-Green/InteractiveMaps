<script setup>
import fountain from '../assets/images/fountain.svg'
import map from '../assets/images/map.svg'
import folder from '../assets/images/folder.svg'
import flag from '../assets/images/flag.png'

import { useRouter } from 'vue-router'

let router = useRouter()
</script>
<template>
    <v-row>
        <v-col cols="12" class="pa-0">
            <v-parallax
                src="https://psv4.userapi.com/c235031/u459948274/docs/d51/127bc319d5e0/6.jpg?extra=iFZBoSfZwseXaOis_tDuHPrbdzSahVMNk7nigJ5CiYMVby5wIOhChEkm-owblH9JFjyJkQmRfHWloanXjpmsU-boaeMg2TFMP_Ia0txjdmU49QCnjy34MT9gGwgyIKDk2VfB7sfOE_Q6NVNDfZ26Xpw"
                height="70vh" class="d-flex align-center" scale="1">
            </v-parallax>
        </v-col>
    </v-row>
    <v-row class="section d-flex justify-center align-center pt-2">
        <v-col cols="10" sm="8" md="10" lg="6">
            <v-row>

                <v-col md="6" cols="12" class="d-flex justify-center">
                    <v-card class="nav-card" @click="router.push('/project')">
                        <v-row>
                            <v-col lg="5" cols="6">
                                <img :src="folder" alt="проект" height="100">
                            </v-col>
                            <v-col lg="7" cols="6" class="d-flex align-center justify-center">
                                <h2>Прокет "Родниковый Край"</h2>
                            </v-col>
                        </v-row>
                        <v-tooltip location="bottom" activator="parent">
                            <span>Подробнее</span>
                        </v-tooltip>
                    </v-card>
                </v-col>

                <v-col md="6" cols="12" class="d-flex justify-center">
                    <v-card class="nav-card" @click="router.push('/krai')">
                        <v-row>
                            <v-col lg="5" cols="6">
                                <img :src="flag" alt="карта" height="100" style="aspect-ratio: 1.45">
                            </v-col>
                            <v-col lg="7" cols="6" class="d-flex align-center justify-center">
                                <h2>Удмуртия - Родниковый край</h2>
                            </v-col>
                        </v-row>
                        <v-tooltip location="bottom" activator="parent">
                            <span>Подробнее</span>
                        </v-tooltip>
                    </v-card>
                </v-col>

                <v-col md="6" cols="12" class="d-flex justify-center">
                    <v-card class="nav-card" @click="router.push('/underground')">
                        <v-row>
                            <v-col lg="5" cols="6">
                                <img :src="fountain" alt="карта" height="100">
                            </v-col>
                            <v-col lg="7" cols="6" class="d-flex align-center justify-center">
                                <h2>Подземные воды Удмуртии</h2>
                            </v-col>
                        </v-row>
                        <v-tooltip location="bottom" activator="parent">
                            <span>Подробнее</span>
                        </v-tooltip>
                    </v-card>
                </v-col>

                <v-col md="6" cols="12" class="d-flex justify-center">
                    <v-card class="nav-card" @click="router.push('/rodniki')">
                        <v-row>
                            <v-col lg="5" cols="6">
                                <img :src="fountain" alt="родник" height="100">
                            </v-col>
                            <v-col lg="7" cols="6" class="d-flex align-center justify-center">
                                <h2>Родники Глазовского района</h2>
                            </v-col>
                        </v-row>
                        <v-tooltip location="bottom" activator="parent">
                            <span>Подробно о родниках Глазовского района</span>
                        </v-tooltip>
                    </v-card>
                </v-col>

                <v-col md="6" cols="12" class="d-flex justify-center">
                    <v-card class="nav-card" @click="router.push('/map')">
                        <v-row>
                            <v-col lg="5" cols="6">
                                <img :src="map" alt="карта" height="100">
                            </v-col>
                            <v-col lg="7" cols="6" class="d-flex align-center justify-center">
                                <h2>Карта</h2>
                            </v-col>
                        </v-row>
                        <v-tooltip location="bottom" activator="parent">
                            <span>Посмотрите карту родников</span>
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

.section {
    min-height: 35vh;
    background: linear-gradient(0, #006957, #1E796A);
    // #1E796A;
    // #F9E3BB;
    //  rgba(0, 0, 0, 0.2)
}

.nav-card {
    padding: 16px;
    border-radius: 20px;
    width: 100%;

    background-color: #a6c3e2;
    //  #6997D3;
    // #9fa8c2;
    // #788eba;

    cursor: pointer;
}
</style>

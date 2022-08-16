<script setup>
import { onMounted } from 'vue'
import Back from '../components/Back.vue'


onMounted(() => {
    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init() {
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [58.12551766396349, 52.675793129821756],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 16
        });
        // Загрузка XML данных.
        // Функция определяет формат файла (KML, GPX или YMapsML) автоматически.
        let data = ymaps.geoXml.load("https://raw.githubusercontent.com/Jet-Green/InteractiveMapsData/main/InteractiveMap_09-08-2022_08-58-27.kml");

        // Обработка полученного асинхронно ответа.
        data.then(function (res) {
            // Добавление объектов на карту.
            myMap.geoObjects.add(res.geoObjects);
        });
    }
})
</script>
<template>
    <div>
        <v-row class="d-flex justify-center">
            <v-col cols="10">
                <Back />
                <h1>На карте отмечены все родники</h1>
                <div id="map" style="width: 100%; height: 90vh"></div>
            </v-col>
        </v-row>
    </div>
</template>
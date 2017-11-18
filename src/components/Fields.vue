<template>
    <div class="columns">
        <div class="column is-half">
            <gmap-map
                    :center="{lat: 44.79742899855565, lng:20.76141357421875}"
                    :zoom="8"
                    style="width: 100%; height: 100vh;">

                <gmap-marker
                        :key="index"
                        v-for="(m, index) in markers"
                        :position="m.position"
                        :clickable="true"
                        :draggable="true"
                        :icon="{url: 'https://i.imgur.com/r7Kr2xn.png'}"
                ></gmap-marker>
                <!--<div slot="visible">-->
                <!--<div style="background-color: red; color: white; padding:15px;position:relative; z-index: 100">-->
                <!--{{description}}-->
                <!--</div>-->
                <!--</div>-->
            </gmap-map>
        </div>

        <div class="column is-half">
            <map-filter></map-filter>
            <div class="field">

            </div>
        </div>
    </div>
</template>
<script>
    import Filter from './helpers/Filter.vue'

    export default {
        components: {
            'map-filter': Filter
        },
        data() {
            return {
                description: '',
                markers: [{
                    position: {lat: 10.0, lng: 10.0},
                    text: 'Test text',
                }, {
                    position: {lat: 11.0, lng: 11.0},
                    text: 'Text dva'
                }]
            }
        },
        methods: {
            showDescription(item) {
                this.description = item.text;
            }
        }
    }
</script>
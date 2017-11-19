<template>
    <div class="columns">


        <div class="column is-half">
            <div class="insert-field">
                <h1 class="title">Unos njive</h1>
                <hr>
                <div class="insert-form">
                    <div class="field">
                        <label class="label">Naziv</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Unesite naziv..." v-model="name">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Adresa</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Unesite adresu..." v-model="markers.address">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Okrug</label>
                        <div class="select">
                            <select v-model="area">
                                <option value="Vojvodina">Vojvodina</option>
                                <option value="Beogradski okrug">Beogradski okrug</option>
                                <option value="Šumadija i zapadna Srbija">Šumadija i zapadna Srbija</option>
                                <option value="Južna i istočna Srbija">Južna i istočna Srbija</option>
                                <option value="Kosovo i Metohija">Kosovo i Metohija</option>
                            </select>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Opis</label>
                        <div class="control">
                            <textarea class="textarea" placeholder="Unesite opis" v-model="description"></textarea>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Površina njive</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Unesite povrsinu njive u arima..."
                                   v-model="width">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Tip</label>
                        <div class="select">
                            <select v-model="type">
                                <option value="1">Cela njiva</option>
                                <option value="2">Deo njive</option>
                            </select>
                        </div>
                    </div>
                    <div class="field is-grouped is-grouped-multiline">
                        <div class="tags has-addons" v-for="item in listFruits"
                             @click="addItem(item)" style="margin-bottom: 1rem; margin-right:1rem">
                            <span class="tag">{{item.name}}</span>
                            <span class="tag" :class="item.selected ? 'is-primary' : 'is-danger'"><i
                                    class="fa fa-checked"></i>
                                </span>
                        </div>
                    </div>
                    <hr>
                    <div class="field is-grouped is-grouped-multiline">
                        <div class="tags has-addons" v-for="item in listMehanic"
                             @click="addItem(item)" style="margin-bottom: 1rem; margin-right:1rem">
                            <span class="tag">{{item.name}}</span>
                            <span class="tag" :class="item.selected ? 'is-primary' : 'is-danger'"><i
                                    class="fa fa-checked"></i>
                                </span>
                        </div>
                    </div>


                </div>
                <button type="button" class="button is-info is-fullwidth" @click="submit()">
                    <span>Dodaj njivu</span>
                </button>
            </div>

        </div>
        <div class=" column is-half">
            <gmap-map
                    :center="{lat: 44.79742899855565, lng:20.76141357421875}"
                    :zoom="11"
                    style="width: 100%; height: 100vh;"
                    @click="getLocation($event)">
                <gmap-marker
                        :position="markers.position"
                        :clickable="true"
                        :draggable="true"
                        :icon="{url: 'https://i.imgur.com/r7Kr2xn.png'}"
                ></gmap-marker>

            </gmap-map>
        </div>
    </div>
</template>
<script>
    import Filter from './helpers/Filter.vue'

    export default {
        components: {
            'map-filter': Filter
        },
        created() {
            this.getFruit();
            this.getMehanic();
        },
        data() {
            return {
                name: '',
                description: '',
                area: '',
                type: '',
                width: '',
                markers: {},
                fruits: [],
                mehanic: [],

                listMehanic: [],
                listFruits: [],
            }
        },
        methods: {
            getLocation(event) {
                this.$nextTick(() => {
                    let position = {lat: event.latLng.lat(), lng: event.latLng.lng()};
                    this.globalPostion = position;
                    this.getAddress(position)
                });

            },
            getAddress(position) {
                axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.lat + ',' + position.lng + '&sensor=true&key=AIzaSyCaDqguUKqZrEa7m5JEbzcZIpWmAcCl6Pg').then(response => {
                    this.markers = {
                        position: position,
                        address: response.data.results[0].formatted_address
                    };
                });
            },
            getFruit() {
                axios.get(window._api + '/getAll/Fruit').then(response => {
                    this.listFruits = response.data;
                });
            },
            getMehanic() {
                axios.get(window._api + '/getAll/Mechanic').then(response => {
                    this.listMehanic = response.data;
                });
            },
            addItem(item) {
                item.selected = true;
            },
            submit() {
                let user = {
                    "id": "5a10c30fa8428a45ecb88cf1",
                    "name": "Zika",
                    "email": "neko@gmail.com",
                    "phoneNumber": "0641234567",
                    "password": "nekasifra",
                    "type": 1
                };
                let data = {
                    name: this.name,
                    area: this.area,
                    position: this.markers.position,
                    address: this.markers.address,
                    description: this.description,
                    width: this.width,
                    user: user,
                    image: 'njiva1.jpg',
                };

                console.log(data);
//                private int type;
//                private List<Mechanic> mechanicList;
//                private List<Fruit> fruitList;
//                private int type_field;
            }
        }
    }
</script>
<style>
    .insert-field {
        padding: 30px 10px 30px 30px;
    }
</style>
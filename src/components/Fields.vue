<template>
    <div class="columns">
        <div class="column is-half" style="overflow: hidden; ">
            <div style="position: fixed;width: 100%;height: 100%;">
                <gmap-map
                        :center="{lat: 44.221583765457964, lng:22.73895263671875}"
                        :zoom="8" class="map">
                    <gmap-marker
                            :key="index"
                            v-for="(item, index) in fields"
                            :position="item.position"
                            :icon="{url: 'https://i.imgur.com/HTjBJKn.png'}"
                    ></gmap-marker>
                </gmap-map>
            </div>
        </div>
        <div class="column is-half fields-list">
            <map-filter></map-filter>
            <hr>
            <div class="columns is-multiline is-mobile" v-if=" Object.keys(selectedField).length === 0">
                <div class="column is-half" v-for="item in fields" @click="selectField(item)">
                    <div class="field-item">
                        <div class="field-image">
                            <img :src="getImgUrl(item.image)">
                            <div class="field-width">
                                {{item.usedWidth}}/{{item.width}} Ari, min 10 Ari
                            </div>
                        </div>
                        <div class="field-content">
                            <div class="title">
                                <h2>{{item.name}}   </h2>
                                <p>{{item.address}}, {{item.area}}</p>
                            </div>
                            <div class="rating">
                                <strong>{{item.rating}}</strong>
                                <small>{{parseInt(Math.random() * 50)}} ocene/a</small>
                            </div>
                        </div>
                        <div class="field-footer">
                            <div class="type">
                                <i class="fa fa-check"></i> Organski
                            </div>
                            <div class="type-field">
                                Tip: <span v-if="item.type === 0">Basta</span><span v-else>Njiva</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="columns is-multiline is-mobile" v-else>
                <div class="column">
                    <p @click="selectedField={}"><i class="fa fa-angle-left"></i> Nazad</p>
                    <hr>
                    <div class="one-field-image">
                        <img :src="getImgUrl(selectedField.image)" class="field-image-full-width">
                        <div class="field-width">
                            {{selectedField.usedWidth}}/{{selectedField.width}} Ari, min 10 Ari
                        </div>
                    </div>

                    <div class="one-field">
                        <br>
                        <h3 class="title is-3">{{selectedField.name}}</h3>
                        <p>{{selectedField.address}}, {{selectedField.area}}</p>
                        <div class="rating">
                            <strong>{{selectedField.rating}}</strong>
                            <small>{{parseInt(Math.random() * 50)}} ocene/a</small>
                        </div>
                        <hr>
                        <div>
                            <div class="type">
                                <i class="fa fa-check"></i> Organski
                            </div>
                            <div>
                                <strong>Tip zemlje:</strong> <span v-if="selectedField.type === 0">Basta</span><span
                                    v-else>Njiva</span>
                            </div>
                        </div>
                        <hr>
                        <p>
                            {{selectedField.description}}
                        </p>


                        <br>
                        <table class="table is-bordered is-striped is-narrow is-fullwidth">
                            <thead>
                            <tr>
                                <th>Voće/Povrće</th>
                                <th>Cena po kilogramu</th>
                                <th>Cena po aru</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="fitem in selectedField.fruitList">
                                <td>{{fitem.name}}</td>
                                <td>{{fitem.pricePerKilogram}} &#8364;</td>
                                <td>{{fitem.pricePerWidth}} &#8364;</td>
                            </tr>
                            </tbody>
                        </table>
                        <small>
                            *cena po kilogramu se odnosi na ...
                        </small>
                        <hr>
                        <h5 class="title is-5">Mehanizacija</h5>
                        <div class="field is-grouped is-grouped-multiline">
                            <div class="tags has-addons" v-for="mitem in selectedField.mechanicList"
                                 style="margin-bottom: 1rem; margin-right:1rem">
                                <span class="tag is-danger">{{mitem.name}}</span>
                            </div>
                        </div>
                        <button type="submit" class="button is-info is-fullwidth" @click="showModal()">
                            <span>Zatraži ponudu</span>
                        </button>

                    </div>

                </div>
            </div>
        </div>
        <modal v-if="modal" class="column" :item="selectedField"></modal>
        <div v-if="modal" class="close-modal" @click="modal = !modal"><i class="fa fa-close"></i></div>
    </div>
</template>
<script>
    import Filter from './helpers/Filter.vue'
    import Modal from './helpers/ModalOffer.vue'

    export default {
        components: {
            'map-filter': Filter,
            'modal': Modal,
        },
        created() {
            this.getFields();
        },
        data() {
            return {
                fields: [],
                selectedField: {},
                modal: false
            }
        },
        methods: {
            getFields() {
                axios.get(window._api + '/getAll').then(response => {
                    this.fields = response.data;
                })
            },
            getImgUrl(img) {
                let images = require.context("../assets/", false, /\.jpg/);
                return images("./" + img);
            },
            selectField(item) {
                console.log(item);
                this.selectedField = item;
            },
            showModal() {
                this.modal = !this.modal;
            }
        }
    }
</script>
<style>
    .close-modal {
        position: fixed;
        left: 52%;
        font-size: 32px;
        color: #fff;
        z-index: 120;
        top: 60px;
    }

    .one-field-image {
        position: relative;
    }

    .one-field-image .field-width {
        padding: 10px 30px 15px 10px;
        position: absolute;
        bottom: 6px;
        left: 0;
        background: rgba(255, 255, 255, 0.8);
        -webkit-border-top-right-radius: 30px;
        -moz-border-radius-topright: 30px;
        border-top-right-radius: 30px;
    }

    .field-image-full-width {
        width: 100%;
        height: 250px;
        object-fit: cover;
    }

    .fields-list {
        background: #ebecd1;
        z-index: 1;
        padding: 20px 30px 20px 20px
    }

    .map {
        -webkit-box-shadow: 4px 2px 13px -7px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 4px 2px 13px -7px rgba(0, 0, 0, 0.75);
        box-shadow: 4px 2px 13px -7px rgba(0, 0, 0, 0.75);
        width: 100%;
        height: 100%;
    }

    .field-item {
        background: #fff;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        -webkit-box-shadow: 0px 5px 28px -9px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 5px 28px -9px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 5px 28px -9px rgba(0, 0, 0, 0.75);
        border: 1px solid #ccc;
    }

    .field-item:hover {
        border: 1px solid #9ea983;
    }

    .field-item .field-image {
        position: relative;
    }

    .field-item .field-image img {
        height: 250px;
        width: 100%;
        object-fit: cover;
    }

    .field-item .field-width {
        padding: 10px 30px 15px 10px;
        position: absolute;
        bottom: 0;
        left: 0;
        background: rgba(255, 255, 255, 0.8);
        -webkit-border-top-right-radius: 30px;
        -moz-border-radius-topright: 30px;
        border-top-right-radius: 30px;
    }

    .field-item .field-content {
        padding: 15px 20px 0 20px;
        position: relative;
    }

    .field-item .field-footer i {
        color: green;
    }

    .field-item .field-content .title {
        padding-right: 40px
    }

    .field-item .field-content .title h2 {
        font-size: 24px;
        font-weight: normal;
        margin-bottom: 10px;
    }

    .field-item .field-content .title p {
        font-size: 14px;
    }

    .one-field {
        position: relative;
    }

    .field-item .field-content .rating,
    .one-field .rating {
        position: absolute;
        right: 15px;
        top: 15px;
        text-align: center;
    }

    .field-item .field-content .rating strong,
    .one-field .rating strong {
        font-size: 24px;
        color: green;
        display: block;
    }

    .field-item .field-content .rating small,
    .one-field .ratingsmall {
        font-size: 12px;
        display: block;
    }

    .field-item .field-footer {
        border-top: 1px solid #ccc;
        padding: 10px 20px;
    }

    .field-item .field-footer:after {
        clear: both;
        display: block;
        content: '';
    }

    .field-item .field-footer .type {
        float: left;
    }

    .field-item .field-footer .type-field {
        float: right;
    }
</style>
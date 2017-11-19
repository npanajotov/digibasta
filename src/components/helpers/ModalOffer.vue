<template>
    <div>
        <div class="modales">
            <h3 class="title is-3">
                Zatrazi ponudu
            </h3>
            <div class="modales-content">

                <p> Izaberite voće/povrće:</p>
                <br>
                <div class="field is-grouped is-grouped-multiline">
                    <div class="tags has-addons" v-for="fruit in allFruits"
                         @click="addItem(fruit)" style="margin-bottom: 1rem; margin-right:1rem">
                        <span class="tag">{{fruit.name}}</span>
                        <span class="tag" :class="fruit.selected ? 'is-primary' : 'is-danger'"><i
                                class="fa fa-checked"></i>
                                </span>
                    </div>
                </div>
                <div v-if="fruits.length">
                    <ul>
                        <li v-for="fruit in fruits" style="margin-bottom:10px;">
                            <div class="field is-horizontal">
                                <div class="field-label is-normal">
                                    <label class="label"> <i class="fa fa-close" @click="remove(fruit)"></i>
                                        {{fruit.name}}</label>
                                </div>
                                <div class="field-body">
                                    <div class="field">
                                        <p class="control">
                                            <input class="input" type="number"
                                                   placeholder="Koliku povrsinu njive zelite za izabrano voće/povrće u arima?"
                                                   @change="addPrice($event)">
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    Ukupna povrsina: {{sumWidth}} (u arima)
                    Ukupna cena (cena po aru * broj ari): {{sumPrice}}
                </div>
            </div>
        </div>
        <div class="overlay"></div>
    </div>
</template>
<script>
    export default {
        props: ['item'],
        created() {
            this.allFruits = this.item.fruitList;
        },
        data() {
            return {
                fruits: [],
                allFruits: [],
                sumWidth: 0,
                sumPrice: 0,
            }
        },
        methods: {
            addItem(item) {
                this.fruits.forEach(el => {
                    if (el === item) {
                        el.selected = true;
                    }
                });
                this.fruits.push(item);
            },
            remove(item) {
                this.allFruits.forEach(el => {
                    if (el.id === item.id) {
                        el.selected = !el.selected;
                    }
                });

                this.fruits = this.fruits.filter(el => {
                    if (el.id !== item.id) {
                        return el;
                    }
                });
            },

            addPrice(e) {
                if (e.target.value) {
                    this.sumWidth += parseFloat(e.target.value);
                }
            },
        }
    }
</script>
<style>
    .modales {
        position: fixed;
        top: 3.25rem;
        left: 0;
        bottom: 0;
        margin: auto;
        background: #fff;
        width: 50%;
        height: auto;
        z-index: 101;
        padding: 30px;
    }

    .overlay {
        background: rgba(0, 0, 0, 0.6);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
    }

    .modales-content {
        position: relative;
    }

    .field-label i {
        position: absolute;
        left: 0;
        font-size: 20px;
    }
</style>
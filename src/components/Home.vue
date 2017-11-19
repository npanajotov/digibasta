<template>
    <div>
        <!--<img src="../assets/bg.png" alt="">-->
        <!--<div class="box has-text-centered" style="position:absolute; width:50%; margin:auto;left:50%;right:50%; transform:translate(-50%,-50%);top:50%; bottom: 50%; z-index:1000;">-->
        <!--Hvala vam na rezervaciji-->
        <!--</div>-->
        <section class="hero is-large">
            <div class="has-bg-img"></div>
            <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="columns" style="background: transparent !important;">
                        <div class="column is-6">
                            <div class="card"
                                 style="width:100%;background-color: rgba(255,255,255,0.6); border-radius: 5px; margin:auto;display: table">
                                <div class="card-image"
                                     style="position: absolute; top:-50px; left:0;right:0;margin:auto;">
                                    <img src="../assets/seljo.png" alt="" style="width:120px">
                                </div>
                                <div class="card-content" style="margin-top:50px">
                                    <p class="title">
                                        Pridružite se kao proizvođač
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    </p>
                                    <br>
                                    <router-link tag="a" :to="{name: 'insert-field'}"
                                                 class="button is-warning is-medium">
                                        Nudim zemlju
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <br>
                        <br>
                        <div class="column is-6">
                            <div class="card"
                                 style="width:100%;background-color: rgba(255,255,255,0.6); border-radius: 5px; margin:auto;display: table">
                                <div class="card-image"
                                     style="position: absolute; top:-50px; left:0;right:0;margin:auto;">
                                    <img src="../assets/hipi.png" alt="" style="width:120px">
                                </div>
                                <div class="card-content" style="margin-top:50px">
                                    <p class="title">
                                        Pridružite se kao kupac
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    </p>
                                    <br>
                                    <router-link tag="a" :to="{name: 'fields'}" class="button is-warning is-medium">
                                        Baštiniraj
                                    </router-link>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    </div>
</template>
<script>
    export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .has-bg-img {
        background: url("../assets/bg.png") no-repeat;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
    }
</style>
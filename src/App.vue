<template>
    <div id="app">
        <nav class="navbar is-primary is-fixed-top" role="navigation">
            <div class="container">
                <router-link tag="a" :to="{name:'home'}" class="navbar-item">
                    <img src="./assets/logo.png">
                    <span style="margin-left:10px; color:#fff; font-size:18px; position: relative; top:5px">Tvoja bašta, Online bašta</span>
                </router-link>

                <div class="navbar-end">
                    <router-link :to="{name:'home'}" class="navbar-item" tag="a">Naslovna</router-link>
                    <router-link :to="{name:'fields'}" class="navbar-item" tag="a">Njive</router-link>
                    <!--<router-link :to="{name:'login'}" class="navbar-item" tag="a">Pristup</router-link>-->
                    <router-link :to="{name:'insert-field'}" class="navbar-item" tag="a">Unos njive</router-link>
                    <router-link :to="{name:'list-field'}" class="navbar-item" tag="a">Lista zahteva</router-link>
                </div>
            </div>
        </nav>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>
<style>
    html, body, .columns {
        background: #ebecd1 !important;
    }

    .navbar.is-primary {
        background: #a7c267 !important;
        z-index: 99999999;
    }

    .is-primary {
        background: #a7c267 !important;
    }

    .navbar-item:hover {
        background: transparent !important;
    }

    @media screen and (max-width: 768px) {
        .navbar-end{
            display: none;
        }
    }
</style>
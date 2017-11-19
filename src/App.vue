<template>
    <div id="app">
        <nav class="navbar is-primary is-fixed-top" role="navigation">
            <div class="container">
                <a class="navbar-item">
                    <img src="https://bulma.io/images/bulma-logo.png"
                         alt="Bulma: a modern CSS framework based on Flexbox"
                         width="112" height="28">
                </a>
                <div class="navbar-end">
                    <router-link :to="{name:'home'}" class="navbar-item" tag="a">Naslovna</router-link>
                    <router-link :to="{name:'fields'}" class="navbar-item" tag="a">Njive</router-link>
                    <router-link :to="{name:'login'}" class="navbar-item" tag="a">Pristup</router-link>
                    <router-link :to="{name:'insert-field'}" class="navbar-item" tag="a">Unos njive</router-link>

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
        z-index:99999999;
    }

    .is-primary {
        background: #a7c267 !important;
    }

</style>
<template>
    <div id="app">
        <nav class="navbar is-primary" role="navigation">
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
<template>
    <div>
        <img src="../assets/bg.png" alt="" style="position: fixed; width:100%;height:100%; object-fit: cover">
        <div class="container">
            <div class="box">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium aliquam corporis doloremque ea exercitationem id ipsam iste, iusto magni, nostrum numquam odit perspiciatis provident quos ratione sed temporibus veritatis.
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
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
</style>

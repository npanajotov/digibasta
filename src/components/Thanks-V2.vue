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
                    <div class="card column is-6"
                         style="background-color: rgba(255,255,255,0.63); border-radius: 5px; margin:auto;display: table">
                        <div class="card-content">
                            <p class="title">
                                Uspešno ste dodali svoju njivu.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, adipisci commodi cupiditate, eius et eveniet explicabo
                                libero obcaecati officia quas reprehenderit veniam vero voluptatem. Accusamus aliquam deleniti nostrum saepe voluptatum?
                            </p>
                        </div>
                    </div>
                    <!--<h2 class="subtitle">-->
                    <!--Subtitle-->
                    <!--</h2>-->
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
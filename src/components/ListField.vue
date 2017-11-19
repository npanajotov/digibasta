<template>
    <div class="container">
        <div class="columns" style="margin-top:20px">
            <div class="column is-4">
                <h4 class="title is-4">
                    Lista neobrađenih zahteva
                </h4>

                <div class="list-offers">
                    <ul>
                        <li>
                            <ul>
                                <li><strong>Milan Popovic</strong> <a href="tel:123123"
                                                                      style="float:right">0640474403</a></li>
                                <li><strong>Plod:</strong><span>Krompir, Paradajz</span></li>
                                <li><strong>Povrsina:</strong> <span>2 Ari</span></li>
                                <li><strong>Lokacija:</strong><span>Njiva u Palanci</span></li>
                                <li><strong>Pocetak radova:</strong> <span>1. Jun 2018</span></li>
                            </ul>
                        </li>
                    </ul>
                    <div class="field has-addons">
                        <p class="control">
                            <a class="button is-success">
      <span class="icon is-small">
        <i class="fa fa-check"></i>
      </span>
                                <span>Prihavti</span>
                            </a>
                        </p>
                        <p class="control">
                            <a class="button is-danger">
      <span class="icon is-small">
        <i class="fa fa-trash"></i>
      </span>
                                <span>Odbij</span>
                            </a>
                        </p>

                    </div>
                </div>
                <div class="list-offers">
                    <ul>
                        <li>
                            <ul>
                                <li><strong>Mikica Ivosevic</strong> <a href="tel:123123"
                                                                        style="float:right">0659809129</a></li>
                                <li><strong>Plod:</strong><span>Spanac, Zelena salata</span></li>
                                <li><strong>Povrsina:</strong> <span>11 Ari</span></li>
                                <li><strong>Lokacija:</strong><span>Njiva u Visnjici</span></li>
                                <li><strong>Pocetak radova:</strong> <span>1. Maj 2018</span></li>
                            </ul>
                        </li>
                    </ul>
                    <div class="field has-addons">
                        <p class="control">
                            <a class="button is-success">
      <span class="icon is-small">
        <i class="fa fa-check"></i>
      </span>
                                <span>Prihavti</span>
                            </a>
                        </p>
                        <p class="control">
                            <a class="button is-danger">
      <span class="icon is-small">
        <i class="fa fa-trash"></i>
      </span>
                                <span>Odbij</span>
                            </a>
                        </p>

                    </div>
                </div>

            </div>
            <div class="column is-4">
                <h4 class="title is-4">
                    Lista obrađenih zahteva
                </h4>
                <div class="list-offers">
                    <ul>
                        <li>
                            <ul>
                                <li><strong>Marko Jovanovic</strong> <a href="tel:123123"
                                                                        style="float:right">0640474403</a></li>
                                <li><strong>Plod:</strong><span>Jabuke, Kruske</span></li>
                                <li><strong>Povrsina:</strong> <span>11 Ari</span></li>
                                <li><strong>Lokacija:</strong><span>Njiva u Visnjici</span></li>
                                <li><strong>Pocetak radova:</strong> <span>12. Jul 2018</span></li>
                                <li><strong>Ocekivana berba:</strong> <span>1. Septembar 2018</span></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="column is-4">
                <h4 class="title is-4 ">
                    Moje njive
                </h4>
                <div class="list-farms">
                    <ul>
                        <li>
                            <ul>
                                <li><strong>Naziv:</strong> <span>Njiva u Palanci</span></li>
                                <li><strong>Adresa:</strong> <span>Beogradska 138</span></li>
                                <li><strong>Povrsina:</strong> <span>11/20 Ari</span></li>
                            </ul>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <ul>
                                <li><strong>Naziv:</strong> <span>Njiva u Visnjici</span></li>
                                <li><strong>Adresa:</strong> <span>Vojvode Supljikica 8</span></li>
                                <li><strong>Povrsina:</strong> <span>5/65 Ari</span></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>


        </div>
    </div>
</template>
<script>
    export default {}
</script>
<style scoped>
    h4.title {
        text-align: center !important;
    }

    .list-farms {
        background: white;
        padding: 20px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
    }

    .list-farms ul {
        border-bottom: 1px solid #ccc;
        margin-bottom: 15px;
        padding-bottom: 15px;
    }

    .list-farms ul:last-of-type {
        border: 0;
        margin-bottom: 0;
        padding-bottom: 0;
    }

    .list-farms ul ul {
        border-bottom: 1px solid transparent;
        margin-bottom: 0;
        padding-bottom: 0;
    }

    .list-farms span {
        float: right;
    }

    .list-offers {
        background: white;
        padding: 20px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        margin-bottom: 20px;
    }

    .list-offers ul {
    }

    .list-offers ul ul {
        border: 0;
    }

    .list-offers span {
        float: right
    }
</style>
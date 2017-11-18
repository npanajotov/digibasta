<template xmlns="http://www.w3.org/1999/html">
    <div class="filters">

        <div class="field is-grouped">
            <div class="control has-icons-left">
                <div class="select">
                    <select>
                        <option>Izaberite voće/povrće</option>
                        <option>Lubenica</option>
                        <option>Kupus</option>
                        <option>Paprika</option>
                        <option>Krompir</option>
                        <option>Paradajz</option>
                        <option>Krastavac</option>
                    </select>
                </div>
                <span class="icon is-small is-left">
                    <i class="fa fa-hand-lizard-o"></i>
                </span>
            </div>
            <div class="control has-icons-left">
                <div class="select">
                    <select>
                        <option>Okrug</option>
                        <option>Vojvodina</option>
                        <option>Beogradski okrug</option>
                        <option>Šumadija i zapadna Srbija</option>
                        <option>Južna i istočna Srbija</option>
                        <option>Kosovo i Metohija</option>

                    </select>
                </div>
                <span class="icon is-small is-left">
                    <i class="fa fa-globe"></i>
                </span>
            </div>
            <div class="control has-icons-left">
                <div class="select">
                    <select>
                        <option>Sortiranje</option>
                        <option>Od najjeftnijeg</option>
                        <option>Od najskupljeg</option>
                        <option>Po broju preporuka</option>


                    </select>
                </div>
                <span class="icon is-small is-left">
                    <i class="fa fa-sort-amount-desc"></i>
                </span>
            </div>
        </div>
    </div>
</template>
<script>

    export default {}
</script>
<style>
    .filters {
        margin: 0 20px 0 0;
        padding: 20px 0;
        border-bottom: 1px solid #ccc;
    }
</style>
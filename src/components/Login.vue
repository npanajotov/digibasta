<template>
    <div class="container">

        <div class="login">
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="email" placeholder="Email">
                    <span class="icon is-small is-left">
                        <i class="fa fa-envelope"></i>
                    </span>
                </p>
            </div>
            <div class="field">
                <p class="control has-icons-left">
                    <input class="input" type="password" placeholder="Password">
                    <span class="icon is-small is-left">
      <i class="fa fa-lock"></i>
    </span>
                </p>
            </div>
            <div class="field">
                <p class="control">
                    <button class="button is-primary">
                        Login
                    </button>
                </p>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Zelim da</label>
            </div>
            <div class="field-body">
                <div class="field is-narrow">
                    <div class="control">
                        <div class="select is-fullwidth">
                            <select>
                                <option>Kupim sveže organsko voće ili povrće</option>
                                <option>Ponudim njivu gde bih gajio organsko voće ili povrće</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="field is-horizontal">
            <div class="field-label">
                <!-- Left empty for spacing -->
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <button class="button is-primary">
                            Registruj se
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {}
</script>
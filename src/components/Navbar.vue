<template>
    <div class="nav-bar1">
        {{msg}}
        <b-navbar class="px-5 d-flex justify-content-center">
            <b-navbar-nav>
                <b-navbar-brand><img src="../assets/logo.svg" />
            </b-navbar-brand>
            </b-navbar-nav>
            <b-navbar-nav>
                <b-nav-item class="white"> MTA </b-nav-item>
                <b-nav-item> KDPA </b-nav-item>
                <b-nav-item> Canvas Titans </b-nav-item>
                <b-nav-item> Tools </b-nav-item>
                <b-nav-item> Product Research </b-nav-item>
                <b-nav-item> Affiliates </b-nav-item>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>
  
<script>
export default {
    name: 'NavBar',
    props:{
        msg: String
    }
}
</script>
  
<style>
.nav-link {
    color: white !important;
}

.group-3{
    height: 19px;
}
.nav-bar1{
    position: absolute;
    width: 100%;
    left: 0px;
    top: 0px;
    background: rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(25px);
}
</style>
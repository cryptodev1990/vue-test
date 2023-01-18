<template>
	<div class="nav-bar1 d-flex border-smooth align-items-center">
		<b-navbar class="d-flex b-navbar">
			<b-navbar-nav>
				<b-navbar-brand><img src="../../assets/logo.svg" alt="Logo" title="Merch Titans" role="button" /></b-navbar-brand>
			</b-navbar-nav>
			<b-navbar-nav class="d-flex gap navbar-font">
				<b-nav-item> MTA </b-nav-item>
				<b-nav-item> KDPA </b-nav-item>
				<b-nav-item> Canvas Titans </b-nav-item>
				<b-nav-item> Tools </b-nav-item>
				<b-nav-item> Product Research </b-nav-item>
				<b-nav-item> Affiliates </b-nav-item>
			</b-navbar-nav>
			<b-navbar-nav>
				<button type="button" class="btn btn-outline-warning mb-0 btn-lg px-5">Dashboard</button>
			</b-navbar-nav>
		</b-navbar>
	</div>
</template>
  
<script>
export default {
	name: 'NavBar'
}

</script>
  
<style>
@import url("./Startpage.scss");
</style>
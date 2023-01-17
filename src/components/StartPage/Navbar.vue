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

.b-navbar {
	width: 65%;
	left: 20%;
	height: 150px;
}

.gap {
	gap: 40px;
}

.border-smooth {
	border-bottom: 1px solid gray;
}

.navbar-font {
	font-size: 16px;
	font-weight: 700;
	line-height: 19px;
	letter-spacing: 0.02em;
	text-align: left;
}

.nav-bar1{
	position: sticky;
	top: 0%;
	left: 0%;
	width: 100%;
	background: rgba(0, 0, 0, 0.25);
	backdrop-filter: blur(25px);
	z-index: 10;
}
</style>
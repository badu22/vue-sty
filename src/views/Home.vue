<template>
	<div class="home">
		<div class="container container--gutter5030">
			<div class="row no-gutters">
				<div class="col-sm-12 col-md-6">
					<div class="mainImage">
						<picture>
							<source srcset="../assets/img/main-img.jpg, ../assets/img/main-img-x2.jpg 2x">
							<img class="mainImage__image" srcset="../assets/img/main-img.jpg, ../assets/img/main-img-x2.jpg 2x" alt="BEM">
						</picture>
						<div class="mainImage__description">BEM Metodologija</div>
					</div>
					<div class="mainContent">
						<h2>BEM je kratica za Block, Element, Modifier</h2>
						<p>BEM omogućava prilično strog način organizacije CSS klasa u neovisne module. To je objektan način pisanja CSS klasa i izgleda otprilike ovako:</p>

						<p><pre>.block {}</pre></p>

						<p><pre>.block__element {}</pre></p>

						<p><pre>.block--modifier {}</pre></p>

						<p><pre>.block__element--modifier {}</pre></p>

						<p>Blok predstavlja objekt na web stranicama, npr menu</p>

						<p>Element je dio bloka, npr <strong>menu__item</strong> - oznaka su dva underscora __</p>

						<p>Modifier je varijacija elementa ili bloka, npr <strong>menu__item--news</strong> (ukoliko postoji razlika u recimo boji rubrika - <strong>news</strong> (crveno), <strong>show</strong> (narančasto), <strong>sport</strong> (zeleno)) - oznaka su dva minusa --</p>

						<p>Za pomoć oko BEM Metodologije pogledati  <a href="http://tinyurl.com/k3gsu9s">http://tinyurl.com/k3gsu9s</a></p>
					</div>
				</div>
				<div class="col-sm-12 col-md-6">
					<div class="playersList">
						<div class="playersList__legend">
							<div>Korisnik</div>
							<div class="playersList__sortListCta" @click="sortPlayers()">Bodovi</div>
						</div>
						<a :href="'/player/'+player.id" :class="'playersList__item playersList__item'+-player.inx" v-for="(player, index) in playersList" :key="index">
							<div class="playersList__index">{{ player.inx }}.</div>
							<div class="playersList__image">	</div>
							<div class="playersList__name">{{ player.name }}</div>
							<div class="playersList__score"><strong>{{ player.score }}</strong> bodova</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		name: 'home',
		data() {
			return {
				playersList: []
			}
		},
		methods: {
			sortPlayers() {
				this.playersList = this.playersList.reverse();
			}
		},
		mounted() {
			axios.get('/players.json')
				.then(response => {
					this.playersList = response.data.players;
					this.playersList = _.sortBy(this.playersList, ['score']);				
					this.playersList = this.playersList.reverse();	
					
					for (var i = 0; i < this.playersList.length; i++) {
						this.playersList[i].inx = (i + 1);
					} 			
				})
				.catch(e => {
					this.errors.push(e)
				})
		}
	}
</script>

<style lang="scss">
	.mainImage {
		position: relative;
		&__image {
			width: 100%;
			height: auto;
		}
		&__description {
			@include ssp;
			font-weight: 900;
			@include fontSize(18);
			@include lineHeight(30,18);
			color: $white;
			display: inline-block;
			position: absolute;
			bottom: 0;
			left: 0;
			padding: 5px 30px;
			background: #d7040a;
			background: -moz-linear-gradient(top, #d7040a 34%, #9b0106 100%);
			background: -webkit-linear-gradient(top, #d7040a 34%,#9b0106 100%);
			background: linear-gradient(to bottom, #d7040a 34%,#9b0106 100%);
			filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d7040a', endColorstr='#9b0106',GradientType=0 );
		}
	}

	.mainContent {
		background-color: $white;
		padding: 30px;

		h1 {
			@include ssp;
			font-weight: 900;
			@include fontSize(30);
			@include lineHeight(30,30);
			margin-bottom: 20px;
		}
		h2 {
			@include ssp;
			font-weight: 900;
			@include fontSize(22);
			@include lineHeight(30,22);
			margin-bottom: 20px;
		}
		h3 {
			@include ssp;
			font-weight: 700;
			@include fontSize(20);
			@include lineHeight(30,20);
			margin-bottom: 20px;
		}
		p, li {
			@include fontSize(14);
			@include lineHeight(20,14);
			margin-bottom: 20px;
		}
		pre {
			color: $blue;
		}
	}

	.playersList {
		background-color: #202020;
		// padding: 30px 30px 90px;
		padding: 30px;
		position: relative;
		// height: 100vh;
		// overflow: auto;
		&__legend {
			@include fontSize(14);
			@include lineHeight(20,14);
			@extend .d-flex;
			@extend .justify-content-between;
			@extend .align-items-center;
			color: $white;
			// border-bottom: #383838 1px solid;
			padding: 10px 0;
		}
		&__sortListCta {
			cursor: pointer;
		}
		&__item {
			@extend .d-flex;
			// @extend .justify-content-between;
			@extend .align-items-center;
			padding: 20px 0;
			border-top: #383838 1px solid;
			background-color: #202020;
			position: relative;

			&:last-child { 
				border-bottom: #383838 1px solid;
				// position: absolute; 
			// 	bottom: 0px;
			// 	width: 100%;
			}
			
			&:before {
				content: ""; display: block; width: 5px; height: 50px;
				position: absolute; left: 0px; top: 20px; opacity: 0;
				background: #eb9909;
				background: -moz-linear-gradient(top, #eb9909 0%, #ffd800 100%);
				background: -webkit-linear-gradient(top, #eb9909 0%,#ffd800 100%);
				background: linear-gradient(to bottom, #eb9909 0%,#ffd800 100%);
				filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#eb9909', endColorstr='#ffd800',GradientType=0 );
			}
			&:hover { text-decoration: none; }

		}
		&__item-1:before {
			opacity: 1;
		}
		&__item-2:before {
			opacity: 0.6;
		}
		&__item-3:before {
			opacity: 0.45;
		}
		&__item-4:before {
			opacity: 0.3;
		}
		&__item-5:before {
			opacity: 0.15;
		}
		&__index {
			@include fontSize(18);
			@include lineHeight(50,18);
			font-weight: 700;
			color: $white;
			text-align: center;
			min-width: 75px;
			width: 75px;
			@include media-breakpoint-only(md) {
				min-width: 55px;
				width: 55px;
			}
			@include media-breakpoint-down(xs) {
				min-width: 40px;
				width: 40px;
			}
		}
		&__image {
			min-width: 50px;
			width: 50px;
			height: 50px;
			background-color: #323232;
		}
		&__name {
			@include fontSize(16);
			@include lineHeight(20,16);
			color: #0068a9;
			padding: 0 10px 0 20px;

			@include media-breakpoint-only(md) {
				padding: 0 5px 0 10px;
			}
			@include media-breakpoint-down(xs) {
				padding: 0 5px 0 10px;
			}
		}
		&__score {
			margin-left: auto !important;
			@include fontSize(14);
			@include lineHeight(20,14);
			color: $white;
			text-align: right;
			strong {
				@include fontSize(18);
				@include lineHeight(20,18);
			}
		}
	}
</style>

<template>
	<div class="player">
       <div class="container container--gutter5030">
			<div class="row no-gutters">
				<div class="col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
					<div class="playerSingle">
						<div class="playerSingle__item">
							<div class="playerSingle__index">{{ player.inx }}.</div>
							<div class="playerSingle__image">	</div>
							<div class="playerSingle__name">{{ player.name }}</div>
							<div class="playerSingle__score"><strong>{{ player.score }}</strong> bodova</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	export default {
		name: 'player',
		data() {
			return {
                player: []
			}
		},
		props: [
            'id'
        ],
		mounted() {	
			this.$store.dispatch('loadPlayers').then(()=>{
				this.player = this.singlePlayerById(this.id);
			}); 

		},
		computed: {
			...mapGetters(['singlePlayerById'])
		}
	}
	
</script>


<style lang="scss">
	.playerSingle {
		background-color: #202020;
		padding: 30px;
		position: relative;
        border-radius: 2px;
		
		&__item {
			@extend .d-flex;
			@extend .align-items-center;
			padding: 20px 0;
			background-color: #202020;
			position: relative;
			
			&:hover { text-decoration: none; }

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


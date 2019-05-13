<template>
	<div id="app">
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<div class="header">
						<h1 class="header__title">Styria Medijski servisi</h1>
						<p class="header__subTitle">(SourceSans Pro googlefont)</p>
					</div>
				</div>
			</div>
		</div>
		<router-view/>
	</div>
</template>


<style lang="scss">
	.header {
		@extend .d-md-flex;
		@extend .justify-content-md-between;
		@extend .align-items-md-center;
		background-color: $navy;
		padding: 0 30px;
		min-height: 77px;
		@include media-breakpoint-down(sm) {
			padding-top: 10px;
			padding-bottom: 20px;
		}
		&__title {
			@include ssp;
			font-weight: 900;
			color: $white;
			margin: 0;
			padding: 0;
		}
		&__subTitle {
			@include ssp;
			font-weight: 300;
			color: $white;
			margin: 0;
			padding: 0;
			text-transform: uppercase;
		}
	}
</style>


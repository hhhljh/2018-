class Navigation {
	static init (){

		const page  = $('.page')
		const url = new URL(location.href) || null
		Navigation.main = $('.main')
		Navigation.sub = $('.sub')
		Navigation.page = page
		Navigation.gnb = $('gnb')
			}
}
class Animation {
	constructor (option) {
		this.delay = 30
		this.obj   = option.obj
		this.reverse = option.reverse || false
		this.callback = option.callback || function () {}
		this.play()
	}

	find(ele) {return this.obj.find(ele)}

	play () {
		this.clear()
		let timer = 0
		const i =this
		const seq = i.reverse ? i.find('.target-reverse') : i.find('.animation')
		const len = seq.length
		seq.each(function (num) {
			const target = $(this)
			const setTime = setTimeout(() => {
				if(i.reverse == true){
					const idx = len - num - 1
					seq.eq(idx).addClass("animationBefore type2").removeClass('target-reverse')
				} else {
					target.removeClass("animationBefore type2").addClass('target-reverse')
				}
			}, timer += i.delay)
			Animation.timeObj.push(setTime)
		})
		setTimeout(i.callback, timer)
	}

	clear () {
		Animation.timeObj.forEach(element => { clearTimeout(element) })
		Animation.timeObj = []
	}

	static init (){
		
	}
}
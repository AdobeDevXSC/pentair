export default function decorate(block) {
	const closeButtonWrapper = document.createElement('div');
	const closeButton = document.createElement('button');
	
	function toggleCloseBanner() {
		console.log('click!');
		block.classList.toggle('close');
	}
	closeButton.addEventListener("click", toggleCloseBanner);
	
	closeButtonWrapper.append(closeButton);
	block.append(closeButtonWrapper);
}
  
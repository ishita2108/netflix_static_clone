const tabItems = document.getElementsByClassName('tab-item');
//console.log(tabItems)
const tabContentItems = document.getElementsByClassName('tab-content-item');
//console.log(tabItems[1])
const second = tabItems[1]
//console.log(tabContentItems)

// Select tab content item
function selectItem(e) {
	
// Remove all show and border classes
removeBorder();
removeShow();
// Add border to current tab item
this.classList.add('tab-border');
// Grab content item from DOM
console.log(this.id)
const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Add show class
 tabContentItem.classList.add('show');
}


// Remove bottom borders from all tab items
function removeBorder() {
	let j=0;
	for(j;j<tabItems.length;j++){
		tabItems[j].classList.remove('tab-border');
}
}
// Remove show class from all content items
function removeShow() {
	let k=0;
	for(k;k<tabContentItems.length;k++){
		tabContentItems[k].classList.remove('show');
}
}

let i=0;
for(i;i<tabItems.length;i++){
	console.log(tabItems[i]);
	tabItems[i].addEventListener('click', selectItem);
}


var accordionItems = new Array();

// Grab the accordion items from the page
accordionItems = document.querySelectorAll('.accordion-item');

// Assign onclick events to the accordion item headings
for (var i = 0; i < accordionItems.length; i++) {
    var h2 = getFirstChildWithTagName(accordionItems[i], 'H2');
    h2.onclick = toggleItem;
}

// Hide all accordion item bodies except the first
for (var i = 1; i < accordionItems.length; i++) {
    accordionItems[i].className = 'accordion-item hide';
}

// Add exact height to div that is shown on page load
var firstDiv = accordionItems[0].getElementsByTagName('div')[0];
firstDiv.style.height = "auto";
var firstDivHeight = firstDiv.offsetHeight;
firstDiv.style.height = firstDivHeight + 'px';

function toggleItem() {
    var itemClass = this.parentNode.className;

    // Hide all items
    for (var i = 0; i < accordionItems.length; i++) {
        accordionItems[i].className = 'accordion-item hide';
        accordionItems[i].getElementsByTagName('div')[0].style.height = "0";
    }

    // Show this item if it was previously hidden
    if (itemClass == 'accordion-item hide') {
        var accordionItemContent = this;
        do accordionItemContent = accordionItemContent.nextSibling; while(accordionItemContent && accordionItemContent.nodeType !== 1);
 
        accordionItemContent.style.height = "auto";
        var divHeight = accordionItemContent.offsetHeight;
        accordionItemContent.style.height = "";
        this.parentNode.className = 'accordion-item';
        var that = this;
        window.setTimeout(function () {
            accordionItemContent.style.height = divHeight + 'px';
        }, 50);
    }
}

// Helper function
function getFirstChildWithTagName(element, tagName) {
    for (var i = 0; i < element.childNodes.length; i++) {
        if (element.childNodes[i].nodeName == tagName) return element.childNodes[i];
    }
}
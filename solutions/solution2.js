var target = document.querySelector(".ice-cream-list")
target.innerHTML = '<li class="ice-cream-flavor">' + iceCreamFlavors.join('</li><li class="ice-cream-flavor">') + '</li>';       
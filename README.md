# Tabs
The content block is put in property "content". (string)
Tab buttons are put in property "button". (string)
The buttons active class is put in property "activeClass". (string)
The block that will appear if it doesn't find content is put in property "noContentAlert". (string)
The animate is put in property "animate". (true/false)
Default tab number is put in property "tabToShow". (number (starts at 0))

# Usage Example

tabs({
    button: ".products__category-button",
    content: ".product-item--tab",
    activeClass: ".category--active",
    noContentAlert: ".nothing-find",
    animate: true,
    tabToShow: 0
  });
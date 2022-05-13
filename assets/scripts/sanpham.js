var $container = $('.product-items').isotope({
    // options
  });
  
  // filter with selects and checkboxes
  var $checkboxes = $('#form-ui input');
  
  $checkboxes.change( function() {
    // map input values to an array
    var inclusives = [];
    // inclusive filters from checkboxes
    $checkboxes.each( function( i, elem ) {
      // if checkbox, use value if checked
      if ( elem.checked ) {
        inclusives.push( elem.value );
      }
    });
  
    // combine inclusive filters
    var filterValue = inclusives.length ? inclusives.join(', ') : '*';
  
    $container.isotope({ filter: filterValue })
  });

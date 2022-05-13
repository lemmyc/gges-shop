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
  var filterValue = inclusives.length ? inclusives.join(',') : '*';
  // set filter in hash
  location.hash = 'filter=' + encodeURIComponent( filterValue );

  $container.isotope({ filter: filterValue })
});

function getHashFilter() {
  // var hash = location.hash;
  // get filter=filterName
  var matches = location.hash.match( /filter=([^&]+)/i );
  if ( !matches ) {
    return '';
  }
  //console.log(matches);                 //bug fixing purposes
  return decodeURIComponent( matches[1] );
}

// set initial checkboxes from hash
var hashFilter = getHashFilter();
if ( hashFilter ) {
  var filters = hashFilter.split(',');
  //console.log(filters);                 //bug fixing purposes
  filters.forEach( function( filter ) {
    //var $checkbox = $checkboxes.filter('[value="' + filter.trim() + '"]');
    var $checkbox = $checkboxes.filter('[value="' + filter + '"]');
    $checkbox.attr( 'checked', 'checked' );
  });
}

function onHashchange() {
  var hashFilter = getHashFilter();
  
  // filter isotope
  $container.isotope({
    filter: hashFilter
  });
}

$(window).on( 'hashchange', onHashchange );

// init Isotope with hash filter
onHashchange();



$("#form-ui").show();
$("#filterBtn").on("click", ()=>{
  $("#form-ui").toggle();
});
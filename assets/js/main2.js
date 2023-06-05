// Description: Converting SVG => Canvas => Png ( Pure JS )
// Author : Ajmalshah

var makePNGOfSVG = function(){
  var imgWidth = 280;
  var imgHeight = 420;
  var mySVG    = document.querySelector('#svg_img'),      // Inline SVG element
    tgtImage = document.querySelector('#png_img');      // Where to draw the result
    can      = document.createElement('canvas'), // Not shown on page
    ctx      = can.getContext('2d'),
    loader   = new Image;                        // Not shown on page

  loader.width  = can.width  = imgWidth;
  loader.height = can.height = imgHeight;
  loader.onload = function(){
    ctx.drawImage( loader, 0, 0, loader.width, loader.height );
    tgtImage.src = can.toDataURL();
  };
  var svgAsXML = (new XMLSerializer).serializeToString( mySVG );
  loader.src = 'data:image/svg+xml,' + encodeURIComponent( svgAsXML );
}



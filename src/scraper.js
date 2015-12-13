var thumbs = document.querySelectorAll('.uiMediaThumbMedium');
for (var i=0; i<thumbs.length; i++) {
  var ajaxify_str = decodeURIComponent(thumbs[i].attributes.getNamedItem('ajaxify').value);
  var url = ajaxify_str.substr(ajaxify_str.indexOf('src=')+4);
  console.log(url);
}

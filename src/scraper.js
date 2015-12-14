zip.createWriter(new zip.BlobWriter("application/zip"), function(zipWriter) {
  var thumbs = document.querySelectorAll('.uiMediaThumbMedium');
  var imagePromises = [];
  for (var i=0; i<thumbs.length; i++) {
    var ajaxify_str = decodeURIComponent(thumbs[i].attributes.getNamedItem('ajaxify').value);
    var url = ajaxify_str.substr(ajaxify_str.indexOf('src=')+4);
    imagePromises.push(new Promise(function(resolve, reject){
      urlToDataUrl(url).then(function(dataUrl){
        zipWriter.add("filename", new zip.Data64URIReader(dataUrl), function(){
          resolve();
        });
      });
    }));
  }
  Promise.all(imagePromises).then(function(){
    zipWriter.close(function(blob){
      var url = window.URL.createObjectURL(blob);
      console.log("Zip Download:", url);
    });
  })
}, function(err){
  console.error(err);
}));

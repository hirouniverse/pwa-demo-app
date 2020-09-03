(function() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js', { scope: '/' })
      .then(function(reg) {
        console.log('proceeding registration flow...')
        console.log(reg);
      })
      .catch(function(err) {
        console.error('register failed...')
        console.log(err);
      })
    })
  }
})();

if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register('/js/sw.js')
    .then(() => { console.log('Service worker registered.') })
    .catch(() => { console.log('Service worker registration failed.') })
}


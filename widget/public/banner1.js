// (function() {
//   const banners = [
//     'http://kselax.ru:3002/300x250.html',
//     'http://kselax.ru:3002/banner2.html',
//     'http://kselax.ru:3002/banner3.html'
//   ]

//   const index = Math.floor(Math.random() * banners.length - 1) + 1
//   const banner = banners[index];
//   const script = document.currentScript

//   function  prepareFrame () {
//     const ifrm = document.createElement("iframe");
//     ifrm.setAttribute("src", banner);
//     ifrm.style.width = "300px";
//     ifrm.style.height = "250px";
//     console.log('script.parentElement = ', script.parentElement)
//     const parent = script.parentElement
//     console.log('parent = ', parent)
//     parent.insertBefore(ifrm, script)
//     parent.removeChild(script)
//     console.log('here we are');
//   }

//   window.addEventListener('load', () => {
//     prepareFrame();
//   })
    
// })()


(function() {
  const banners = [
    'http://kselax.ru:3002/300x250.html',
    'http://kselax.ru:3002/banner2.html',
    'http://kselax.ru:3002/banner3.html'
  ]

  const index = Math.floor(Math.random() * banners.length - 1) + 1
  const banner = banners[index];
  // const script = document.currentScript

  function  prepareFrame () {
    const scripts = document.getElementsByTagName('script')
    script = scripts[scripts.length - 1]
    const ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", banner);
    ifrm.style.width = "300px";
    ifrm.style.height = "250px";

    const parent = script.parentElement

    parent.insertBefore(ifrm, script)
    parent.removeChild(script)
  }

  prepareFrame()

})()
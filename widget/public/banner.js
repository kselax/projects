(function() {
  const banners = [
    'http://localhost:3002/banner1.html',
    'http://localhost:3002/banner2.html',
    'http://localhost:3002/banner3.html'
  ]

  const index = Math.floor(Math.random() * banners.length - 1) + 1
  const banner = banners[index];
  const script = document.currentScript

  const prepareFrame = () => {
    const ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", banner);
    ifrm.style.width = "300px";
    ifrm.style.height = "250px";
    const parent = script.parentElement
    parent.insertBefore(ifrm, script)
    parent.removeChild(script)
    console.log('here we are');
  }
    prepareFrame();
})()
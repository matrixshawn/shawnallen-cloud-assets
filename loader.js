(async function(){
  try {
    const base='https://raw.githubusercontent.com/matrixshawn/shawnallen-cloud-assets/main/version.txt';
    const version=(await (await fetch(base+'?t='+Date.now(),{cache:'no-store'})).text()).trim();
    const script=document.createElement('script');
    script.src='https://cdn.jsdelivr.net/gh/matrixshawn/shawnallen-cloud-assets@'+version+'/render.js';
    script.defer=true;
    document.head.appendChild(script);
  } catch (error) {
    console.error('Unable to load site renderer',error);
  }
})();

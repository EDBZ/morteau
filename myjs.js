var body = document.querySelector('body'),
  saucisse = document.getElementById('saucisse'),
  nbsaucisse = document.getElementById('nbsaucisse'),
  nbclick = document.getElementById('nbclick'),
  container = document.getElementById('container'),
  compteur = 0,
  score = 0,
  a = 0,
  b = 0,
  x = 20,
  i = 1,
  t = 1000,
  tx = 100,
  // cptchoucr = 0,
  // angle,
  prixmulti = document.getElementById('prixmulti'),
  prixts = document.getElementById('prixts'),
  multi = document.getElementById('multiplicateur'),
  temps = document.getElementById('temps'),
  // choucr = document.createElement('img'),
  // tabdiv = [choucr],
  headshot = document.getElementById('headshot'),
  headshotsound = document.getElementById('headshotsound'),
  godlike = document.getElementById('godlike'),
  godlikesound = document.getElementById('godlikesound'),
  rampage = document.getElementById('rampage'),
  rampagesound = document.getElementById('rampagesound'),
  dominating = document.getElementById('dominating'),
  dominatingsound = document.getElementById('dominatingsound'),
  winner = document.getElementById('winner'),
  winnersound = document.getElementById('winnersound'),
  diablebtn = document.createElement('button'),
  diable = document.createElement('img');

function cliq() {
  compteur++
  score += i;
  nbclick.innerHTML = formatMoney(score);
  bckcolor();
  devil();
  win(winner, winnersound);
  while ((score % 100000 == 0) && (a == 0)) {
    txtevent(headshot, headshotsound);
    a++;
    break;
  };
  while ((score % 1000000 == 0) && (a == 1)) {
    txtevent(godlike, godlikesound);
    a++;
    break;
  };
  while ((score % 2000000 == 0) && (a == 2)) {
    txtevent(dominating, dominatingsound);
    a++;
    break;
  };
  while (t == 0.9765625) {
    txtevent(rampage, rampagesound);
    break;
  };
  if ((compteur % 100 == 0) && (compteur <= 1000000000)) {
    fchoucroute();
  };
};

function incrementer() {
  if (score >= x) {
    i += 1;
    score = score - x;
    x = x * 2;
    nbclick.innerHTML = formatMoney(score);
    prixmulti.innerHTML = 'Prix du multiplicateur X' + formatMoney(i) + ' : ' + x + ' saucisses';
  };
};

function auto() {
  if ((score >= tx) && (b = 0)) {
    score = score - tx;
    tx = tx * 3;
    setInterval(cliq, t);
    t = t / 2;
    nbclick.innerHTML = formatMoney(score);
    tempstxt.innerHTML = formatMoney(1000 / t) + ' clicks par seconde';
    prixts.innerHTML = 'Prix du clicker auto : ' + formatMoney(tx) + ' saucisses';
  }
};

function formatMoney(num, localize, fixedDecimalLength) {
  num = num + "";
  var str = num;
  var reg = new RegExp(/(\D*)(\d*(?:[\.|,]\d*)*)(\D*)/g)
  if (reg.test(num)) {
    var pref = RegExp.$1;
    var suf = RegExp.$3;
    var part = RegExp.$2;
    if (fixedDecimalLength / 1) part = (part / 1).toFixed(fixedDecimalLength / 1);
    if (localize) part = (part / 1).toLocaleString();
    str = pref + part.match(/(\d{1,3}(?:[\.|,]\d*)?)(?=(\d{3}(?:[\.|,]\d*)?)*$)/g).join(' ') + suf;
  };
  return str;
};

function bckcolor() {
  color = "#"
  for (k = 0; k < 3; k++) {
    color += ("0" + (Math.random() * 256 | 0).toString(16)).substr(-2);
  };
  if (score % 42 == 0) {
    body.style.backgroundColor = color;
  };
};

function fchoucroute() {
  var choucr = document.createElement('img'),
    tabdiv = [choucr],
    w = Math.random() * ((document.body.clientWidth) - 100) | 0,
    h = Math.random() * (document.body.clientHeight) | 0;
  choucr.style.cssText = 'width:100px;position:absolute;opacity:0.2';
  choucr.src = 'choucroute.png';
  choucr.className = 'choucr';
  tabdiv[0].style.left = w + 'px';
  tabdiv[0].style.top = h + 'px';
  tabdiv[0].style.zIndex = -1;
  tabdiv.push(choucr.cloneNode(true));
  if (tabdiv.length > 2) {
    tabdiv.shift();
  };
  if (score >= 50000) {
    choucr.src = 'choucroute2.png';
  } else if (score >= 500000) {
    choucr.src = 'choucroute3.png';
  } else if (score >= 1000000) {
    choucr.src = 'choucroute4.png';
  }
  body.appendChild(tabdiv[0]);
};

function txtevent(txt, sound) {
  var angle = ((Math.random() * 90) - 45),
    w = Math.random() * (document.body.clientWidth) | 0,
    h = Math.random() * (document.body.clientHeight) | 0;
  txt.style.cssText = 'color:red;font-size:100px;font-family:kablamo;position:absolute;z-index=-1;visibility:visible'
  txt.style.left = w + 'px';
  txt.style.top = h + 'px';
  txt.style.transform = 'rotate(' + angle + 'deg)';
  container.appendChild(txt);
  sound.play();
  setTimeout(function() {
    txt.style.visibility = 'hidden';
  }, 1000);
};

function devil() {
  if (score % 666 == 0) {
    var w = Math.random() * (document.body.clientWidth) | 0,
      h = Math.random() * (document.body.clientHeight) | 0;
    diable.src = 'diable.png';
    diable.style.width = '200px';
    diablebtn.style.cssText = 'position:absolute;z-index:100;visibility:visible';
    diablebtn.style.left = w + 'px';
    diablebtn.style.top = h + 'px';
    diablebtn.appendChild(diable);
    body.appendChild(diablebtn);
  };
};

function invisiblechoucr() {
  b = 1;
  var tabchoucr = document.querySelectorAll('body img.choucr');
  for (var i = 0; i < tabchoucr.length; i++) {
    tabchoucr[i].style.visibility = 'hidden';
  };
};

function win(txt, sound) {
  if (score >= 1000000000) {
    nbsaucisse.style.visibility = 'hidden';
    nbclick.style.visibility = 'hidden';
    multiplicateur.style.visibility = 'hidden';
    temps.style.visibility = 'hidden';
    invisiblechoucr()
    txt.style.cssText = 'position:absolute;z-index:1000;color:red;font-size:200px;font-family:kablamo;visibility:visible';
    txt.style.left = (((document.body.clientWidth) / 2) - 175) + 'px';
    txt.style.top = ((document.body.clientHeight) / 2) + 'px';
    sound.play();
    body.appendChild(txt);
  };
};

multi.addEventListener('click', function() {
  incrementer();
}, false);
saucisse.addEventListener('click', function() {
  cliq();
}, false);
temps.addEventListener('click', function() {
  auto();
}, false);
diablebtn.addEventListener('click', function() {
  score += 666;
  diablebtn.style.visibility = 'hidden';
}, false);

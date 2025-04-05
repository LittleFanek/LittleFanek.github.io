
var hexcase = 0; 
var b64pad  = "";
var chrsz   = 8; 
function h5s(s){ 
	return gferge(ccccc(sgrg33(s+document.getElementById("jsmymdfive").getAttribute("data-id").substring(0,document.getElementsByClassName("iukst").length)), (s.length+(document.getElementById("jsmymdfive").getAttribute("data-id").substring(0,document.getElementsByClassName("iukst").length).length)) * chrsz));
}
function easyh5s(s){ 
	var t = (new Date()).valueOf();
	var k = window.location.host.split(".",2)[1]+'lhz'+'_'+t;
	var str = 'helloworld' + k;
	return ebasi(gferge(ccccc(sgrg33(str), (str.length) * chrsz))+'_'+t);
}
function wefwe(){
	var t = (new Date()).valueOf();
	var c = document.getElementById("jsmymdfive").getAttribute("data-id");
	var k = c+window.location.host.split(".",2)[1]+'lhz'+'_'+t;
	return ebasi(h5s(k)+'_'+t);
}
function ccccc(x, len)
{
  /* append padding */
  x[len >> 5] |= 0x80 << ((len) % 32);
  x[(((len + 64) >>> 9) << 4) + 14] = len;

  var a =  1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d =  271733878;

  for(var i = 0; i < x.length; i += 16)
  {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;

    a = hjyt(a, b, c, d, x[i+ 0], 7 , -680876936);
    d = hjyt(d, a, b, c, x[i+ 1], 12, -389564586);
    c = hjyt(c, d, a, b, x[i+ 2], 17,  606105819);
    b = hjyt(b, c, d, a, x[i+ 3], 22, -1044525330);
    a = hjyt(a, b, c, d, x[i+ 4], 7 , -176418897);
    d = hjyt(d, a, b, c, x[i+ 5], 12,  1200080426);
    c = hjyt(c, d, a, b, x[i+ 6], 17, -1473231341);
    b = hjyt(b, c, d, a, x[i+ 7], 22, -45705983);
    a = hjyt(a, b, c, d, x[i+ 8], 7 ,  1770035416);
    d = hjyt(d, a, b, c, x[i+ 9], 12, -1958414417);
    c = hjyt(c, d, a, b, x[i+10], 17, -42063);
    b = hjyt(b, c, d, a, x[i+11], 22, -1990404162);
    a = hjyt(a, b, c, d, x[i+12], 7 ,  1804603682);
    d = hjyt(d, a, b, c, x[i+13], 12, -40341101);
    c = hjyt(c, d, a, b, x[i+14], 17, -1502002290);
    b = hjyt(b, c, d, a, x[i+15], 22,  1236535329);

    a = erw8y(a, b, c, d, x[i+ 1], 5 , -165796510);
    d = erw8y(d, a, b, c, x[i+ 6], 9 , -1069501632);
    c = erw8y(c, d, a, b, x[i+11], 14,  643717713);
    b = erw8y(b, c, d, a, x[i+ 0], 20, -373897302);
    a = erw8y(a, b, c, d, x[i+ 5], 5 , -701558691);
    d = erw8y(d, a, b, c, x[i+10], 9 ,  38016083);
    c = erw8y(c, d, a, b, x[i+15], 14, -660478335);
    b = erw8y(b, c, d, a, x[i+ 4], 20, -405537848);
    a = erw8y(a, b, c, d, x[i+ 9], 5 ,  568446438);
    d = erw8y(d, a, b, c, x[i+14], 9 , -1019803690);
    c = erw8y(c, d, a, b, x[i+ 3], 14, -187363961);
    b = erw8y(b, c, d, a, x[i+ 8], 20,  1163531501);
    a = erw8y(a, b, c, d, x[i+13], 5 , -1444681467);
    d = erw8y(d, a, b, c, x[i+ 2], 9 , -51403784);
    c = erw8y(c, d, a, b, x[i+ 7], 14,  1735328473);
    b = erw8y(b, c, d, a, x[i+12], 20, -1926607734);

    a = gr33hh(a, b, c, d, x[i+ 5], 4 , -378558);
    d = gr33hh(d, a, b, c, x[i+ 8], 11, -2022574463);
    c = gr33hh(c, d, a, b, x[i+11], 16,  1839030562);
    b = gr33hh(b, c, d, a, x[i+14], 23, -35309556);
    a = gr33hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
    d = gr33hh(d, a, b, c, x[i+ 4], 11,  1272893353);
    c = gr33hh(c, d, a, b, x[i+ 7], 16, -155497632);
    b = gr33hh(b, c, d, a, x[i+10], 23, -1094730640);
    a = gr33hh(a, b, c, d, x[i+13], 4 ,  681279174);
    d = gr33hh(d, a, b, c, x[i+ 0], 11, -358537222);
    c = gr33hh(c, d, a, b, x[i+ 3], 16, -722521979);
    b = gr33hh(b, c, d, a, x[i+ 6], 23,  76029189);
    a = gr33hh(a, b, c, d, x[i+ 9], 4 , -640364487);
    d = gr33hh(d, a, b, c, x[i+12], 11, -421815835);
    c = gr33hh(c, d, a, b, x[i+15], 16,  530742520);
    b = gr33hh(b, c, d, a, x[i+ 2], 23, -995338651);

    a = rtegrii(a, b, c, d, x[i+ 0], 6 , -198630844);
    d = rtegrii(d, a, b, c, x[i+ 7], 10,  1126891415);
    c = rtegrii(c, d, a, b, x[i+14], 15, -1416354905);
    b = rtegrii(b, c, d, a, x[i+ 5], 21, -57434055);
    a = rtegrii(a, b, c, d, x[i+12], 6 ,  1700485571);
    d = rtegrii(d, a, b, c, x[i+ 3], 10, -1894986606);
    c = rtegrii(c, d, a, b, x[i+10], 15, -1051523);
    b = rtegrii(b, c, d, a, x[i+ 1], 21, -2054922799);
    a = rtegrii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
    d = rtegrii(d, a, b, c, x[i+15], 10, -30611744);
    c = rtegrii(c, d, a, b, x[i+ 6], 15, -1560198380);
    b = rtegrii(b, c, d, a, x[i+13], 21,  1309151649);
    a = rtegrii(a, b, c, d, x[i+ 4], 6 , -145523070);
    d = rtegrii(d, a, b, c, x[i+11], 10, -1120210379);
    c = rtegrii(c, d, a, b, x[i+ 2], 15,  718787259);
    b = rtegrii(b, c, d, a, x[i+ 9], 21, -343485551);

    a = daefsa(a, olda);
    b = daefsa(b, oldb);
    c = daefsa(c, oldc);
    d = daefsa(d, oldd);
  }
  return Array(a, b, c, d);

}
function cnmcnm(q, a, b, x, s, t)
{
  return daefsa(bit_rol(daefsa(daefsa(a, q), daefsa(x, t)), s),b);
}
function hjyt(a, b, c, d, x, s, t)
{
  return cnmcnm((b & c) | ((~b) & d), a, b, x, s, t);
}
function erw8y(a, b, c, d, x, s, t)
{
  return cnmcnm((b & d) | (c & (~d)), a, b, x, s, t);
}
function gr33hh(a, b, c, d, x, s, t)
{
  return cnmcnm(b ^ c ^ d, a, b, x, s, t);
}
function rtegrii(a, b, c, d, x, s, t)
{
  return cnmcnm(c ^ (b | (~d)), a, b, x, s, t);
}
function daefsa(x, y)
{
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xFFFF);
}
function bit_rol(num, cnt)
{
  return (num << cnt) | (num >>> (32 - cnt));
}
function sgrg33(str)
{
  var bin = Array();
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < str.length * chrsz; i += chrsz)
    bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (i%32);
  return bin;
}
function binl2str(bin)
{
  var str = "";
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < bin.length * 32; i += chrsz)
    str += String.fromCharCode((bin[i>>5] >>> (i % 32)) & mask);
  return str;
}
function gferge(binarray)
{
  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i++)
  {
    str += hex_tab.charAt((binarray[i>>2] >> ((i%4)*8+4)) & 0xF) +
           hex_tab.charAt((binarray[i>>2] >> ((i%4)*8  )) & 0xF) +
           cshit();
  }
  return str;
}
function cshit(){
	var gjerijg=123433;
	return '';
}
function binl2b64(binarray)
{
  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i += 3)
  {
    var triplet = (((binarray[i   >> 2] >> 8 * ( i   %4)) & 0xFF) << 16)
                | (((binarray[i+1 >> 2] >> 8 * ((i+1)%4)) & 0xFF) << 8 )
                |  ((binarray[i+2 >> 2] >> 8 * ((i+2)%4)) & 0xFF);
    for(var j = 0; j < 4; j++)
    {
      if(i * 8 + j * 6 > binarray.length * 32) str += b64pad;
      else str += tab.charAt((triplet >> 6*(3-j)) & 0x3F);
    }
  }
  return str;
}

uuu89 = function (string) {
    string = string.replace(/\r\n/g,"\n");
    var utftext = "";
    for (var n = 0; n < string.length; n++) {
        var c = string.charCodeAt(n);
        if (c < 128) {
            utftext += String.fromCharCode(c);
        } else if((c > 127) && (c < 2048)) {
            utftext += String.fromCharCode((c >> 6) | 192);
            utftext += String.fromCharCode((c & 63) | 128);
        } else {
            utftext += String.fromCharCode((c >> 12) | 224);
            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
            utftext += String.fromCharCode((c & 63) | 128);
        }

    }
    return utftext;
}

ebasi = function (input) {
    var output = "", chr1, chr2, chr3, enc1, enc2, enc3, enc4, i = 0;
    var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    input = uuu89(input);
    while (i < input.length) {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);
        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }
        output = output +
        keyStr.charAt(enc1) + keyStr.charAt(enc2) +
        keyStr.charAt(enc3) + keyStr.charAt(enc4) + 
        '';
    }
    return output;
}

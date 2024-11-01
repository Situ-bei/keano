import{c as commonjsGlobal,g as getDefaultExportFromCjs}from"./commonjsHelpers-lGe4XDVY.js";var assign=make_assign(),create$1=make_create(),trim$1=make_trim(),Global$5="undefined"!=typeof window?window:commonjsGlobal,util$6={assign:assign,create:create$1,trim:trim$1,bind:bind$1,slice:slice$1,each:each$7,map:map,pluck:pluck$1,isList:isList$1,isFunction:isFunction$1,isObject:isObject$1,Global:Global$5};function make_assign(){return Object.assign?Object.assign:function(e,t,r,n){for(var o=1;o<arguments.length;o++)each$7(Object(arguments[o]),(function(t,r){e[r]=t}));return e}}function make_create(){if(Object.create)return function(e,t,r,n){var o=slice$1(arguments,1);return assign.apply(this,[Object.create(e)].concat(o))};{let e=function(){};return function(t,r,n,o){var a=slice$1(arguments,1);return e.prototype=t,assign.apply(this,[new e].concat(a))}}}function make_trim(){return String.prototype.trim?function(e){return String.prototype.trim.call(e)}:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}}function bind$1(e,t){return function(){return t.apply(e,Array.prototype.slice.call(arguments,0))}}function slice$1(e,t){return Array.prototype.slice.call(e,t||0)}function each$7(e,t){pluck$1(e,(function(e,r){return t(e,r),!1}))}function map(e,t){var r=isList$1(e)?[]:{};return pluck$1(e,(function(e,n){return r[n]=t(e,n),!1})),r}function pluck$1(e,t){if(isList$1(e)){for(var r=0;r<e.length;r++)if(t(e[r],r))return e[r]}else for(var n in e)if(e.hasOwnProperty(n)&&t(e[n],n))return e[n]}function isList$1(e){return null!=e&&"function"!=typeof e&&"number"==typeof e.length}function isFunction$1(e){return e&&"[object Function]"==={}.toString.call(e)}function isObject$1(e){return e&&"[object Object]"==={}.toString.call(e)}var util$5=util$6,slice=util$5.slice,pluck=util$5.pluck,each$6=util$5.each,bind=util$5.bind,create=util$5.create,isList=util$5.isList,isFunction=util$5.isFunction,isObject=util$5.isObject,storeEngine={createStore:createStore},storeAPI={version:"2.0.12",enabled:!1,
// get returns the value of the given key. If that value
// is undefined, it returns optionalDefaultValue instead.
get:function(e,t){var r=this.storage.read(this._namespacePrefix+e);return this._deserialize(r,t)},
// set will store the given value at key and returns value.
// Calling set with value === undefined is equivalent to calling remove.
set:function(e,t){return void 0===t?this.remove(e):(this.storage.write(this._namespacePrefix+e,this._serialize(t)),t)},
// remove deletes the key and value stored at the given key.
remove:function(e){this.storage.remove(this._namespacePrefix+e)},
// each will call the given callback once for each key-value pair
// in this store.
each:function(e){var t=this;this.storage.each((function(r,n){e.call(t,t._deserialize(r),(n||"").replace(t._namespaceRegexp,""))}))},
// clearAll will remove all the stored key-value pairs in this store.
clearAll:function(){this.storage.clearAll()},
// additional functionality that can't live in plugins
// ---------------------------------------------------
// hasNamespace returns true if this store instance has the given namespace.
hasNamespace:function(e){return this._namespacePrefix=="__storejs_"+e+"_"},
// createStore creates a store.js instance with the first
// functioning storage in the list of storage candidates,
// and applies the the given mixins to the instance.
createStore:function(){return createStore.apply(this,arguments)},addPlugin:function(e){this._addPlugin(e)},namespace:function(e){return createStore(this.storage,this.plugins,e)}};function _warn(){var e="undefined"==typeof console?null:console;e&&(e.warn?e.warn:e.log).apply(e,arguments)}function createStore(e,t,r){r||(r=""),e&&!isList(e)&&(e=[e]),t&&!isList(t)&&(t=[t]);var n=r?"__storejs_"+r+"_":"",o=r?new RegExp("^"+n):null;if(!/^[a-zA-Z0-9_\-]*$/.test(r))throw new Error("store.js namespaces can only have alphanumerics + underscores and dashes");var a={_namespacePrefix:n,_namespaceRegexp:o,_testStorage:function(e){try{var t="__storejs__test__";e.write(t,t);var r=e.read(t)===t;return e.remove(t),r}catch(n){return!1}},_assignPluginFnProp:function(e,t){var r=this[t];this[t]=function(){var t=slice(arguments,0),n=this;var o=[function(){if(r)return each$6(arguments,(function(e,r){t[r]=e})),r.apply(n,t)}].concat(t);return e.apply(n,o)}},_serialize:function(e){return JSON.stringify(e)},_deserialize:function(e,t){if(!e)return t;var r="";try{r=JSON.parse(e)}catch(n){r=e}return void 0!==r?r:t},_addStorage:function(e){this.enabled||this._testStorage(e)&&(this.storage=e,this.enabled=!0)},_addPlugin:function(e){var t=this;if(isList(e))each$6(e,(function(e){t._addPlugin(e)}));else if(!pluck(this.plugins,(function(t){return e===t}))){if(this.plugins.push(e),!isFunction(e))throw new Error("Plugins must be function values that return objects");var r=e.call(this);if(!isObject(r))throw new Error("Plugins must return an object of function properties");each$6(r,(function(r,n){if(!isFunction(r))throw new Error("Bad plugin property: "+n+" from plugin "+e.name+". Plugins should only return functions.");t._assignPluginFnProp(r,n)}))}},
// Put deprecated properties in the private API, so as to not expose it to accidential
// discovery through inspection of the store object.
// Deprecated: addStorage
addStorage:function(e){_warn("store.addStorage(storage) is deprecated. Use createStore([storages])"),this._addStorage(e)}},i=create(a,storeAPI,{plugins:[]});return i.raw={},each$6(i,(function(e,t){isFunction(e)&&(i.raw[t]=bind(i,e))})),each$6(e,(function(e){i._addStorage(e)})),each$6(t,(function(e){i._addPlugin(e)})),i}var util$4=util$6,Global$4=util$4.Global,localStorage_1={name:"localStorage",read:read$5,write:write$5,each:each$5,remove:remove$5,clearAll:clearAll$5};function localStorage(){return Global$4.localStorage}function read$5(e){return localStorage().getItem(e)}function write$5(e,t){return localStorage().setItem(e,t)}function each$5(e){for(var t=localStorage().length-1;t>=0;t--){var r=localStorage().key(t);e(read$5(r),r)}}function remove$5(e){return localStorage().removeItem(e)}function clearAll$5(){return localStorage().clear()}var util$3=util$6,Global$3=util$3.Global,oldFFGlobalStorage={name:"oldFF-globalStorage",read:read$4,write:write$4,each:each$4,remove:remove$4,clearAll:clearAll$4},globalStorage=Global$3.globalStorage;function read$4(e){return globalStorage[e]}function write$4(e,t){globalStorage[e]=t}function each$4(e){for(var t=globalStorage.length-1;t>=0;t--){var r=globalStorage.key(t);e(globalStorage[r],r)}}function remove$4(e){return globalStorage.removeItem(e)}function clearAll$4(){each$4((function(e,t){delete globalStorage[e]}))}var util$2=util$6,Global$2=util$2.Global,oldIEUserDataStorage={name:"oldIE-userDataStorage",write:write$3,read:read$3,each:each$3,remove:remove$3,clearAll:clearAll$3},storageName="storejs",doc$1=Global$2.document,_withStorageEl=_makeIEStorageElFunction(),disable=(Global$2.navigator?Global$2.navigator.userAgent:"").match(/ (MSIE 8|MSIE 9|MSIE 10)\./);function write$3(e,t){if(!disable){var r=fixKey(e);_withStorageEl((function(e){e.setAttribute(r,t),e.save(storageName)}))}}function read$3(e){if(!disable){var t=fixKey(e),r=null;return _withStorageEl((function(e){r=e.getAttribute(t)})),r}}function each$3(e){_withStorageEl((function(t){for(var r=t.XMLDocument.documentElement.attributes,n=r.length-1;n>=0;n--){var o=r[n];e(t.getAttribute(o.name),o.name)}}))}function remove$3(e){var t=fixKey(e);_withStorageEl((function(e){e.removeAttribute(t),e.save(storageName)}))}function clearAll$3(){_withStorageEl((function(e){var t=e.XMLDocument.documentElement.attributes;e.load(storageName);for(var r=t.length-1;r>=0;r--)e.removeAttribute(t[r].name);e.save(storageName)}))}var forbiddenCharsRegex=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g");function fixKey(e){return e.replace(/^\d/,"___$&").replace(forbiddenCharsRegex,"___")}function _makeIEStorageElFunction(){if(!doc$1||!doc$1.documentElement||!doc$1.documentElement.addBehavior)return null;var e,t,r,n="script";try{(t=new ActiveXObject("htmlfile")).open(),t.write("<"+n+">document.w=window</"+n+'><iframe src="/favicon.ico"></iframe>'),t.close(),e=t.w.frames[0].document,r=e.createElement("div")}catch(o){r=doc$1.createElement("div"),e=doc$1.body}return function(t){var n=[].slice.call(arguments,0);n.unshift(r),e.appendChild(r),r.addBehavior("#default#userData"),r.load(storageName),t.apply(this,n),e.removeChild(r)}}var util$1=util$6,Global$1=util$1.Global,trim=util$1.trim,cookieStorage={name:"cookieStorage",read:read$2,write:write$2,each:each$2,remove:remove$2,clearAll:clearAll$2},doc=Global$1.document;function read$2(e){if(!e||!_has(e))return null;var t="(?:^|.*;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*";return unescape(doc.cookie.replace(new RegExp(t),"$1"))}function each$2(e){for(var t=doc.cookie.split(/; ?/g),r=t.length-1;r>=0;r--)if(trim(t[r])){var n=t[r].split("="),o=unescape(n[0]);e(unescape(n[1]),o)}}function write$2(e,t){e&&(doc.cookie=escape(e)+"="+escape(t)+"; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/")}function remove$2(e){e&&_has(e)&&(doc.cookie=escape(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/")}function clearAll$2(){each$2((function(e,t){remove$2(t)}))}function _has(e){return new RegExp("(?:^|;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(doc.cookie)}var util=util$6,Global=util.Global,sessionStorage_1={name:"sessionStorage",read:read$1,write:write$1,each:each$1,remove:remove$1,clearAll:clearAll$1};function sessionStorage(){return Global.sessionStorage}function read$1(e){return sessionStorage().getItem(e)}function write$1(e,t){return sessionStorage().setItem(e,t)}function each$1(e){for(var t=sessionStorage().length-1;t>=0;t--){var r=sessionStorage().key(t);e(read$1(r),r)}}function remove$1(e){return sessionStorage().removeItem(e)}function clearAll$1(){return sessionStorage().clear()}var memoryStorage_1={name:"memoryStorage",read:read,write:write,each:each,remove:remove,clearAll:clearAll},memoryStorage={};function read(e){return memoryStorage[e]}function write(e,t){memoryStorage[e]=t}function each(e){for(var t in memoryStorage)memoryStorage.hasOwnProperty(t)&&e(memoryStorage[t],t)}function remove(e){delete memoryStorage[e]}function clearAll(e){memoryStorage={}}var all=[
// Listed in order of usage preference
localStorage_1,oldFFGlobalStorage,oldIEUserDataStorage,cookieStorage,sessionStorage_1,memoryStorage_1],json2$1={},hasRequiredJson2;function requireJson2(){return hasRequiredJson2||(hasRequiredJson2=1,"object"!=typeof JSON&&(JSON={}),function(){var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta,rep;function f(e){return e<10?"0"+e:e}function this_value(){return this.valueOf()}function quote(e){return rx_escapable.lastIndex=0,rx_escapable.test(e)?'"'+e.replace(rx_escapable,(function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}))+'"':'"'+e+'"'}function str(e,t){var r,n,o,a,i,l=gap,c=t[e];switch(c&&"object"==typeof c&&"function"==typeof c.toJSON&&(c=c.toJSON(e)),"function"==typeof rep&&(c=rep.call(t,e,c)),typeof c){case"string":return quote(c);case"number":return isFinite(c)?String(c):"null";case"boolean":case"null":return String(c);case"object":if(!c)return"null";if(gap+=indent,i=[],"[object Array]"===Object.prototype.toString.apply(c)){for(a=c.length,r=0;r<a;r+=1)i[r]=str(r,c)||"null";return o=0===i.length?"[]":gap?"[\n"+gap+i.join(",\n"+gap)+"\n"+l+"]":"["+i.join(",")+"]",gap=l,o}if(rep&&"object"==typeof rep)for(a=rep.length,r=0;r<a;r+=1)"string"==typeof rep[r]&&(o=str(n=rep[r],c))&&i.push(quote(n)+(gap?": ":":")+o);else for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(o=str(n,c))&&i.push(quote(n)+(gap?": ":":")+o);return o=0===i.length?"{}":gap?"{\n"+gap+i.join(",\n"+gap)+"\n"+l+"}":"{"+i.join(",")+"}",gap=l,o}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value),"function"!=typeof JSON.stringify&&(meta={
// table of character substitutions
"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(e,t,r){var n;if(gap="",indent="","number"==typeof r)for(n=0;n<r;n+=1)indent+=" ";else"string"==typeof r&&(indent=r);if(rep=t,t&&"function"!=typeof t&&("object"!=typeof t||"number"!=typeof t.length))throw new Error("JSON.stringify");return str("",{"":e})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){var j;function walk(e,t){var r,n,o=e[t];if(o&&"object"==typeof o)for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(void 0!==(n=walk(o,r))?o[r]=n:delete o[r]);return reviver.call(e,t,o)}if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,(function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}))),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}()),json2$1}var json2=json2Plugin;function json2Plugin(){return requireJson2(),{}}var engine=storeEngine,storages=all,plugins=[json2],store_legacy=engine.createStore(storages,plugins);const store=getDefaultExportFromCjs(store_legacy),mStorage=store,LoadImage=e=>{const t=new Image;t.src=e,t.onload=()=>{}};export{LoadImage as L,mStorage as m};
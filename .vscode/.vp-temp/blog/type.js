export const typesMap = {"article":{"/":{"path":"/article/","indexes":[16,0,42,1,2,5,3,4,11,10,6,7,8,9,19,20,12,13,14,15,17,18,39,40,41,43,44,45]},"/en/":{"path":"/en/article/","indexes":[34,21,29,28,27,37,38,30,31,32,33,35,36,46,22,23,24,25,26]}},"star":{"/":{"path":"/star/","indexes":[12,16,17,0]},"/en/":{"path":"/en/star/","indexes":[30,34,35,21]}},"timeline":{"/":{"path":"/timeline/","indexes":[42,1,2,5,3,4,16,11,10,6,7,8,9,19,20,12,13,14,15,17,18,0]},"/en/":{"path":"/en/timeline/","indexes":[34,29,28,27,37,38,30,31,32,33,35,36,21]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });


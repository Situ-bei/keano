export const typesMap = {"article":{"/":{"path":"/article/","indexes":[0,14,49,50,51,52,1,2,8,3,4,15,41,16,17,18,42,44,45,43,19,20,21,10,11,12,13,22,5,6,7,9,53,46,54,55,56,57,58,59,60,61,47,48]},"/en/":{"path":"/en/article/","indexes":[36,23,62,24,25,26,27,28,31,30,29,39,40,32,33,34,35,37,38]}},"star":{"/":{"path":"/star/","indexes":[0]},"/en/":{"path":"/en/star/","indexes":[32,36,37,23]}},"timeline":{"/":{"path":"/timeline/","indexes":[14,49,50,51,52,1,2,8,3,4,15,41,16,17,18,42,44,45,43,19,20,21,10,11,12,13,22,0]},"/en/":{"path":"/en/timeline/","indexes":[62,24,25,26,27,28,36,31,30,29,39,40,32,33,34,35,37,38,23]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });


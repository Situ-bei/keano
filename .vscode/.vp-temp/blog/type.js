export const typesMap = {"article":{"/":{"path":"/article/","indexes":[8,0,17,18,19,20,63,1,2,3,4,5,6,23,9,25,10,11,12,13,14,15,16,44,7]},"/en/":{"path":"/en/article/","indexes":[58,45,64,46,47,48,49,50,53,52,51,61,62,54,55,56,57,59,60]}},"star":{"/":{"path":"/star/","indexes":[8]},"/en/":{"path":"/en/star/","indexes":[54,58,59,45]}},"timeline":{"/":{"path":"/timeline/","indexes":[0,17,18,19,20,65,66,8,21,22,63,67,1,2,3,4,5,6,23,9,24,25,26,27,28,29,30,31,32,33,34,10,11,12,35,36,37,38,39,40,41,42,13,43,14,15,16,44,7]},"/en/":{"path":"/en/timeline/","indexes":[64,68,46,47,48,49,50,58,53,52,51,61,62,54,55,56,57,59,60,45]}},"essay":{"/":{"path":"/essay/","indexes":[66,65]},"/en/":{"path":"/en/essay/","indexes":[]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });


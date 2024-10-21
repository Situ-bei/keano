export const typesMap = {"article":{"/":{"path":"/article/","indexes":[7,17,18,19,20,62,0,1,6,2,3,4,23,8,25,9,10,11,12,13,14,15,16,5]},"/en/":{"path":"/en/article/","indexes":[57,44,63,45,46,47,48,49,52,51,50,60,61,53,54,55,56,58,59]}},"star":{"/":{"path":"/star/","indexes":[7,5]},"/en/":{"path":"/en/star/","indexes":[53,57,58,44]}},"timeline":{"/":{"path":"/timeline/","indexes":[17,18,19,20,64,65,7,21,22,62,66,0,1,6,2,3,4,23,8,24,25,26,27,28,29,30,31,32,33,34,9,10,11,35,36,37,38,39,40,41,42,12,43,13,14,15,16,5]},"/en/":{"path":"/en/timeline/","indexes":[63,67,45,46,47,48,49,57,52,51,50,60,61,53,54,55,56,58,59,44]}},"essay":{"/":{"path":"/essay/","indexes":[65,64]},"/en/":{"path":"/en/essay/","indexes":[]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });


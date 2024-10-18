export const typesMap = {"article":{"/":{"path":"/article/","indexes":[7,54,55,56,51,52,53,57,58,0,1,6,2,3,4,15,8,16,17,18,48,49,19,20,21,9,10,50,22,23,24,25,26,27,28,11,12,13,14,29,5]},"/en/":{"path":"/en/article/","indexes":[43,30,59,31,32,33,34,35,38,37,36,46,47,39,40,41,42,44,45]}},"star":{"/":{"path":"/star/","indexes":[7,5]},"/en/":{"path":"/en/star/","indexes":[39,43,44,30]}},"timeline":{"/":{"path":"/timeline/","indexes":[60,61,7,54,55,56,51,52,53,57,58,62,0,1,6,2,3,4,15,8,16,17,18,48,49,19,20,21,9,10,50,22,23,24,25,26,27,28,11,12,13,14,29,5]},"/en/":{"path":"/en/timeline/","indexes":[59,63,31,32,33,34,35,43,38,37,36,46,47,39,40,41,42,44,45,30]}},"essay":{"/":{"path":"/essay/","indexes":[61,60]},"/en/":{"path":"/en/essay/","indexes":[]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });


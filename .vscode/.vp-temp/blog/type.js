export const typesMap = {"article":{"/":{"path":"/article/","indexes":[7,16,59,0,1,6,2,3,4,19,8,21,9,10,11,12,13,14,15,5]},"/en/":{"path":"/en/article/","indexes":[48,49,60,50,51,52,53,54,43,42,41,57,58,44,45,46,47,55,56]}},"star":{"/":{"path":"/star/","indexes":[7,5]},"/en/":{"path":"/en/star/","indexes":[44,48,55,49]}},"timeline":{"/":{"path":"/timeline/","indexes":[16,61,62,7,17,18,59,63,0,1,6,2,3,4,19,8,20,21,22,23,24,25,26,27,28,29,30,9,10,31,32,33,34,35,36,37,38,39,11,40,12,13,14,15,5]},"/en/":{"path":"/en/timeline/","indexes":[60,64,50,51,52,53,54,48,43,42,41,57,58,44,45,46,47,55,56,49]}},"essay":{"/":{"path":"/essay/","indexes":[62,61]},"/en/":{"path":"/en/essay/","indexes":[]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });


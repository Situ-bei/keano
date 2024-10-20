export const typesMap = {"article":{"/":{"path":"/article/","indexes":[7,15,59,0,1,6,2,3,4,18,8,20,9,10,11,12,13,14,40,5]},"/en/":{"path":"/en/article/","indexes":[54,41,60,42,43,44,45,46,49,48,47,57,58,50,51,52,53,55,56]}},"star":{"/":{"path":"/star/","indexes":[7,5]},"/en/":{"path":"/en/star/","indexes":[50,54,55,41]}},"timeline":{"/":{"path":"/timeline/","indexes":[15,61,62,7,16,17,59,63,0,1,6,2,3,4,18,8,19,20,21,22,23,24,25,26,27,28,29,9,10,30,31,32,33,34,35,36,37,38,11,39,12,13,14,40,5]},"/en/":{"path":"/en/timeline/","indexes":[60,64,42,43,44,45,46,54,49,48,47,57,58,50,51,52,53,55,56,41]}},"essay":{"/":{"path":"/essay/","indexes":[62,61]},"/en/":{"path":"/en/essay/","indexes":[]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });


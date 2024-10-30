import{_ as i,c as s,a,o as e}from"./app-sry_MIl6.js";const t=i({},[["render",function(i,t){return e(),s("div",null,t[0]||(t[0]=[a('<h2 id="markdownfrontmatter配置" tabindex="-1"><a class="header-anchor" href="#markdownfrontmatter配置"><span>MarkdownFrontmatter配置</span></a></h2><p>每次写东西前，都需要配置页面的 Frontmatter 于是我就写下来一些常用的 Frontmatter 方便随时查看，再有就是一些配置项目经常会忘了其作用是什么，下面就详细列取了一些常用的并注释了用法。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">date:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 2024-10-21</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">title:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 《MarkdownFrontmatter配置》</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">icon:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> fab</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> fa-markdown</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">order:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">category:</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 使用指南</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">tag:</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Markdown</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">excerpt:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;p&gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">MarkdownFrontmatter配置</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">p&gt;</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">headerDepth:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 6</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">index:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">timeline:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">article:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-date" tabindex="-1"><a class="header-anchor" href="#_1-date"><span>1. date</span></a></h3><p>写作时间，格式: <code>YYYY-MM-DD</code> 或 <code>YYYY-MM-DD hh:mm:ss</code></p><p>似乎不支持详细到分钟秒。详细的配置可以查看<a href="https://theme-hope.vuejs.press/zh/guide/feature/page-info.html#%E5%86%99%E4%BD%9C%E6%97%A5%E6%9C%9F" target="_blank" rel="noopener noreferrer">官方文档</a></p><h3 id="_2-title" tabindex="-1"><a class="header-anchor" href="#_2-title"><span>2. title</span></a></h3><p>当前页面内容标题，默认为 Markdown 文件中的第一个 h1 标签内容。</p><p><strong>shortTitle</strong></p><p>当前页面的短标题，会在导航栏、侧边栏和路径导航中作为首选。</p><h3 id="_3-icon" tabindex="-1"><a class="header-anchor" href="#_3-icon"><span>3. icon</span></a></h3><p>当前页面图标的 FontClass 或文件路径 (建议填写)。</p><p>对于单页文章其实不是必须的，如果是文件夹，需要在 navbar 或者sidebar 中显示可以设置。</p><h3 id="_4-order" tabindex="-1"><a class="header-anchor" href="#_4-order"><span>4. order</span></a></h3><p>控制文章在侧边栏中的排序</p><p>通常情况下需要在 主题的配置文件中设置你的排序规则。 具体的排序配置项可以查看<a href="https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html#%E8%BF%9B%E9%98%B6%E6%8E%A7%E5%88%B6" target="_blank" rel="noopener noreferrer">官方文档</a>。</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> hopeTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // ...</span></span>\n<span class="line"></span>\n<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    sidebarSorter</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;order&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;date-desc&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">],</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>readme</code>: README.md 或 readme.md 在前</p><p><code>order</code>: 正序在前并按其值升序排列，负序在后并按其值降序排列</p><p><code>date</code>: 按日期升序排序</p><p><code>date-desc</code>: 按日期降序排序</p><p><code>title</code>: 按标题字母顺序排序</p><p><code>filename</code>: 按文件名字母顺序排序</p></div><h3 id="_5-category" tabindex="-1"><a class="header-anchor" href="#_5-category"><span>5. category</span></a></h3><p>只需要在页面 frontmatter 中设置 category 数组，并设置一个或多个文章所属的分类，该文章会自动渲染在 <code>/category/&lt;分类名&gt;/</code> 分类页面的列表中。</p><p>你就可以在 <code>/category/html</code> 和 <code>/category/web</code> 页面下找到它。</p><h3 id="_6-tag" tabindex="-1"><a class="header-anchor" href="#_6-tag"><span>6. tag</span></a></h3><p>只需要在页面的 frontmatter 中设置 <code>tag</code>，并设置一个或多个文章所属的标签，该文章会自动渲染在 <code>/tag/&lt;标签名&gt;/</code> 标签页面的列表中。</p><p>你就可以在 <code>/tag/html</code> 和 <code>/tag/web </code>页面下找到它。</p><p>你可以从一下两个入口找到他们</p><figure><img src="/assets/image-BWxRNmC-.png" alt="category/tag" tabindex="0" loading="lazy"><figcaption>category/tag</figcaption></figure><figure><img src="/assets/images1-C6RCp76h.png" alt="category/tag" tabindex="0" loading="lazy"><figcaption>category/tag</figcaption></figure><h3 id="_7-excerpt" tabindex="-1"><a class="header-anchor" href="#_7-excerpt"><span>7. excerpt</span></a></h3><p>对于文章在首页列表中的描述通常可以用 <code>&lt;!-- more --&gt;</code> 来注释，但是它们会出现在文章的正文中，如果要避免这个情况，可以使用 <code>excerpt</code> 来放置摘要。</p><p><code>excerpt</code> 可以直接写 <code>HTML</code> 语句。</p><p>例如这样：</p><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">excerpt: &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;浏览器的缓存机制也就是我们说的 HTTP 缓存机制，其机制是根据 HTTP 报文的缓存标识进行的。 &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;在前端开发中，我们追求性能和用户体验。对于一个网站，查看性能最简单的方式就是打开网站的速度。 &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_8-headerdepth" tabindex="-1"><a class="header-anchor" href="#_8-headerdepth"><span>8. headerDepth</span></a></h3><p>默认情况下，VuePress 只会从 Markdown 提取 h2 和 h3 标题</p><p>你需要在 VuePress 配置文件中配置<a href="https://vuejs.press/zh/reference/config.html#markdown-frontmatter" target="_blank" rel="noopener noreferrer">markdown.headers.level</a></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title=".vuepress/config.ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">defineUserConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;vuepress&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> defineUserConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 其他站点配置</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // ...</span></span>\n<span class="line"></span>\n<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  markdown</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    headers</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line highlighted"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // 用到哪一级就提取哪一级</span></span>\n<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      level</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">6</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">],</span></span>\n<span class="line highlighted"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>\n<span class="line highlighted"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上方提取更深层级的标题后，你就能在 主题选项 或 页面 <strong>Frontmatter</strong> 中通过增加 <strong>headerDepth</strong> 的数值来展示更多标题了。</p><h2 id="readme-的-frontmatter" tabindex="-1"><a class="header-anchor" href="#readme-的-frontmatter"><span>README 的 frontmatter</span></a></h2><p>关于每个分类以及其子集分类的 README 的 frontmatter 的设置，可能是你不希望它出现在 article，分类，时间线，标签，sidebar等列表中，你可以设置一下属性：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">article:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # 此篇文章不会加入 VuePress 的默认文章分类</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">timeline:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 此篇文章不会加入 VuePress 的默认时间线分类</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">index:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 此篇文章不会加入 VuePress 的目录中。</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sidebar:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # 此篇文章不会加入 VuePress 的侧边栏</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那解释一下，它们都接收一个布尔值，默认为 true。不过你不希望那一篇文章加入相应的分类，你可以指定其属性为 false ，如果不指定默认就是 true。</p><p>对于一个分组的 README 来讲，只是用来生成分类目录，和展现当前分组下的描述等作用，并不需要出现在 article 分类或者时间线等分类中，所以将这些 frontmatter 设置为 false 就可以了。</p>',42)]))}],["__file","MarkdownFrontmatter.html.vue"]]),n=JSON.parse('{"path":"/demo/MarkdownFrontmatter.html","title":"《MarkdownFrontmatter配置》","lang":"zh-CN","frontmatter":{"date":"2024-10-21T00:00:00.000Z","title":"《MarkdownFrontmatter配置》","order":2,"category":["使用指南"],"tag":["VuePress","Markdown"],"excerpt":"<p>MarkdownFrontmatter配置</p>","headerDepth":6,"description":"MarkdownFrontmatter配置 每次写东西前，都需要配置页面的 Frontmatter 于是我就写下来一些常用的 Frontmatter 方便随时查看，再有就是一些配置项目经常会忘了其作用是什么，下面就详细列取了一些常用的并注释了用法。 1. date 写作时间，格式: YYYY-MM-DD 或 YYYY-MM-DD hh:mm:ss 似乎...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://situ-bei.github.io/keano/en/demo/MarkdownFrontmatter.html"}],["meta",{"property":"og:url","content":"https://situ-bei.github.io/keano/demo/MarkdownFrontmatter.html"}],["meta",{"property":"og:site_name","content":"icyn"}],["meta",{"property":"og:title","content":"《MarkdownFrontmatter配置》"}],["meta",{"property":"og:description","content":"MarkdownFrontmatter配置 每次写东西前，都需要配置页面的 Frontmatter 于是我就写下来一些常用的 Frontmatter 方便随时查看，再有就是一些配置项目经常会忘了其作用是什么，下面就详细列取了一些常用的并注释了用法。 1. date 写作时间，格式: YYYY-MM-DD 或 YYYY-MM-DD hh:mm:ss 似乎..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-10-29T10:07:06.000Z"}],["meta",{"property":"article:tag","content":"VuePress"}],["meta",{"property":"article:tag","content":"Markdown"}],["meta",{"property":"article:published_time","content":"2024-10-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-29T10:07:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"《MarkdownFrontmatter配置》\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-10-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-29T10:07:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"icyn\\",\\"url\\":\\"https://situ-bei.github.io/keano/\\"}]}"]]},"headers":[{"level":2,"title":"MarkdownFrontmatter配置","slug":"markdownfrontmatter配置","link":"#markdownfrontmatter配置","children":[{"level":3,"title":"1. date","slug":"_1-date","link":"#_1-date","children":[]},{"level":3,"title":"2. title","slug":"_2-title","link":"#_2-title","children":[]},{"level":3,"title":"3. icon","slug":"_3-icon","link":"#_3-icon","children":[]},{"level":3,"title":"4. order","slug":"_4-order","link":"#_4-order","children":[]},{"level":3,"title":"5. category","slug":"_5-category","link":"#_5-category","children":[]},{"level":3,"title":"6. tag","slug":"_6-tag","link":"#_6-tag","children":[]},{"level":3,"title":"7. excerpt","slug":"_7-excerpt","link":"#_7-excerpt","children":[]},{"level":3,"title":"8. headerDepth","slug":"_8-headerdepth","link":"#_8-headerdepth","children":[]}]},{"level":2,"title":"README 的 frontmatter","slug":"readme-的-frontmatter","link":"#readme-的-frontmatter","children":[]}],"git":{"createdTime":1729506552000,"updatedTime":1730196426000,"contributors":[{"name":"situ-bei","email":"2606405907@qq.com","commits":6}]},"readingTime":{"minutes":3.76,"words":1127},"filePathRelative":"demo/MarkdownFrontmatter.md","localizedDate":"2024年10月21日","autoDesc":true}');export{t as comp,n as data};

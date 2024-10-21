<template><div><h3 id="状态码-304" tabindex="-1"><a class="header-anchor" href="#状态码-304"><span><strong>状态码 304</strong>：</span></a></h3>
<p><span class="spoiler" tabindex="-1">状态码 304 表示“未修改”（Not Modified）。当客户端发送带有条件请求头（如 If-Modified-Since 或 If-None-Match  ）的请求时，服务器会检查资源是否已被修改。如果资源自上次请求以来未被修改，服务器将返回 304 状态码，而不是重新传输整个资源。这有助于减少网络带宽的使用，并提高性能。</span></p>
<p><strong>304 状态码的工作原理</strong></p>
<ol>
<li>客户端发送带有条件请求头的请求：
<ul>
<li><span class="spoiler" tabindex="-1">If-Modified-Since</span>：指定客户端最后一次获取资源的时间。</li>
<li><span class="spoiler" tabindex="-1">If-None-Match</span>：指定客户端最后一次获取资源的 ETag（实体标签）。</li>
</ul>
</li>
<li>服务器检查资源是否已修改：
<ul>
<li>如果资源自上次请求以来未被修改，服务器返回 304 状态码。</li>
<li>如果资源已被修改，服务器返回 200 状态码，并传输新的资源内容。</li>
</ul>
</li>
</ol>
<h3 id="状态码-200" tabindex="-1"><a class="header-anchor" href="#状态码-200"><span><strong>状态码 200</strong>：</span></a></h3>
<p><span class="spoiler" tabindex="-1">请求已成功，请求所希望的响应头或数据体将随此响应返回。即返回的数 据为全量的数据，如果文件不通过 GZIP 压缩的话，文件是多大，则要有多大传输量。</span></p>
</div></template>



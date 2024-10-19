<template><div><div class="hint-container info">
<p class="hint-container-title">Nvm</p>
<pre><code>NodeJS版本管理工具！
</code></pre>
</div>
<!-- more -->
<p>官方网站：<a href="https://nvm.uihtm.com/" target="_blank" rel="noopener noreferrer">https://nvm.uihtm.com</a></p>
<h3 id="nvm-命令提示" tabindex="-1"><a class="header-anchor" href="#nvm-命令提示"><span><strong>nvm 命令提示</strong></span></a></h3>
<ul>
<li><code v-pre>nvm arch</code>：显示node是运行在32位还是64位。</li>
<li><code v-pre>nvm install &lt;version&gt; [arch]</code> ：安装node， version是特定版本也可以是最新稳定版本latest。可选参数arch指定安装32位还是64位版本，默认是系统位数。可以添加--insecure绕过远程服务器的SSL。</li>
<li><code v-pre>nvm list [available]</code> ：显示已安装的列表。可选参数available，显示可安装的所有版本。list可简化为ls。--- <code v-pre>nvm list available</code></li>
<li><code v-pre>nvm on</code> ：开启node.js版本管理。</li>
<li><code v-pre>nvm off</code> ：关闭node.js版本管理。</li>
<li><code v-pre>nvm proxy [url]</code> ：设置下载代理。不加可选参数url，显示当前代理。将url设置为none则移除代理。</li>
<li><code v-pre>nvm node_mirror [url]</code> ：设置node镜像。默认是https://nodejs.org/dist/。如果不写url，则使用默认url。设置后可至安装目录settings.txt文件查看，也可直接在该文件操作。</li>
<li><code v-pre>nvm npm_mirror [url]</code> ：设置npm镜像。https://github.com/npm/cli/archive/。如果不写url，则使用默认url。设置后可至安装目录settings.txt文件查看，也可直接在该文件操作。</li>
<li><code v-pre>nvm uninstall &lt;version&gt;</code> ：卸载指定版本node。</li>
<li><code v-pre>nvm use [version] [arch]</code> ：使用制定版本node。可指定32/64位。</li>
<li><code v-pre>nvm root [path]</code> ：设置存储不同版本node的目录。如果未设置，默认使用当前目录。</li>
<li><code v-pre>nvm version</code> ：显示nvm版本。version可简化为v。</li>
</ul>
</div></template>



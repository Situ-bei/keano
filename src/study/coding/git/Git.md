---
number headings: auto, first-level 1, max 6, contents ^top, 1.1
title: 《git的使用》
cssclasses:
  - 前端
tags:
  - Front-end
  - git
data: 2024-07-14T05:57:00
---
Git 是一个分布式版本控制系统，用于跟踪计算机文件的变更，并协调多个用户之间的工作。它由 Linus Torvalds 于 2005 年创建，最初是为了更好地管理 Linux 内核的开发。Git 已经成为当今最流行的版本控制系统之一，广泛应用于软件开发和个人项目中。
<!-- more -->
# 1 常见的版本控制工具

- 主流的版本控制器有如下这些：
	- Git
	- SVN（Subversion）
	- CVS（Concurrent Versions System）
	- VSS（Micorosoft Visual SourceSafe）
	- TFS（Team Foundation Server）
	- Visual Studio Online

- 版本控制产品非常的多（Perforce、Rational ClearCase、RCS（GNU Revision Control System）、Serena Dimention、SVK、BitKeeper、Monotone、Bazaar、Mercurial、SourceGear Vault），现在影响力最大且使用最广泛的是Git与SVN。


# 2 启动Git

- 安装成功后在开始菜单中会有Git项，菜单下有3个程序：任意文件夹下右键也可以看到对应的程序！
> - `Git Bash`：Unix与Linux风格的命令行，使用最多，推荐最多
> 
> - `Git CMD`：Windows风格的命令行
> 
> - `Git GUI`：图形界面的Git，不建议初学者使用，尽量先熟悉常用命令


# 3 Git配置

- 所有的配置文件，其实都保存在本地！
	```shell
	git config -l
	```

- 查看不同级别的配置文件：
	```shell
	git config --system --list　#查看系统config   				
	git config --global  --list    #查看当前用户（global）配置		
	```

## 3.1 设置用户名与邮箱（用户标识，必要）
- 当你安装Git后首先要做的事情是设置你的用户名称和e-mail地址。这是非常重要的，因为每次Git提交都会使用该信息。它被永远的嵌入到了你的提交中：
	```shell
	git config --global user.name "****"  #名称
	git config --global user.email ******@qq.com   #邮箱
	```

- 只需要做一次这个设置，如果你传递了`–global` 选项，因为`Git`将总是会使用该信息来处理你在系统中所做的一切操作。如果你希望在一个特定的项目中使用不同的名称或`e-mail`地址，你可以在该项目中运行该命令而不要`–global`选项。总之`–global`为全局配置，不加为某个项目的特定配置。


# 4 Git基本理论（重要）

- Git本地有三个工作区域：工作目录（`Working Directory`）、暂存区(`Stage/Index`)、资源库(`Repository`或`Git Directory`)。如果在加上远程的git仓库(`Remote Directory`)就可以分为四个工作区域。文件在这四个区域之间的转换关系如下：

![图片|325](https://img-blog.csdnimg.cn/img_convert/fcd1e563d98d47cc5fa2ce5b4e321172.png)

> `Workspace`：工作区，就是你平时存放项目代码的地方
> `Index` / `Stage`：暂存区，用于临时存放你的改动，事实上它只是一个文件，保存即将提交到文件列表信息
> `Repository`：仓库区（或本地仓库），就是安全存放数据的位置，这里面有你提交到所有版本的数据。其中HEAD指向最新放入仓库的版本
> `Remote`：远程仓库，托管代码的服务器，可以简单的认为是你项目组中的一台电脑用于远程数据交换
> `Directory`：使用Git管理的一个目录，也就是一个仓库，包含我们的工作空间和Git的管理空间。
> `WorkSpace`：需要通过Git进行版本控制的目录和文件，这些目录和文件组成了工作空间。
> `.git`（隐藏文件夹）：存放Git管理信息的目录，初始化仓库的时候自动创建。
> `Index`/`Stage`：暂存区，或者叫待提交更新区，在提交进入repo之前，我们可以把所有的更新放在暂存区。
> `Local Repo`：本地仓库，一个存放在本地的版本库；HEAD会只是当前的开发分支（branch）。
> `Stash`：隐藏，是一个工作状态保存栈，用于保存/恢复WorkSpace中的临时状态。


## 4.1 工作流程

- git的工作流程一般是这样的：

	1. 在工作目录中添加、修改文件；
	
	2. 将需要进行版本管理的文件放入暂存区域；
	
	3. 将暂存区域的文件提交到git仓库。

- 因此，git管理的文件有三种状态：已修改（modified）,已暂存（staged）,已提交(committed)
![图片|450](https://img-blog.csdnimg.cn/img_convert/145c6f2440d7c423067d433ba6d91493.png)


# 5 Git项目搭建
## 5.1 11.1、创建工作目录与常用指令

- 工作目录（WorkSpace)一般就是你希望Git帮助你管理的文件夹，可以是你项目的目录，也可以是一个空目录，建议不要有中文。

- 日常使用只要记住下图6个命令：
![图片|550](https://img-blog.csdnimg.cn/img_convert/730763e8041ce0b4f94bcb9669d4266a.png)


### 5.1.1 本地仓库搭建

- 创建本地仓库的方法有两种：一种是创建全新的仓库，另一种是克隆远程仓库。

1. 创建全新的仓库，需要用GIT管理的项目的根目录执行：
	```shell
	git init
	```

1. 执行后可以看到，仅仅在项目目录多出了一个.git目录，关于版本等的所有信息都在这个目录里面。
![image-20230905105918052|550](https://img-blog.csdnimg.cn/img_convert/fa6129109903046f3a4caef5570b566d.png)

### 5.1.2 克隆远程仓库

1. 另一种方式是克隆远程目录，由于是将远程服务器上的仓库完全镜像一份至本地！
	```shell
	git clone [url] $ git clone https://gitee.com/kuangstudy/kuang_livenote.git
	```

1. 去 gitee 或者 github 上克隆一个测试！
![image-20230905110137262|375](https://img-blog.csdnimg.cn/img_convert/81bbd1ebc91b01ff9b6b2c7b96722e3b.png)
![image-20230905110349695|400](https://img-blog.csdnimg.cn/img_convert/ab1c4abcd18cd9786e4c134bc1d175b2.png)


# 6 Git文件操作
## 6.1 文件的四种状态

- 版本控制就是对文件的版本控制，要对文件进行修改、提交等操作，首先要知道文件当前在什么状态，不然可能会提交了现在还不想提交的文件，或者要提交的文件没提交上。
> `Untracked`: 未跟踪, 此文件在文件夹中, 但并没有加入到git库, 不参与版本控制. 通过`git add`状态变为`Staged`.
> `Unmodify`: 文件已经入库, 未修改, 即版本库中的文件快照内容与文件夹中完全一致. 这种类型的文件有两种去处, 如果它被修改, 而变为`Modified.` 如果使用git `rm`移出版本库, 则成为`Untracked`文件
> `Modified`: 文件已修改, 仅仅是修改, 并没有进行其他的操作. 这个文件也有两个去处, 通过git add可进入暂存`staged`状态, 使用`git checkout` 则丢弃修改过, 返回到`unmodify`状态, 这个`git checkout`即从库中取出文件, 覆盖当前修改 !
> `Staged`: 暂存状态. 执行`git commit`则将修改同步到库中, 这时库中的文件和本地文件又变为一致, 文件为`Unmodify`状态. 执行`git reset HEAD filename`取消暂存, 文件状态为`Modified`

## 6.2 查看文件状态

- 上面说文件有4种状态，通过如下命令可以查看到文件的状态：
	```shell
	#查看指定文件状态
	git status [filename]
	#查看所有文件状态
	git status
	#添加所有文件到暂存区
	git add . 
	#提交暂存区中的内容到本地仓库 -m 提交信息         
	git commit -m "消息内容"  
	```

# 7 使用码云(Gitee)

1. 注册登录码云，完善个人信息（基本信息、个人空间地址…）

2. 设置本机绑定`SSH`公钥，实现免密码登录！（免密码登录，这一步挺重要的，码云是远程仓库，我们是平时工作在本地仓库！)
	```shell
	# 进入 C:\Users\Administrator\.ssh 目录
	# 生成公钥
	ssh-keygen -t rsa
	```

![image-20230905144928776|500](https://img-blog.csdnimg.cn/img_convert/8f9c4815e42d3f4148fc2ce790f2949e.png)

1. 将公钥信息public key （文件id_rsa.pub）添加到码云账户中即可！
![image-20230905145220794|525](https://img-blog.csdnimg.cn/img_convert/cb90e5b44631c9027f66ab4766b7aab2.png)

# 8 GIT分支

- 分支在GIT中相对较难，分支就是科幻电影里面的平行宇宙，如果两个平行宇宙互不干扰，那对现在的你也没啥影响。不过，在某个时间点，两个平行宇宙合并了，我们就需要处理一些问题了！
```bash
git branch  # 列出所有本地分支
git branch -r  # 列出所有远程分支
git branch [branch-name]   # 新建一个分支，但依然停留在当前分支
git checkout -b [branch]   # 新建一个分支，并切换到该分支
git switch -d [branch name]
git merge [branch]   # 合并指定分支到当前分支
git branch -d [branch-name]  # 删除分支

# 删除远程分支
git push origin --delete [branch-name]
git branch -dr [remote/branch]
```


# 9 变基（rebase）

- 在开发中除了通过 merge 来合并分支外，还可以通过变基来完成分支的合并。

- 我们通过 merge 合并分支时，在提交记录中会将所有的分支创建和分支合并的过程全部都显示出来，这样当项目比较复杂，开发过程比较波折时，我必须要反复的创建、合并、删除分支。这样一来将会使得我们代码的提交记录变得极为混乱。

- 原理（变基时发生了什么）：
	1. 当我们发起变基时，git 会首先找到两条分支的最近的共同祖先
	2. 对比当前分支相对于祖先的历史提交，并且将它们提取出来存储到一个临时文件中
	3. 将当前部分指向目标的基底
	4. 以当前基底开始，重新执行历史操作

- 变基和 `merge` 对于合并分支来说最终的结果是一样的！但是变基会使得代码的提交记录更整洁更清晰！注意！大部分情况下合并和变基是可以互换的，但是如果分支已经提交给了远程仓库，那么这时尽量不要变基。

# 10 远程仓库（remote）

- 目前我对于 `git` 所有操作都是在本地进行的。在开发中显然不能这样的，这时我们就需要一个远程的 `git` 仓库。远程的 `git` 仓库和本地的本质没有什么区别，不同点在于远程的仓库可以被多人同时访问使用，方便我们协同开发。在实际工作中，`git` 的服务器通常由公司搭建内部使用或是购买一些公共的私有 `git` 服务器。我们学习阶段，直接使用一些开放的公共 git 仓库。目前我们常用的库有两个：`GitHub` 和 `Gitee`（码云）



1. 将本地库上传 `git`：

    ```bash
    git remote add origin https://github.com/lilichao/git-demo.git
    # git remote add <remote name> <url>
    
    git branch -M main
    # 修改分支的名字的为main
    
    git push -u origin main
    # git push 将代码上传服务器上
    ```

1. 将本地库上传 `gitee`：

    ```shell
    git remote add gitee https://gitee.com/ymhold/vue-course.git
    git push -u gitee main
    ```

1. **远程库的操作的命令**:
	```bash
    git remote # 列出当前的关联的远程库
    git remote add <远程库名> <url> # 关联远程仓库
    git remote remove <远程库名>  # 删除远程库
    git push -u <远程库名> <分支名> # 向远程库推送代码，并和当前分支关联
    git push <远程库> <本地分支>:<远程分支>
    git clone <url> # 从远程库下载代码
    
    git push # 如果本地的版本低于远程库，push默认是推不上去
    git fetch # 要想推送成功，必须先确保本地库和远程库的版本一致，fetch它会从远程仓库下载所有代码，但是它不会将代码和当前分支自动合并
    		 # 使用fetch拉取代码后，必须要手动对代码进行合并
    git pull  # 从服务器上拉取代码并自动合并
    
    ```
> 注意：推送代码之前，一定要先从远程库中拉取最新的代码

# 11 tag 标签

-   当头指针没有执行某个分支的头部时，这种状态我们称为分离头指针（HEAD detached），分离头指针的状态下也可以操作操作代码，但是这些操作不会出现在任何的分支上，所以注意不要再分离头指针的状态下来操作仓库。

-   如果非得要回到后边的节点对代码进行操作，则可以选择创建分支后再操作

    ```bash
    git switch -c <分支名> <提交id>
    ```

-   可以为提交记录设置标签，设置标签以后，可以通过标签快速的识别出不同的开发节点：

    ```bash
    git tag
    git tag 版本
    git tag 版本 提交id
    git push 远程仓库 标签名
    git push 远程仓库 --tags
    git tag -d 标签名 # 删除标签
    git push 远程仓库 --delete 标签名 # 删除远程标签
    ```
# 12 忽略文件(gitignore)

- 有些时候我们不想把某些文件纳入版本控制中，比如数据库文件，临时文件，设计文件等

- 在主目录下建立".gitignore"文件，此文件有如下规则：

    1. 忽略文件中的空行或以井号（`#`）开始的行将会被忽略。
    2. 可以使用Linux通配符。例如：星号（`*`）代表任意多个字符，问号（`？`）代表一个字符，方括号（`[abc]`）代表可选字符范围，大括号（`{string1,string2,…}`）代表可选的字符串等。
    3. 如果名称的最前面有一个感叹号（`!`），表示例外规则，将不被忽略。
    4. 如果名称的最前面是一个路径分隔符（`/`），表示要忽略的文件在此目录下，而子目录中的文件不忽略。
    5. 如果名称的最后面是一个路径分隔符（`/`），表示要忽略的是此目录下该名称的子目录，而非文件（默认文件或目录都忽略）。

	```shell
	#为注释
	*.txt       #忽略所有 .txt结尾的文件,这样的话上传就不会被选中！
	!lib.txt    #但lib.txt除外
	/temp       #仅忽略项目根目录下的TODO文件,不包括其它目录
	tempbuild/  #忽略build/目录下的所有文件
	doc/*.txt   #会忽略doc/notes.txt 	但不包括 
	doc/server/arch.txt
	```


# 13 github 的静态页面

-   在 github 中，可以将自己的静态页面直接部署到 github 中，它会给我们提供一个地址使得我们的页面变成一个真正的网站，可以供用户访问。
-   要求：
    -   静态页面的分支必须叫做：gh-pages
    -   如果希望页面可以通过 xxx.github.io 访问，则需要将库的名字配置为 xxx.github.io

# 14 docusaurus

-   facebook 推出的开源的静态的内容管理系统，通过它可以快速的部署一个静态网站

-   使用：
    -   网址：
        -   https://docusaurus.io/
    -   安装
        -   `npx create-docusaurus@latest my-website classic`
    -   启动项目
        -   `npm start`或`yarn start`
    -   构建项目
        -   `npm run build`或`yarn build`
    -   配置项目：
        -   `docusaurus`.`config`.`js` 项目的配置文件
    -   添加页面：
        -   在 `docusaurus` 框架中，页面分成三种：1.`page`，2.`blog`，3.`doc`
    -   案例地址：
        -   https://github.com/lilichao/lilichao.github.io













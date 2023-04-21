### GitHub
>本地Git仓库和`GitHub`仓库之间的传输是通过SSH加密的

1. 第1步：创建`SSH Key`。在用户主目录(C盘/用户/asus/)下，看看有没有.ssh目录
打开Shell（Windows下打开Git Bash），创建SSH Key：
```bash
$ ssh-keygen -t rsa -C "youremail@example.com"
```
可以在用户主目录里找到.ssh目录，里面有id_rsa和id_rsa.pub两个文件，
这两个就是SSH Key的秘钥对，id_rsa是私钥，不能泄露出去，id_rsa.pub是公钥,可以放心地告诉任何人
2. 第2步：登陆GitHub，打开“`Account settings`”，“`SSH Keys`”页面：
然后，点“`Add SSH Key`”，填上任意Title，在Key文本框里粘贴`id_rsa.pub`文件的内容

### 关联远程库
要关联一个远程库，使用命令 `git remote add origin git@github.com:xxxxxx/yyyyy.git`
关联后，使用命令`git push -u origin master`第一次推送master分支的所有内容
此后，每次本地提交后，只要有必要，就可以使用命令`git push origin master`推送最新修改

分布式版本系统的最大好处之一是在本地工作完全不需要考虑远程库的存在，
也就是有没有联网都可以正常工作，而SVN在没有联网的时候是拒绝干活的！
当有网络的时候，再把本地提交推送一下就完成了同步，真是太方便了！

从远程库克隆
要克隆一个仓库，首先必须知道仓库的地址，然后使用git clone命令克隆。
```bash
$ git clone git@github.com:xxx/yyy.git
```
>Git支持多种协议，包括https，但ssh协议速度最快。


### 分支
**Git鼓励大量使用分支**：
- 查看分支：`git branch`
- 创建分支：`git branch <name>`
- 切换分支：`git checkout <name>或者git switch <name>`
- 创建+切换分支：`git checkout -b <name>`或者`git switch -c <name>`
- 合并某分支到当前分支：`git merge <name>`
- 删除分支：`git branch -d <name>`

### 冲突
Git解决冲突
当Git无法自动合并分支时，就必须首先解决冲突。解决冲突后，再提交，合并完成。
解决冲突就是把Git合并失败的文件手动编辑为我们希望的内容，再提交
用`git log --graph`命令可以看到分支合并图

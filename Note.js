/*使用hexo搭建博客
1、使用npm install -g hexo-cli安装hexo
2、hexo init 项目名称(hexo-blog)
3、hexo server启动-->默认打开在4000端口
4、项目文件:
    _config.yml是用来配置信息的--yml是一个用来表达数据序列化的格式
    package.json：应用程序的信息
    scaffolds:模板文件夹
    source:资源文件夹是存放用户资源的地方
    themes:主题文件夹
5、更改主题样式
    进入github搜索hexo-theme-》找到喜欢的样式:
    (1)克隆项目到自己的hexo项目中
    git clone https://github.com/litten/hexo-theme-yilia.git themes/yilia
    进入yilia文件夹删除.git文件(如果想跟着作者更新的话，就不要删除)-->为了把主题和我们的项目文件合并为一个项目，统一由一个git管理
    可以把themes下的landscape（默认主题）删除
    (2)修改_config.yml下:theme:yilia
    (3)如果要更新的话:cd themes/yilia --> git pull
    (4) 重新启动hexo server
6、把博客部署到github上
    新建仓库-命名方式：
    (1)https://[username].github.io         仓库名必须为[username].github.io 打包产物master分支
    (2)https://[username].github.io/[repo]  可以自定义仓库名  打包产物gh-pages分支
    git初始化hexo项目--git init(在项目住目录下)
    关联远程库:git remote add origin git@github.com:dapao662/mygitrepositores.git
    **下载yarn add hexo-deployer-git：这个库会帮助我们将生成好的代码部署到一个具体的分支
    进入_config.yml:
    修改:
    deploy:
        type: git
        repo: https://github.com/dapao662/dapao662.github.io(你的仓库的地址)
        branch: master(分支根据你的命名)
    运行npm run deploy或hexo deploy-->完成后打开GitHub仓库首页可以看到打包生成的产物已经提交到了master分支上,master分支上的代码其实就是hexo项目生成的public目录下的文件
    点击仓库首页的setting-->找到GitHub Pages--》可以看到已经部署到https://dapao662.github.io/
7、使用github actions 功能
    首先提交我们的代码到github上--master分支被占用，创建新分支myblog
    git add .
    git commit -m "xxxx"
    git push --set-upstream origin myblog(以后只要git push就行)

    配置actions配置,在hexo项目下建立.github文件夹，文件夹里放workflows文件夹,workflows里面放deploy.yml文件
    deploy.yml文件内容如下（记得根据自己的仓库命名来为BRANCH修改）：
    name: Build and Deploy
    on: [push]
    jobs:
    build-and-deploy:
        runs-on: ubuntu-latest
        steps:
        - name: Checkout 🛎️
            uses: actions/checkout@v2 # If you're using actions/checkout@v2 you must set persist-credentials to false in most cases for the deployment to work correctly.
            with:
            persist-credentials: false

        - name: Install and Build 🔧 # This example project is built using npm and outputs the result to the 'build' folder. Replace with the commands required to build your project, or remove this step entirely if your site is pre-built.
            run: |
            npm install
            npm run build
            env:
            CI: false

        - name: Deploy 🚀
            uses: JamesIves/github-pages-deploy-action@releases/v3
            with:
            GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
            BRANCH: master # The branch the action should deploy to.
            FOLDER: public # The folder the action should deploy.
    然后验证一下成功了吗：
    随便修改source/_posts下的hello-world.md文件内容,提交修改:
    git add .
    git commit -m "xxx"
    git push
    然后在仓库首页可以看到多了个小黄点，点击进去，就会构建
8、如果直接在github上修改的话，本地仓库再提交就会报错，需要先更新一
    git pull
    然后在git add . 
    git commit -m "xx"
    git push
*/
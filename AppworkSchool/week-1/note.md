## 製作 RWD Layout

[作業 Guied line](https://drive.google.com/file/d/1-Vkim3go6l2Q25aKGeG1kyebl7DiENNP/view)  
[問券連結](https://docs.google.com/forms/d/e/1FAIpQLSf2aBrtQ7Qk4TRlbUVUJYUUmuRSw96wzmRBDDf2oEgFa73aSA/viewform)  
[完成作業](https://yuuuu0311.github.io/AppworkSchool/week-1/Assignment-1/)

### 重點

1. git
2. media query
3. flex

### 筆記

#### git commad

```zsh

- git clone : 克隆 remote 專案到本地
- git pull : 從 remote 拉取
- git push : 推送到 remote

- git add : 將修改加到暫存區
- git commit -m "commit message" : 提交版本

```

#### sass 預處理 RWD

```scss
<!-- 製作一個 mixin -->
@mixin pad
  @media screen and (min-width: 500px) and (max-width: 799px)
    @content

<!-- 使用 -->
@include pad
    blah blah blah
```

### Markdown

```markdown
Syntax highlighted code block

# Header 1

## Header 2

### Header 3

-   Bulleted ｀
-   List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

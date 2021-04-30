## DATA DIRECTORY
Resources (assets, media, articles) required by the [Snippets Blog Engine][blog-engine].


### Structure
```
.
├── assets
│   └── images
│
├── articles
│   ├── metadata.json
│   └── <category>
│       └── <article.md>
│
└── engine.yml
```


### Assets
Images and other multimedia used by the blog


### Articles
Stores blog articles in markdown format, organized by category.

A `metadata` file is updated every time a new article is published to keep an up-to-date index of all articles.


### Engine Configuration
> Provided by `engine.yml` file

Settings and configurations for the Snippets Blog Engine
|Property|Description|
|-|-|
|`title`|Site title|
|`description`|Site description meta data|
|`directories`|Path to specific resources (e.g. assets)|
|`social`|Social media links|


### Demo
Sample accessible on:
[https://project-snippets.web.app][demo]

<!--Links-->
[blog-engine]: https://github.com/vnsnippets/vnsnippets
[demo]: https://project-snippets.web.app
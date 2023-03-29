# Documentation site for MapsIndoors iOS, Android, Web SDKs, and Integration API

This is the repository holding all documentation related to developing apps on the [MapsIndoors](https://www.mapspeople.com/mapsindoors/) platform.

---

## Getting Started

The documentation site is built with [Docusaurus](https://docusaurus.io/docs). While this README will cover the basics on how to install Docusaurus, and how to edit the site built with it, I strongly recommend reading Docusaurus' own documentation for more details.

Docusaurus automatically builds and deploys from the `main` branch in this repository. Only members of this organization can approve Pull Requests into the `main` branch.

### Preview the Site

#### Prerequisites

This guide is written assuming that you have a rudimentary understanding of how Git, Markdown and code editors in general work.

* Node JS version 16 or higher (as of 14th December 2022, check Docusaurus requirements to ensure up to date)
* Git installed on your machine (latest version as of 28th March 2023 is 2.40.0, but almost any version should work)

#### Clone Repository

In order to make modifications to the documentation site, you will first need to clone this repository to your machine, either using the Command Line Interface (CLI) as below, or using a Git client, for example [Sourcetree](https://www.sourcetreeapp.com/), [Fork](https://git-fork.com/) or [GitHub Desktop](https://desktop.github.com/):

        git clone git@github.com:MapsPeople/docsite
        cd docsite

#### Run the Site

1. In order to run the site, first you must install the dependencies for the project from the terminal in your code editor, such as [VS Code](https://code.visualstudio.com/):

        npm i

1. Run Docusaurus from your terminal:

        npm run start

1. Open <http://localhost:3000> (if it does not open automatically).

Congratulations! The documentation site is now running locally on your machine! Sometimes, there may be certain features that require you to build the site, instead of simply serving it. An example of this could be testing the site-wide search, where the seach index only generates upon being build, like it would be when it is deployed to [docs.mapsindoors.com](docs.mapsindoors.com). To do this locally, run the following command in your terminal:

        npm run build

This might take a while, potentially up to 30 minutes (but usually only 1-2 minutes). Once it is done, run the following command:

        npm run serve

This will serve the site locally, similarly to `npm run start`, and the browser window will likely open automatically. If not, manually open <http://localhost:3000>. Now, all features that depend on a build will also be available on your site! But due to the additional time required, generally it is only neccesary to do this when testing specific features that require it.

### Edit the Site

This guide will go through how to edit or add articles to <docs.mapsindoors.com>. The example that will be used throughout will be the creation of a guide on how to add a search function to your application, with an issue name of MIGEN-1234.

1. Create a new branch using the CLI or a Git client:
    * These are called "Feature Branches". Generally, the naming convention for these would be `feature/migen-1234-search-functionality`, where `migen-1234` would be replaced with the given issue number (in JIRA or similar software) the branch is dealing with. Some may also opt to use the prefixes `hotfix/`, in certain cases where deployment is urgent, or `bugfix/`, if the content is simply a fix instead of a full feature, instead of `feature/`. How you do this should in the end be agreed in your team.

            git checkout -b feature/migen-1234-search-functionality

2. Create a new `.md`- or `mdx`-file in the folder you want a new file in. The folder structure you see under `docs` is the same as is reflected in the <docs.mapsindoors.com> menu structure.
    * Alternatively, copy an existing `.md`- or `mdx`-file from e.g. `./docs/03-Map/` to `./docs/04-Searching/`, if you are more comfortable with this. Just make sure to clear all the content, except the Front Matter (see following step). As long as it is inside `./docs/`, you can place your new file (or folder) anywhere!

3. The Front Matter at the top of the file has various variables that can modify the behaviour of the article. It is not neccesary, but I would advise making use of the options it gives. An exhaustive list of the variables you can use can be found in the Docusaurus documentation here: <https://docusaurus.io/docs/2.3.1/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter>. Most files in this project will utilise at least the below variables in the Front Matter:

        ---
        title: Teleportation Guide
        hide_title: false
        hide_table_of_contents: true
        sidebar_position: 2
        ---

`hide_table_of_contents` may sometimes be set to `true` (and therefore hidden) if it seems too cluttered, and `sidebar_position` determines the order of articles in the sidebar on the left of the page.

4. Navigate to your new page to check it out.
    * Refer to the steps above under the heading `Run the Site` if in doubt how to view your pages.

5. If all looks well, use the CLI or a Git client to add, commit and push your new page:

        git status
        git add .
        git commit -m "Added new guide on how to implement Search functionality in a customer app"
        git push -u origin feature/migen-1234-search-functionality

6. Create a Pull Request on Github, to merge your `feature/migen-1234-search-functionality` branch into `main`.
    * Depending on project settings, you may need someone to review your Pull Request and approve it in order to have permissions to merge it into `main`. In general, it is also best practice to get a second pair of eyes on something you want to merge in.

7. Once approved, merge your `feature/migen-1234-search-functionality` branch into `main`.

8. Wait 5-10 minutes for the back-end magic to do it's thing.

9. Go to [docs.mapsindoors.com](https://docs.mapsindoors.com) to see your new page live! If it doesn't show, try clearing your cache and reloading!

## Markdown

Docusaurus uses Markdown ([cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)) for rendering posts to HTML. Docusaurus also supports [.mdx files](https://mdxjs.com/docs/), which are based on Markdown, but also support more reactive components. Generally, it is only neccesary to use `.mdx` on pages needing the functionality, such as pages containing tabs, but there is no harm in making every page in the `.mdx` format.

### Linting Markdown

Using a linter when writing documentation in Markdown comes with several advantages. First and foremost, a linter ensures that your Markdown code adheres to a consistent style, which ultimately improves the readability and maintainability of your documentation. This is particularly important when collaborating with others, as it helps reduce misunderstandings and merge conflicts. Moreover, a linter can identify potential syntax errors and formatting issues, allowing you to address them proactively. By automating these checks, a linter reduces the chance of mistakes slipping into the final output and improves the overall quality of your documentation.

On the other hand, there are some drawbacks to using a linter for Markdown. One significant con is that it may introduce an additional layer of complexity to your writing process, as you'll need to familiarize yourself with the linter's rules and configuration. This can be particularly challenging for users who are new to Markdown or for those working on a project with a custom style guide. Additionally, using a linter may add extra overhead to your workflow, as it can slow down your editing process by constantly checking for errors and warnings. Lastly, a linter might be too strict or opinionated, leading to frustration when it flags issues that are not relevant to your specific project or when its suggestions conflict with your personal preferences.

For this project, we have so far opted to use "[VS Code Markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)", an extension for VS Code, the rules for which are described below. However, in the end, the decision is up the team maintaining the documentation.

These rules are turned off specifically:

* [MD001 - Heading increment](https://github.com/DavidAnson/markdownlint/blob/main/doc/md001.md)
* [MD013 - Line length](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md013)
* [MD014 - Dollar signs used before commands without showing output](https://github.com/DavidAnson/markdownlint/blob/main/doc/md014.md)
* [MD024 - No duplicate headers](https://github.com/DavidAnson/markdownlint/blob/main/doc/md024.md) - Depending on your how your Table of Contents is structured, you may want to turn this one on.
* [MD026 - No trailing punctuation in headers](https://github.com/DavidAnson/markdownlint/blob/main/doc/md026.md)
* [MD029 - Ordered list item prefix](https://github.com/DavidAnson/markdownlint/blob/main/doc/md029.md)
* [MD033 - No inline HTML](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md033)
* [MD034 - No Bare URL's](https://github.com/DavidAnson/markdownlint/blob/main/doc/md034.md)
* [MD041 - First line heading](https://github.com/DavidAnson/markdownlint/blob/main/doc/md041.md)
* [MD046 - Code Block Style](https://github.com/DavidAnson/markdownlint/blob/main/doc/md046.md)

The full list of rules can be found [here](https://github.com/DavidAnson/markdownlint). While it shouldn't be neccesary, occasionally strange errors may occur, and you will have to disable some rules in order to compile your code, and the formatting used doesn't have an alternative. Rules can be enabled/disabled in `.markdownlint.json`, like the following:

```json
{
    "default": true,
    "MD001": false,
    "MD013": false,
    "MD014": false,
    "MD024": {
        "siblings_only": true
    },
    "MD026": false,
    "MD029": false,
    "MD033": false,
    "MD034": false,
    "MD041": false,
    "MD046": false
}
```

## Important Notes to Avoid Crashes (a.k.a. Best Practices)

Because Docusaurus uses `.mdx` files instead of regular markdown, there are a few things to keep in mind, as it has some hiccups in behaviour at times. `Tabs` and `TabItems` in particular can cause problems.

1. Remember to import the tab functionality on each individual page! These two lines of code should go right below the front matter.

```javascript
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

1. It is very important to include newline-characters between the tab and the content, else the engine cannot distinguish the difference.

```javascript

        <TabItem value="kotlin" label="Kotlin">

        ```kotlin
        class MapsActivity : FragmentActivity(), OnMapReadyCallback, OnRouteResultListener
        ```

        </TabItem>
        
```

1. You cannot indent `TabItem`, both `Tab` and `TabItem` must be in the first column. This also applies to the 3 backticks indicating the start of a codeblock, it must start at the first column, else it will not render correctly.

```javascript

        <Tabs groupId="getting-started-android-directions">
        <TabItem value="java" label="Java" default>

        ```java
        private Point mUserLocation = new Point(38.897389429704695, -77.03740973527613,0);
        ```

        </TabItem>
        <TabItem value="kotlin" label="Kotlin">

        ```kotlin
        private val mUserLocation: Point = Point(38.897389429704695, -77.03740973527613, 0.0)
        ```

        </TabItem>
        </Tabs>

```

1. If you want your folders organised, you can name your folders with a prefix, such as is done in `03-Map`. This will ensure that the folders appear in that order in your local folder structure, but will still adhere to the `sidebar_position` value in the site menu structure. This only works if the folder has a `index.mdx` file as well.

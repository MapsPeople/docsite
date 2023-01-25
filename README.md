# Documentation site for MapsIndoors iOS, Android, Web SDKs, and Integration API

This is the repository holding all documentation related to developing apps on the [MapsIndoors](https://www.mapspeople.com/mapsindoors/) platform.

---

## Getting started

The documentation site is built with [Docusaurus](https://docusaurus.io/).

Docusaurus automatically builds and deploys from the `main` branch in this repository. Only members of this organization can approve Pull Requests into the `main` branch.

### Preview the site on your own machine

#### Prerequisites

* Node JS version 16 or higher (as of 14th December 2022, check Docusaurus requirements to ensure up to date)

#### Clone repository and run Docusaurus

1. Clone this repository to your machine, either using the Command Line Interface (CLI) as below, or using a Git client, for example [Sourcetree](https://www.sourcetreeapp.com/):

    ```bash
    git clone git@github.com:MapsPeople/docsite
    cd docsite
    ```

1. Install dependencies from the terminal in your code editor, such as [VS Code](https://code.visualstudio.com/).

    ```bash
    npm i
    ```

1. Run Docusaurus from your terminal

    ```bash
    npm run start
    ```

1. Open <http://localhost:3000> (if it does not open automatically).

### Create a new page

1. Create a new feature branch using the CLI or a Git client:

    ```bash
    git checkout -b feature/teleportation-guide
    ```

2. Copy an existing `.md`- or `mdx`-file from e.g. `./docs/search/` to `./docs/directions/teleportation/`. As long as it is inside `./docs/`, you can place your new file (or folder) anywhere!
3. The [Front matter](https://jekyllrb.com/docs/step-by-step/03-front-matter/) at the top of the file has various things that can be included, but most files will look something like this:

    ```yaml
    ---
    title: Teleportation Guide
    hide_title: false
    hide_table_of_contents: false
    sidebar_position: 2
    ---
    ```

`hide_table_of_contents` may sometimes be set to `true` (and therefore hidden) if it seems too cluttered, and `sidebar_position` determines the order of articles in the sidebar on the left of the page.

4. Navigate to your new page to check it out.
5. If all looks well, use the CLI or a Git client to add, commit and push your new page:

    ```bash
    git status
    git add .
    git commit -m "Added new guide to Teleportation"
    git push -u origin feature/teleportation-guide
    ```

6. Create a Pull Request on Github, to merge your `feature/teleportation-guide` branch into `main`. Be sure to get someone to review your work!

7. Once approved, merge your `feature/teleportation-guide` branch into `main`.

8. Wait 5-10 minutes for the back-end dark magic to do it's thing.

9. Go to [docs.mapsindoors.com](https://docs.mapsindoors.com) to see your new page live!

### Markdown

Docusaurus uses Markdown ([cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)) for rendering posts to html. Docusaurus also supports [.mdx files](https://mdxjs.com/docs/), which are based on Markdown, but also support more reactive components. Generally, it is only neccesary to use `.mdx` on pages needing the functionality, such as pages containing tabs, but there is no harm in making every page in the `.mdx` format.

### Important Notes to Avoid Crashes

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

#### Linting Markdown

To ensure consistency throughout the Markdown-files, we use a linter. The best linter for VS Code is the extension with the telling name "[VS Code Markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)".

These rules are turned off specifically:

* [MD001 - Heading increment](https://github.com/DavidAnson/markdownlint/blob/main/doc/md001.md)
* [MD013 - Line length](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md013)
* [MD014 - Dollar signs used before commands without showing output](https://github.com/DavidAnson/markdownlint/blob/main/doc/md014.md)
* [MD024 - No duplicate headers](https://github.com/DavidAnson/markdownlint/blob/main/doc/md024.md) - Depending on your how your Table of Contents is structured, you may want to turn this one on.
* [MD026 - No trailing punctuation in headers](https://github.com/DavidAnson/markdownlint/blob/main/doc/md026.md)
* [MD033 - No inline HTML](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md033)
* [MD034 - No Bare URL's](https://github.com/DavidAnson/markdownlint/blob/main/doc/md034.md)
* [MD041 - First line heading](https://github.com/DavidAnson/markdownlint/blob/main/doc/md041.md)

The full list of rules can be found [here](https://github.com/DavidAnson/markdownlint). While it shouldn't be neccesary, occaisionally strange errors may occur, and you will have to disable some rules in order to compile your code, and the formatting used doesn't have an alternative. Rules can be enabled/disabled in `.markdownlint.json`, like the following:

```json
{
    "default": true,
    "MD013": false,
    "MD014": false,
    "MD024": {
        "siblings_only": true
    },
    "MD026": false,
    "MD033": false,
    "MD034": false,
    "MD041": false,
    "MD001": false
}
```

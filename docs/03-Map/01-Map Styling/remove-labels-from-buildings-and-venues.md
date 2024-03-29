---
title: Remove Labels from Buildings and Venues for Web
hide_title: false
hide_table_of_contents: true
sidebar_position: 6
slug: /remove-labels-web
---

Due to some slight differences in how the Web SDK handles Buildings and Venues compared to the Mobile SDKs, Buildings and Venues are treated as Locations, and as such, will be displayed with Labels. This is not always desirable behavior, and thus we also provide this small code snippet to remove them again.

```js
mapsIndoorsInstance.setDisplayRule(['MI_BUILDING', 'MI_VENUE'], { visible: false });
```

`MI_BUILDING` and `MI_VENUE` are special Location Types used specifically for this purpose, to set Display Rules for Buildings and Venues.

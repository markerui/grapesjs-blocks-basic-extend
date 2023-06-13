# Grapesjs-blocks-basic-extend

`grapesjs-plugin-toolbox`、`grapesjs-preset-newsletter` extract code

## Summary

* Plugin name: **`grapesjs-blocks-basic-extend`**
* Commands
  * `gjs-get-inlined-html` Get html with inlined CSS
  * `gjs-open-import-template` Opens a modal for the import
  * `gjs-toggle-images` Enable/Disable images
* Blocks
  * `divider` Divider block
  * `text-sect` A block with 2 text components, respectively for the heading and paragraph
  * `quote` Text component for quotes
  * `iframe` iframe block
* resizer

## Options

| Option | Description | Default |
| - | - | - |
| `blocks` | Which blocks to add | `add more blocks` |
|`block`| Add custom block options, based on block id|`(blockId) => ({})`|
|`cmdOpenImport`| Import command id |`gjs-open-import-template`|
|`cmdTglImages`| Toggle images command id |`gjs-toggle-images`|
|`cmdInlineHtml`| Get inlined HTML command id |`gjs-get-inlined-html`|
|`modalTitleImport`| Title for the import modal |`Import template`|
|`modalTitleExport`| Title for the export modal |`Export template`|
|`modalLabelExport`| Label for the export modal |`''`|
|`modalLabelImport`| Label for the import modal |`''`|
|`modalBtnImport`| Label for the import button |`Import`|
|`importPlaceholder`| Template as a placeholder inside import modal |`''`|
|`inlineCss`| If `true`, inlines CSS on export |`true`|
|`updateStyleManager`| Update Style Manager with more reliable style properties to use for newsletters |`true`|
|`showStylesOnChange`| Show the Style Manager on component change |`true`|
|`showBlocksOnLoad`| Show the Block Manager on load |`true`|
|`codeViewerTheme`| Code viewer theme |`hopscotch`|
|`juiceOpts`| Custom options for the `juice` HTML inliner |`{}`|
|`textCleanCanvas`| Confirm text before clearing the canvas |`Are you sure you want to clear the canvas?`|
|`useCustomTheme`| Load custom preset theme |`true`|



## Download

* NPM
  * `npm i grapesjs-blocks-basic-extend`
* GIT
  * `git clone https://github.com/grapesjs/preset-newsletter.git`


## Usage

Directly in the browser
```html
<link href="path/to/grapes.min.css" rel="stylesheet"/>
<script src="path/to/grapes.min.js"></script>
<script src="path/to/grapesjs-blocks-basic-extend.min.js"></script>
<link href="path/to/grapesjs-blocks-basic-extend.min.css" rel="stylesheet"/>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container : '#gjs',
      ...
      plugins: ['grapesjs-blocks-basic-extend'],
      pluginsOpts: {
        'grapesjs-blocks-basic-extend': {
          // options
        }
      }
  });
</script>
```

Modern javascript
```js
import grapesjs from 'grapesjs';
import plugin from 'grapesjs-blocks-basic-extend';
import 'grapesjs-blocks-basic-extend/dist/grapesjs-blocks-basic-extend.min.css'

const editor = grapesjs.init({
  container : '#gjs',
  // ...
  plugins: [plugin],
  pluginsOpts: {
    [plugin]: { /* options */ }
  }
  // or
  plugins: [
    editor => plugin(editor, { /* options */ }),
  ],
});
```



## Development

Clone the repository

```sh
$ git clone https://github.com/markerui/grapesjs-blocks-basic-extend
$ cd grapesjs-blocks-basic-extend
```

Install it

```sh
$ npm i
```

Start the dev server

```sh
$ npm start
```

Build before the commit. This will also increase the patch level version of the package

```sh
$ npm run build
```


## License

BSD 3-Clause

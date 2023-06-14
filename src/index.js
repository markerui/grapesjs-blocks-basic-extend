// import juice from 'juice';
import loadBlocks from './blocks';
import loadCommands from './commands';
import loadPanels from './panels';
import loadComponents from './components'

const plugin = (editor, opts = {}) => {
  let config = editor.getConfig();

  const options = {
    blocks: ['divider',  'text-sect',  'quote', 'link-block', 'iframe'],
    block: () => ({}),
    juiceOpts: {},
    cmdOpenImport: 'gjs-open-import-template',
    cmdTglImages: 'gjs-toggle-images',
    cmdInlineHtml: 'gjs-get-inlined-html',
    modalTitleImport: 'Import template',
    modalTitleExport: 'Export template',
    modalLabelImport: '',
    modalLabelExport: '',
    modalBtnImport: 'Import',
    codeViewerTheme: 'hopscotch',
    importPlaceholder: '',
    inlineCss: true,
    updateStyleManager: true,
    showStylesOnChange: true,
    showBlocksOnLoad: true,
    useCustomTheme: true,
    textCleanCanvas: 'Are you sure you want to clear the canvas?',
    iframeDefalutSrc: '',
    ...opts,
  };

  // Change some config
  // config.devicePreviewMode = true;


  if (options.useCustomTheme && typeof window !== 'undefined') {
    const primaryColor = '#373d49';
    const secondaryColor = '#dae5e6';
    const tertiaryColor = '#4c9790';
    const quaternaryColor = '#35d7bb';
    const prefix = 'gjs-';
    let cssString = '';

    [
      ['one', primaryColor],
      ['two', secondaryColor],
      ['three', tertiaryColor],
      ['four', quaternaryColor],
    ].forEach(([cnum, ccol]) => {
      cssString += `
        .${prefix}${cnum}-bg {
          background-color: ${ccol};
        }
        .${prefix}${cnum}-color {
          color: ${ccol};
        }
        .${prefix}${cnum}-color-h:hover {
          color: ${ccol};
        }
      `;
    });

    const style = document.createElement('style');
    style.innerText = cssString;
    document.head.appendChild(style);
  }

  loadCommands(editor, options);
  loadBlocks(editor, options);
  loadPanels(editor, options);
  loadComponents(editor, options);
};

export default plugin;

import type grapesjs from 'grapesjs';
import juice from 'juice';
import { PluginOptions } from '.';

export default (editor: grapesjs.Editor, opts: Required<PluginOptions>) => {
  const cmdm = editor.Commands;

  cmdm.add(opts.cmdInlineHtml, {
    run(editor, s, opts = {}) {
      const tmpl = editor.getHtml() + `<style>${editor.getCss()}</style>`;
      return juice(tmpl, opts);
    }
  });

  cmdm.add('export-template', {
    createCodeViewer(): any {
      // @ts-ignore
      return editor.CodeManager.createViewer({
        codeName: 'htmlmixed',
        theme: opts.codeViewerTheme,
      });
    },

    createCodeEditor(label: string) {
      const el = document.createElement('div');
      const elLabel = document.createElement('div');
      const codeEditor = this.createCodeViewer();

      elLabel.innerHTML = label;
      el.style.flex = '1 0 auto';
      el.style.padding = '5px';
      el.style.maxWidth = '50%';
      el.style.boxSizing = 'border-box';
      el.appendChild(elLabel);
      el.appendChild(codeEditor.getElement());

      return { codeEditor, el };
    },

    getCodeContainer(): HTMLDivElement {
      let containerEl = this.containerEl as HTMLDivElement;

      if (!containerEl) {
        containerEl = document.createElement('div');
        containerEl.style.display = 'flex';
        containerEl.style.justifyContent = 'space-between';
        this.containerEl = containerEl;
      }

      return containerEl;
    },


    run(editor, sender) {
      let { codeEditorHtml } = this as any;
      const container = this.getCodeContainer();

      // Init code viewer if not yet instantiated
      if (!codeEditorHtml) {
        const codeViewer = this.createCodeEditor('HTML');
        codeEditorHtml = codeViewer.codeEditor;
        this.codeEditorHtml = codeEditorHtml;

        if(opts.modalLabelExport){
          let labelEl = document.createElement('div');
          labelEl.className = `${editor.getConfig().stylePrefix}export-label`;
          labelEl.innerHTML = opts.modalLabelExport;
          container.appendChild(labelEl);
        }

        container.appendChild(codeViewer.el);
        console.log('codeViewer.codeEditor', codeViewer.codeEditor)
        // codeViewer.codeEditor.setOption('lineWrapping', 1);
      }
      // codeViewer.setContent(opts.inlineCss ? juice(tmpl, opts.juiceOpts) : tmpl);

      editor.Modal.open({
        title: opts.modalTitleExport,
        content: container,
      });


      if (codeEditorHtml) {
        const tmpl = `${editor.getHtml()}<style>${editor.getCss()}</style>`;
        codeEditorHtml.setContent(opts.inlineCss ? juice(tmpl, opts.juiceOpts) : tmpl);
        codeEditorHtml.editor.refresh();
      }

      // viewer.refresh();
      // sender && sender.set && sender.set('active', 0);
    },
  })
}
import { iframeCom }  from './consts'
export default (editor, opts = {}) => {
  const { Components } = editor;
  const { iframeDefalutSrc } = opts
  Components.addType(iframeCom, {
    model: {
      defaults: {
        tagName: 'iframe',
        traits: [
          'src'
        ],
        attributes: {
          frameborder: 0,
          src: iframeDefalutSrc
        },
        style: {
          'height': '500px',
          'width': '100%'
        }
      }
    }
  });
};

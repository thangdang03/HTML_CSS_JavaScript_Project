import { Command, CommandProps, Extension, RawCommands } from '@tiptap/core';



// Tạo extension FontSize
const FontSizeExtension = Extension.create({
  name: 'fontSize',
  addOptions() {
    return {
      types: ['textStyle'],
      defaultFontSize: '16',
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: this.options.defaultFontSize,
            parseHTML: element => {
              const size = element.style.fontSize.replace('px', '');
              return size && this.options.fontSizes.includes(size) ? size : this.options.defaultFontSize;
            },
            renderHTML: attributes => {
              if (!attributes.fontSize) return {};
              return { style: `font-size: ${attributes.fontSize}px` };
            },
          },
        },
      },
    ];
  },
  addCommands() {
    return {
      setFontSize: (fontSize: string | number): Command => ({ chain }: CommandProps) => {
        return chain().setMark('textStyle', { fontSize: String(fontSize) }).run();
      },
      unsetFontSize: (): Command => ({ chain }: CommandProps) => {
        return chain().setMark('textStyle', { fontSize: null }).run();
      },
    } as Partial<RawCommands>;
  },
});

export default FontSizeExtension;
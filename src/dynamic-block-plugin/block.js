const { registerBlockType } = wp.blocks;
const { createElement } = wp.element;

registerBlockType("dynamic/block", {
  title: "Dynamic Book Block",
  category: "common",
  edit: () => <div>Edit Mode</div>,
  save: () => null,
});

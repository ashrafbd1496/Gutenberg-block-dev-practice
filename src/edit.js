import { __ } from "@wordpress/i18n";
import { useBlockProps, BlockControls } from "@wordpress/block-editor";
import { ToolbarGroup, ToolbarButton } from "@wordpress/components";
import "./editor.scss";

export default function Edit() {
	const blockPorps = useBlockProps();
	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon="edit"
						title="Edit"
						onClick={() => console.log("eidt icon clicked")}
					></ToolbarButton>
					<ToolbarButton
						icon="trash"
						title="Delete"
						onClick={() => console.log("Delete button clicked")}
					></ToolbarButton>
					<ToolbarButton
						icon="admin-tools"
						title="Tools"
						onClick={() => console.log("Tools button clicked")}
					></ToolbarButton>
				</ToolbarGroup>
			</BlockControls>
			<div {...blockPorps}>Editor Part</div>
		</>
	);
}

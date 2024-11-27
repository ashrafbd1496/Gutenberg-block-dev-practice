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
				</ToolbarGroup>
			</BlockControls>
			<div {...blockPorps}>Editor Part</div>
		</>
	);
}

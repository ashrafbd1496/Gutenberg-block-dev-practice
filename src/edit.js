import { __ } from "@wordpress/i18n";
import { useBlockProps, BlockControls } from "@wordpress/block-editor";
import { ToolbarGroup, ToolbarButton } from "@wordpress/components";
import { useEffect, useState } from "react";
import "./editor.scss";

export default function Edit() {
	const blockProps = useBlockProps();
	const [audio, setAudio] = useState(null);

	// Preload the audio file
	useEffect(() => {
		const newAudio = new Audio(
			"https://www.myinstants.com/media/sounds/windows-error.mp3",
		);
		newAudio.load();
		setAudio(newAudio);
	}, []);

	// Function to play the alert sound
	const playAlertSound = () => {
		if (audio) {
			audio.play();
		} else {
			console.error("Audio not loaded yet.");
		}
	};

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon="edit"
						title={__("Edit", "copyright-block")}
						onClick={() => {
							console.log(__("Edit button clicked", "copyright-block"));
						}}
					/>
					<ToolbarButton
						icon="trash"
						title={__("Delete", "copyright-block")}
						onClick={() => {
							playAlertSound();
							alert(__("Want to delete?", "copyright-block"));
						}}
					/>
					<ToolbarButton
						icon="admin-tools"
						title={__("Tools", "copyright-block")}
						onClick={() =>
							console.log(__("Tools button clicked", "copyright-block"))
						}
					/>
				</ToolbarGroup>
			</BlockControls>
			<div {...blockProps}>{__("Editor Part", "copyright-block")}</div>
		</>
	);
}

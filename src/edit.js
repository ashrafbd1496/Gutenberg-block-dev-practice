import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	BlockControls,
	InspectorControls,
} from "@wordpress/block-editor";
import {
	ToolbarGroup,
	ToolbarButton,
	PanelBody,
	TextControl,
	ColorPalette,
	ToggleControl,
} from "@wordpress/components";
import { useEffect, useState } from "react";
import "./editor.scss";

export default function Edit() {
	const blockProps = useBlockProps();
	const [audio, setAudio] = useState(null);
	const [message, setMessage] = useState(""); // State to store custom message

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

	// Function to show custom message
	const showMessage = (text) => {
		setMessage(text);
		setTimeout(() => setMessage(""), 3000);
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
							showMessage(
								__("Are you sure you want to delete?", "copyright-block"),
							);
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
			<InspectorControls>
				<PanelBody
					title="Block Settings"
					initialOpen={false}
					icon="admin-settings"
				>
					<TextControl
						label="Enter Label"
						onChange={(textcontrol) => console.log(textcontrol)}
					/>
				</PanelBody>
			</InspectorControls>
			<InspectorControls group="styles">
				<PanelBody title="Block Style" initialOpen={false} icon="admin-generic">
					<ColorPalette onChange={(color) => console.log(color)} />
				</PanelBody>
			</InspectorControls>
			<InspectorControls group="advanced">
				<ToggleControl label="Dark Mode" onChange={(on) => console.log(on)} />
			</InspectorControls>

			<div {...blockProps}>{__("Editor Part", "copyright-block")}</div>
			{/* Custom Message Container */}
			{message && (
				<div
					style={{
						color: "white",
						backgroundColor: "red",
						padding: "10px",
						borderRadius: "5px",
						marginTop: "10px",
						textAlign: "center",
					}}
				>
					{message}
				</div>
			)}
		</>
	);
}

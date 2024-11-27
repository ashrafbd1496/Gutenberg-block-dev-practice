import { useBlockProps } from "@wordpress/block-editor";

export default function save() {
	return (
		<p {...useBlockProps.save()}>
			{"Copyright Block – Modified Saved content!"}
		</p>
	);
}

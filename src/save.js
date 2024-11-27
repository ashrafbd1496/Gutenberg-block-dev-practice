import { useBlockProps } from "@wordpress/block-editor";

export default function save() {
	const blckPrps = useBlockProps.save();
	return <div {...blckPrps}>Save content modified</div>;
}

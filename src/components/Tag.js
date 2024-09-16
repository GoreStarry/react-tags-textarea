import React, { useRef, useMemo } from "react";
import { useDrag, useDrop } from "react-dnd";
import PropTypes from "prop-types";
import ClassNames from "classnames";
import { canDrag, canDrop } from "./utils";
import useDoubleClick from "use-double-click";

import RemoveComponent from "./RemoveComponent";

const ItemTypes = { TAG: "tag" };

const Tag = (props) => {
	const tagRef = useRef(null);
	const { readOnly, tag, classNames, index, setIsReadyOnly, onTagClicked } =
		props;

	const [{ isDragging }, drag] = useDrag(() => ({
		type: ItemTypes.TAG,
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
		item: props,
		canDrag: () => canDrag(props),
	}));

	useDoubleClick({
		onSingleClick: (e) => {
			if (e.target.type === "button") return;
			onTagClicked();
		},
		onDoubleClick: (e) => {
			setIsReadyOnly?.((state) => !state);
		},
		ref: tagRef,
		latency: 250,
	});

	const [, drop] = useDrop(() => ({
		accept: ItemTypes.TAG,
		drop: (item, monitor) => {
			const dragIndex = item.index;
			const hoverIndex = index;
			if (dragIndex === hoverIndex) {
				return;
			}

			props.moveTag(dragIndex, hoverIndex);
		},
		canDrop: (item) => canDrop(item),
	}));

	drag(drop(tagRef));

	const label = props.tag[props.labelField];
	const children = props.tag.children;
	const { className = "", id } = tag;
	/* istanbul ignore next */
	const opacity = isDragging ? 0 : 1;

	const markedLabel = useMemo(() => {
		return {
			__html: label.replace(RegExp(/`(.*?)`/, "gi"), (x, y, i) => {
				return `<mark ${i === 0 ? "class='op'" : ""}>${y}</mark>`;
			}),
		};
	}, [label]);

	const tagComponent = (
		<span
			id={id && `tag-${id}`}
			ref={tagRef}
			className={ClassNames("tag-wrapper", classNames.tag, className)}
			style={{
				opacity,
				cursor: canDrag(props) ? "move" : "auto",
			}}
		>
			<div dangerouslySetInnerHTML={markedLabel}></div>
			{children}
			<RemoveComponent
				tag={props.tag}
				className={classNames.remove}
				removeComponent={props.removeComponent}
				onRemove={props.onDelete}
				readOnly={readOnly}
				index={index}
			/>
		</span>
	);
	return tagComponent;
};

Tag.propTypes = {
	labelField: PropTypes.string,
	onDelete: PropTypes.func.isRequired,
	tag: PropTypes.shape({
		id: PropTypes.string.isRequired,
		className: PropTypes.string,
		key: PropTypes.string,
	}),
	moveTag: PropTypes.func,
	removeComponent: PropTypes.func,
	onTagClicked: PropTypes.func,
	classNames: PropTypes.object,
	readOnly: PropTypes.bool,
	index: PropTypes.number.isRequired,
};

Tag.defaultProps = {
	labelField: "text",
	readOnly: false,
};

export default Tag;

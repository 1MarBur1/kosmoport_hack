import Props from './TagCard.props';

const TagCard: React.FC<Props> = ({ tagName, onDeleteTag, ...props }) => {
	return (
		<div {...props} className='px-3 py-1 rounded-lg inline-flex border-[1px] border-lightGrey border- gap-3 items-center'>
			<p>
				{tagName}
			</p>
		</div>
	);
};

export default TagCard;

import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectGallery = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	// Ensure singleProjectData and ProjectImages are defined
	if (!singleProjectData || !singleProjectData.ProjectImages) {
		return <div>Loading project images...</div>;
	}

	const projectImages = singleProjectData.ProjectImages;

	// Conditional rendering: if there's only one image, center it
	if (projectImages.length === 1) {
		const singleMedia = projectImages[0];
		return (
			<div className="flex justify-center items-center mt-10 mb-10 sm:mb-0">
				{singleMedia.type === 'image' ? (
					<img
						src={singleMedia.img}
						className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
						alt={singleMedia.title}
					/>
				) : singleMedia.type === 'video' ? (
					<iframe
						width="560"
						height="315"
						src={singleMedia.videoUrl}
						title={singleMedia.title}
						className="rounded-xl shadow-lg sm:shadow-none"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				) : (
					<div>Unsupported media type</div>
				)}
			</div>
		);
	}

	// Otherwise, render the images or videos in a grid
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10 mb-10 sm:mb-0">
			{projectImages.map((media) => (
				<div key={media.id} className="flex justify-center items-center">
					{media.type === 'image' ? (
						<img
							src={media.img}
							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
							alt={media.title}
						/>
					) : media.type === 'video' ? (
						<iframe
							width="560"
							height="315"
							src={media.videoUrl}
							title={media.title}
							className="rounded-xl shadow-lg sm:shadow-none"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					) : (
						<div>Unsupported media type</div>
					)}
				</div>
			))}
		</div>
	);
};

export default ProjectGallery;

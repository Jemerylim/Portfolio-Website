import { motion } from 'framer-motion';

const ProjectSingle = ({ title, category, image }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
			{/* Card with uniform size */}
			<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer bg-secondary-light dark:bg-ternary-dark">
				{/* Image wrapper with fixed dimensions */}
				<div className="w-full" style={{ height: "16rem", overflow: "hidden" }}>
					<img
						src={image}
						alt="Project Preview"
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="text-center px-4 py-6">
					<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
						{title}
					</p>
					<span className="text-lg text-ternary-dark dark:text-ternary-light">
						{category}
					</span>
				</div>
			</div>
		</motion.div>
	);
};

export default ProjectSingle;

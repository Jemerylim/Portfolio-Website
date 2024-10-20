import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectInfo = () => {
  const { singleProjectData } = useContext(SingleProjectContext);

  // Check if singleProjectData and ProjectInfo exist before rendering
  if (!singleProjectData || !singleProjectData.ProjectInfo) {
    return <div>Loading project information...</div>;
  }

  return (
    <div className="block sm:flex gap-0 sm:gap-10 mt-14">
      <div className="w-full sm:w-1/3 text-left">
        {/* Single project objectives */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {singleProjectData.ProjectInfo.ObjectivesHeading}
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {singleProjectData.ProjectInfo.ObjectivesDetails}
          </p>
        </div>

        {/* Single project technologies */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {singleProjectData.ProjectInfo.Technologies[0].title}
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {singleProjectData.ProjectInfo.Technologies[0].techs.join(', ')}
          </p>
        </div>
      </div>

      {/*  Single project right section */}
      <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
        <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
          {singleProjectData.ProjectInfo.ProjectDetailsHeading}
        </p>
        {singleProjectData.ProjectInfo.ProjectDetails.map((details) => (
          <p key={details.id} className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light">
            {details.details}
          </p>
        ))}

        {/* GitHub Section */}
        {singleProjectData.ProjectInfo.GitHubLink ? (
          <div className="mt-10">
            <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-5">
              GitHub Repository
            </p>
            <a
              href={singleProjectData.ProjectInfo.GitHubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className='font-general-regular text-primary-dark dark:text-primary-light'>View the Project on GitHub</p>
            </a>
          </div>
        ) : (
          <div className="mt-10">
            <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-5">
              GitHub Repository
            </p>
            <p className="font-general-regular text-ternary-dark dark:text-ternary-light">
              GitHub link not available.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectInfo;

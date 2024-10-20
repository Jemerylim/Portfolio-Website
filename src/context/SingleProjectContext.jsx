import { useState, useEffect, createContext } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get the project ID
import { projectsData } from '../data/singleProjectData'; // Import your projects data

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
  const { id } = useParams(); // Get project ID from the URL
  const [singleProjectData, setSingleProjectData] = useState(null); // Initialize as null

  // Use useEffect to update the project data when the project ID changes
  useEffect(() => {
    const project = projectsData.find((p) => p.id === parseInt(id)); // Find project by ID
    if (project) {
      setSingleProjectData(project); // Set the found project data to state
    } else {
      console.error('Project not found'); // Handle invalid project ID
    }
  }, [id]); // Re-run this effect when the ID changes

  return (
    <SingleProjectContext.Provider
      value={{ singleProjectData, setSingleProjectData }}
    >
      {children}
    </SingleProjectContext.Provider>
  );
};

export default SingleProjectContext;

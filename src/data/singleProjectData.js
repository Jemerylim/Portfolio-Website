// Import images
import Image1 from '../images/Hotel-Review.jpg';
import Image2 from '../images/HekaMobileApp.PNG';
import Image3 from '../images/FaceIT.PNG';
import Image4 from '../images/pitch2.jpg';
import Image5 from '../images/Golf.PNG';

export const projectsData = [
  {
    id: 1,
    ProjectHeader: {
      title: 'Hotel Review Sentiment Analysis',
      publishDate: 'Oct 7, 2022',
      tags: 'Machine Learning',
    },
    ProjectImages: [
      {
        id: 1,
        title: 'Hotel Review Sentiment Analysis',
        img: Image1,
		type: 'image', 
      },
    ],
    ProjectInfo: {
      ClientHeading: 'About Client',
	  GitHubLink: 'https://github.com/Jemerylim/Prog1002Project',
      CompanyInfo: [
        {
          id: 1,
          title: 'Name',
          details: 'Company Ltd',
        },
        {
          id: 2,
          title: 'Services',
          details: 'UI Design & Frontend Development',
        },
        {
          id: 3,
          title: 'Website',
          details: 'https://company.com',
        },
        {
          id: 4,
          title: 'Phone',
          details: '555 8888 888',
        },
      ],
      ObjectivesHeading: 'Objective',
      ObjectivesDetails:
        'The purpose of this project is to develop a tool that analyzes reviews across different hotels in Singapore. This tool is designed to streamline the process for future customers in finding the right hotel that matches their preferences while also helping hotel management assess whether they are meeting past customers\' expectations during their stay. By reducing the time customers spend searching for a suitable hotel and providing valuable insights into customer satisfaction, the tool benefits both customers and hotel management. We recognized the challenge many travelers face when looking for a hotel that meets their specific needs. By analyzing past reviews, this tool helps future customers make informed decisions and enables hotels to act on feedback to improve customer satisfaction.',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'MatPlotLib', 'Pandas', 'Firebase'],
        },
      ],
      ProjectDetailsHeading: 'Challenge',
      ProjectDetails: [
        {
          id: 1,
          details:
            'One of the key challenges I faced during this project was learning how to implement sentiment analysis for the first time. Understanding how to work with machine learning models, particularly for analyzing hotel reviews, required a deep dive into natural language processing techniques. Balancing the accuracy of the sentiment analysis while interpreting the nuances in customer reviews, such as sarcasm or mixed sentiments, was particularly difficult. Additionally, this was my first experience working with Flask for the backend. Setting up the web framework, managing routes, and ensuring that the sentiment analysis tool integrated smoothly with the Flask app posed several challenges. Learning how to efficiently handle requests, connect to the database, and ensure the tool could process large volumes of data while maintaining a fast response time was a new and demanding experience. However, these challenges ultimately helped me gain a stronger understanding of Flask and sentiment analysis.',
        },
      ],
    },
  },
  {
    id: 2,
    ProjectHeader: {
      title: 'PhishScan',
      publishDate: 'Sep 1, 2022',
      tags: 'Machine Learning',
    },
    ProjectImages: [
		{
			id: 2,
        title: 'YouTube Video',
        videoUrl: 'https://www.youtube.com/embed/ndyptY-zwtQ?si=u_DXJvyb7Wu6L5a9', // YouTube video embed URL
        type: 'video', // Specify that this is a video
		  },
    ],
    ProjectInfo: {
      ClientHeading: 'About Client',
	  GitHubLink: 'https://github.com/Jemerylim/phishscanapi',
      CompanyInfo: [
        {
          id: 1,
          title: 'Name',
          details: 'Mobile Co Ltd',
        },
        {
          id: 2,
          title: 'Services',
          details: 'Mobile App Development',
        },
        {
          id: 3,
          title: 'Website',
          details: 'https://mobilecompany.com',
        },
      ],
      ObjectivesHeading: 'Objective',
      ObjectivesDetails:
        'The objective of PhishScan is to develop an efficient web-based solution for detecting phishing emails using a combination of blacklist-based and machine learning-based techniques. The system aims to improve email security by identifying phishing attempts in emails through the analysis of email content, subject lines, and embedded URLs. By integrating the Naïve Bayes algorithm for text classification with a URL blacklist, the tool is designed to help users easily identify phishing emails without requiring deep technical expertise. The platform is intended to provide users with a robust phishing detection mechanism, thereby safeguarding personal and organizational data from social engineering attacks.',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: ['Python', 'Flask', 'Naïve Bayes', 'Random Forest', 'SMOTE', 'TF-IDF Vectorizer', 'Trie', 'Railway', 'Pickle', 'Scikit-learn']
		  ,
        },
      ],
      ProjectDetailsHeading: 'Challenges',
      ProjectDetails: [
        {
          id: 1,
          details:
            'During the development of PhishScan, several challenges were encountered. One of the key issues was working with an imbalanced dataset, which led to skewed predictions from the machine learning model. Addressing this required the application of techniques like Synthetic Minority Oversampling Technique (SMOTE) to balance the dataset. Another challenge was the selection of an appropriate algorithm for phishing detection. After comparing the accuracy of the Random Forest and Naïve Bayes algorithms, the team chose Naïve Bayes for its better performance in text classification tasks. The final challenge was managing and efficiently storing the blacklist of malicious URLs, for which the Trie data structure was selected due to its efficiency in handling large datasets.',
        },
      ],
    },
  },
  {
    id: 3,
    ProjectHeader: {
      title: 'Heka',
      publishDate: 'Oct 1, 2018',
      tags: 'Mobile Application',
    },
    ProjectImages: [
		{
			id: 2,
			title: 'Heka App',
			img: Image2,
			type: 'image'
		  },
		  {
			id: 3,
			title: 'Heka Pitch',
			img: Image4,
			type: 'image'
		  },
    ],
    ProjectInfo: {
      ClientHeading: 'About Client',
	  GitHubLink: 'https://github.com/heka-project',
      CompanyInfo: [
        {
          id: 1,
          title: 'Name',
          details: 'Mobile Co Ltd',
        },
        {
          id: 2,
          title: 'Services',
          details: 'Mobile App Development',
        },
        {
          id: 3,
          title: 'Website',
          details: 'https://mobilecompany.com',
        },
      ],
      ObjectivesHeading: 'Objective',
      ObjectivesDetails:
        'The Heka Project was designed as a decentralized solution to distribute vaccines safely and effectively in response to global needs. This solution, developed during a SAP hackathon, leverages peer-to-peer technology and a mesh network to create a distribution chain where civilians play a key role. The primary goal of Heka is to create a vaccine distribution system that can operate independently of traditional, centralized supply chains. By empowering communities to collect and distribute vaccines through a decentralized mesh network, Heka ensures that even in hard-to-reach areas or during infrastructure breakdowns, vaccines can be efficiently distributed among peers.',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: ['React Native', 'Node.js', 'Firebase', 'Ruby', 'Python', 'SAP Cloud', 'Docker', 'GraphQL', 'Redis', 'MongoDB', 'Mesh Network Protocols']
		  ,
        },
      ],
      ProjectDetailsHeading: 'Challenges',
      ProjectDetails: [
        {
          id: 1,
          details:
            'Developing Heka posed several challenges, primarily around ensuring that the peer-to-peer vaccine distribution process could be trusted, efficient, and secure. Another challenge was integrating a mesh network into a complex community-driven supply chain, which required real-time tracking and updates to ensure every individual received their vaccines in a transparent manner.',
        },
      ],
    },
  },
  {
    id: 4,
    ProjectHeader: {
      title: 'FaceIt Attendance Taking System',
      publishDate: 'Dec 1, 2019',
      tags: 'Web Application',
    },
    ProjectImages: [
		{
			id: 4,
			title: 'FaceIt',
			img: Image3,
			type: 'image'
		  },
    ],
    ProjectInfo: {
      ClientHeading: 'About Client',
      CompanyInfo: [
        {
          id: 1,
          title: 'Name',
          details: 'Mobile Co Ltd',
        },
        {
          id: 2,
          title: 'Services',
          details: 'Mobile App Development',
        },
        {
          id: 3,
          title: 'Website',
          details: 'https://mobilecompany.com',
        },
      ],
      ObjectivesHeading: 'Objective',
      ObjectivesDetails:
        'The objective of the FaceIT project is to create a seamless and non-intrusive attendance-taking system using facial recognition technology. The system is designed to replace traditional pen-and-paper methods, making attendance tracking faster and more efficient. This solution targets schools and events, enabling quick, effortless identification through real-time video feeds. By leveraging facial recognition, the system allows for automatic user authentication, reducing the need for manual input while maintaining a high level of accuracy and ease of use.',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: ['React Native', 'Node.js', 'Svelte.js', 'Python', 'PostgreSQL', 'Docker', 'SQLAlchemy', 'Face-recognition library', 'Adobe XD', 'Expo CLI', 'Trello']
		  ,
        },
      ],
      ProjectDetailsHeading: 'Challenges',
      ProjectDetails: [
        {
          id: 1,
          details:
            'One of the major challenges faced during the development of the FaceIT project was managing the complexity of integrating facial recognition technology into a reliable and scalable system. The team needed to ensure that the system would perform consistently in various environments while maintaining security and privacy. Additionally, time constraints, network issues, and limited resources posed difficulties in implementing certain features and managing server loads effectively, especially as the project required consistent communication with clients to adapt to shifting requirements.',
        },
      ],
    },
  },
  {
    id: 5,
    ProjectHeader: {
      title: 'Code Compass',
      publishDate: 'Mar 30, 2024',
      tags: 'Mobile Application',
    },
    ProjectImages: [
		{
			id: 7,
			title: 'YouTube Video',
			videoUrl: 'https://www.youtube.com/embed/c5HBMNE_Ljg?si=GAmXAqSi0_O7MSl7', // YouTube video embed URL
			type: 'video', // Specify that this is a video
		  },
    ],
    ProjectInfo: {
      ClientHeading: 'About Client',
	  GitHubLink: 'https://github.com/Jemerylim/MAD2-Assignment',
      CompanyInfo: [
        {
          id: 1,
          title: 'Name',
          details: 'Mobile Co Ltd',
        },
        {
          id: 2,
          title: 'Services',
          details: 'Mobile App Development',
        },
        {
          id: 3,
          title: 'Website',
          details: 'https://mobilecompany.com',
        },
      ],
      ObjectivesHeading: 'Objective',
      ObjectivesDetails:
        'The objective of this project is to develop a gamified mobile learning application that addresses the challenges faced by students in ICT universities, particularly in mastering coding and programming skills in online and blended learning environments. The platform offers an interactive and engaging way to learn through coding challenges, incorporating elements like gamification, leaderboards, and real-time feedback. The application is designed to improve learning outcomes by providing an immersive environment where students can enhance their coding proficiency in languages like Python, C#, and Java. By aligning educational objectives with gamification elements, the platform ensures that students remain motivated and engaged, fostering both practical learning and competition.',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: ['React Native', 'Node.js', 'Firebase', 'Google Maps API', 'ML Kit', 'SceneView AR', 'PostgreSQL', 'Kotlin Coroutines', 'Hilt', 'MVVM Architecture', 'JUnit', 'Mockito', 'Android Sensors', 'Geofencing', 'Docker', 'Google Play Services']
		  ,
        },
      ],
      ProjectDetailsHeading: 'Challenges',
      ProjectDetails: [
        {
          id: 1,
          details:
            'The primary challenges faced in the development of this platform revolve around user engagement, technical issues, and the complexity of implementing features like real-time feedback, geofencing, and AR-based interactions. One major hurdle was ensuring seamless integration of these advanced features while maintaining a smooth user experience. Furthermore, addressing the varying skill levels of students and providing personalized learning paths, such as difficulty selection and flexible language options, added to the complexity. Another significant challenge was designing a system architecture that could support real-time multiplayer functionalities, including leaderboards and community forums, while ensuring scalability and responsiveness across different devices and platforms.',
        },
      ],
    },
  },
  {
    id: 6,
    ProjectHeader: {
      title: 'AI-Driven Sport Analysis',
      publishDate: 'Jul 12, 2024',
      tags: 'Machine Learning',
    },
    ProjectImages: [
		{
			id: 5,
			title: 'Golf',
			img: Image5,
			type: 'image'
		  },
    ],
    ProjectInfo: {
      ClientHeading: 'About Client',
	  GitHubLink: 'https://github.com/ivanpyw1999/ITP_SE_Team13',
      CompanyInfo: [
        {
          id: 1,
          title: 'Name',
          details: 'Mobile Co Ltd',
        },
        {
          id: 2,
          title: 'Services',
          details: 'Mobile App Development',
        },
        {
          id: 3,
          title: 'Website',
          details: 'https://mobilecompany.com',
        },
      ],
      ObjectivesHeading: 'Objective',
      ObjectivesDetails:
        'The primary objective of this project is to develop an AI-driven system that analyzes golf swings using advanced computer vision techniques and machine learning algorithms. The system is designed to provide real-time, accurate feedback by capturing video data of golfers\' swings, identifying key anatomical features, and assessing critical swing mechanics. By comparing golfers\' movements to established benchmarks, such as ideal body positions and angles during the swing, the system offers personalized insights to help users improve their performance. The goal is to create a tool that assists both golfers and coaches, reducing the reliance on traditional methods such as manual video analysis or subjective visual assessments, and allowing for more precise, data-driven training. Additionally, the system is intended to be scalable and adaptable, capable of handling various swing styles and offering long-term performance tracking to guide continuous improvement. The system combines cutting-edge technologies, including high-resolution camera setups for motion capture, AI models for real-time biomechanical analysis, and a user-friendly interface that presents feedback in an accessible way. This innovation aims to revolutionize the way golfers receive coaching and track their progress, providing a more efficient and accurate method to refine their techniques. The system also enables golfers to monitor their improvements over time, making adjustments to training strategies based on the detailed feedback provided by the AI model. By empowering users with real-time, actionable insights, the system fosters enhanced learning, improved performance, and a deeper understanding of golf mechanics.',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: ['MediaPipe', 'TensorFlow', 'Python', 'Django', 'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'FontAwesome', 'Matplotlib', 'Figma', 'OpenCV', 'Matplotlib', 'Keras', 'scikit-learn']
		  ,
        },
      ],
      ProjectDetailsHeading: 'Challenges',
      ProjectDetails: [
        {
          id: 1,
          details:
            'The development process encountered several challenges, including the lack of comprehensive and diverse golf-specific datasets, which limited the system\'s training capabilities. Additionally, high computational demands for processing real-time high-resolution video data and ensuring the system’s scalability and adaptability for various golfing styles posed significant technical obstacles. Misclassification of specific poses, particularly P4 and P10, also highlighted the need for model refinement and additional data collection to improve accuracy.',
        },
      ],
    },
  },
  // Add more projects as needed
];

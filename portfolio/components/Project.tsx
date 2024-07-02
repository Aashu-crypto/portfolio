const Project = ({ index, number, title, description, link, image }) => {
    const isEven = index % 2 === 0;
  
    return (
      <div className={`flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-center mb-12`}>
        <img src={image} alt={title} className="w-full md:w-1/2 h-auto rounded-lg shadow-md" />
        <div className={`md:ml-6 ${isEven ? 'md:mr-6' : ''} mt-4 md:mt-0 text-center md:text-left`}>
          <h2 className="text-2xl font-bold">{number}. {title}</h2>
          <p className="mt-2 text-gray-600">{description}</p>
          <a href={link} className="mt-4 inline-block text-blue-500 hover:underline">Learn More</a>
        </div>
      </div>
    )
  }
  
  export default Project;
  
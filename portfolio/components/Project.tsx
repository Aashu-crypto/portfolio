import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
const Project = ({ index, number, title, description, link, image,status }: any) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`flex flex-col md:flex-row ${
        isEven ? "md:flex-row-reverse" : ""
      } items-center mb-12 text-white`}
    >
      <img
        src={image}
        alt={title}
        className="w-full rounded-lg shadow-md h-96 object-scale-down "
      />
      <div
        className={`md:ml-6 ${
          isEven ? "md:mr-6" : ""
        } mt-4 md:mt-0 text-center md:text-left space-y-8`}
      >
        <h2 className="text-3xl font-bold">{number} </h2>
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="mt-2 text-gray-400">{description}</p>
        <a
          href={link}
          className="mt-4 inline-block text-blue-500 hover:underline"
        >
            {status?<IoLogoGooglePlaystore size={"35"} />: <FaGitAlt size={"35"} /> }
         
        </a>
       
      </div>
    </div>
  );
};

export default Project;

"use client";
import React, { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const MyGitHub = () => {
  const [repos, setRepos] = useState<any[]>([]);

  const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    const options: any = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return date.toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/users/aashu-crypto/repos"
        );
        const json = await res.json();
        console.log(json);
        setRepos(json);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="text-3xl my-3 flex justify-center items-center text-gray-800">
        My <FaGithub className="ml-2 text-black" />
        <span className="font-sans ml-2 font-semibold">GitHub Repositories</span>
      </div>
      <div className="p-4">
        <ul className="max-h-80 overflow-y-scroll space-y-2">
          {repos.length > 0 ? (
            repos.map((repo) => (
              <div key={repo.id} className="bg-white rounded-lg shadow p-3">
                <li className="flex justify-between items-center">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-semibold flex items-center"
                  >
                    {repo.name}
                  </a>
                  <FaExternalLinkAlt className="text-gray-500 ml-2" />
                </li>
                <p className="text-xs text-gray-600 mt-2">
                  Last Updated: {formatDate(repo.updated_at)}
                </p>
              </div>
            ))
          ) : (
            <li className="text-gray-600">No repositories found.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MyGitHub;

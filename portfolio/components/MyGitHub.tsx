"use client";
import React, { useEffect, useState } from "react";

import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const MyGitHub = () => {
  const [repos, setRepos] = useState<any[]>([]);
  const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    const options:any = {
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
    <div className="container mx-auto p-4">
      <div className="text-3xl my-3 flex justify-center items-center text-black">
        My <FaGithub className="ml-2" />{" "}
        <span className="font-sans ml-2 font-semibold">
          GitHub Repositories
        </span>
      </div>
      <div className="p-4">
        <ul className="max-h-80 overflow-y-scroll space-y-2 ">
          {repos.length > 0 ? (
            repos.map((repo) => (
              <div>
                <li
                  key={repo.id}
                  className="p-2 bg-white flex justify-between  "
                >
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" hover:underline font-semibold flex items-center"
                  >
                    {repo.name}
                  </a>
                  <FaExternalLinkAlt />
                </li>
                <h1 className=" text-xs items-center px-2">
                  Last Update at: {formatDate(repo.updated_at)}
                </h1>
              </div>
            ))
          ) : (
            <li>No repositories found.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MyGitHub;

"use client";
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const MyGitHub = () => {
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
      month: "short",
      year: "numeric",
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/users/aashu-crypto/repos"
        );
        const json = await res.json();
        setRepos(json);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="py-12" id="github">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl mb-8 text-center font-jetbrains font-bold text-white">
          My <span className="text-green-400 ml-2">GitHub</span> Repositories
        </h2>

        {loading ? (
          <div className="flex justify-center items-center h-32">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-400"></div>
          </div>
        ) : (
          <div className="relative">
            <div className="h-[400px] overflow-y-auto pr-4 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {repos.length > 0 ? (
                  repos.map((repo) => (
                    <motion.div
                      key={repo.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-white/5 backdrop-blur-lg border border-gray-700 rounded-xl p-4 hover:border-green-400 transition-all duration-300"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <FaGithub className="text-green-400" />
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-green-400 font-semibold transition-colors duration-300"
                          >
                            {repo.name}
                          </a>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                            {repo.language || "N/A"}
                          </span>
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                          >
                            <FaExternalLinkAlt className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                      <div className="mt-2 text-xs text-gray-400">
                        Updated {formatDate(repo.updated_at)}
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-2 text-center text-gray-400">
                    No repositories found.
                  </div>
                )}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-900/50 to-transparent pointer-events-none"></div>
          </div>
        )}
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(74, 222, 128, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(74, 222, 128, 0.5);
        }
      `}</style>
    </div>
  );
};

export default MyGitHub;

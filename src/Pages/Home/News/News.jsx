import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  const openModal = (article) => setSelectedArticle(article);
  const closeModal = () => setSelectedArticle(null);

  return (
    <div id="news" className="dark:bg-gray-900 pb-16 lg:pb-24 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Latest News
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Stay updated with the latest happenings and updates from around the world.
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openModal(article)}
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-100 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {article.title}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {article.date}
                </p>
                <p className="text-base text-gray-700 dark:text-gray-300 mt-4">
                  {article.excerpt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedArticle && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-4xl h-[80vh] overflow-hidden relative shadow-lg flex flex-col"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:hover:text-white"
                  onClick={closeModal}
                >
                  <AiOutlineClose size={24} />
                </button>

                {/* Modal Content */}
                <div className="flex-grow overflow-y-auto p-6">
                  <div className="flex justify-center mb-6">
                    <img
                      src={selectedArticle.image}
                      alt={selectedArticle.title}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                    {selectedArticle.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 text-center">
                    {selectedArticle.date}
                  </p>
                  <p className="text-base text-gray-700 dark:text-gray-300">
                    {selectedArticle.description}
                  </p>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default News;
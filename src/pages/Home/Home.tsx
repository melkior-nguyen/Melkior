import ContentLayout from "../../components/ContentLayout/ContentLayout";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <ContentLayout>
      <motion.div
        className="border w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0 }}
      >
        This is home
      </motion.div>
    </ContentLayout>
  );
};

export default Home;

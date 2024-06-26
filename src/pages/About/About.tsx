import ContentLayout from "../../components/ContentLayout/ContentLayout";
import { motion } from "framer-motion";

const About = () => {
  return (
    <ContentLayout>
      <motion.div
        className="border w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        This is about
      </motion.div>
    </ContentLayout>
  );
};

export default About;

import ContentLayout from "../../components/ContentLayout/ContentLayout";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <ContentLayout>
      <motion.div
        className="border w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        This is Service
      </motion.div>
    </ContentLayout>
  );
};

export default Services;

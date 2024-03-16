import "./../index.css";
import "./../styles.css";
import { motion } from "framer-motion";
const Message = () => {
  return (
    <motion.div
      className="absolute top-[80%] w-full z-[0] text-center flex"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h1 className="text-4xl flex mx-auto text-white ">
        GIVE ME A SPIN
      </h1>
    </motion.div>
  );
};

export default Message;

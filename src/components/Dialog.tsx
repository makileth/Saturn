import { motion } from "framer-motion";
import { useState } from "react";

const Dialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex md:ml-0 ml-3 flex-col md:flex-row gap-4">
        <div className="btn-white-wrapper">
          <button onClick={() => setIsOpen(true)} className="btn-white">
            HUH? SATURN?
          </button>
        </div>
      </div>
      {isOpen && (
        <>
          <div className="z-[30] absolute flex bg-black opacity-50 w-screen h-screen" />
          <div className="absolute w-screen h-screen flex items-center justify-center">
            <motion.div
              className="z-[5000] mr-24 md:mr-[6.5rem] flex absolute mx-auto items-center flex-col gap-4 bg-neutral-900 w-[90%] max-h-[95%] overflow-y-auto h-max"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-lime-500 text-4xl mt-6 w-full text-center">
                SATURN IS COOL
              </h1>
              <p className="text-neutral-200 text-lg lg:text-xl w-[85%] text-center">
                6th planet from the Sun. Gas giant. It's made mostly of gases like
                hydrogen and helium.
              </p>
              <h1 className="text-lime-500  text-2xl w-[85%] text-center">
                What should I know about Saturn?
              </h1>
              <p className="text-neutral-200 text-lg lg:text-xl w-[85%] text-left">
                - Saturn is huge! It's the second-largest planet in our solar
                system, after Jupiter.
                <br />
                - Saturn has at least 82 moons, with Titan being the largest.
                <br />- It takes Saturn almost 30 years to orbit the Sun, so its
                "year" is very long compared to Earth's.
              </p>
              <h1 className="text-lime-500  text-2xl w-[85%] text-center">
                3 interesting facts:
              </h1>
              <p className="text-neutral-200 text-lg lg:text-xl w-[85%] text-left">
                1. Saturn's rings are made up of billions of chunks of ice and
                rocks. Some of these chunks are as big as a house, while others
                are as small as a grain of sand.
                <br />
                2. In 2010, astronomers observed a massive storm on Saturn that
                was so big, it could have swallowed the Earth whole!
                <br />
                3. One of Saturn's poles has a bizarre hexagonal shape that is
                bigger than the Earth!
              </p>

              <div className="w-full my-8 flex items-center justify-center">
                <div className="btn-white-wrapper flex mx-auto">
                  <button
                    className="btn-white"
                    onClick={() => setIsOpen(false)}
                  >
                    ALRIGHT
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </>
  );
};

export default Dialog;

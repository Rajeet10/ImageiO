import React from "react";
import { Route } from "react-router";
import { motion } from "framer-motion";

const AnimatedRoute = ({children,...rest}) => {
  return (
    <Route {...rest}>
      <motion.div
                initial={{x:200}}
                animate={{x:0}}
                >
    {children}
      </motion.div>
    </Route>
  );
};

export default AnimatedRoute;

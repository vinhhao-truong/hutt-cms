"use client";

import React from "react";
import { motion } from "framer-motion";

const FadeIn: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      {children}
    </motion.div>
  );
};

export default FadeIn;

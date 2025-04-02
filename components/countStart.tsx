import { useEffect, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface CounterStatProps {
  end: number;
  label: ReactNode; // Allowing React elements instead of just a string
  delay: number;
}

const CounterStat: React.FC<CounterStatProps> = ({ end, label, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const step = end / (duration / 16);

    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [end]);

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
    >
      <div className="text-4xl font-bold text-white">{count}</div> {/* White text for numbers */}
      <div className="text-black">{label}</div> {/* Slightly dimmed text for labels */}
    </motion.div>
  );
};

export default CounterStat;

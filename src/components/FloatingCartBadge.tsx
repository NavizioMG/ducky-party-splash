import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/stores/cartStore";
import { ShoppingCart } from "lucide-react";

export const FloatingCartBadge = () => {
  const items = useCartStore((state) => state.items);
  const [showPulse, setShowPulse] = useState(false);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const prevTotalRef = useState(totalItems)[0];

  useEffect(() => {
    if (totalItems > prevTotalRef) {
      setShowPulse(true);
      const timer = setTimeout(() => setShowPulse(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [totalItems, prevTotalRef]);

  if (totalItems === 0) return null;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      className="fixed bottom-24 right-6 z-50"
    >
      <motion.div
        animate={showPulse ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
          <ShoppingCart className="h-6 w-6" />
        </div>
        <AnimatePresence>
          {showPulse && (
            <motion.div
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 2, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-primary rounded-full"
            />
          )}
        </AnimatePresence>
        <motion.div
          animate={showPulse ? { scale: [1, 1.3, 1] } : {}}
          transition={{ duration: 0.3 }}
          className="absolute -top-2 -right-2 bg-accent text-accent-foreground rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shadow-md"
        >
          {totalItems}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

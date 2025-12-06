import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface BottomStickyCtaProps {
  originalPrice?: string;
  discountedPrice?: string;
  ctaText?: string;
  slogan?: string;
  onCtaClick?: () => void;
}

const WHATSAPP_NUMBER = "918374627462";

export function BottomStickyCta({
  originalPrice = "₹8000",
  discountedPrice = "₹5000",
  ctaText = "Transform Now",
  slogan = "Your fitness journey starts today!",
  onCtaClick,
}: BottomStickyCtaProps) {
  const handleClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      const message = encodeURIComponent(
        "Hi! I want to start my transformation journey. Please share the details."
      );
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    }
  };

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-neutral-900 border-t border-border shadow-lg"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
              <span
                className="text-2xl md:text-3xl font-extrabold text-foreground"
                data-testid="text-sticky-price"
              >
                {discountedPrice}
              </span>
              <span className="text-sm md:text-base text-muted-foreground line-through">
                {originalPrice}
              </span>
            </div>
            <span className="text-xs font-bold text-red-500 uppercase tracking-wide" data-testid="text-limited-offer">
              Limited Time Offer!
            </span>
          </div>

          <p className="hidden sm:block text-sm md:text-base font-semibold text-[#00C753] flex-1 text-center" data-testid="text-sticky-slogan">
            {slogan}
          </p>

          <Button
            size="lg"
            className="bg-[#00C753] hover:bg-[#00C753]/90 text-white px-6 md:px-8 whitespace-nowrap font-bold shadow-md"
            onClick={handleClick}
            data-testid="button-sticky-register"
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

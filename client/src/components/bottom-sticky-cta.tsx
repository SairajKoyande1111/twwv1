import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "./countdown-timer";

interface BottomStickyCtaProps {
  originalPrice?: string;
  discountedPrice?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const WHATSAPP_NUMBER = "918374627462";

export function BottomStickyCta({
  originalPrice = "₹999",
  discountedPrice = "₹49",
  ctaText = "Register Now",
  onCtaClick,
}: BottomStickyCtaProps) {
  const handleClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      const message = encodeURIComponent(
        "Hi! I want to register for the special offer at ₹49. Please share the details."
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
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
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
            <div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
              <span>Offer Expires in</span>
              <CountdownTimer
                durationMs={15 * 60 * 1000}
                persistKey="sticky_offer_countdown"
                className="text-destructive"
              />
            </div>
          </div>

          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 whitespace-nowrap font-bold shadow-md"
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

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "./countdown-timer";

interface PricingTier {
  name: string;
  subtitle: string;
  originalPrice: string;
  discountedPrice: string;
  discount: string;
  urgencyText: string;
  features: string[];
  isPopular?: boolean;
}

const WHATSAPP_NUMBER = "918374627462";

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    subtitle: "Perfect for beginners",
    originalPrice: "₹1,499",
    discountedPrice: "₹999",
    discount: "30% OFF",
    urgencyText: "Limited time only - Offer ends soon!",
    features: [
      "2 sessions per week",
      "Personalized workout plan",
      "Email support",
    ],
  },
  {
    name: "Pro",
    subtitle: "Recommended for all",
    originalPrice: "₹3,999",
    discountedPrice: "₹1,999",
    discount: "50% OFF",
    urgencyText: "Huge discount - Offer expires soon!",
    features: [
      "4 sessions per week",
      "Custom meal plan",
      "WhatsApp support 24/7",
      "Progress tracking",
    ],
    isPopular: true,
  },
  {
    name: "Elite",
    subtitle: "For serious athletes",
    originalPrice: "₹6,999",
    discountedPrice: "₹3,999",
    discount: "40% OFF",
    urgencyText: "Limited slots available!",
    features: [
      "Unlimited sessions",
      "1-on-1 coaching",
      "Nutrition + supplement plan",
      "VIP priority support",
    ],
  },
];

export function PricingSection() {
  const openWhatsApp = (tierName: string) => {
    const message = encodeURIComponent(
      `Hi! I'm interested in the ${tierName} package. Please share more details.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section
      className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden"
      id="marketing-pricing"
    >
      <div className="absolute top-4 right-4 z-10">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-white/80 dark:bg-black/80"
          onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
          data-testid="button-close-marketing"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Limited Time{" "}
            <span className="text-primary">Marketing Offer</span>
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Transform your fitness journey with our exclusive coaching packages
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <Badge
                variant="default"
                className="absolute -top-3 right-4 bg-primary text-primary-foreground z-10 px-3 py-1 text-sm font-bold"
                data-testid={`badge-discount-${tier.name.toLowerCase()}`}
              >
                {tier.discount}
              </Badge>

              {tier.isPopular && (
                <Badge
                  variant="secondary"
                  className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white dark:bg-neutral-800 border border-primary/20 text-foreground z-10 px-3 py-1 text-xs font-semibold uppercase tracking-wide"
                  data-testid="badge-popular"
                >
                  Most Popular
                </Badge>
              )}

              <Card
                className={`h-full flex flex-col ${
                  tier.isPopular
                    ? "ring-2 ring-primary shadow-lg scale-[1.02]"
                    : "shadow-md"
                } bg-white dark:bg-neutral-900`}
              >
                <CardContent className="flex flex-col h-full p-6 md:p-8">
                  <div className="mb-6">
                    <h3
                      className="text-xl md:text-2xl font-bold text-foreground mb-1"
                      data-testid={`text-tier-name-${tier.name.toLowerCase()}`}
                    >
                      {tier.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{tier.subtitle}</p>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span
                        className="text-3xl md:text-4xl font-extrabold text-foreground"
                        data-testid={`text-price-${tier.name.toLowerCase()}`}
                      >
                        {tier.discountedPrice}
                      </span>
                      <span className="text-lg text-muted-foreground line-through">
                        {tier.originalPrice}
                      </span>
                      <span className="text-sm text-muted-foreground">/month</span>
                    </div>
                    <p className="text-sm text-destructive font-medium mt-2">
                      {tier.urgencyText}
                    </p>
                  </div>

                  <ul className="flex-1 space-y-3 mb-6">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full"
                    size="lg"
                    onClick={() => openWhatsApp(tier.name)}
                    data-testid={`button-register-${tier.name.toLowerCase()}`}
                  >
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-muted-foreground mb-2">
            All packages include personalized guidance from our expert coaches
          </p>
          <p className="text-sm text-primary font-semibold">
            These exclusive discounts are available for limited time. Don't miss out!
          </p>
        </div>
      </div>
    </section>
  );
}

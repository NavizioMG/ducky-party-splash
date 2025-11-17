import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Building2, TrendingUp, Truck, Shield } from "lucide-react";

export default function Wholesale() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="text-8xl mb-6 bounce-float">🦆💼</div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-foreground">
            WHOLESALE PARTNERS
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-foreground/80 max-w-3xl mx-auto">
            Join the flock and stock the most ridiculously refreshing drinks on the planet
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {[
            {
              icon: Building2,
              title: "Bulk Pricing",
              description: "Competitive wholesale rates that make sense for your business"
            },
            {
              icon: TrendingUp,
              title: "High Margins",
              description: "Premium product, premium profits. Everybody wins!"
            },
            {
              icon: Truck,
              title: "Fast Shipping",
              description: "Quick deliveries to keep your shelves stocked"
            },
            {
              icon: Shield,
              title: "Support",
              description: "Dedicated account managers who actually respond"
            }
          ].map((benefit, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-primary/10 border-4 border-foreground rounded-3xl p-6 text-center"
            >
              <benefit.icon className="w-16 h-16 mx-auto mb-4 text-primary" strokeWidth={3} />
              <h3 className="text-2xl font-black mb-2 text-foreground">{benefit.title}</h3>
              <p className="text-foreground/70 font-bold">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-3xl mx-auto bg-secondary/20 border-4 border-foreground rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-center text-foreground">
            BECOME A PARTNER 🤝
          </h2>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="businessName" className="text-lg font-bold">Business Name *</Label>
                <Input
                  id="businessName"
                  placeholder="Your Awesome Store"
                  className="mt-2 border-2 border-foreground font-bold"
                  required
                />
              </div>
              <div>
                <Label htmlFor="contactName" className="text-lg font-bold">Contact Name *</Label>
                <Input
                  id="contactName"
                  placeholder="Duck McQuackerson"
                  className="mt-2 border-2 border-foreground font-bold"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="email" className="text-lg font-bold">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="hello@yourstore.com"
                  className="mt-2 border-2 border-foreground font-bold"
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-lg font-bold">Phone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="mt-2 border-2 border-foreground font-bold"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="businessType" className="text-lg font-bold">Business Type *</Label>
              <Input
                id="businessType"
                placeholder="Retail Store, Restaurant, Café, etc."
                className="mt-2 border-2 border-foreground font-bold"
                required
              />
            </div>

            <div>
              <Label htmlFor="location" className="text-lg font-bold">Business Location *</Label>
              <Input
                id="location"
                placeholder="City, State/Province, Country"
                className="mt-2 border-2 border-foreground font-bold"
                required
              />
            </div>

            <div>
              <Label htmlFor="website" className="text-lg font-bold">Website (if applicable)</Label>
              <Input
                id="website"
                type="url"
                placeholder="https://yourstore.com"
                className="mt-2 border-2 border-foreground font-bold"
              />
            </div>

            <div>
              <Label htmlFor="orderVolume" className="text-lg font-bold">Expected Monthly Order Volume *</Label>
              <Input
                id="orderVolume"
                placeholder="e.g., 100 cases, 500 units"
                className="mt-2 border-2 border-foreground font-bold"
                required
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-lg font-bold">Tell Us About Your Business</Label>
              <Textarea
                id="message"
                placeholder="What makes your store special? Why do you want to carry Rubber Ducky drinks?"
                className="mt-2 border-2 border-foreground font-bold min-h-32"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-foreground font-black text-2xl py-8 rounded-full border-4 border-foreground shadow-lg"
            >
              SUBMIT APPLICATION 🚀
            </Button>
          </form>

          <p className="text-center text-sm text-foreground/60 font-bold mt-6">
            * Required fields. We'll get back to you within 2-3 business days!
          </p>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Truck, Globe, Package, Zap } from "lucide-react";

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🚚</div>
            <h1 className="text-5xl md:text-7xl font-black mb-4 text-foreground">
              SHIPPING POLICY
            </h1>
            <p className="text-xl font-bold text-foreground/70">
              Fast, reliable delivery to your doorstep!
            </p>
          </div>

          {/* Quick Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: Zap,
                title: "Fast Processing",
                description: "Orders ship within 1-2 business days"
              },
              {
                icon: Truck,
                title: "Free Shipping",
                description: "On orders over $50 (US only)"
              },
              {
                icon: Globe,
                title: "Worldwide Delivery",
                description: "We ship to most countries"
              },
              {
                icon: Package,
                title: "Tracking Included",
                description: "Track your order every step"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-primary/10 border-4 border-foreground rounded-2xl p-6 text-center"
              >
                <item.icon className="w-12 h-12 mx-auto mb-3 text-primary" strokeWidth={3} />
                <h3 className="text-xl font-black mb-2 text-foreground">{item.title}</h3>
                <p className="font-bold text-foreground/70">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="prose prose-lg max-w-none space-y-8 text-foreground">
            <section className="bg-secondary/10 border-4 border-foreground rounded-2xl p-6">
              <h2 className="text-3xl font-black mb-4">Processing Time</h2>
              <p className="font-bold text-foreground/80 mb-3">
                We work hard to get your order out the door quickly!
              </p>
              <ul className="list-disc list-inside space-y-2 font-bold text-foreground/80">
                <li><strong>Standard Orders:</strong> Processed within 1-2 business days</li>
                <li><strong>Peak Seasons:</strong> May take 2-3 business days during holidays</li>
                <li><strong>Custom Orders:</strong> 3-5 business days (if applicable)</li>
                <li><strong>Order Cutoff:</strong> Orders placed before 2 PM EST ship same day</li>
              </ul>
              <p className="font-bold text-primary mt-4">
                📦 You'll receive a tracking number via email once your order ships!
              </p>
            </section>

            <section className="bg-secondary/10 border-4 border-foreground rounded-2xl p-6">
              <h2 className="text-3xl font-black mb-4">Domestic Shipping (United States)</h2>
              
              <div className="space-y-4">
                <div className="bg-background/50 border-2 border-primary rounded-xl p-4">
                  <h3 className="text-2xl font-black mb-2 text-primary">🎉 Free Standard Shipping</h3>
                  <p className="font-bold text-foreground/80 mb-2">Orders over $50</p>
                  <ul className="list-disc list-inside space-y-1 font-bold text-foreground/70">
                    <li>Delivery: 3-5 business days</li>
                    <li>Tracking included</li>
                    <li>Continental US only</li>
                  </ul>
                </div>

                <div className="bg-background/50 border-2 border-foreground rounded-xl p-4">
                  <h3 className="text-2xl font-black mb-2">📦 Standard Shipping</h3>
                  <p className="font-bold text-foreground/80 mb-2">$5.99 flat rate</p>
                  <ul className="list-disc list-inside space-y-1 font-bold text-foreground/70">
                    <li>Delivery: 3-5 business days</li>
                    <li>Tracking included</li>
                  </ul>
                </div>

                <div className="bg-background/50 border-2 border-foreground rounded-xl p-4">
                  <h3 className="text-2xl font-black mb-2">⚡ Express Shipping</h3>
                  <p className="font-bold text-foreground/80 mb-2">$14.99</p>
                  <ul className="list-disc list-inside space-y-1 font-bold text-foreground/70">
                    <li>Delivery: 2-3 business days</li>
                    <li>Tracking included</li>
                  </ul>
                </div>

                <div className="bg-background/50 border-2 border-foreground rounded-xl p-4">
                  <h3 className="text-2xl font-black mb-2">🚀 Overnight Shipping</h3>
                  <p className="font-bold text-foreground/80 mb-2">$29.99</p>
                  <ul className="list-disc list-inside space-y-1 font-bold text-foreground/70">
                    <li>Delivery: Next business day</li>
                    <li>Must order before 2 PM EST</li>
                    <li>Tracking included</li>
                  </ul>
                </div>
              </div>

              <p className="font-bold text-foreground/70 mt-4 text-sm">
                *Alaska, Hawaii, and US Territories may have extended delivery times and additional shipping costs.
              </p>
            </section>

            <section className="bg-secondary/10 border-4 border-foreground rounded-2xl p-6">
              <h2 className="text-3xl font-black mb-4">International Shipping</h2>
              <p className="font-bold text-foreground/80 mb-4">
                We ship to most countries worldwide! 🌍
              </p>
              
              <div className="space-y-3 font-bold text-foreground/80">
                <div className="flex justify-between border-b-2 border-foreground/20 pb-2">
                  <span>🇨🇦 Canada</span>
                  <span>$12.99 | 5-10 business days</span>
                </div>
                <div className="flex justify-between border-b-2 border-foreground/20 pb-2">
                  <span>🇲🇽 Mexico</span>
                  <span>$15.99 | 7-14 business days</span>
                </div>
                <div className="flex justify-between border-b-2 border-foreground/20 pb-2">
                  <span>🇬🇧 UK & Europe</span>
                  <span>$19.99 | 7-14 business days</span>
                </div>
                <div className="flex justify-between border-b-2 border-foreground/20 pb-2">
                  <span>🇦🇺 Australia & NZ</span>
                  <span>$24.99 | 10-20 business days</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span>🌏 Rest of World</span>
                  <span>$29.99 | 10-25 business days</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/20 border-2 border-primary rounded-xl">
                <h4 className="font-black text-lg mb-2">⚠️ Important for International Orders:</h4>
                <ul className="list-disc list-inside space-y-2 font-bold text-foreground/80">
                  <li>Customs duties and taxes are the buyer's responsibility</li>
                  <li>Delays may occur due to customs clearance</li>
                  <li>We're not responsible for customs fees or delays</li>
                  <li>Tracking may be limited once package enters destination country</li>
                </ul>
              </div>
            </section>

            <section className="bg-secondary/10 border-4 border-foreground rounded-2xl p-6">
              <h2 className="text-3xl font-black mb-4">Order Tracking</h2>
              <p className="font-bold text-foreground/80 mb-3">
                Stay updated on your order every step of the way:
              </p>
              <ul className="list-disc list-inside space-y-2 font-bold text-foreground/80">
                <li>Tracking number sent via email when order ships</li>
                <li>Track your order on carrier's website</li>
                <li>Email notifications for delivery updates</li>
                <li>Contact us if tracking hasn't updated in 3 days</li>
              </ul>
            </section>

            <section className="bg-secondary/10 border-4 border-foreground rounded-2xl p-6">
              <h2 className="text-3xl font-black mb-4">Shipping Restrictions</h2>
              <p className="font-bold text-foreground/80 mb-3">
                Currently, we cannot ship to:
              </p>
              <ul className="list-disc list-inside space-y-2 font-bold text-foreground/80">
                <li>PO Boxes (for certain shipping methods)</li>
                <li>Military APO/FPO addresses (coming soon!)</li>
                <li>Countries with import restrictions on beverages</li>
              </ul>
            </section>

            <section className="bg-secondary/10 border-4 border-foreground rounded-2xl p-6">
              <h2 className="text-3xl font-black mb-4">Delivery Issues</h2>
              <h3 className="text-2xl font-black mb-3 text-primary">Lost or Stolen Packages:</h3>
              <p className="font-bold text-foreground/80 mb-3">
                If your tracking shows delivered but you didn't receive your order:
              </p>
              <ul className="list-disc list-inside space-y-2 font-bold text-foreground/80">
                <li>Check with neighbors or household members</li>
                <li>Look around your property (porches, garages, etc.)</li>
                <li>Contact the carrier directly</li>
                <li>Wait 24-48 hours (sometimes marked delivered early)</li>
                <li>Contact us at shipping@rubberduckydrink.com if still missing</li>
              </ul>

              <h3 className="text-2xl font-black mb-3 mt-6 text-primary">Damaged Packages:</h3>
              <p className="font-bold text-foreground/80">
                If your order arrives damaged, contact us within 48 hours with photos. We'll send a replacement or refund immediately!
              </p>
            </section>

            <section className="bg-secondary/10 border-4 border-foreground rounded-2xl p-6">
              <h2 className="text-3xl font-black mb-4">Address Changes</h2>
              <p className="font-bold text-foreground/80 mb-3">
                Need to change your shipping address?
              </p>
              <ul className="list-disc list-inside space-y-2 font-bold text-foreground/80">
                <li><strong>Before Shipping:</strong> Contact us ASAP and we'll update it (if not processed yet)</li>
                <li><strong>After Shipping:</strong> Contact the carrier directly to request address change or package hold</li>
                <li><strong>Double Check:</strong> Always verify your address before completing checkout!</li>
              </ul>
            </section>

            <section className="bg-secondary/10 border-4 border-foreground rounded-2xl p-6">
              <h2 className="text-3xl font-black mb-4">Holidays & Weather Delays</h2>
              <p className="font-bold text-foreground/80">
                Shipping times may be affected by holidays, severe weather, or carrier delays. We'll notify you of any expected delays. During peak seasons (holidays), please allow extra time for delivery.
              </p>
            </section>

            <section className="bg-secondary/10 border-4 border-foreground rounded-2xl p-6">
              <h2 className="text-3xl font-black mb-4">Contact Shipping Support</h2>
              <p className="font-bold text-foreground/80 mb-3">
                Questions about your shipment?
              </p>
              <ul className="list-none space-y-2 font-bold text-foreground/80">
                <li>📧 Email: shipping@rubberduckydrink.com</li>
                <li>📞 Phone: Available on our Contact page</li>
                <li>⏰ Response time: Within 24 hours</li>
              </ul>
            </section>

            <div className="text-center mt-12 p-6 bg-primary/20 border-4 border-foreground rounded-2xl">
              <p className="text-2xl font-black mb-2">
                🦆 We Can't Wait to Quack-liver Your Order! 🚚
              </p>
              <p className="font-bold text-foreground/70">
                Your satisfaction is our top priority
              </p>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Package, RefreshCw, Clock, CheckCircle } from "lucide-react";

export default function ReturnsRefunds() {
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
            <div className="text-6xl mb-4">📦</div>
            <h1 className="text-5xl md:text-7xl font-black mb-4 text-foreground">
              RETURNS & REFUNDS
            </h1>
            <p className="text-xl font-bold text-foreground/70">
              Not satisfied? We've got you covered!
            </p>
          </div>

          {/* Quick Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: Clock,
                title: "30-Day Returns",
                description: "Return within 30 days of delivery"
              },
              {
                icon: RefreshCw,
                title: "Easy Process",
                description: "Simple return steps, no hassle"
              },
              {
                icon: CheckCircle,
                title: "Full Refunds",
                description: "Get your money back, no questions"
              },
              {
                icon: Package,
                title: "Free Exchanges",
                description: "Wrong flavor? We'll swap it!"
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
              <h2 className="text-3xl font-black mb-4">Return Policy</h2>
              <p className="font-bold text-foreground/80 mb-3">
                We want you to love your Rubber Ducky drinks! If you're not 100% satisfied, you can return your purchase within 30 days of delivery.
              </p>
              <h3 className="text-2xl font-black mb-3 text-primary">What's Eligible:</h3>
              <ul className="list-disc list-inside space-y-2 font-bold text-foreground/80">
                <li>Unopened products in original packaging</li>
                <li>Products with manufacturing defects</li>
                <li>Wrong items sent due to our error</li>
                <li>Damaged items during shipping</li>
              </ul>
              
              <h3 className="text-2xl font-black mb-3 mt-4 text-primary">Not Eligible:</h3>
              <ul className="list-disc list-inside space-y-2 font-bold text-foreground/80">
                <li>Opened or consumed products (unless defective)</li>
                <li>Products past 30 days since delivery</li>
                <li>Items purchased from unauthorized retailers</li>
                <li>Clearance or sale items (unless defective)</li>
              </ul>
            </section>

            <section className="bg-secondary/10 border-4 border-foreground rounded-2xl p-6">
              <h2 className="text-3xl font-black mb-4">How to Return</h2>
              <div className="space-y-4 font-bold text-foreground/80">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-foreground rounded-full flex items-center justify-center font-black text-xl">1</div>
                  <div>
                    <h4 className="font-black text-lg mb-1">Contact Us</h4>
                    <p>Email returns@rubberduckydrink.com with your order number and reason for return</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-foreground rounded-full flex items-center justify-center font-black text-xl">2</div>
                  <div>
                    <h4 className="font-black text-lg mb-1">Get Authorization</h4>
                    <p>We'll send you a Return Merchandise Authorization (RMA) number and instructions</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-foreground rounded-full flex items-center justify-center font-black text-xl">3</div>
                  <div>
                    <h4 className="font-black text-lg mb-1">Pack & Ship</h4>
                    <p>Pack items securely in original packaging. Include RMA number on the package</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-foreground rounded-full flex items-center justify-center font-black text-xl">4</div>
                  <div>
                    <h4 className="font-black text-lg mb-1">Get Your Refund</h4>
                    <p>Once we receive and inspect your return, we'll process your refund within 5-7 business days</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-secondary/10 border-4 border-foreground rounded-2xl p-6">
              <h2 className="text-3xl font-black mb-4">Refund Information</h2>
              <ul className="list-disc list-inside space-y-2 font-bold text-foreground/80">
                <li><strong>Processing Time:</strong> Refunds are processed within 5-7 business days after receiving your return</li>
                <li><strong>Refund Method:</strong> Refunded to your original payment method</li>
                <li><strong>Shipping Costs:</strong> Original shipping fees are non-refundable unless we made an error</li>
                <li><strong>Return Shipping:</strong> You're responsible for return shipping costs unless the product is defective or we made an error</li>
                <li><strong>Partial Refunds:</strong> Items returned without original packaging may receive partial refunds</li>
              </ul>
            </section>

            <section className="bg-secondary/10 border-4 border-foreground rounded-2xl p-6">
              <h2 className="text-3xl font-black mb-4">Exchanges</h2>
              <p className="font-bold text-foreground/80 mb-3">
                Want a different flavor? No problem! We offer free exchanges for:
              </p>
              <ul className="list-disc list-inside space-y-2 font-bold text-foreground/80">
                <li>Same product, different flavor</li>
                <li>Defective or damaged items</li>
                <li>Wrong items sent by us</li>
              </ul>
              <p className="font-bold text-foreground/80 mt-4">
                Contact us at returns@rubberduckydrink.com to arrange an exchange. We'll cover return shipping for exchanges!
              </p>
            </section>

            <section className="bg-secondary/10 border-4 border-foreground rounded-2xl p-6">
              <h2 className="text-3xl font-black mb-4">Damaged or Defective Items</h2>
              <p className="font-bold text-foreground/80 mb-3">
                Received a damaged or defective product? We're sorry! Here's what to do:
              </p>
              <ul className="list-disc list-inside space-y-2 font-bold text-foreground/80">
                <li>Contact us within 7 days of delivery</li>
                <li>Provide photos of the damage or defect</li>
                <li>Include your order number</li>
                <li>We'll send a replacement or full refund ASAP</li>
              </ul>
              <p className="font-bold text-foreground/80 mt-4">
                We'll provide a prepaid return label for damaged/defective items at no cost to you.
              </p>
            </section>

            <section className="bg-secondary/10 border-4 border-foreground rounded-2xl p-6">
              <h2 className="text-3xl font-black mb-4">International Returns</h2>
              <p className="font-bold text-foreground/80">
                International customers are responsible for return shipping costs. Customs duties and taxes are non-refundable. We recommend using a trackable shipping method for international returns.
              </p>
            </section>

            <section className="bg-secondary/10 border-4 border-foreground rounded-2xl p-6">
              <h2 className="text-3xl font-black mb-4">Questions?</h2>
              <p className="font-bold text-foreground/80">
                Need help with a return or refund? Our customer service team is here to help!
              </p>
              <ul className="list-none space-y-2 font-bold text-foreground/80 mt-3">
                <li>📧 Email: returns@rubberduckydrink.com</li>
                <li>📞 Phone: Available on our Contact page</li>
                <li>⏰ Response time: Within 24 hours on business days</li>
              </ul>
            </section>

            <div className="text-center mt-12 p-6 bg-primary/20 border-4 border-foreground rounded-2xl">
              <p className="text-2xl font-black mb-2">
                🦆 Your Satisfaction is Our Priority! 🦆
              </p>
              <p className="font-bold text-foreground/70">
                We'll do whatever it takes to make it right
              </p>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

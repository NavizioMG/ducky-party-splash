import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function TermsOfService() {
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
            <div className="text-6xl mb-4">📜</div>
            <h1 className="text-5xl md:text-7xl font-black mb-4 text-foreground">
              TERMS OF SERVICE
            </h1>
            <p className="text-xl font-bold text-foreground/70">
              Last Updated: November 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8 text-foreground">
            <section className="bg-secondary/10 border-4 border-foreground rounded-2xl p-6">
              <h2 className="text-3xl font-black mb-4">1. Acceptance of Terms</h2>
              <p className="font-bold text-foreground/80">
                By accessing and using Rubber Ducky Drink Co.'s website and purchasing our products, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, please don't use our website.
              </p>
            </section>

            <section className="bg-secondary/10 border-4 border-foreground rounded-2xl p-6">
              <h2 className="text-3xl font-black mb-4">2. Product Information</h2>
              <p className="font-bold text-foreground/80 mb-3">
                We strive to provide accurate product descriptions and pricing. However:
              </p>
              <ul className="list-disc list-inside space-y-2 font-bold text-foreground/80">
                <li>Product colors may vary slightly from photos</li>
                <li>We reserve the right to correct pricing errors</li>
                <li>Product availability is subject to change</li>
                <li>All nutritional information is approximate</li>
              </ul>
            </section>

            <section className="bg-secondary/10 border-4 border-foreground rounded-2xl p-6">
              <h2 className="text-3xl font-black mb-4">3. Orders and Payment</h2>
              <p className="font-bold text-foreground/80 mb-3">
                When you place an order:
              </p>
              <ul className="list-disc list-inside space-y-2 font-bold text-foreground/80">
                <li>You must provide accurate billing and shipping information</li>
                <li>We reserve the right to refuse or cancel orders</li>
                <li>Payment is processed securely through Shopify</li>
                <li>All prices are in USD unless otherwise stated</li>
                <li>You're responsible for any customs or import duties</li>
              </ul>
            </section>

            <section className="bg-secondary/10 border-4 border-foreground rounded-2xl p-6">
              <h2 className="text-3xl font-black mb-4">4. Age Restriction</h2>
              <p className="font-bold text-foreground/80">
                While our products are non-alcoholic, you must be at least 13 years old to use this website and make purchases independently. Users under 18 should have parental permission.
              </p>
            </section>

            <section className="bg-secondary/10 border-4 border-foreground rounded-2xl p-6">
              <h2 className="text-3xl font-black mb-4">5. Intellectual Property</h2>
              <p className="font-bold text-foreground/80">
                All content on this website, including but not limited to text, graphics, logos, images, and the Rubber Ducky brand, is owned by Rubber Ducky Drink Co. and protected by copyright and trademark laws. You may not use our intellectual property without written permission.
              </p>
            </section>

            <section className="bg-secondary/10 border-4 border-foreground rounded-2xl p-6">
              <h2 className="text-3xl font-black mb-4">6. User Conduct</h2>
              <p className="font-bold text-foreground/80 mb-3">
                You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 font-bold text-foreground/80">
                <li>Use the website for any illegal purposes</li>
                <li>Attempt to hack or disrupt the website</li>
                <li>Impersonate others or provide false information</li>
                <li>Scrape or harvest data from the website</li>
                <li>Post spam or malicious content</li>
              </ul>
            </section>

            <section className="bg-secondary/10 border-4 border-foreground rounded-2xl p-6">
              <h2 className="text-3xl font-black mb-4">7. Limitation of Liability</h2>
              <p className="font-bold text-foreground/80">
                Rubber Ducky Drink Co. is not liable for any indirect, incidental, or consequential damages arising from your use of our products or website. Our total liability shall not exceed the amount you paid for the product in question.
              </p>
            </section>

            <section className="bg-secondary/10 border-4 border-foreground rounded-2xl p-6">
              <h2 className="text-3xl font-black mb-4">8. Changes to Terms</h2>
              <p className="font-bold text-foreground/80">
                We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date. Continued use of the website after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="bg-secondary/10 border-4 border-foreground rounded-2xl p-6">
              <h2 className="text-3xl font-black mb-4">9. Governing Law</h2>
              <p className="font-bold text-foreground/80">
                These terms are governed by the laws of [Your Jurisdiction]. Any disputes shall be resolved in the courts of [Your Jurisdiction].
              </p>
            </section>

            <section className="bg-secondary/10 border-4 border-foreground rounded-2xl p-6">
              <h2 className="text-3xl font-black mb-4">10. Contact Information</h2>
              <p className="font-bold text-foreground/80">
                For questions about these Terms of Service, please contact us through our Contact page or email us at legal@rubberduckydrink.com
              </p>
            </section>

            <div className="text-center mt-12 p-6 bg-primary/20 border-4 border-foreground rounded-2xl">
              <p className="text-2xl font-black">
                🦆 Thanks for being part of the flock! 🦆
              </p>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

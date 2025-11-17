import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
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
            <div className="text-6xl mb-4">🔒</div>
            <h1 className="text-5xl md:text-7xl font-black mb-4 text-foreground">
              PRIVACY POLICY
            </h1>
            <p className="text-xl font-bold text-foreground/70">
              Last Updated: November 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8 text-foreground">
            <section className="bg-secondary/10 border-4 border-foreground rounded-2xl p-6">
              <h2 className="text-3xl font-black mb-4">Our Privacy Promise</h2>
              <p className="font-bold text-foreground/80">
                At Rubber Ducky Drink Co., we take your privacy seriously. We only collect what we need to serve you better and never sell your data. This policy explains what information we collect, how we use it, and your rights.
              </p>
            </section>

            <section className="bg-secondary/10 border-4 border-foreground rounded-2xl p-6">
              <h2 className="text-3xl font-black mb-4">1. Information We Collect</h2>
              <h3 className="text-2xl font-black mb-3 text-primary">Information You Give Us:</h3>
              <ul className="list-disc list-inside space-y-2 font-bold text-foreground/80 mb-4">
                <li>Name, email, phone number, and shipping address</li>
                <li>Payment information (processed securely by Shopify)</li>
                <li>Order history and preferences</li>
                <li>Communications with customer service</li>
                <li>Newsletter signup information</li>
              </ul>
              
              <h3 className="text-2xl font-black mb-3 text-primary">Information Collected Automatically:</h3>
              <ul className="list-disc list-inside space-y-2 font-bold text-foreground/80">
                <li>Device information and IP address</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on site</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="bg-secondary/10 border-4 border-foreground rounded-2xl p-6">
              <h2 className="text-3xl font-black mb-4">2. How We Use Your Information</h2>
              <p className="font-bold text-foreground/80 mb-3">We use your information to:</p>
              <ul className="list-disc list-inside space-y-2 font-bold text-foreground/80">
                <li>Process and fulfill your orders</li>
                <li>Send order confirmations and shipping updates</li>
                <li>Respond to customer service requests</li>
                <li>Send promotional emails (if you opted in)</li>
                <li>Improve our website and product offerings</li>
                <li>Detect and prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="bg-secondary/10 border-4 border-foreground rounded-2xl p-6">
              <h2 className="text-3xl font-black mb-4">3. Information Sharing</h2>
              <p className="font-bold text-foreground/80 mb-3">
                We share your information only when necessary:
              </p>
              <ul className="list-disc list-inside space-y-2 font-bold text-foreground/80">
                <li><strong>Service Providers:</strong> Shipping companies, payment processors (Shopify), and email services</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In case of merger, sale, or acquisition</li>
              </ul>
              <p className="font-bold text-foreground/80 mt-4">
                We NEVER sell your personal information to third parties for marketing purposes.
              </p>
            </section>

            <section className="bg-secondary/10 border-4 border-foreground rounded-2xl p-6">
              <h2 className="text-3xl font-black mb-4">4. Cookies and Tracking</h2>
              <p className="font-bold text-foreground/80 mb-3">
                We use cookies to enhance your experience:
              </p>
              <ul className="list-disc list-inside space-y-2 font-bold text-foreground/80">
                <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand site usage</li>
                <li><strong>Marketing Cookies:</strong> Show relevant ads (opt-in only)</li>
              </ul>
              <p className="font-bold text-foreground/80 mt-4">
                You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="bg-secondary/10 border-4 border-foreground rounded-2xl p-6">
              <h2 className="text-3xl font-black mb-4">5. Your Rights</h2>
              <p className="font-bold text-foreground/80 mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 font-bold text-foreground/80">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Update inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your data</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing emails</li>
                <li><strong>Portability:</strong> Receive your data in a portable format</li>
                <li><strong>Object:</strong> Object to certain processing activities</li>
              </ul>
              <p className="font-bold text-foreground/80 mt-4">
                To exercise these rights, contact us at privacy@rubberduckydrink.com
              </p>
            </section>

            <section className="bg-secondary/10 border-4 border-foreground rounded-2xl p-6">
              <h2 className="text-3xl font-black mb-4">6. Data Security</h2>
              <p className="font-bold text-foreground/80">
                We implement industry-standard security measures to protect your information, including SSL encryption, secure payment processing, and regular security audits. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="bg-secondary/10 border-4 border-foreground rounded-2xl p-6">
              <h2 className="text-3xl font-black mb-4">7. Children's Privacy</h2>
              <p className="font-bold text-foreground/80">
                Our website is not intended for children under 13. We do not knowingly collect information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section className="bg-secondary/10 border-4 border-foreground rounded-2xl p-6">
              <h2 className="text-3xl font-black mb-4">8. International Transfers</h2>
              <p className="font-bold text-foreground/80">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for international transfers.
              </p>
            </section>

            <section className="bg-secondary/10 border-4 border-foreground rounded-2xl p-6">
              <h2 className="text-3xl font-black mb-4">9. Changes to This Policy</h2>
              <p className="font-bold text-foreground/80">
                We may update this Privacy Policy from time to time. We'll notify you of significant changes by email or through a notice on our website. The "Last Updated" date at the top will reflect the most recent revision.
              </p>
            </section>

            <section className="bg-secondary/10 border-4 border-foreground rounded-2xl p-6">
              <h2 className="text-3xl font-black mb-4">10. Contact Us</h2>
              <p className="font-bold text-foreground/80">
                Questions about this Privacy Policy? Reach out to us:
              </p>
              <ul className="list-none space-y-2 font-bold text-foreground/80 mt-3">
                <li>📧 Email: privacy@rubberduckydrink.com</li>
                <li>📞 Phone: Available on our Contact page</li>
                <li>🦆 Or use our Contact form</li>
              </ul>
            </section>

            <div className="text-center mt-12 p-6 bg-primary/20 border-4 border-foreground rounded-2xl">
              <p className="text-2xl font-black">
                🦆 Your trust means everything to us! 🔒
              </p>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

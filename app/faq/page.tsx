import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-center text-4xl font-bold tracking-tight md:text-5xl">Frequently Asked Questions</h1>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is WorldScore?</AccordionTrigger>
            <AccordionContent>
              WorldScore is a decentralized blockchain-based credit score platform initially published as a Worldcoin mini-app. It
              provides users with a transparent and privacy-focused way to establish and maintain their credit score
              without relying on traditional centralized credit bureaus.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>How does a decentralized credit score work?</AccordionTrigger>
            <AccordionContent>
              Our decentralized credit score system uses blockchain to securely record financial transactions
              and behaviors while keeping your personal data under your control. The system analyzes various factors
              such as wallet balance, transaction history, DeFi and CeFi interactions, loan repayments, and other financial activity to generate a credit score that is
              both transparent and tamper-proof.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Is my data secure on WorldScore?</AccordionTrigger>
            <AccordionContent>
              Yes, security is our top priority. As a decentralized platform, your data is encrypted and stored across a
              distributed network rather than in a central database. You maintain control over your personal information
              and can choose what to share and with whom. We use advanced cryptographic techniques to ensure your data
              remains secure and private.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>How do I get started with WorldScore?</AccordionTrigger>
            <AccordionContent>
              To get started with WorldScore, simply open the app in your WorldApp and connect your wallet. That's it.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              Can I use my WorldScore credit score with traditional financial institutions?
            </AccordionTrigger>
            <AccordionContent>
              We're actively working with various financial institutions to gain acceptance of WorldScore as a valid
              credit assessment tool and linking WorldScore with other traditional credit scoring institutions to evaluate DeFi scores. 
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>How is WorldScore different from traditional credit bureaus?</AccordionTrigger>
            <AccordionContent>
              Unlike all the traditional credit bureaus that control your data and often use opaque scoring methods, WorldScore
              is decentralized and gives you ownership of your financial data. Our scoring algorithm is transparent, and you can see exactly
              what factors influence your score. Additionally, we consider a broader range of financial behaviors and
              don't penalize users for factors unrelated to creditworthiness.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>What if I find an error in my WorldScore credit report?</AccordionTrigger>
            <AccordionContent>
              If you believe there's an error in your WorldScore credit report, directly contact us via our support email or fill the contact form.
              Our team will investigate and resolve the issue promptly, typically within 4-7 business days.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger>Is WorldScore available worldwide?</AccordionTrigger>
            <AccordionContent>
              Yes, as a decentralized platform, WorldScore is designed to be accessible globally. However, being a new platform and the nature of WorldScore may limit the practical utility initially 
              compared to traditional credit institutions. We're continuously expanding our partnerships worldwide to increase the acceptance of our credit scores.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger>What's in Version 1.0.0?</AccordionTrigger>
            <AccordionContent>
              Version 1.0.0 includes the core credit scoring system with wallet integration, a user-friendly dashboard
              to monitor your score, detailed transaction history visualization, and very limited features. Version 1.0.0 is semi-decentralized as we are building the core structures, as soon as we aare complete we will be transformed into a fully decentralized platform. This version establishes the foundation of our decentralized credit system while we continue
              to expand features and partnerships in upcoming releases. We initially launched WorldScore on Worldcoin's ecosystem, later on we will expand to other DeFi ecosystem.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}


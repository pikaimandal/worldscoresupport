import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-center text-4xl font-bold tracking-tight md:text-5xl">Frequently Asked Questions</h1>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is WorldScore & why do I need it?</AccordionTrigger>
            <AccordionContent>
              WorldScore gives you a reputation score ranging from 300 to 999 based on various factors that represent your trustworthiness as a unique human, as well as your activity in the Web3 ecosystem. 
              The higher the scores you have, the higher the chance you have of getting less or zero-collateral loans, accessing DeFi protocols with better rates, exclusive community access, and making trusted peer-to-peer transactions.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>How does reputation score work?</AccordionTrigger>
            <AccordionContent>
              WorldScore analyzes various factors
              such as orb verification status, wallet balance, external wallet connection, transaction history, phone number verification, email verification, loan repayments, and social account verification to generate your reputation score
              tied to your wallet address.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Is my data secure on WorldScore?</AccordionTrigger>
            <AccordionContent>
              Yes, security is our top priority. As a web3 platform, your data is encrypted and stored on our secure server and never shared with any third parties. You can always contact us and delete your data.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Where can I use WorldScore?</AccordionTrigger>
            <AccordionContent>
              You can use your WorldScore to access services like loans, better rates at DeFi, and access an exclusive higher score community, and many more.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>How do I get started with WorldScore?</AccordionTrigger>
            <AccordionContent>
              To get started with WorldScore, simply open the app in your WorldApp, then log in with your wallet and complete the given tasks. That's it.
            </AccordionContent>
          </AccordionItem>          

          <AccordionItem value="item-6">
            <AccordionTrigger>
              Can I use my WorldScore in traditional institutions for identity verifications?
            </AccordionTrigger>
            <AccordionContent>
              We're actively working with various institutions to gain acceptance of WorldScore as a valid
              identity and reputation assessment tool and linking WorldScore with other traditional platforms to evaluate reputation in a privacy preservasive way. 
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>How is WorldScore different from traditional identity tools?</AccordionTrigger>
            <AccordionContent>
              Unlike all the traditional platforms that control your data and often use opaque scoring methods, WorldScore
              is privacy-friendly, transparent, and gives you ownership of your complete data. Our scoring algorithm is transparent, and you can see exactly
              what factors influence your score.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger>What if I find an error in my WorldScore report?</AccordionTrigger>
            <AccordionContent>
              If you believe there's an error in your WorldScore, directly contact us via our support email or fill out the contact form.
              Our team will investigate and resolve the issue promptly, typically within 4-7 business days.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger>Is WorldScore available worldwide?</AccordionTrigger>
            <AccordionContent>
              Yes, WorldScore is a Worldcoin mini-app published on the World App mini-apps store and available everywhere World App is available.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10">
            <AccordionTrigger>What's in Version 1.1.0?</AccordionTrigger>
            <AccordionContent>
              In version 1.1.0, WorldScore is fully rebranded as a complete suite of a reputation scoring platform that offers many services, including trustworthiness, credit scoring, uniqueness, etc., etc rather than a standalone credit scoring app.
            </AccordionContent>
          </AccordionItem> 
          
          <AccordionItem value="item-11">
            <AccordionTrigger>What was in Version 1.0.0?</AccordionTrigger>
            <AccordionContent>
              Version 1.0.0 includes the core credit scoring system with wallet integration, a user-friendly dashboard
              to monitor your score, detailed transaction history visualization, and very limited features. Version 1.0.0 is semi-decentralized as we are building the core structures, as soon as we aare complete we will be transformed into a fully decentralized platform. This version establishes the foundation of our decentralized credit system while we continue
              to expand features and partnerships in upcoming releases. We initially launched WorldScore on Worldcoin's ecosystem, and later on, we will expand to other DeFi ecosystem.
            </AccordionContent>
          </AccordionItem>         
        </Accordion>
      </div>
    </div>
  )
}


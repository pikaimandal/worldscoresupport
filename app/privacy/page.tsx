export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-center text-4xl font-bold tracking-tight md:text-5xl">Privacy Policy</h1>

        <div className="prose prose-blue dark:prose-invert max-w-none">
          <p className="lead">Last updated: April 3, 2023</p>

          <h2>Introduction</h2>
          <p>
            At WorldScore, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you use our decentralized credit score platform. Please read this
            privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access
            the platform.
          </p>

          <h2>Information We Collect</h2>
          <p>
            As a decentralized platform, we minimize the amount of personal data we collect and store centrally.
            However, to provide our services, we may collect the following types of information:
          </p>

          <h3>Personal Information</h3>
          <ul>
            <li>Email address (for communication purposes)</li>
            <li>Blockchain wallet addresses</li>
            <li>Information you provide when creating an account</li>
          </ul>

          <h3>Financial Information</h3>
          <p>To generate your credit score, our system analyzes financial data such as:</p>
          <ul>
            <li>Transaction history (with your explicit permission)</li>
            <li>Loan repayment records</li>
            <li>Other financial behaviors relevant to credit scoring</li>
          </ul>
          <p>
            This information is processed in a decentralized manner, with cryptographic techniques ensuring that only
            the minimum necessary data is shared with our systems.
          </p>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Generate and maintain your decentralized credit score</li>
            <li>Improve and optimize our platform</li>
            <li>Communicate with you about your account and provide customer support</li>
            <li>Detect and prevent fraudulent activities</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Decentralized Data Storage</h2>
          <p>
            As a decentralized platform, much of your data is stored on blockchain technology rather than centralized
            servers. This means:
          </p>
          <ul>
            <li>Your data is distributed across a network rather than stored in a single location</li>
            <li>You maintain control over your personal information through cryptographic keys</li>
            <li>Information on the blockchain is immutable and cannot be altered retroactively</li>
          </ul>

          <h2>Data Sharing and Disclosure</h2>
          <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
          <ul>
            <li>With your explicit consent, such as when you choose to share your credit score with a lender</li>
            <li>To comply with legal obligations</li>
            <li>To protect and defend our rights and property</li>
            <li>
              With service providers who help us operate our platform, subject to strict confidentiality agreements
            </li>
          </ul>

          <h2>Your Rights and Choices</h2>
          <p>You have several rights regarding your personal information:</p>
          <ul>
            <li>Access and update your personal information</li>
            <li>
              Request deletion of your account and associated data (except for blockchain data which cannot be deleted
              due to the nature of the technology)
            </li>
            <li>Control what financial information is connected to your WorldScore profile</li>
            <li>Opt out of marketing communications</li>
          </ul>

          <h2>Security Measures</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information:</p>
          <ul>
            <li>Encryption of sensitive data</li>
            <li>Regular security assessments</li>
            <li>Strict access controls for our systems</li>
            <li>Continuous monitoring for potential vulnerabilities</li>
          </ul>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new
            privacy policy on this page and updating the "Last Updated" date.
          </p>

          <h2>Contact Us</h2>
          <p>If you have any questions about this privacy policy or our data practices, please contact us at:</p>
          <p>Email: support@worldscore.org</p>
        </div>
      </div>
    </div>
  )
}


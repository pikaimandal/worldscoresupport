import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, FileText, GraduationCap, Video } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-center text-4xl font-bold tracking-tight md:text-5xl">Resources</h1>
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-muted-foreground">
          Explore our collection of resources to help you understand and make the most of WorldScore's decentralized
          credit platform.
        </p>

        <Tabs defaultValue="guides" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="guides">Guides</TabsTrigger>
            <TabsTrigger value="documentation">Documentation</TabsTrigger>
            <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
          </TabsList>

          <TabsContent value="guides" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <BookOpen className="mb-2 h-6 w-6 text-primary" />
                  <CardTitle>Getting Started with WorldScore</CardTitle>
                  <CardDescription>A comprehensive guide for new users</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Learn how to set up your WorldScore account, connect your financial data, and start building your
                    decentralized credit score.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Coming soon
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <BookOpen className="mb-2 h-6 w-6 text-primary" />
                  <CardTitle>Understanding Your Credit Score</CardTitle>
                  <CardDescription>How WorldScore calculates your credit</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Dive deep into the factors that influence your WorldScore credit rating and learn how to improve
                    your score.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Coming soon
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <BookOpen className="mb-2 h-6 w-6 text-primary" />
                  <CardTitle>Privacy and Security</CardTitle>
                  <CardDescription>How we protect your data</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Learn about the security measures and privacy protections built into the WorldScore platform.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Coming soon
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <BookOpen className="mb-2 h-6 w-6 text-primary" />
                  <CardTitle>Using WorldScore with DeFi</CardTitle>
                  <CardDescription>Leveraging your score in decentralized finance</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Discover how to use your WorldScore credit rating to access DeFi lending platforms and other
                    financial services.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Coming soon
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="documentation" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <FileText className="mb-2 h-6 w-6 text-primary" />
                  <CardTitle>API Documentation</CardTitle>
                  <CardDescription>For developers integrating with WorldScore</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Complete API reference for developers looking to integrate WorldScore into their applications.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Coming soon
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <FileText className="mb-2 h-6 w-6 text-primary" />
                  <CardTitle>Technical Whitepaper</CardTitle>
                  <CardDescription>The technology behind WorldScore</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Detailed explanation of the blockchain technology and algorithms powering the WorldScore platform.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Publishing soon
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <FileText className="mb-2 h-6 w-6 text-primary" />
                  <CardTitle>Integration Guide</CardTitle>
                  <CardDescription>For financial institutions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Guide for financial institutions looking to accept WorldScore credit ratings in their lending
                    decisions.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Coming soon
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <FileText className="mb-2 h-6 w-6 text-primary" />
                  <CardTitle>Smart Contract Audit</CardTitle>
                  <CardDescription>Security verification</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Independent audit reports of the smart contracts used in the WorldScore platform.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Publishing soon
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="tutorials" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <Video className="mb-2 h-6 w-6 text-primary" />
                  <CardTitle>Video Tutorials</CardTitle>
                  <CardDescription>Visual guides to using WorldScore</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Watch step-by-step video tutorials on how to use various features of the WorldScore platform.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Coming soon
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <GraduationCap className="mb-2 h-6 w-6 text-primary" />
                  <CardTitle>Interactive Workshops</CardTitle>
                  <CardDescription>Learn by doing</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Participate in our interactive workshops to get hands-on experience with the WorldScore platform.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Coming soon
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <GraduationCap className="mb-2 h-6 w-6 text-primary" />
                  <CardTitle>Community Forums</CardTitle>
                  <CardDescription>Learn from other users</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Join our community forums to ask questions, share experiences, and learn from other WorldScore
                    users.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Coming soon
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <GraduationCap className="mb-2 h-6 w-6 text-primary" />
                  <CardTitle>Case Studies</CardTitle>
                  <CardDescription>Real-world applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Explore real-world case studies of how individuals and businesses are using WorldScore.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Coming soon
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="research" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <FileText className="mb-2 h-6 w-6 text-primary" />
                  <CardTitle>Academic Papers</CardTitle>
                  <CardDescription>Research on decentralized credit scoring</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Access academic research papers on decentralized credit scoring and its implications.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Publishing soon
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <FileText className="mb-2 h-6 w-6 text-primary" />
                  <CardTitle>Market Analysis</CardTitle>
                  <CardDescription>The future of decentralized finance</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Read our analysis of market trends and the future of decentralized finance and credit scoring.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Publishing soon
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <FileText className="mb-2 h-6 w-6 text-primary" />
                  <CardTitle>Regulatory Insights</CardTitle>
                  <CardDescription>Navigating the regulatory landscape</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Understand the regulatory considerations for decentralized credit scoring across different
                    jurisdictions.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Coming soon
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <FileText className="mb-2 h-6 w-6 text-primary" />
                  <CardTitle>Economic Impact Studies</CardTitle>
                  <CardDescription>The broader implications</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Explore studies on the economic impact of decentralized credit scoring on financial inclusion.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Coming soon
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}


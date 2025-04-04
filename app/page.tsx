import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, HelpCircle, Mail, MessageSquare, Shield } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Welcome to WorldScore Support</h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          Decentralized Credit Score for the World.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button variant="outline" size="lg">
            <Link href="#support-options">Support Options</Link>
          </Button>
        </div>
      </section>

      <section id="support-options" className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">How Can We Help You?</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <MessageSquare className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Contact Form</CardTitle>
              <CardDescription>Submit your inquiry through our online form</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Our team will respond to your inquiry as soon as possible.</p>
              <Button asChild variant="secondary" className="w-full">
                <Link href="/contact">
                  Go to Contact Form <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Mail className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Email Support</CardTitle>
              <CardDescription>Reach out to us directly via email</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Send your questions or concerns to our support team email address.</p>
              <div className="flex items-center justify-center rounded-md bg-muted p-3 font-medium">
                support@worldscore.org
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Decentralized Platform</CardTitle>
              <CardDescription>Learn about our decentralized approach</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                WorldScore operates on decentralized principles, ensure how.
              </p>
              <Button asChild variant="secondary" className="w-full">
                <Link href="/resources">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <div className="rounded-lg bg-muted p-8 md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <HelpCircle className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h2 className="mb-4 text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="mb-8 text-muted-foreground">
              Find quick answers to common questions about WorldScore.
            </p>
            <Button asChild>
              <Link href="/faq">View FAQ</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}


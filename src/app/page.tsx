import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm } from '@/components/contact-form';
import { Logo } from '@/components/logo';
import { TrendingUp, Target, Search } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <a href="/" className="mr-6 flex items-center space-x-2">
              <Logo className="h-6 w-auto text-foreground" />
            </a>
          </div>
          {/* <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
             Optional Nav Links
            <a href="#services" className="text-foreground/60 transition-colors hover:text-foreground/80">Services</a>
            <a href="#contact" className="text-foreground/60 transition-colors hover:text-foreground/80">Contact</a>
          </nav> */}
        </div>
      </header>

      {/* Hero Section */}
      <section className="container flex flex-col items-center justify-center gap-6 py-20 text-center md:py-32 lg:py-40">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
          Elevate Your Brand with <span className="text-primary">AgencyFlow</span>
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
          We provide cutting-edge marketing strategies designed to drive growth, enhance engagement, and deliver measurable results.
        </p>
        <div className="flex gap-4">
          <Button size="lg" asChild className="transition-transform hover:scale-105">
            <a href="#contact">Get Started</a>
          </Button>
          <Button size="lg" variant="outline" asChild className="transition-transform hover:scale-105">
             <a href="#services">Learn More</a>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container space-y-12 py-16 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] md:text-4xl">Our Services</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Tailored marketing solutions to meet your unique business needs.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">
                Growth Marketing
              </CardTitle>
              <TrendingUp className="h-6 w-6 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Data-driven strategies to accelerate your customer acquisition and market expansion.
              </p>
            </CardContent>
          </Card>
          <Card className="transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">
                Brand Strategy
              </CardTitle>
              <Target className="h-6 w-6 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Crafting compelling brand narratives and positioning for long-term success.
              </p>
            </CardContent>
          </Card>
          <Card className="transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">
                Digital Advertising
              </CardTitle>
              <Search className="h-6 w-6 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Targeted campaigns across digital platforms to maximize reach and ROI.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-muted py-16 md:py-24 lg:py-32">
        <div className="container grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold leading-[1.1] md:text-4xl">
              Ready to Grow?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss how AgencyFlow can help achieve your marketing goals. Fill out the form, and we'll be in touch shortly.
            </p>
          </div>
          <div>
             <Card className="shadow-lg">
               <CardContent className="p-6">
                 <ContactForm />
               </CardContent>
             </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 md:h-16 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Logo className="h-5 w-auto text-foreground" />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © {new Date().getFullYear()} AgencyFlow. All rights reserved.
            </p>
          </div>
          {/* Optional: Add social links or other footer content */}
        </div>
      </footer>
    </div>
  );
}

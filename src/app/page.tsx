'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, TreePine, Zap, BarChart3, Shield, Users, CheckCircle, Leaf, Sparkles } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-100 dark:from-emerald-950 dark:via-blue-950 dark:to-indigo-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 text-white">
                <Mail className="h-6 w-6" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
                EcoInbox
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-700 dark:text-slate-300 hover:text-emerald-600 transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-slate-700 dark:text-slate-300 hover:text-emerald-600 transition-colors">
                Pricing
              </a>
              <a href="#impact" className="text-slate-700 dark:text-slate-300 hover:text-emerald-600 transition-colors">
                Impact
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/signin">
                <Button variant="ghost" className="text-slate-700 dark:text-slate-300">
                  Sign In
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white shadow-lg">
                  Access Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Badge className="bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900 dark:to-green-900 text-emerald-800 dark:text-emerald-200 border-emerald-200 dark:border-emerald-700">
                <Sparkles className="w-4 h-4 mr-2" />
                Revolutionize Your Inbox
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-slate-900 via-emerald-800 to-green-900 dark:from-slate-100 dark:via-emerald-200 dark:to-green-100 bg-clip-text text-transparent leading-tight">
              Transform Your Inbox Into an Eco-Friendly Action
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed">
              The AI assistant that cleans your emails and plants trees automatically. 
              <br className="hidden md:block" />
              Maximum productivity, minimal environmental impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/dashboard">
                <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white shadow-xl text-lg px-8 py-6">
                  <TreePine className="w-5 h-5 mr-2" />
                  Access Dashboard
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="lg" variant="outline" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 text-lg px-8 py-6">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Create Account
                </Button>
              </Link>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="backdrop-blur-sm bg-white/60 dark:bg-slate-800/60 border-white/20 shadow-xl">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">2.3M+</div>
                  <div className="text-slate-600 dark:text-slate-300">Emails Cleaned</div>
                </CardContent>
              </Card>
              <Card className="backdrop-blur-sm bg-white/60 dark:bg-slate-800/60 border-white/20 shadow-xl">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">15,847</div>
                  <div className="text-slate-600 dark:text-slate-300">Trees Planted</div>
                </CardContent>
              </Card>
              <Card className="backdrop-blur-sm bg-white/60 dark:bg-slate-800/60 border-white/20 shadow-xl">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">847kg</div>
                  <div className="text-slate-600 dark:text-slate-300">CO2 Saved</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-slate-100">
              The Hidden Problem of Your Inbox
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="backdrop-blur-sm bg-white/70 dark:bg-slate-800/70 border-white/20 shadow-xl">
                <CardContent className="pt-6">
                  <div className="text-6xl font-bold text-red-500 mb-4">4%</div>
                  <p className="text-slate-600 dark:text-slate-300">
                    of global CO2 emissions come from digital technology, 
                    and your emails contribute to this every day
                  </p>
                </CardContent>
              </Card>
              <Card className="backdrop-blur-sm bg-white/70 dark:bg-slate-800/70 border-white/20 shadow-xl">
                <CardContent className="pt-6">
                  <div className="text-6xl font-bold text-orange-500 mb-4">20GB</div>
                  <p className="text-slate-600 dark:text-slate-300">
                    average email storage per user, 
                    equivalent to 85kg of CO2 per year
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-slate-900 to-emerald-800 dark:from-slate-100 dark:to-emerald-200 bg-clip-text text-transparent">
                Our Revolutionary AI Solution
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                EcoInbox combines advanced artificial intelligence and environmental consciousness 
                to transform your email experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="backdrop-blur-sm bg-white/60 dark:bg-slate-800/60 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <CardHeader>
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white w-fit group-hover:scale-110 transition-transform">
                    <Zap className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">Smart AI Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Our AI automatically analyzes your emails, detects useless newsletters, 
                    duplicates and classifies your messages by real importance.
                  </CardDescription>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      Automatic classification
                    </li>
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      Meeting detection
                    </li>
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      Contextual suggestions
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-white/60 dark:bg-slate-800/60 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <CardHeader>
                  <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 text-white w-fit group-hover:scale-110 transition-transform">
                    <Leaf className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">Eco-Responsible Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Automatic unsubscription, scheduled deletion of attachments, 
                    local archiving to reduce server footprint.
                  </CardDescription>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      One-click unsubscribe
                    </li>
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      Automatic cleanup
                    </li>
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      Smart archiving
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-white/60 dark:bg-slate-800/60 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <CardHeader>
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white w-fit group-hover:scale-110 transition-transform">
                    <BarChart3 className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">Measurable Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Track your carbon footprint, visualize your energy savings 
                    and discover how many trees you've helped plant.
                  </CardDescription>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      CO2 footprint calculation
                    </li>
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      Annual "EcoWrap" report
                    </li>
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      Trees planted tracking
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-slate-100">
                Choose Your Impact
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                Start free, scale according to your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Free Plan */}
              <Card className="backdrop-blur-sm bg-white/70 dark:bg-slate-800/70 border-white/20 shadow-xl">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-xl bg-gradient-to-br from-slate-500 to-slate-600 text-white w-fit">
                    <Mail className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Free</CardTitle>
                  <div className="text-4xl font-bold text-slate-900 dark:text-slate-100">$0</div>
                  <CardDescription>To discover EcoInbox</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                      100 emails analyzed/month
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                      Basic classification
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                      Basic statistics
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                      5 trees planted/year
                    </li>
                  </ul>
                  <Link href="/signup">
                    <Button className="w-full" variant="outline">
                      Get Started Free
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Premium Plan */}
              <Card className="backdrop-blur-sm bg-white/70 dark:bg-slate-800/70 border-emerald-200 shadow-2xl scale-105 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-emerald-500 to-green-600 text-white">
                    Most Popular
                  </Badge>
                </div>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 text-white w-fit">
                    <TreePine className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Premium</CardTitle>
                  <div className="text-4xl font-bold text-slate-900 dark:text-slate-100">$9<span className="text-lg text-slate-500">/month</span></div>
                  <CardDescription>For advanced users</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                      Unlimited analysis
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                      12 AI categories
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                      Calendar integration
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                      Automatic archiving
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                      25 trees planted/year
                    </li>
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700">
                    Start Premium
                  </Button>
                </CardContent>
              </Card>

              {/* Pro Plan */}
              <Card className="backdrop-blur-sm bg-white/70 dark:bg-slate-800/70 border-white/20 shadow-xl">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white w-fit">
                    <Users className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Pro</CardTitle>
                  <div className="text-4xl font-bold text-slate-900 dark:text-slate-100">$19<span className="text-lg text-slate-500">/month</span></div>
                  <CardDescription>For professionals</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                      Everything in Premium +
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                      Conversational AI
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                      Automatic replies
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                      Developer API
          </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                      50 trees planted/year
          </li>
                  </ul>
                  <Button className="w-full" variant="outline">
                    Choose Pro
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
              Your Real-Time Impact
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-12">
              Discover how EcoInbox transforms your daily actions into gestures for the planet
            </p>

            <Card className="backdrop-blur-sm bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/50 dark:to-green-950/50 border-emerald-200 dark:border-emerald-800 shadow-2xl">
              <CardContent className="pt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-emerald-600 mb-2">15,847</div>
                    <div className="text-slate-600 dark:text-slate-300 mb-4">Trees planted this year</div>
                    <div className="w-full bg-emerald-100 dark:bg-emerald-900 rounded-full h-2">
                      <div className="bg-gradient-to-r from-emerald-500 to-green-600 h-2 rounded-full" style={{width: '73%'}}></div>
                    </div>
                    <div className="text-sm text-slate-500 mt-2">2025 Goal: 20,000 trees</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-blue-600 mb-2">847kg</div>
                    <div className="text-slate-600 dark:text-slate-300 mb-4">CO2 saved this month</div>
                    <div className="w-full bg-blue-100 dark:bg-blue-900 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-600 h-2 rounded-full" style={{width: '89%'}}></div>
                    </div>
                    <div className="text-sm text-slate-500 mt-2">= 3.4 fewer cars on the road</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 px-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-slate-100">
              Security & Privacy
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-12">
              Your data stays private, our impact stays transparent
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="backdrop-blur-sm bg-white/70 dark:bg-slate-800/70 border-white/20 shadow-xl">
                <CardHeader>
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white w-fit mx-auto">
                    <Shield className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-center">End-to-End Encryption</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription>
                    All your data is encrypted locally. 
                    Only anonymized metadata is analyzed.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-white/70 dark:bg-slate-800/70 border-white/20 shadow-xl">
                <CardHeader>
                  <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 text-white w-fit mx-auto">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-center">GDPR Compliance</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription>
                    Data deletion on request, 
                    full transparency on how your information is used.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-600 to-green-700 text-white">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Transform Your Inbox?
            </h2>
            <p className="text-xl mb-12 opacity-90">
              Join thousands of users who have already planted over 15,000 trees 
              while optimizing their productivity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-100 text-lg px-8 py-6">
                  <TreePine className="w-5 h-5 mr-2" />
                  Get Started Free
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white hover:text-emerald-600 text-lg px-8 py-6">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-slate-900 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600">
                  <Mail className="h-6 w-6" />
                </div>
                <span className="text-2xl font-bold">EcoInbox</span>
              </div>
              <p className="text-slate-300">
                The AI assistant that transforms your inbox into an eco-friendly action.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-300">
            <p>&copy; 2025 EcoInbox. All rights reserved. Made with 💚 for the planet.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

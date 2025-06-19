'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, TreePine, BarChart3, Shield, Users, CheckCircle, Leaf, Unlink, Archive, Download, Settings, Calendar } from "lucide-react"
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
              <Link href="/signin" prefetch={false}>
                <Button variant="ghost" className="text-slate-700 dark:text-slate-300">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup" prefetch={false}>
                <Button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white shadow-lg">
                  Get Started
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
                <Leaf className="w-4 h-4 mr-2" />
                Intelligent Ecological Agent
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-slate-900 via-emerald-800 to-green-900 dark:from-slate-100 dark:via-emerald-200 dark:to-green-100 bg-clip-text text-transparent leading-tight">
              EcoInbox
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed">
              The intelligent agent for more ecological email
              <br className="hidden md:block" />
              Automatically analyzes, sorts and optimizes your mailbox to reduce your carbon footprint.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/signup" prefetch={false}>
                <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white shadow-xl text-lg px-8 py-6">
                  <TreePine className="w-5 h-5 mr-2" />
                  Start Analysis
                </Button>
              </Link>
              <Link href="/signup" prefetch={false}>
                <Button size="lg" variant="outline" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 text-lg px-8 py-6">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Try by Yourself
                </Button>
              </Link>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="backdrop-blur-sm bg-white/60 dark:bg-slate-800/60 border-white/20 shadow-xl">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">2.3M+</div>
                  <div className="text-slate-600 dark:text-slate-300">Emails Analyzed</div>
                </CardContent>
              </Card>
              <Card className="backdrop-blur-sm bg-white/60 dark:bg-slate-800/60 border-white/20 shadow-xl">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">847 kg</div>
                  <div className="text-slate-600 dark:text-slate-300">CO2 Saved</div>
                </CardContent>
              </Card>
              <Card className="backdrop-blur-sm bg-white/60 dark:bg-slate-800/60 border-white/20 shadow-xl">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">12.4 TB</div>
                  <div className="text-slate-600 dark:text-slate-300">Storage Freed</div>
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
                How EcoInbox Helps You
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                An intelligent agent that automatically analyzes your emails and suggests concrete actions 
                to reduce your environmental impact
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="backdrop-blur-sm bg-white/60 dark:bg-slate-800/60 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <CardHeader>
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white w-fit group-hover:scale-110 transition-transform">
                    <Mail className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">Automatic Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Automatically detects useless newsletters, notifications, ads, 
                    duplicates and classifies your emails by real importance.
                  </CardDescription>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      Automatic classification
                    </li>
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      Duplicate detection
                    </li>
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      Importance sorting
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
                    Automatic unsubscription, scheduled attachment deletion, 
                    local archiving to reduce server footprint.
                  </CardDescription>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      One-click unsubscribe
                    </li>
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      Attachment management
                    </li>
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      Local archiving
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-white/60 dark:bg-slate-800/60 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <CardHeader>
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 text-white w-fit group-hover:scale-110 transition-transform">
                    <BarChart3 className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">Carbon Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Calculate your mailbox's carbon footprint and track your progress 
                    with detailed "Spotify Wrapped" style statistics.
                  </CardDescription>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      Carbon footprint calculation
                    </li>
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      "Mail Weight" tracking
                    </li>
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      Monthly statistics
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Detail Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900 dark:text-slate-100">
              Detailed Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">
                  Smart Subscription Management
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Unlink className="w-6 h-6 text-emerald-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">Automatic Unsubscription</h4>
                      <p className="text-slate-600 dark:text-slate-300">List of useless subscriptions with direct unsubscribe links</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Archive className="w-6 h-6 text-emerald-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">Scheduled Deletion</h4>
                      <p className="text-slate-600 dark:text-slate-300">Automatic deletion of certain email categories according to your settings</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Download className="w-6 h-6 text-emerald-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">Attachment Management</h4>
                      <p className="text-slate-600 dark:text-slate-300">Deletion of large attachments after backup (15 days, 30 days...)</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <span className="font-medium">Unread Newsletters</span>
                    <Badge className="bg-orange-100 text-orange-800">12 detected</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <span className="font-medium">Large Attachments</span>
                    <Badge className="bg-blue-100 text-blue-800">2.3 GB</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <span className="font-medium">CO2 Saveable</span>
                    <Badge className="bg-green-100 text-green-800">1.2 kg</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-slate-100">
              Why Is It Ecological?
              </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="backdrop-blur-sm bg-white/60 dark:bg-slate-800/60 border-white/20 shadow-xl">
                <CardContent className="pt-6 text-center">
                  <TreePine className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Less Storage</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Useless emails + their storage + their transfer consume energy in data centers
                  </p>
                </CardContent>
              </Card>
              <Card className="backdrop-blur-sm bg-white/60 dark:bg-slate-800/60 border-white/20 shadow-xl">
                <CardContent className="pt-6 text-center">
                  <BarChart3 className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Measurable Impact</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Reducing this volume = less electricity consumed, less indirect impact
                  </p>
                </CardContent>
              </Card>
              <Card className="backdrop-blur-sm bg-white/60 dark:bg-slate-800/60 border-white/20 shadow-xl">
                <CardContent className="pt-6 text-center">
                  <Shield className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Secure Data</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Client-side analysis, no data sent elsewhere. Obfuscation if necessary
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-950/30 dark:to-slate-950/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-slate-100">
              Simple and Transparent Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="backdrop-blur-sm bg-white/60 dark:bg-slate-800/60 border-white/20 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Free</CardTitle>
                  <CardDescription className="text-lg">
                    <span className="text-3xl font-bold">$0</span> / month
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      Basic analysis
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      Manual suggestions
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      Impact calculation
                    </li>
                  </ul>
                  <Button className="w-full mt-6" variant="outline">
                    Start Free
                    </Button>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-white/60 dark:bg-slate-800/60 border-emerald-200 shadow-xl relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-emerald-500 text-white">Popular</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Premium</CardTitle>
                  <CardDescription className="text-lg">
                    <span className="text-3xl font-bold">$3.99</span> / month
                    <div className="text-sm text-slate-500 mt-1">or $39 / year</div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      Automatic cleanup
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      Detailed statistics
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      Periodic alerts
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      Calendar integration
                    </li>
                  </ul>
                  <Button className="w-full mt-6 bg-emerald-500 hover:bg-emerald-600">
                    Start Trial
                  </Button>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-white/60 dark:bg-slate-800/60 border-white/20 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Enterprise</CardTitle>
                  <CardDescription className="text-lg">
                    <span className="text-3xl font-bold">Custom</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      Email governance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      CSR reporting
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      Dedicated support
          </li>
                  </ul>
                  <Button className="w-full mt-6" variant="outline">
                    Contact Us
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="text-xl font-bold">EcoInbox</span>
              </div>
              <p className="text-slate-400 text-sm">
                The intelligent agent for more ecological email
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Automatic analysis</li>
                <li>Eco-responsible actions</li>
                <li>Carbon impact</li>
                <li>Advanced settings</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Documentation</li>
                <li>FAQ</li>
                <li>Contact</li>
                <li>Community</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Privacy</li>
                <li>Terms of Service</li>
                <li>Security</li>
                <li>GDPR</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © 2025 EcoInbox. All rights reserved. Made with 💚 for the planet.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

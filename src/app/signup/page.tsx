'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Eye, EyeOff, ArrowLeft, TreePine, User, CheckCircle, Sparkles, ChevronRight, Play } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedPlan, setSelectedPlan] = useState('free')
  const [isTransitioning, setIsTransitioning] = useState(false)

  const steps = [
    { number: 1, title: "Information", description: "Create your account", icon: User },
    { number: 2, title: "Plan", description: "Choose your impact", icon: TreePine },
    { number: 3, title: "Welcome", description: "You're all set!", icon: CheckCircle }
  ]

  const handleStepChange = (newStep: number) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentStep(newStep)
      setIsTransitioning(false)
    }, 150)
  }

  const progressPercentage = ((currentStep - 1) / (steps.length - 1)) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-100 dark:from-emerald-950 dark:via-blue-950 dark:to-indigo-950 flex items-center justify-center p-6">
      {/* Back to Home */}
      <Link 
        href="/" 
        className="fixed top-6 left-6 z-50 flex items-center space-x-2 text-slate-700 dark:text-slate-300 hover:text-emerald-600 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </Link>

      {/* Main Content */}
      <div className="w-full max-w-lg">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 text-white transform hover:scale-105 transition-transform">
              <Mail className="h-6 w-6" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
              EcoInbox
            </span>
          </div>
          <Badge className="bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900 dark:to-green-900 text-emerald-800 dark:text-emerald-200 border-emerald-200 dark:border-emerald-700">
            <Sparkles className="w-3 h-3 mr-1" />
            Join the eco revolution
          </Badge>
        </div>

        {/* Enhanced Progress Steps */}
        <div className="mb-8 px-4">
          {/* Progress Bar Background */}
          <div className="relative mb-6">
            <div className="absolute top-5 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-700 rounded-full" />
            <div 
              className="absolute top-5 left-0 h-0.5 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full transition-all duration-700 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
            
            {/* Step Indicators */}
            <div className="relative flex justify-between">
              {steps.map((step, index) => {
                const isActive = currentStep === step.number
                const isCompleted = currentStep > step.number
                const IconComponent = step.icon
                
                return (
                  <div key={step.number} className="flex flex-col items-center group">
                    {/* Step Circle */}
                    <div className={`
                      relative flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer
                      ${isCompleted 
                        ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white scale-110 shadow-lg shadow-emerald-500/30' 
                        : isActive 
                        ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white scale-110 shadow-lg shadow-emerald-500/30 animate-pulse' 
                        : 'bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-500 hover:border-emerald-300 hover:scale-105'
                      }
                    `}>
                                             {isCompleted ? (
                         <CheckCircle className="w-5 h-5" />
                       ) : (
                         <IconComponent className="w-4 h-4" />
                       )}
                       
                       {/* Active Step Indicator */}
                       {isActive && (
                         <div className="absolute -inset-1 rounded-full border-2 border-emerald-300 opacity-60" />
                       )}
                    </div>
                    
                    {/* Step Label */}
                                         <div className={`
                       mt-2 text-center transition-all duration-300
                       ${isActive || isCompleted 
                         ? 'text-emerald-600 dark:text-emerald-400' 
                         : 'text-slate-500 dark:text-slate-400'
                       }
                     `}>
                       <div className="text-xs font-medium">
                         {step.title}
                       </div>
                      <div className="text-xs opacity-75">
                        {step.description}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Sign Up Card with Animation */}
        <Card className={`
          backdrop-blur-sm bg-white/70 dark:bg-slate-800/70 border-white/20 shadow-2xl 
          transition-all duration-300 transform
          ${isTransitioning ? 'scale-95 opacity-50' : 'scale-100 opacity-100'}
        `}>
          {currentStep === 1 && (
            <div className="animate-in fade-in-50 slide-in-from-right-4 duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">Create Account</CardTitle>
                <CardDescription>
                  Start your journey to a cleaner inbox and greener planet
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Full Name
                  </label>
                  <div className="relative group">
                    <input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all group-hover:border-emerald-300"
                    />
                    <User className="absolute right-3 top-3 h-5 w-5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Email Address
                  </label>
                  <div className="relative group">
                    <input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all group-hover:border-emerald-300"
                    />
                    <Mail className="absolute right-3 top-3 h-5 w-5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                  </div>
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Password
                  </label>
                  <div className="relative group">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all group-hover:border-emerald-300"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 h-5 w-5 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                  <p className="text-xs text-slate-500">
                    Must be at least 8 characters with uppercase, lowercase and number
                  </p>
                </div>

                {/* Terms & Privacy */}
                <div className="space-y-4">
                  <label className="flex items-start space-x-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 mt-0.5"
                    />
                    <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">
                      I agree to the{' '}
                      <Link href="/terms" className="text-emerald-600 hover:text-emerald-700 underline">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link href="/privacy" className="text-emerald-600 hover:text-emerald-700 underline">
                        Privacy Policy
                      </Link>
                    </span>
                  </label>
                  <label className="flex items-start space-x-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 mt-0.5"
                    />
                    <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">
                      Send me updates about new features and environmental impact
                    </span>
                  </label>
                </div>

                {/* Continue Button */}
                <Button 
                  onClick={() => handleStepChange(2)}
                  className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white py-3"
                >
                  Continue to Plan Selection
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>

                {/* Sign In Link */}
                <div className="text-center text-sm text-slate-600 dark:text-slate-400">
                  Already have an account?{' '}
                  <Link href="/signin" className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors">
                    Sign in
                  </Link>
                </div>
              </CardContent>
            </div>
          )}

          {currentStep === 2 && (
            <>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">Choose Your Impact</CardTitle>
                <CardDescription>
                  Select the plan that fits your needs and environmental goals
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Plan Options */}
                <div className="space-y-4">
                  {/* Free Plan */}
                  <div 
                    onClick={() => setSelectedPlan('free')}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedPlan === 'free' 
                        ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/50' 
                        : 'border-slate-200 dark:border-slate-700 hover:border-emerald-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-slate-100">Free Plan</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Basic AI analysis & cleanup</p>
                        <p className="text-xs text-emerald-600 mt-1">100 emails analyzed monthly</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">$0</div>
                        <div className="text-xs text-slate-500">forever</div>
                      </div>

                    </div>
                  </div>

                  {/* Premium Plan */}
                  <div 
                    onClick={() => setSelectedPlan('premium')}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all relative ${
                      selectedPlan === 'premium' 
                        ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/50' 
                        : 'border-slate-200 dark:border-slate-700 hover:border-emerald-300'
                    }`}
                  >
                    <Badge className="absolute -top-2 left-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white text-xs">
                      Most Popular
                    </Badge>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-slate-100">Premium Plan</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Unlimited analysis & 12 AI categories</p>
                        <p className="text-xs text-emerald-600 mt-1">Auto-archiving + calendar sync + 25 trees/year</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">$9</div>
                        <div className="text-xs text-slate-500">per month</div>
                      </div>

                    </div>
                  </div>

                  {/* Pro Plan */}
                  <div 
                    onClick={() => setSelectedPlan('pro')}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedPlan === 'pro' 
                        ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/50' 
                        : 'border-slate-200 dark:border-slate-700 hover:border-emerald-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-slate-100">Pro Plan</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Everything + conversational AI & API</p>
                        <p className="text-xs text-emerald-600 mt-1">Auto-replies + developer access + 50 trees/year</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">$19</div>
                        <div className="text-xs text-slate-500">per month</div>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Note */}
                <div className="bg-emerald-50/50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
                  <p className="text-sm text-emerald-800 dark:text-emerald-200">
You can start with the free plan and upgrade anytime. All paid plans include a 7-day free trial.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button 
                    onClick={() => setCurrentStep(1)}
                    variant="outline" 
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button 
                    onClick={() => setCurrentStep(3)}
                    className="flex-1 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white"
                  >
                    Create Account
                  </Button>
                </div>
              </CardContent>
            </>
          )}

          {currentStep === 3 && (
            <div className="animate-in fade-in-50 slide-in-from-right-4 duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white w-fit">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-bold">Welcome to EcoInbox!</CardTitle>
                <CardDescription>
                  Your account has been created successfully
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Success Message */}
                <div className="text-center space-y-4">
                  <div className="bg-emerald-50/50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
                    <p className="text-emerald-800 dark:text-emerald-200 font-medium">
                      Welcome to the future of email management!
                    </p>
                    <p className="text-sm text-emerald-700 dark:text-emerald-300 mt-2">
                      Selected plan: <span className="font-semibold capitalize bg-emerald-100 dark:bg-emerald-900 px-2 py-1 rounded">{selectedPlan}</span> • Ready to transform your inbox
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                      What's next?
                    </h4>
                    <div className="grid gap-2">
                      {[
                        { text: "Connect your email accounts" },
                        { text: "Configure your AI assistant" },
                        { text: "Set up your dashboard" },
                        { text: "Start making an environmental impact" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3 p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 text-sm text-slate-600 dark:text-slate-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-colors">
                          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                          <span>{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Get Started Button */}
                <Button className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white py-3">
                  <TreePine className="w-5 h-5 mr-2" />
                  Get Started with EcoInbox
                </Button>

                {/* Alternative Actions */}
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" size="sm">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Tutorial
                  </Button>
                  <Button variant="outline" size="sm">
                    <Mail className="w-4 h-4 mr-2" />
                    Connect Email
                  </Button>
                </div>
              </CardContent>
            </div>
          )}
        </Card>

        {/* Environmental Impact Note */}
        <div className="text-center mt-6">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Join thousands of users optimizing their productivity while creating a more sustainable digital future. 
            Every action counts towards reducing global CO2 emissions.
          </p>
        </div>
      </div>
    </div>
  )
} 

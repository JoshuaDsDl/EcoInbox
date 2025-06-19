'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Mail, 
  TreePine, 
  Archive, 
  Search, 
  Tag,
  BarChart3,
  Leaf,
  AlertCircle,
  Paperclip,
  LogOut,
  Crown,
  Menu,
  X,
  Download,
  Settings,
  Unlink,
  ChevronLeft,
  Lightbulb,
  Plus
} from "lucide-react"

// Mock data for emails
const mockEmails = [
  {
    id: 1,
    sender: "Netflix",
    senderEmail: "no-reply@netflix.com",
    subject: "New shows added this week",
    preview: "Discover the latest additions to your favorite streaming service...",
    date: "2024-01-15T10:30:00",
    category: "Promotional",
    isRead: false,
    size: "45 KB",
    hasAttachment: false,
    isImportant: false,
    carbonFootprint: 0.2,
    canUnsubscribe: true
  },
  {
    id: 2,
    sender: "HR Team",
    senderEmail: "hr@company.com",
    subject: "Team meeting Wednesday January 17",
    preview: "Hello, the team meeting will take place Wednesday at 2PM in the conference room...",
    date: "2024-01-15T09:15:00",
    category: "Important",
    isRead: true,
    size: "12 KB",
    hasAttachment: true,
    isImportant: true,
    carbonFootprint: 0.1,
    canUnsubscribe: false
  },
  {
    id: 3,
    sender: "Amazon",
    senderEmail: "shipping@amazon.com",
    subject: "Your order has been shipped",
    preview: "Your order #1234567 is on its way. Track your package in real time...",
    date: "2024-01-15T08:45:00",
    category: "Shipping",
    isRead: false,
    size: "28 KB",
    hasAttachment: false,
    isImportant: false,
    carbonFootprint: 0.15,
    canUnsubscribe: false
  },
  {
    id: 4,
    sender: "Tech Newsletter",
    senderEmail: "news@techcrunch.com",
    subject: "This week's latest tech news",
    preview: "Artificial intelligence, startups, innovations... all tech news summarized...",
    date: "2024-01-15T07:20:00",
    category: "Newsletter",
    isRead: false,
    size: "156 KB",
    hasAttachment: false,
    isImportant: false,
    carbonFootprint: 0.8,
    canUnsubscribe: true
  },
  {
    id: 5,
    sender: "Bank",
    senderEmail: "info@mybank.com",
    subject: "January 2024 account statement",
    preview: "Your account statement is available in your customer area...",
    date: "2024-01-14T16:00:00",
    category: "Finance",
    isRead: true,
    size: "89 KB",
    hasAttachment: true,
    isImportant: true,
    carbonFootprint: 0.4,
    canUnsubscribe: false
  }
]

// Categories with colors
const categoryColors: Record<string, string> = {
  "Important": "bg-red-100 text-red-800 border-red-200",
  "Promotional": "bg-orange-100 text-orange-800 border-orange-200", 
  "Newsletter": "bg-blue-100 text-blue-800 border-blue-200",
  "Shipping": "bg-green-100 text-green-800 border-green-200",
  "Finance": "bg-purple-100 text-purple-800 border-purple-200"
}

export default function Dashboard() {
  const [selectedEmail, setSelectedEmail] = useState<typeof mockEmails[0] | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("inbox")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isEmailConnected, setIsEmailConnected] = useState(false)

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case "Important": return <AlertCircle className="w-3 h-3" />
      case "Promotional": return <Tag className="w-3 h-3" />
      case "Newsletter": return <Mail className="w-3 h-3" />
      case "Shipping": return <Archive className="w-3 h-3" />
      case "Finance": return <BarChart3 className="w-3 h-3" />
      default: return <Mail className="w-3 h-3" />
    }
  }

  const getAITip = (email: typeof mockEmails[0]) => {
    if (email.category === "Promotional" && !email.isRead) {
      return {
        message: "This seems like a promotional email you rarely open. Want to unsubscribe?",
        actions: [
          { label: "Unsubscribe", action: () => handleUnsubscribe(email.id), variant: "default" as const },
          { label: "Dismiss", action: () => {}, variant: "outline" as const }
        ]
      }
    }
    
    if (email.category === "Newsletter" && email.carbonFootprint > 0.5) {
      return {
        message: "Large newsletter detected. This could save 0.8kg CO2 if unsubscribed.",
        actions: [
          { label: "Unsubscribe", action: () => handleUnsubscribe(email.id), variant: "default" as const },
          { label: "Keep", action: () => {}, variant: "outline" as const }
        ]
      }
    }
    
    if (email.hasAttachment && email.category === "Important") {
      return {
        message: "Large attachment detected. Archive it locally to save cloud storage?",
        actions: [
          { label: "Archive", action: () => handleDeleteAttachment(email.id), variant: "default" as const },
          { label: "Keep", action: () => {}, variant: "outline" as const }
        ]
      }
    }
    
    if (email.category === "Finance" && email.isRead) {
      return {
        message: "Financial statement read. Auto-archive after 30 days?",
        actions: [
          { label: "Enable", action: () => {}, variant: "default" as const },
          { label: "No thanks", action: () => {}, variant: "outline" as const }
        ]
      }
    }
    
    if (email.category === "Shipping" && email.isRead) {
      return {
        message: "Order notification read. Safe to delete this notification?",
        actions: [
          { label: "Delete", action: () => {}, variant: "default" as const },
          { label: "Keep", action: () => {}, variant: "outline" as const }
        ]
      }
    }
    
    return null
  }

  const handleUnsubscribe = (emailId: number) => {
    // Unsubscription logic
    console.log(`Unsubscribing from email ${emailId}`)
  }

  const handleDeleteAttachment = (emailId: number) => {
    // Attachment deletion logic
    console.log(`Deleting attachments from email ${emailId}`)
  }

  const handleBackToList = () => {
    setSelectedEmail(null)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60))
    
    if (diffHours < 1) return "Just now"
    if (diffHours < 24) return `${diffHours}h ago`
    return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })
  }

  const handleConnectEmail = (provider: string) => {
    // Simulate email connection
    console.log(`Connecting to ${provider}...`)
    // In a real app, this would handle OAuth flow
    setTimeout(() => {
      setIsEmailConnected(true)
    }, 1000)
  }

  return (
    <div className="h-screen flex bg-gray-50 relative">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 w-64 bg-white border-r border-gray-200 fixed lg:relative z-30 h-full`}>
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 text-white">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
              EcoInbox
              </h2>
              <p className="text-sm text-gray-500">Ecological Agent</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setActiveTab("inbox")}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === "inbox" 
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200" 
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Mail className="w-5 h-5" />
                <span>Inbox</span>
                <Badge variant="outline" className="ml-auto">
                  {mockEmails.length}
            </Badge>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("eco-actions")}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === "eco-actions" 
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200" 
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Leaf className="w-5 h-5" />
                <span>Eco Actions</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("stats")}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === "stats" 
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200" 
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <BarChart3 className="w-5 h-5" />
                <span>Carbon Impact</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("settings")}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === "settings" 
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200" 
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </button>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3 mb-4">
            <Avatar className="w-10 h-10">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback className="bg-emerald-100 text-emerald-700">
                JD
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">John Doe</p>
              <div className="flex items-center space-x-1">
                <Crown className="w-3 h-3 text-yellow-500" />
                <Badge className="text-xs bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 border-yellow-200">
                  Premium
                </Badge>
              </div>
            </div>
          </div>
                    <Link href="/" prefetch={false}>
            <Button variant="outline" className="w-full justify-start" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden"
              >
                <Menu className="w-5 h-5" />
              </Button>
              
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-bold text-gray-900">
                  {!isEmailConnected ? "Connect Your Email" : (
                    <>
                      {activeTab === "inbox" && "Inbox"}
                      {activeTab === "eco-actions" && "Eco-Responsible Actions"}
                      {activeTab === "stats" && "Carbon Impact"}
                      {activeTab === "settings" && "Settings"}
                    </>
                  )}
                </h1>
              </div>
            </div>

            {isEmailConnected && (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-emerald-50 px-3 py-2 rounded-lg">
                  <TreePine className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-medium text-emerald-800">2.8 kg CO2 saved</span>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-hidden">
          {!isEmailConnected ? (
            <div className="h-full flex items-center justify-center bg-gray-50">
              <div className="max-w-md w-full mx-auto p-6">
                <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-xl">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 text-white w-fit">
                      <Mail className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl font-bold">Connect Your Email</CardTitle>
                    <CardDescription>
                      Connect your email account to start analyzing and optimizing your inbox
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button 
                      onClick={() => handleConnectEmail('gmail')}
                      className="w-full bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 justify-start"
                    >
                      <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                        <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#fbbc04" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      Connect Gmail
                    </Button>
                    
                    <Button 
                      onClick={() => handleConnectEmail('outlook')}
                      className="w-full bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 justify-start"
                    >
                      <svg className="w-5 h-5 mr-3" fill="#0078d4" viewBox="0 0 24 24">
                        <path d="M7.462 0C5.54 0 4 1.546 4 3.462v17.077C4 22.454 5.546 24 7.462 24H20v-5.538h-7.385v-2.769H20V12.92h-7.385v-2.769H20V7.385h-7.385V4.615H20V0H7.462zM0 7.385v9.23c0 1.915 1.546 3.462 3.462 3.462h.923V7.385H0z"/>
                      </svg>
                      Connect Outlook
                    </Button>
                    
                    <Button 
                      onClick={() => handleConnectEmail('yahoo')}
                      className="w-full bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 justify-start"
                    >
                      <svg className="w-5 h-5 mr-3" fill="#7B0099" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-3.92 7.07v4.77h-3.296v-4.77L6.432 8.16h3.584l1.984 3.584L13.984 8.16h3.584z"/>
                      </svg>
                      Connect Yahoo Mail
                    </Button>
                    
                    <Button 
                      onClick={() => handleConnectEmail('other')}
                      variant="outline" 
                      className="w-full justify-start"
                    >
                      <Plus className="w-5 h-5 mr-3" />
                      Other Email Provider
                </Button>
                    
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mt-6">
                      <p className="text-sm text-emerald-800">
                        <strong>🔒 Your privacy is protected:</strong> We only analyze email metadata and headers. Your email content stays private and secure.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            <>
              {activeTab === "inbox" && (
            <div className="h-full flex">
            {/* Email List */}
              <div className={`${selectedEmail ? 'hidden md:flex' : 'flex'} w-full md:w-1/2 bg-white border-r border-gray-200 overflow-y-auto flex-col`}>
                <div className="p-4 border-b border-gray-200">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search emails..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="divide-y divide-gray-100 flex-1">
              {mockEmails.map((email) => (
                <div
                  key={email.id}
                  onClick={() => {
                    setSelectedEmail(email)
                  }}
                      className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                        selectedEmail?.id === email.id ? 'bg-emerald-50 border-r-2 border-emerald-500' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback className="text-xs">
                        {email.sender.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                            <p className={`text-sm font-medium ${!email.isRead ? 'text-gray-900' : 'text-gray-600'}`}>
                            {email.sender}
                            </p>
                            <p className="text-xs text-gray-500 truncate">{email.senderEmail}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-500">{formatDate(email.date)}</span>
                          {email.hasAttachment && <Paperclip className="w-3 h-3 text-gray-400" />}
                        </div>
                      </div>
                      
                      <h3 className={`text-sm mb-1 ${!email.isRead ? 'font-semibold text-gray-900' : 'text-gray-700'}`}>
                        {email.subject}
                      </h3>
                      <p className="text-xs text-gray-500 line-clamp-2 mb-2">
                        {email.preview}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Badge className={`text-xs ${categoryColors[email.category]}`}>
                            {getCategoryIcon(email.category)}
                            <span className="ml-1">{email.category}</span>
                          </Badge>
                          <span className="text-xs text-gray-500">{email.size}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Leaf className="w-3 h-3 text-emerald-500" />
                          <span className="text-xs text-emerald-600">{email.carbonFootprint} kg</span>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>

              {/* Email Detail */}
              <div className={`${selectedEmail ? 'flex' : 'hidden md:flex'} w-full md:w-1/2 bg-gray-50 flex-col`}>
                {selectedEmail ? (
                  <div className="h-full flex flex-col">
                    {/* Mobile Header with Back Button */}
                    <div className="md:hidden bg-white border-b border-gray-200 px-4 py-3">
                <Button
                        variant="ghost" 
                        size="sm" 
                        onClick={handleBackToList}
                        className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
                      >
                        <ChevronLeft className="w-4 h-4 mr-1" />
                        Back to emails
                </Button>
              </div>

                    <div className="bg-white p-6 border-b border-gray-200">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarFallback>{selectedEmail.sender.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h2 className="text-lg font-semibold text-gray-900">{selectedEmail.subject}</h2>
                            <p className="text-sm text-gray-600">{selectedEmail.sender} &lt;{selectedEmail.senderEmail}&gt;</p>
            </div>
          </div>
                        <Button variant="ghost" size="sm" onClick={() => setSelectedEmail(null)} className="hidden md:flex">
                          <X className="w-4 h-4" />
                        </Button>
      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Badge className={`${categoryColors[selectedEmail.category]}`}>
                  {getCategoryIcon(selectedEmail.category)}
                            <span className="ml-1">{selectedEmail.category}</span>
                </Badge>
                          <span className="text-sm text-gray-500">{formatDate(selectedEmail.date)}</span>
                        </div>
                <div className="flex items-center space-x-2">
                          {selectedEmail.canUnsubscribe && (
                  <Button 
                              variant="outline" 
                    size="sm"
                              onClick={() => handleUnsubscribe(selectedEmail.id)}
                  >
                              <Unlink className="w-4 h-4 mr-1" />
                              Unsubscribe
                  </Button>
                          )}
                          {selectedEmail.hasAttachment && (
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleDeleteAttachment(selectedEmail.id)}
                            >
                              <Download className="w-4 h-4 mr-1" />
                              Manage Attachments
                  </Button>
                          )}
                        </div>
                </div>
              </div>
              
                    <div className="flex-1 p-6 overflow-y-auto">
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <p className="text-gray-700 leading-relaxed">
                          {selectedEmail.preview}
                        </p>
                        
                        {/* AI Tips Section */}
                        {(() => {
                          const aiTip = getAITip(selectedEmail);
                          return aiTip && (
                            <div className="mt-6 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                              <div className="flex items-start space-x-3">
                                <Lightbulb className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                                <div className="flex-1">
                                  <h4 className="text-sm font-medium text-emerald-800 mb-2">Smart Suggestion</h4>
                                  <p className="text-sm text-emerald-700 mb-3">{aiTip.message}</p>
                                  <div className="flex items-center space-x-2">
                                    {aiTip.actions.map((action, index) => (
                                      <Button
                                        key={index}
                                        size="sm"
                                        variant={action.variant}
                                        onClick={action.action}
                                        className={action.variant === "default" ? "bg-emerald-600 hover:bg-emerald-700 text-white" : ""}
                                      >
                                        {action.label}
                                      </Button>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })()}
                        
                        <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                          <h4 className="text-sm font-medium text-emerald-800 mb-2">Environmental Impact</h4>
                          <div className="flex items-center space-x-4 text-sm text-emerald-700">
                            <div className="flex items-center">
                              <Leaf className="w-4 h-4 mr-1" />
                              <span>{selectedEmail.carbonFootprint} kg CO2</span>
                </div>
                            <div className="flex items-center">
                              <Archive className="w-4 h-4 mr-1" />
                  <span>{selectedEmail.size}</span>
                </div>
                          </div>
                        </div>
                </div>
              </div>
            </div>
                ) : (
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center">
                      <Mail className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Select an email</h3>
                      <p className="text-gray-500">Click on an email to see details and available actions.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === "eco-actions" && (
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Unlink className="w-5 h-5 mr-2 text-orange-500" />
                      Suggested Unsubscriptions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      12 newsletters detected as rarely opened
                    </p>
                    <Button className="w-full">
                      View Suggestions
                  </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Paperclip className="w-5 h-5 mr-2 text-blue-500" />
                      Large Attachments
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      2.3 GB of old attachments to clean up
                    </p>
                    <Button className="w-full">
                      Manage Attachments
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Archive className="w-5 h-5 mr-2 text-green-500" />
                      Local Archiving
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Enable local archiving to reduce cloud storage
                    </p>
                    <Button className="w-full">
                      Configure
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === "stats" && (
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center">
                      <TreePine className="w-8 h-8 text-emerald-500" />
                      <div className="ml-4">
                        <p className="text-2xl font-bold text-gray-900">2.8 kg</p>
                        <p className="text-xs text-gray-500">CO2 saved this month</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center">
                      <Mail className="w-8 h-8 text-blue-500" />
                      <div className="ml-4">
                        <p className="text-2xl font-bold text-gray-900">1,247</p>
                        <p className="text-xs text-gray-500">Emails processed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center">
                      <Archive className="w-8 h-8 text-orange-500" />
                      <div className="ml-4">
                        <p className="text-2xl font-bold text-gray-900">12.4 GB</p>
                        <p className="text-xs text-gray-500">Storage freed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center">
                      <Leaf className="w-8 h-8 text-green-500" />
                      <div className="ml-4">
                        <p className="text-2xl font-bold text-gray-900">23</p>
                        <p className="text-xs text-gray-500">Equivalent trees</p>
                      </div>
                </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Your Ecological &quot;Spotify Wrapped&quot;</CardTitle>
                  <CardDescription>
                    Your monthly environmental impact
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Emails automatically deleted</span>
                      <span className="text-sm text-gray-500">847 emails</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Unsubscriptions completed</span>
                      <span className="text-sm text-gray-500">12 newsletters</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Attachments archived</span>
                      <span className="text-sm text-gray-500">2.3 GB</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Servers less stressed</span>
                      <span className="text-sm text-gray-500">-15% traffic</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="p-6">
              <div className="max-w-2xl">
                <h2 className="text-xl font-semibold mb-6">Automatic Cleanup Settings</h2>
                
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Automatic Deletion</CardTitle>
                      <CardDescription>
                        Configure automatic email deletion by category
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Unread newsletters</span>
                        <select className="text-sm border rounded px-2 py-1">
                          <option value="30">30 days</option>
                          <option value="15">15 days</option>
                          <option value="7">7 days</option>
                        </select>
                </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Promotional emails</span>
                        <select className="text-sm border rounded px-2 py-1">
                          <option value="15">15 days</option>
                          <option value="7">7 days</option>
                          <option value="3">3 days</option>
                        </select>
              </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Attachment Management</CardTitle>
                      <CardDescription>
                        Automatic actions for large attachments
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Attachments &gt; 10MB</span>
                        <select className="text-sm border rounded px-2 py-1">
                          <option value="archive">Archive locally</option>
                          <option value="download">Download and delete</option>
                          <option value="delete">Delete</option>
                        </select>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Delay before action</span>
                        <select className="text-sm border rounded px-2 py-1">
                          <option value="30">30 days</option>
                          <option value="15">15 days</option>
                          <option value="7">7 days</option>
                        </select>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}
          </>
        )}
        </main>
      </div>
    </div>
  )
} 
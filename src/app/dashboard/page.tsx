'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Mail, 
  TreePine, 
  Archive, 
  Trash2, 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Tag,
  BarChart3,
  Leaf,
  Zap,
  CheckCircle,
  AlertCircle,
  ChevronDown,
  MoreHorizontal,
  UserMinus,
  Calendar,
  Paperclip,
  MessageSquare,
  LogOut,
  Crown,
  Menu,
  X,
  Send,
  Bot
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
    carbonFootprint: 0.2
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
    carbonFootprint: 0.1
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
    carbonFootprint: 0.15
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
    carbonFootprint: 0.8
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
    carbonFootprint: 0.4
  }
]

// Categories with colors
const categoryColors = {
  "Important": "bg-red-100 text-red-800 border-red-200",
  "Promotional": "bg-orange-100 text-orange-800 border-orange-200", 
  "Newsletter": "bg-blue-100 text-blue-800 border-blue-200",
  "Shipping": "bg-green-100 text-green-800 border-green-200",
  "Finance": "bg-purple-100 text-purple-800 border-purple-200"
}

// Mock chat messages
const mockChatMessages = [
  {
    id: 1,
    type: 'assistant',
    content: 'Hello! I\'m your EcoInbox AI assistant. How can I help you optimize your email experience today?',
    timestamp: '2024-01-15T10:00:00'
  },
  {
    id: 2,
    type: 'user',
    content: 'How much CO2 have I saved this month?',
    timestamp: '2024-01-15T10:01:00'
  },
  {
    id: 3,
    type: 'assistant',
    content: 'Great question! This month you\'ve saved 2.8 kg of CO2 by processing 1,247 emails with EcoInbox. That\'s equivalent to planting 23 trees! 🌱',
    timestamp: '2024-01-15T10:01:30'
  }
]

export default function Dashboard() {
  const [selectedEmail, setSelectedEmail] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("inbox")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState(mockChatMessages)
  const [newMessage, setNewMessage] = useState("")
  const [currentView, setCurrentView] = useState("emails") // "emails" or "chat"
  const [showEmailPanel, setShowEmailPanel] = useState(false)

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

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage = {
        id: chatMessages.length + 1,
        type: 'user',
        content: newMessage,
        timestamp: new Date().toISOString()
      }
      
      setChatMessages([...chatMessages, userMessage])
      setNewMessage("")
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: chatMessages.length + 2,
          type: 'assistant',
          content: 'Thank you for your message! As an AI assistant, I\'d be happy to help you with email management, carbon footprint analysis, or any EcoInbox features.',
          timestamp: new Date().toISOString()
        }
        setChatMessages(prev => [...prev, aiResponse])
      }, 1000)
    }
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

  return (
    <div className="h-screen flex bg-gray-50 relative">
      {/* Mobile menu overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={(e) => {
            // Only close if clicking on the overlay itself, not on the sidebar
            if (e.target === e.currentTarget) {
              setIsSidebarOpen(false)
            }
          }}
        />
      )}

      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 p-4 z-30">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
          <div className="flex items-center space-x-2">
            <div className="p-1.5 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 text-white">
              <Mail className="h-4 w-4" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
              EcoInbox
            </span>
          </div>
          <div className="w-10" />
        </div>
      </div>

      {/* Left Sidebar */}
      <div className={`
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 fixed lg:relative z-50 lg:z-auto
        w-80 bg-white border-r border-gray-200 flex flex-col h-full
        transition-transform duration-300 ease-in-out overflow-y-auto
      `}>
        {/* Close button for mobile */}
        <div className="lg:hidden flex justify-end p-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 text-white">
              <Mail className="h-6 w-6" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
              EcoInbox
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div className="p-4 space-y-2">
          <Button 
            variant={activeTab === "inbox" && currentView === "emails" ? "default" : "ghost"} 
            className={`w-full justify-start ${activeTab === "inbox" && currentView === "emails" ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100" : ""}`}
            onClick={() => {
              setActiveTab("inbox")
              setCurrentView("emails")
              setIsSidebarOpen(false)
            }}
          >
            <Mail className="w-4 h-4 mr-3" />
            Inbox
            <Badge className="ml-auto bg-emerald-100 text-emerald-800">
              {mockEmails.filter(e => !e.isRead).length}
            </Badge>
          </Button>
          <Button 
            variant={activeTab === "archives" && currentView === "emails" ? "default" : "ghost"} 
            className={`w-full justify-start ${activeTab === "archives" && currentView === "emails" ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100" : ""}`}
            onClick={() => {
              setActiveTab("archives")
              setCurrentView("emails")
              setIsSidebarOpen(false)
            }}
          >
            <Archive className="w-4 h-4 mr-3" />
            Archived
          </Button>
          <Button 
            variant={activeTab === "trash" && currentView === "emails" ? "default" : "ghost"} 
            className={`w-full justify-start ${activeTab === "trash" && currentView === "emails" ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100" : ""}`}
            onClick={() => {
              setActiveTab("trash")
              setCurrentView("emails")
              setIsSidebarOpen(false)
            }}
          >
            <Trash2 className="w-4 h-4 mr-3" />
            Trash
          </Button>
          <Button 
            variant={currentView === "chat" ? "default" : "ghost"} 
            className={`w-full justify-start ${currentView === "chat" ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100" : ""}`}
            onClick={() => {
              setCurrentView("chat")
              setIsSidebarOpen(false)
            }}
          >
            <MessageSquare className="w-4 h-4 mr-3" />
            AI Assistant
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="p-4 space-y-3 flex-1 overflow-y-auto">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">This Month's Stats</h3>
          
          <Card className="bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200">
            <CardContent className="pt-3 pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-bold text-emerald-700">1,247</p>
                  <p className="text-xs text-emerald-600">Emails processed</p>
                </div>
                <Zap className="w-6 h-6 text-emerald-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <CardContent className="pt-3 pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-bold text-blue-700">2.8 kg</p>
                  <p className="text-xs text-blue-600">CO2 saved</p>
                </div>
                <Leaf className="w-6 h-6 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardContent className="pt-3 pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-bold text-green-700">23</p>
                  <p className="text-xs text-green-600">Trees planted</p>
                </div>
                <TreePine className="w-6 h-6 text-green-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* User Profile Section */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3 mb-4">
            <Avatar className="w-10 h-10">
              <AvatarFallback className="bg-emerald-100 text-emerald-700">
                JD
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">John Doe</p>
              <div className="flex items-center space-x-1">
                <Crown className="w-3 h-3 text-yellow-500" />
                <Badge className="text-xs bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 border-yellow-200">
                  Pro Plan
                </Badge>
              </div>
            </div>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full text-gray-600 hover:text-gray-800"
            onClick={() => {
              console.log('Logout clicked')
            }}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </div>

      {/* Central Content Area */}
      <div className={`flex-1 flex flex-col ${isSidebarOpen ? 'hidden lg:flex' : 'flex'} pt-16 lg:pt-0`}>
        {currentView === "emails" ? (
          <>
            {/* Search Bar */}
            <div className="p-4 lg:p-6 bg-white border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search in your emails..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </div>
            </div>

            {/* Email List */}
            <div className="flex-1 overflow-y-auto">
              {mockEmails.map((email) => (
                <div
                  key={email.id}
                  className={`p-3 lg:p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
                    selectedEmail?.id === email.id ? 'bg-emerald-50 border-l-4 border-l-emerald-500' : ''
                  } ${!email.isRead ? 'bg-blue-50/30' : ''}`}
                  onClick={() => {
                    setSelectedEmail(email)
                    setShowEmailPanel(true)
                  }}
                >
                  <div className="flex items-start space-x-3 lg:space-x-4">
                    <Avatar className="w-8 h-8 lg:w-10 lg:h-10">
                      <AvatarFallback className="bg-gray-200 text-gray-600 text-xs lg:text-sm">
                        {email.sender.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center space-x-2">
                          <span className={`font-medium text-xs lg:text-sm ${!email.isRead ? 'text-gray-900 font-semibold' : 'text-gray-700'}`}>
                            {email.sender}
                          </span>
                          <Badge className={`text-xs px-1.5 py-0.5 lg:px-2 lg:py-0.5 flex items-center space-x-1 ${categoryColors[email.category] || 'bg-gray-100 text-gray-800'}`}>
                            {getCategoryIcon(email.category)}
                            <span className="hidden sm:inline">{email.category}</span>
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          {email.hasAttachment && <Paperclip className="w-3 h-3" />}
                          {email.isImportant && <Star className="w-3 h-3 text-yellow-500 fill-current" />}
                          <span className="hidden sm:inline">{formatDate(email.date)}</span>
                        </div>
                      </div>
                      
                      <h4 className={`text-xs lg:text-sm mb-1 truncate ${!email.isRead ? 'font-semibold text-gray-900' : 'text-gray-800'}`}>
                        {email.subject}
                      </h4>
                      
                      <p className="text-xs text-gray-600 truncate mb-2 hidden sm:block">
                        {email.preview}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 lg:space-x-4 text-xs text-gray-500">
                          <span>{email.size}</span>
                          <span className="flex items-center space-x-1">
                            <Leaf className="w-3 h-3 text-green-500" />
                            <span>{email.carbonFootprint} kg CO2</span>
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-1">
                          <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                            <Archive className="w-3 h-3" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                            <Trash2 className="w-3 h-3" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-6 w-6 p-0 hidden sm:inline-flex">
                            <UserMinus className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          /* AI Chat Interface */
          <div className="flex flex-col h-full">
            {/* Chat Header */}
            <div className="p-4 lg:p-6 bg-white border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 text-white">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">AI Assistant</h2>
                  <p className="text-sm text-gray-600">Your intelligent email companion</p>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-4">
              {chatMessages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.type === 'user' 
                      ? 'bg-emerald-500 text-white' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.type === 'user' ? 'text-emerald-100' : 'text-gray-500'
                    }`}>
                      {formatDate(message.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-4 lg:p-6 bg-white border-t border-gray-200">
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  placeholder="Ask your AI assistant anything..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button
                  onClick={handleSendMessage}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white"
                  disabled={!newMessage.trim()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Right Panel - Email Preview */}
      <div className={`
        ${currentView === "chat" || !showEmailPanel ? "hidden" : ""}
        ${isSidebarOpen ? 'hidden lg:flex' : 'flex'}
        w-full lg:w-96 bg-white border-l border-gray-200 fixed lg:relative
        bottom-0 left-0 right-0 lg:bottom-auto lg:left-auto lg:right-auto
        h-1/2 lg:h-full flex-col z-20
      `}>
        {selectedEmail && currentView === "emails" && showEmailPanel && (
          <>
            {/* Email Header */}
            <div className="p-4 lg:p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <Badge className={`text-xs px-3 py-1 flex items-center space-x-1 ${categoryColors[selectedEmail.category] || 'bg-gray-100 text-gray-800'}`}>
                  {getCategoryIcon(selectedEmail.category)}
                  <span>{selectedEmail.category}</span>
                </Badge>
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => {
                      setSelectedEmail(null)
                      setShowEmailPanel(false)
                    }}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <h2 className="text-base lg:text-lg font-semibold mb-2 text-gray-900">
                {selectedEmail.subject}
              </h2>
              
              <div className="flex items-center space-x-3 mb-4">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-gray-200 text-gray-600 text-xs">
                    {selectedEmail.sender.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{selectedEmail.sender}</p>
                  <p className="text-xs text-gray-600">{selectedEmail.senderEmail}</p>
                </div>
              </div>
              
              <div className="text-xs text-gray-600 space-y-1">
                <div className="flex justify-between">
                  <span>Date:</span>
                  <span>{new Date(selectedEmail.date).toLocaleString('en-US')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Size:</span>
                  <span>{selectedEmail.size}</span>
                </div>
                <div className="flex justify-between">
                  <span>CO2 Impact:</span>
                  <span className="text-green-600">{selectedEmail.carbonFootprint} kg</span>
                </div>
              </div>
            </div>

            {/* Email Content */}
            <div className="flex-1 p-4 lg:p-6 overflow-y-auto">
              <div className="prose prose-sm max-w-none">
                <p className="text-gray-800 leading-relaxed">
                  {selectedEmail.preview}
                </p>
                <br />
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <br />
                <p className="text-gray-600">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
              </div>
            </div>

            {/* AI Actions and Suggestions */}
            <div className="p-4 lg:p-6 border-t border-gray-200 space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Quick Actions</h3>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" variant="outline">
                    <Archive className="w-3 h-3 mr-2" />
                    Archive
                  </Button>
                  <Button size="sm" variant="outline">
                    <Trash2 className="w-3 h-3 mr-2" />
                    Delete
                  </Button>
                  {(selectedEmail.category === "Promotional" || selectedEmail.category === "Newsletter") && (
                    <Button size="sm" variant="outline">
                      <UserMinus className="w-3 h-3 mr-2" />
                      Unsubscribe
                    </Button>
                  )}
                  {selectedEmail.category === "Important" && (
                    <Button size="sm" variant="outline">
                      <Calendar className="w-3 h-3 mr-2" />
                      Add to calendar
                    </Button>
                  )}
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-4 rounded-lg border border-emerald-200">
                <div className="flex items-start space-x-3">
                  <Zap className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-emerald-800 mb-1">
                      AI Suggestion
                    </h4>
                    <p className="text-xs text-emerald-700">
                      {(selectedEmail.category === "Promotional" || selectedEmail.category === "Newsletter") && "This email appears to be promotional content. Would you like to automatically unsubscribe from this type of content?"}
                      {selectedEmail.category === "Important" && "This email contains a meeting date. Would you like to add it to your calendar automatically?"}
                      {!["Promotional", "Newsletter", "Important"].includes(selectedEmail.category) && "This email can be automatically archived after 7 days."}
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-xs text-gray-500 mb-2">
                  Environmental impact of this email
                </p>
                <div className="bg-green-100 text-green-800 px-3 py-2 rounded-full text-xs font-medium">
                  <Leaf className="w-3 h-3 inline mr-1" />
                  {selectedEmail.carbonFootprint} kg CO2 saved by deleting
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
} 

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Send, Bot, User, Mic, Clock } from "lucide-react";

const BotChat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      content: "Good morning, Design Team! 🌅 Time for your daily standup. Please share:\n\n• What did you work on yesterday?\n• What are your plans for today?\n• Any blockers or help needed?",
      timestamp: "10:00 AM",
      type: "standup_prompt"
    },
    {
      id: 2,
      sender: "Sarah Chen",
      content: "Yesterday: Completed user interviews for the mobile app. Today: Starting wireframe designs for the onboarding flow. No blockers!",
      timestamp: "10:15 AM",
      type: "standup_response"
    },
    {
      id: 3,
      sender: "Mike Rodriguez",
      content: "Yesterday: Fixed the authentication bug and wrote unit tests. Today: Working on payment integration with Stripe. Blocker: Need the new checkout design specs from Sarah.",
      timestamp: "10:18 AM", 
      type: "standup_response"
    },
    {
      id: 4,
      sender: "bot",
      content: "Thanks for the updates! 📊 I've noted Mike's blocker about checkout design specs. Sarah, can you prioritize this for Mike?",
      timestamp: "10:20 AM",
      type: "bot_response"
    },
    {
      id: 5,
      sender: "bot",
      content: "📋 **Daily Summary** (4/5 team members checked in):\n\n✅ **Completed**: User interviews, auth bug fixes\n🎯 **In Progress**: Wireframes, payment integration\n⚠️ **Blockers**: Checkout design specs needed\n\nGreat momentum team! 🚀",
      timestamp: "11:00 AM",
      type: "summary"
    }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: "You",
        content: message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: "user_message"
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const getMessageIcon = (sender: string, type: string) => {
    if (sender === "bot") {
      return <Bot className="h-4 w-4 text-blue-600" />;
    }
    return <User className="h-4 w-4 text-gray-600" />;
  };

  const getMessageBadge = (type: string) => {
    switch (type) {
      case "standup_prompt":
        return <Badge variant="default" className="text-xs">Standup</Badge>;
      case "summary":
        return <Badge variant="secondary" className="text-xs">AI Summary</Badge>;
      case "standup_response":
        return <Badge variant="outline" className="text-xs">Response</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>DT</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Design Team Chat</h1>
                <p className="text-sm text-gray-600">5 members • Last active 2 min ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">Next standup: Tomorrow 10:00 AM</span>
            </div>
          </div>
        </div>
      </header>

      {/* Chat Container */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Card className="h-[600px] flex flex-col">
          <CardHeader className="flex-shrink-0">
            <CardTitle className="text-lg">Team Communication</CardTitle>
          </CardHeader>
          
          {/* Messages */}
          <CardContent className="flex-1 overflow-y-auto space-y-4 p-6">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex space-x-3 ${
                  msg.sender === "bot" ? "justify-start" : 
                  msg.sender === "You" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender !== "You" && (
                  <Avatar className="h-8 w-8 flex-shrink-0">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>
                      {msg.sender === "bot" ? "AI" : msg.sender.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                )}
                
                <div className={`max-w-2xl ${msg.sender === "You" ? "order-first" : ""}`}>
                  <div className="flex items-center space-x-2 mb-1">
                    {msg.sender !== "You" && (
                      <>
                        <span className="text-sm font-medium text-gray-900">{msg.sender}</span>
                        {getMessageIcon(msg.sender, msg.type)}
                      </>
                    )}
                    <span className="text-xs text-gray-500">{msg.timestamp}</span>
                    {getMessageBadge(msg.type)}
                  </div>
                  
                  <div
                    className={`p-3 rounded-lg ${
                      msg.sender === "bot" 
                        ? "bg-blue-50 border border-blue-200" 
                        : msg.sender === "You"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{msg.content}</p>
                  </div>
                </div>

                {msg.sender === "You" && (
                  <Avatar className="h-8 w-8 flex-shrink-0">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>You</AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
          </CardContent>

          {/* Input Area */}
          <div className="flex-shrink-0 p-6 border-t bg-gray-50">
            <div className="flex space-x-4">
              <Input
                placeholder="Type your message or standup update..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
              />
              <Button variant="outline" size="icon">
                <Mic className="h-4 w-4" />
              </Button>
              <Button onClick={handleSendMessage}>
                <Send className="h-4 w-4 mr-2" />
                Send
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              💡 Pro tip: You can also send voice messages for standup updates!
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BotChat;

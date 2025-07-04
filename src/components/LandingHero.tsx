
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Users, Clock, BarChart3 } from "lucide-react";

const LandingHero = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Daily Standups",
      description: "Automated daily check-ins via Telegram bot"
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Simple team setup and member management"
    },
    {
      icon: Clock,
      title: "Smart Reminders",
      description: "AI-powered deadline and task reminders"
    },
    {
      icon: BarChart3,
      title: "AI Summaries",
      description: "Intelligent daily progress summaries"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="px-6 py-4 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <MessageSquare className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">TeamSync AI</h1>
          </div>
          <Button variant="outline">Sign In</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Automate Your Team's
            <span className="text-blue-600"> Daily Standups</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A Telegram-native AI assistant that saves SMB teams hours each week by automating 
            routine project management tasks, status updates, and team communication.
          </p>
          <div className="space-x-4">
            <Button size="lg" className="px-8 py-3">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Everything You Need to Keep Teams Aligned
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h3>
          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900">Add Bot to Telegram Group</h4>
                <p className="text-gray-600">Simply add our bot to your existing team Telegram group</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900">Configure Daily Standups</h4>
                <p className="text-gray-600">Set your preferred time for daily check-ins and team prompts</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900">Get AI-Powered Insights</h4>
                <p className="text-gray-600">Receive intelligent summaries and actionable reminders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Team Communication?
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            Join SMB teams saving 5+ hours per week with automated standups
          </p>
          <Button size="lg" variant="secondary" className="px-8 py-3">
            Start Your Free Trial
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingHero;

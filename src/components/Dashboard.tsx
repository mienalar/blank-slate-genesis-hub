
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, Settings, MessageSquare, Users, Calendar, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const [activeTeam, setActiveTeam] = useState("Design Team");

  const teams = [
    {
      name: "Design Team",
      members: 5,
      lastActive: "2 hours ago",
      status: "Active",
      responseRate: "85%"
    },
    {
      name: "Dev Squad",
      members: 8,
      lastActive: "1 hour ago", 
      status: "Active",
      responseRate: "92%"
    }
  ];

  const recentUpdates = [
    {
      user: "Sarah Chen",
      avatar: "/placeholder.svg",
      time: "10:30 AM",
      message: "Completed user research analysis, starting wireframes today. No blockers.",
      type: "standup"
    },
    {
      user: "Mike Rodriguez", 
      avatar: "/placeholder.svg",
      time: "10:25 AM",
      message: "Fixed the authentication bug, working on payment integration. Need design specs for checkout flow.",
      type: "standup"
    },
    {
      user: "TeamSync AI",
      avatar: "/placeholder.svg",
      time: "11:00 AM",
      message: "Daily Summary: 4/5 team members checked in. 2 active tasks, 1 blocker identified.",
      type: "summary"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <MessageSquare className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">TeamSync AI</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>PM</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">Your Teams</CardTitle>
                  <Button size="sm" variant="outline">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {teams.map((team) => (
                  <div 
                    key={team.name}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      activeTeam === team.name ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setActiveTeam(team.name)}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium text-sm">{team.name}</h3>
                      <Badge variant={team.status === 'Active' ? 'default' : 'secondary'} className="text-xs">
                        {team.status}
                      </Badge>
                    </div>
                    <div className="text-xs text-gray-500 space-y-1">
                      <div className="flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        {team.members} members
                      </div>
                      <div>Response Rate: {team.responseRate}</div>
                      <div>Last: {team.lastActive}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Today's Response Rate</p>
                      <p className="text-2xl font-bold text-green-600">85%</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Active Tasks</p>
                      <p className="text-2xl font-bold text-blue-600">12</p>
                    </div>
                    <Calendar className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Pending Reminders</p>
                      <p className="text-2xl font-bold text-orange-600">3</p>
                    </div>
                    <MessageSquare className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Tabs */}
            <Tabs defaultValue="activity" className="space-y-4">
              <TabsList>
                <TabsTrigger value="activity">Recent Activity</TabsTrigger>
                <TabsTrigger value="summaries">AI Summaries</TabsTrigger>
                <TabsTrigger value="settings">Bot Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="activity">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Team Updates</CardTitle>
                    <CardDescription>
                      Latest standups and bot interactions for {activeTeam}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentUpdates.map((update, index) => (
                      <div key={index} className="flex space-x-4 p-4 bg-gray-50 rounded-lg">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={update.avatar} />
                          <AvatarFallback>{update.user.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-medium text-sm">{update.user}</span>
                            <span className="text-xs text-gray-500">{update.time}</span>
                            <Badge variant="outline" className="text-xs">
                              {update.type}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-700">{update.message}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="summaries">
                <Card>
                  <CardHeader>
                    <CardTitle>AI-Generated Summaries</CardTitle>
                    <CardDescription>
                      Daily progress summaries for your team
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium">Today's Summary</h4>
                          <span className="text-xs text-gray-500">Generated at 11:00 AM</span>
                        </div>
                        <p className="text-sm text-gray-700">
                          Strong team momentum today with 4/5 members checking in. Design team is progressing well on user research analysis. 
                          Development team resolved authentication issues and is moving forward with payment integration. 
                          One blocker identified: Design specs needed for checkout flow.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle>Bot Configuration</CardTitle>
                    <CardDescription>
                      Manage your TeamSync AI bot settings for {activeTeam}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">Standup Time</label>
                        <p className="text-sm text-gray-600">10:00 AM daily</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Summary Time</label>
                        <p className="text-sm text-gray-600">11:00 AM daily</p>
                      </div>
                    </div>
                    <Button variant="outline">Configure Settings</Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

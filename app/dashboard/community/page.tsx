"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import DashboardLayout from "@/components/dashboard-layout";
import { Search, MessageSquare, Share2, ThumbsUp, MapPin } from "lucide-react";

export default function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Community</h1>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input
            placeholder="Search communities, posts, or members..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Tabs defaultValue="feed">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="feed">Community Feed</TabsTrigger>
            <TabsTrigger value="clusters">Local Clusters</TabsTrigger>
            <TabsTrigger value="members">Members</TabsTrigger>
          </TabsList>

          <TabsContent value="feed" className="mt-6 space-y-6">
            {/* Community Feed Content */}
            {/* Existing Code */}
          </TabsContent>

          <TabsContent value="clusters" className="mt-6">
            {/* Clusters Content */}
            {/* Existing Code */}
          </TabsContent>

          <TabsContent value="members" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Community Members</CardTitle>
                <CardDescription>
                  Connect with other ReCircle members in your area
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      id: 1,
                      name: "Sarah Johnson",
                      avatar: "/placeholder.svg?height=64&width=64",
                      initials: "SJ",
                      location: "Portland, OR",
                      joined: "Member since 2022",
                      badges: ["Recycling Pro", "Community Leader"],
                    },
                    {
                      id: 2,
                      name: "Miguel Rodriguez",
                      avatar: "/placeholder.svg?height=64&width=64",
                      initials: "MR",
                      location: "Portland, OR",
                      joined: "Member since 2023",
                      badges: ["Event Organizer"],
                    },
                    {
                      id: 3,
                      name: "Aisha Williams",
                      avatar: "/placeholder.svg?height=64&width=64",
                      initials: "AW",
                      location: "Portland, OR",
                      joined: "Member since 2021",
                      badges: ["Composting Expert", "100kg Club"],
                    },
                    {
                      id: 4,
                      name: "David Chen",
                      avatar: "/placeholder.svg?height=64&width=64",
                      initials: "DC",
                      location: "Portland, OR",
                      joined: "Member since 2022",
                      badges: ["Zero Waste Advocate"],
                    },
                    {
                      id: 5,
                      name: "Emma Thompson",
                      avatar: "/placeholder.svg?height=64&width=64",
                      initials: "ET",
                      location: "Portland, OR",
                      joined: "Member since 2023",
                      badges: ["New Member"],
                    },
                    {
                      id: 6,
                      name: "James Wilson",
                      avatar: "/placeholder.svg?height=64&width=64",
                      initials: "JW",
                      location: "Portland, OR",
                      joined: "Member since 2020",
                      badges: ["Community Veteran"],
                    },
                  ].map((member) => (
                    <Card key={member.id}>
                      <CardHeader>
                        <div className="flex items-center">
                          <Avatar className="h-10 w-10 mr-3">
                            <AvatarImage src={member.avatar} alt={member.name} />
                            <AvatarFallback>{member.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle>{member.name}</CardTitle>
                            <CardDescription>{member.location}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 mb-4">{member.joined}</p>
                        <div className="flex flex-wrap gap-2">
                          {member.badges.map((badge) => (
                            <Badge key={badge} className="bg-gray-100">
                              {badge}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}

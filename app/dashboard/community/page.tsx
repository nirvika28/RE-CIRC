"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import DashboardLayout from "@/components/dashboard-layout"
import { Search, MessageSquare, Share2, ThumbsUp, MapPin } from "lucide-react"

export default function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState("")
  
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
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Share with the Community</CardTitle>
                <CardDescription>
                  Share tips, ask questions, or post updates about your sustainability journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Textarea placeholder="What's on your mind?" className="min-h-[100px]" />
                  <div className="flex justify-end">
                    <Button className="bg-green-600 hover:bg-green-700">
                      Post Update
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
            
            <div className="space-y-4">
              {[
                {
                  id: 1,
                  user: {
                    name: "Sarah Johnson",
                    avatar: "/placeholder.svg?height=40&width=40",
                    initials: "SJ",
                  },
                  time: "2 hours ago",
                  content: "Just finished setting up my home composting system! It was much easier than I expected. Has anyone else tried this? Any tips for a beginner?",
                  likes: 24,
                  comments: 8,
                },
                {
                  id: 2,
                  user: {
                    name: "Portland Eco Warriors",
                    avatar: "/placeholder.svg?height=40&width=40",
                    initials: "PEW",
                  },
                  time: "Yesterday",
                  content: "We're organizing a community cleanup this Saturday at Riverside Park from 9am-12pm. Bring gloves if you have them, but we'll provide all other supplies. Hope to see many of you there!",
                  likes: 42,
                  comments: 15,
                },
                {
                  id: 3,
                  user: {
                    name: "Miguel Rodriguez",
                    avatar: "/placeholder.svg?height=40&width=40",
                    initials: "MR",
                  },
                  time: "2 days ago",
                  content: "I found this great guide on how to properly recycle electronics. Thought it might be helpful for others in our community: [Link to Guide]",
                  likes: 18,
                  comments: 5,
                },
              ].map((post) => (
                <Card key={post.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={post.user.avatar || "/placeholder.svg"} alt={post.user.name} />
                        <AvatarFallback>{post.user.initials}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{post.user.name}</p>
                          <p className="text-xs text-gray-500">{post.time}</p>
                        </div>
                        <p className="mt-2 text-gray-700">{post.content}</p>
                        <div className="mt-4 flex items-center gap-4">
                          <Button variant="ghost" size="sm" className="flex items-center gap-1">
                            <ThumbsUp className="h-4 w-4" />
                            <span>{post.likes}</span>
                          </Button>
                          <Button variant="ghost" size="sm" className="flex items-center gap-1">
                            <MessageSquare className="h-4 w-4" />
                            <span>{post.comments}</span>
                          </Button>
                          <Button variant="ghost" size="sm" className="flex items-center gap-1">
                            <Share2 className="h-4 w-4" />
                            <span>Share</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="clusters" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  id: 1,
                  name: "Portland Eco Warriors",
                  location: "Portland, OR",
                  members: 128,
                  description: "A community focused on urban sustainability and waste reduction in Portland.",
                  tags: ["Urban", "Recycling", "Education"],
                },
                {
                  id: 2,
                  name: "Green Thumb Gardeners",
                  location: "Portland, OR",
                  members: 86,
                  description: "Community gardening, composting, and food sharing initiatives.",
                  tags: ["Gardening", "Composting", "Food"],
                },
                {
                  id: 3,
                  name: "Zero Waste Portland",
                  location: "Portland, OR",
                  members: 210,
                  description: "Working towards a zero waste lifestyle in the Portland metro area.",
                  tags: ["Zero Waste", "Minimalism", "DIY"],
                },
                {
                  id: 4,
                  name: "Sustainable Transport PDX",
                  location: "Portland, OR",
                  members: 94,
                  description: "Promoting car-free living and sustainable transportation options.",
                  tags: ["Transport", "Cycling", "Public Transit"],
                },
              ].map((cluster) => (
                <Card key={cluster.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{cluster.name}</CardTitle>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        {cluster.members} members
                      </Badge>
                    </div>
                    <CardDescription className="flex items-center">
                      <MapPin className="mr-1 h-3 w-3" />
                      {cluster.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">{cluster.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cluster.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-gray-100">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Join Cluster
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
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
                      initials

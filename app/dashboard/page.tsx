"use client"

import { useState } from "react"
import { Recycle, Leaf, Award, Clock, Bell } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import DashboardLayout from "@/components/dashboard-layout"
import { Progress } from "@/components/ui/progress"
import { ImpactChart } from "@/components/impact-chart"
import { RecyclingChart } from "@/components/recycling-chart"
import { CommunityActivity } from "@/components/community-activity"
import { UpcomingEvents } from "@/components/upcoming-events"

export default function DashboardPage() {
  const [timeframe, setTimeframe] = useState("month")

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-600 text-[10px] font-medium text-white">
                3
              </span>
            </Button>
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>Sh</AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <p className="text-sm font-medium">Shweta</p>
                <p className="text-xs text-gray-500">Hebbal,BLR</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Recycled</CardTitle>
              <Recycle className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">127.4 kg</div>
              <p className="text-xs text-green-600 flex items-center mt-1">+12.5% from last month</p>
              <Progress value={65} className="h-1 mt-3" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">CO₂ Saved</CardTitle>
              <Leaf className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42.8 kg</div>
              <p className="text-xs text-green-600 flex items-center mt-1">+8.3% from last month</p>
              <Progress value={42} className="h-1 mt-3" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Community Rank</CardTitle>
              <Award className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">#12</div>
              <p className="text-xs text-green-600 flex items-center mt-1">Up 3 positions</p>
              <Progress value={78} className="h-1 mt-3" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Streak</CardTitle>
              <Clock className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">14 days</div>
              <p className="text-xs text-green-600 flex items-center mt-1">Personal best!</p>
              <Progress value={56} className="h-1 mt-3" />
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="lg:col-span-4">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-1">
                <CardTitle>Environmental Impact</CardTitle>
                <CardDescription>Your recycling and sustainability metrics over time</CardDescription>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <Button
                  variant={timeframe === "week" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTimeframe("week")}
                  className={timeframe === "week" ? "bg-green-600 hover:bg-green-700" : ""}
                >
                  Week
                </Button>
                <Button
                  variant={timeframe === "month" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTimeframe("month")}
                  className={timeframe === "month" ? "bg-green-600 hover:bg-green-700" : ""}
                >
                  Month
                </Button>
                <Button
                  variant={timeframe === "year" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTimeframe("year")}
                  className={timeframe === "year" ? "bg-green-600 hover:bg-green-700" : ""}
                >
                  Year
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <ImpactChart timeframe={timeframe} />
            </CardContent>
          </Card>
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Recycling Breakdown</CardTitle>
              <CardDescription>Distribution of your recycled materials</CardDescription>
            </CardHeader>
            <CardContent>
              <RecyclingChart />
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Community Activity</CardTitle>
              <CardDescription>Recent activities in your local cluster</CardDescription>
            </CardHeader>
            <CardContent>
              <CommunityActivity />
            </CardContent>
          </Card>
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Events in your area</CardDescription>
            </CardHeader>
            <CardContent>
              <UpcomingEvents />
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

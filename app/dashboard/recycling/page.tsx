"use client"

import type React from "react"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { RecyclingChart } from "@/components/recycling-chart"
import DashboardLayout from "@/components/dashboard-layout"
import { Camera, Upload, Recycle, Award, ChevronRight } from "lucide-react"

export default function RecyclingPage() {
  const [selectedTab, setSelectedTab] = useState("log")
  const [materialType, setMaterialType] = useState("")
  const [weight, setWeight] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert(`Logged ${weight}kg of ${materialType}`)
    setMaterialType("")
    setWeight("")
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Recycling</h1>
        </div>

        <Tabs defaultValue="log" value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="log">Log Recycling</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="guide">Recycling Guide</TabsTrigger>
          </TabsList>

          <TabsContent value="log" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Log Your Recycling</CardTitle>
                  <CardDescription>Record what you've recycled to track your impact and earn credits.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="material-type">Material Type</Label>
                      <Select value={materialType} onValueChange={setMaterialType} required>
                        <SelectTrigger id="material-type">
                          <SelectValue placeholder="Select material type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="paper">Paper</SelectItem>
                          <SelectItem value="plastic">Plastic</SelectItem>
                          <SelectItem value="glass">Glass</SelectItem>
                          <SelectItem value="metal">Metal</SelectItem>
                          <SelectItem value="organic">Organic</SelectItem>
                          <SelectItem value="electronic">Electronic</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="weight">Weight (kg)</Label>
                      <Input
                        id="weight"
                        type="number"
                        placeholder="Enter weight"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        required
                        step="0.1"
                        min="0.1"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="photo">Photo (optional)</Label>
                      <div className="flex gap-2">
                        <Button type="button" variant="outline" className="flex-1">
                          <Camera className="mr-2 h-4 w-4" />
                          Take Photo
                        </Button>
                        <Button type="button" variant="outline" className="flex-1">
                          <Upload className="mr-2 h-4 w-4" />
                          Upload
                        </Button>
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                      Log Recycling
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Goals</CardTitle>
                    <CardDescription>Your progress towards this month's recycling targets</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Paper: 12.5/20 kg</span>
                        <span className="text-sm font-medium">63%</span>
                      </div>
                      <Progress value={63} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Plastic: 8.2/10 kg</span>
                        <span className="text-sm font-medium">82%</span>
                      </div>
                      <Progress value={82} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Glass: 3.5/15 kg</span>
                        <span className="text-sm font-medium">23%</span>
                      </div>
                      <Progress value={23} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Metal: 4.8/5 kg</span>
                        <span className="text-sm font-medium">96%</span>
                      </div>
                      <Progress value={96} className="h-2" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recycling Achievements</CardTitle>
                    <CardDescription>Badges and milestones you've earned</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                        <Award className="mr-1 h-3 w-3" /> 100kg Milestone
                      </Badge>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                        <Award className="mr-1 h-3 w-3" /> Paper Pro
                      </Badge>
                      <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                        <Award className="mr-1 h-3 w-3" /> 30-Day Streak
                      </Badge>
                      <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">
                        <Award className="mr-1 h-3 w-3" /> Community Leader
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="history" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Recycling History</CardTitle>
                <CardDescription>View your recycling activity over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <RecyclingChart />
                </div>

                <Separator className="my-4" />

                <div className="space-y-4">
                  <h3 className="font-medium">Recent Activity</h3>

                  <div className="space-y-2">
                    {[
                      { date: "Sep 10, 2023", material: "Paper", weight: "3.2 kg" },
                      { date: "Sep 8, 2023", material: "Plastic", weight: "1.8 kg" },
                      { date: "Sep 5, 2023", material: "Glass", weight: "2.5 kg" },
                      { date: "Sep 2, 2023", material: "Metal", weight: "0.9 kg" },
                      { date: "Aug 29, 2023", material: "Paper", weight: "2.7 kg" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                        <div>
                          <p className="font-medium">{item.material}</p>
                          <p className="text-sm text-gray-500">{item.date}</p>
                        </div>
                        <div className="flex items-center">
                          <span className="font-medium mr-2">{item.weight}</span>
                          <ChevronRight className="h-4 w-4 text-gray-400" />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-center pt-2">
                    <Button variant="link" className="text-green-700">
                      View full history
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="guide" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Recycling Guide</CardTitle>
                <CardDescription>Learn how to properly sort and recycle different materials</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <Recycle className="h-5 w-5 text-blue-700" />
                      </div>
                      <div>
                        <h3 className="font-medium">Paper</h3>
                        <p className="text-sm text-gray-600">Newspapers, magazines, cardboard, office paper</p>
                      </div>
                    </div>
                    <div className="mt-3 text-sm">
                      <p className="mb-2">
                        <strong>Do:</strong> Remove plastic wrapping, flatten cardboard boxes
                      </p>
                      <p>
                        <strong>Don't:</strong> Include greasy or food-stained paper, tissues, paper towels
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                        <Recycle className="h-5 w-5 text-green-700" />
                      </div>
                      <div>
                        <h3 className="font-medium">Plastic</h3>
                        <p className="text-sm text-gray-600">Bottles, containers, packaging</p>
                      </div>
                    </div>
                    <div className="mt-3 text-sm">
                      <p className="mb-2">
                        <strong>Do:</strong> Rinse containers, check for recycling numbers (1-7)
                      </p>
                      <p>
                        <strong>Don't:</strong> Include plastic bags, styrofoam, or unmarked plastics
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                        <Recycle className="h-5 w-5 text-amber-700" />
                      </div>
                      <div>
                        <h3 className="font-medium">Glass</h3>
                        <p className="text-sm text-gray-600">Bottles, jars</p>
                      </div>
                    </div>
                    <div className="mt-3 text-sm">
                      <p className="mb-2">
                        <strong>Do:</strong> Rinse containers, remove lids and caps
                      </p>
                      <p>
                        <strong>Don't:</strong> Include window glass, mirrors, light bulbs, ceramics
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <Recycle className="h-5 w-5 text-gray-700" />
                      </div>
                      <div>
                        <h3 className="font-medium">Metal</h3>
                        <p className="text-sm text-gray-600">Aluminum cans, steel cans, foil</p>
                      </div>
                    </div>
                    <div className="mt-3 text-sm">
                      <p className="mb-2">
                        <strong>Do:</strong> Rinse containers, flatten if possible
                      </p>
                      <p>
                        <strong>Don't:</strong> Include aerosol cans, paint cans, or containers with food residue
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

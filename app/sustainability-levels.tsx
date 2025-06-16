"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Leaf, Recycle, Award, Users, Coins, Star, Target, TrendingUp, Sparkles, Trophy } from "lucide-react"

const levels = [
  {
    id: "eco-learner",
    title: "Eco Learner",
    description: "Just getting started: learns to identify and segregate waste correctly with app guidance.",
    reward: 10,
    icon: Leaf,
    color: "from-emerald-400 via-green-500 to-teal-600",
    shadowColor: "shadow-emerald-500/25",
    glowColor: "group-hover:shadow-emerald-500/40",
    tasks: [
      "Learn to identify different types of waste",
      "Segregate waste correctly using app guidance",
      "Complete basic recycling tutorials",
    ],
  },
  {
    id: "eco-explorer",
    title: "Eco Explorer",
    description: "Actively participates in recycling, upcycling, and begins donating or exchanging items.",
    reward: 20,
    icon: Recycle,
    color: "from-blue-400 via-cyan-500 to-indigo-600",
    shadowColor: "shadow-blue-500/25",
    glowColor: "group-hover:shadow-blue-500/40",
    tasks: ["Participate in recycling programs", "Upcycle or repurpose items", "Donate or exchange items with others"],
  },
  {
    id: "eco-champion",
    title: "Eco Champion",
    description: "Consistently engages in sustainable habits, inspires peers, and earns high-impact eco-coin rewards.",
    reward: 30,
    icon: Award,
    color: "from-purple-400 via-pink-500 to-rose-600",
    shadowColor: "shadow-purple-500/25",
    glowColor: "group-hover:shadow-purple-500/40",
    tasks: [
      "Consistently practice sustainable habits",
      "Inspire peers to adopt sustainable practices",
      "Earn eco-coin rewards for sustainable actions",
    ],
  },
  {
    id: "eco-enabler",
    title: "Eco Enabler",
    description:
      "Drives change by contributing ideas, leading community projects, and mentoring others into the circular loop.",
    reward: 40,
    icon: Users,
    color: "from-orange-400 via-red-500 to-pink-600",
    shadowColor: "shadow-orange-500/25",
    glowColor: "group-hover:shadow-orange-500/40",
    tasks: [
      "Contribute ideas for sustainable community projects",
      "Lead community projects that promote sustainability",
      "Mentor others in adopting sustainable practices",
    ],
  },
]

const communityTasks = [
  {
    id: "compost-bin",
    title: "Community Compost Bin",
    description: "Help create a compost bin for the community garden.",
    maxCoins: 15,
    icon: Target,
    color: "from-green-500 to-emerald-600",
  },
  {
    id: "recycling-program",
    title: "Recycling Program",
    description: "Help implement a recycling program for the community.",
    maxCoins: 15,
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-600",
  },
]

export default function SustainabilityLevels() {
  const [overallProgress, setOverallProgress] = useState(0)
  const [taskProgress, setTaskProgress] = useState({
    "compost-bin": 0,
    "recycling-program": 0,
  })
  const [completedTasks, setCompletedTasks] = useState<string[]>([])
  const [showCelebration, setShowCelebration] = useState(false)
  const [animateCoins, setAnimateCoins] = useState(false)

  const handleTaskProgress = (taskId: string, value: number[]) => {
    const newProgress = value[0]
    const oldProgress = taskProgress[taskId as keyof typeof taskProgress]

    setTaskProgress((prev) => ({ ...prev, [taskId]: newProgress }))

    if (newProgress === communityTasks.find((t) => t.id === taskId)?.maxCoins && !completedTasks.includes(taskId)) {
      setCompletedTasks((prev) => [...prev, taskId])
      setShowCelebration(true)
      setTimeout(() => setShowCelebration(false), 3000)
    }

    if (newProgress > oldProgress) {
      setAnimateCoins(true)
      setTimeout(() => setAnimateCoins(false), 600)
    }
  }

  const totalCoinsEarned = Object.values(taskProgress).reduce((sum, coins) => sum + coins, 0)
  const isAnyTaskCompleted = completedTasks.length > 0

  useEffect(() => {
    const timer = setTimeout(() => {
      setOverallProgress(Math.min((totalCoinsEarned / 30) * 100, 100))
    }, 500)
    return () => clearTimeout(timer)
  }, [totalCoinsEarned])

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-green-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-xl border-b border-white/20 sticky top-0 z-50 shadow-lg shadow-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Leaf className="h-8 w-8 text-emerald-600 animate-pulse" />
                <div className="absolute inset-0 h-8 w-8 bg-emerald-400 rounded-full blur-md opacity-30 animate-ping"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                EcoLevels
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="relative text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#"
                className="relative text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium group"
              >
                Progress
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#"
                className="relative text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium group"
              >
                Rewards
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <div
                className={`flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-amber-100 px-4 py-2 rounded-full shadow-lg transition-all duration-300 ${animateCoins ? "scale-110 shadow-yellow-300/50" : ""}`}
              >
                <Coins className={`h-5 w-5 text-yellow-600 ${animateCoins ? "animate-spin" : ""}`} />
                <span className="text-yellow-800 font-bold text-lg">{totalCoinsEarned}</span>
                {animateCoins && <Sparkles className="h-4 w-4 text-yellow-500 animate-pulse" />}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-emerald-600 via-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 animate-pulse">
              Sustainability Levels
            </h1>
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/20 via-blue-400/20 to-purple-400/20 blur-2xl -z-10 animate-pulse"></div>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Progress through gamified sustainability levels and encourage long-term behaviour change.
          </p>

          {/* Overall Progress */}
          <div className="max-w-lg mx-auto">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-gray-700">Overall Progress</span>
              <span className="text-lg font-bold text-emerald-600">{Math.round(overallProgress)}%</span>
            </div>
            <div className="relative">
              <Progress value={overallProgress} className="h-4 bg-gray-200 shadow-inner" />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full opacity-20 blur-sm"></div>
            </div>
          </div>
        </div>

        {/* Level Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {levels.map((level, index) => {
            const IconComponent = level.icon
            return (
              <Dialog key={level.id}>
                <DialogTrigger asChild>
                  <Card
                    className={`group cursor-pointer transition-all duration-500 hover:scale-110 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-xl shadow-xl ${level.shadowColor} hover:shadow-2xl ${level.glowColor} relative overflow-hidden`}
                  >
                    {/* Animated background gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${level.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    ></div>

                    <CardHeader className="text-center pb-4 relative z-10">
                      <div className="relative mb-6">
                        <div
                          className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${level.color} flex items-center justify-center shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}
                        >
                          <IconComponent className="h-10 w-10 text-white drop-shadow-lg" />
                        </div>
                        <div
                          className={`absolute inset-0 w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${level.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                        ></div>
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                        {level.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center relative z-10">
                      <CardDescription className="text-sm text-gray-600 mb-6 line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
                        {level.description}
                      </CardDescription>
                      <Badge
                        className={`bg-gradient-to-r from-yellow-400 to-amber-500 text-white hover:from-yellow-500 hover:to-amber-600 shadow-lg hover:shadow-xl transition-all duration-300 px-4 py-2`}
                      >
                        <Coins className="h-4 w-4 mr-2" />
                        {level.reward} coins
                      </Badge>
                    </CardContent>

                    {/* Hover effect particles */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full animate-ping delay-100"></div>
                      <div className="absolute bottom-4 left-4 w-1 h-1 bg-white rounded-full animate-ping delay-300"></div>
                      <div className="absolute top-1/2 left-4 w-1.5 h-1.5 bg-white rounded-full animate-ping delay-500"></div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-md bg-white/95 backdrop-blur-xl border-0 shadow-2xl">
                  <DialogHeader>
                    <div className="relative mb-4">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${level.color} flex items-center justify-center shadow-lg`}
                      >
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div
                        className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${level.color} blur-lg opacity-30`}
                      ></div>
                    </div>
                    <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                      {level.title}
                    </DialogTitle>
                    <DialogDescription className="text-gray-600 text-lg leading-relaxed">
                      {level.description}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-6">
                    <h4 className="font-bold text-gray-800 mb-4 text-lg">Tasks to complete:</h4>
                    <ul className="space-y-3">
                      {level.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start space-x-3 group">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                            <Star className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                            {task}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </DialogContent>
              </Dialog>
            )
          })}
        </div>

        {/* Community Tasks */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Community Tasks
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communityTasks.map((task) => {
              const IconComponent = task.icon
              const progress = taskProgress[task.id as keyof typeof taskProgress]
              const isCompleted = completedTasks.includes(task.id)
              const progressPercentage = (progress / task.maxCoins) * 100

              return (
                <Card
                  key={task.id}
                  className={`transition-all duration-500 relative overflow-hidden ${
                    isCompleted
                      ? "ring-4 ring-emerald-500/50 bg-gradient-to-br from-emerald-50 to-green-50 shadow-2xl shadow-emerald-500/25"
                      : "bg-white/80 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:scale-105"
                  }`}
                >
                  {isCompleted && (
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-green-400/10 animate-pulse"></div>
                  )}

                  <CardHeader className="relative z-10">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div
                          className={`w-14 h-14 rounded-xl ${
                            isCompleted ? `bg-gradient-to-br ${task.color} shadow-lg` : "bg-gray-200"
                          } flex items-center justify-center transition-all duration-500 ${
                            isCompleted ? "animate-pulse" : ""
                          }`}
                        >
                          <IconComponent
                            className={`h-7 w-7 ${isCompleted ? "text-white" : "text-gray-600"} transition-colors duration-500`}
                          />
                        </div>
                        {isCompleted && (
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                            <Trophy className="h-3 w-3 text-white" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <CardTitle
                          className={`text-xl font-bold transition-colors duration-300 ${isCompleted ? "text-emerald-700" : "text-gray-800"}`}
                        >
                          {task.title}
                        </CardTitle>
                        <CardDescription
                          className={`transition-colors duration-300 ${isCompleted ? "text-emerald-600" : "text-gray-600"}`}
                        >
                          {task.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-gray-700">Progress</span>
                        <div className="flex items-center space-x-2">
                          <span className={`text-sm font-bold ${isCompleted ? "text-emerald-600" : "text-gray-700"}`}>
                            {progress}/{task.maxCoins} coins
                          </span>
                          {progress > 0 && (
                            <div className="flex items-center space-x-1">
                              <Coins className="h-4 w-4 text-yellow-500" />
                              <span className="text-xs text-yellow-600 font-medium">+{progress}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="relative">
                        <Slider
                          value={[progress]}
                          onValueChange={(value) => handleTaskProgress(task.id, value)}
                          max={task.maxCoins}
                          step={1}
                          className="w-full"
                        />
                        <div
                          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${task.color} rounded-full opacity-20 transition-all duration-500`}
                          style={{ width: `${progressPercentage}%` }}
                        ></div>
                      </div>

                      {isCompleted && (
                        <div className="flex items-center justify-center space-x-2 text-emerald-600 bg-emerald-50 rounded-lg p-3 animate-pulse">
                          <Award className="h-5 w-5" />
                          <span className="font-bold">Task Completed!</span>
                          <Sparkles className="h-4 w-4 animate-spin" />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Completion Celebration */}
        {isAnyTaskCompleted && (
          <Card
            className={`bg-gradient-to-r from-emerald-500 via-green-500 to-teal-600 text-white border-0 shadow-2xl relative overflow-hidden transition-all duration-1000 ${showCelebration ? "scale-105 shadow-emerald-500/50" : ""}`}
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-green-400/20 animate-pulse"></div>

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-4 left-4 w-2 h-2 bg-white/50 rounded-full animate-bounce delay-100"></div>
              <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-bounce delay-300"></div>
              <div className="absolute bottom-6 left-12 w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce delay-500"></div>
              <div className="absolute bottom-4 right-4 w-2 h-2 bg-white/50 rounded-full animate-bounce delay-700"></div>
            </div>

            <CardContent className="text-center py-12 relative z-10">
              <div className="flex justify-center mb-6">
                <div
                  className={`w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm shadow-2xl ${showCelebration ? "animate-spin" : ""}`}
                >
                  <Award className="h-10 w-10 text-white drop-shadow-lg" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 drop-shadow-lg">🎉 Congratulations! 🎉</h2>
              <p className="text-emerald-100 mb-6 text-lg md:text-xl">
                You have completed {completedTasks.length} community task{completedTasks.length > 1 ? "s" : ""}!
              </p>
              <div className="flex items-center justify-center space-x-3 bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <Coins className="h-6 w-6 animate-spin" />
                <span className="text-xl md:text-2xl font-black drop-shadow-lg">
                  +{completedTasks.length * 50} bonus eco-coins earned!
                </span>
                <Sparkles className="h-6 w-6 animate-pulse" />
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

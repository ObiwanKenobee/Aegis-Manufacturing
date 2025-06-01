"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Languages, Heart, TreePine, Moon, Calendar, Users, BookOpen, Lightbulb } from "lucide-react"

interface CulturalContextEngineProps {
  region: string
  language: string
}

export function CulturalContextEngine({ region, language }: CulturalContextEngineProps) {
  const [activeContext, setActiveContext] = useState("kikuyu")

  const culturalContexts = {
    kikuyu: {
      name: "Kikuyu Traditional Context",
      greetings: "Wĩ mwega? (How are you?)",
      timeSystem: "Traditional lunar calendar awareness",
      taboos: "Avoid pointing with index finger",
      values: "Ubuntu philosophy, collective decision-making",
      workPatterns: "Respect for elder consultation",
      icon: TreePine,
    },
    luo: {
      name: "Luo Cultural Context",
      greetings: "Amosi? (How are you?)",
      timeSystem: "Seasonal fishing calendar",
      taboos: "Left hand restrictions for formal interactions",
      values: "Communal ownership, oral tradition respect",
      workPatterns: "Council of elders approval needed",
      icon: Users,
    },
    maasai: {
      name: "Maasai Pastoral Context",
      greetings: "Supa? (How are you?)",
      timeSystem: "Cattle movement seasonal calendar",
      taboos: "Avoid direct eye contact with elders",
      values: "Warrior culture, cattle-based wealth",
      workPatterns: "Age-set consultation required",
      icon: Moon,
    },
  }

  const currentContext = culturalContexts[activeContext as keyof typeof culturalContexts]
  const ContextIcon = currentContext.icon

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Languages className="h-5 w-5 mr-2 text-blue-600" />
          Cultural Context Engine
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-4">
          <Select value={activeContext} onValueChange={setActiveContext}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(culturalContexts).map(([key, context]) => (
                <SelectItem key={key} value={key}>
                  {context.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Badge variant="outline" className="text-green-600">
            Active Context
          </Badge>
        </div>

        <Alert className="border-blue-200 bg-blue-50">
          <ContextIcon className="h-4 w-4" />
          <AlertDescription>
            <strong>🌍 Cultural Adaptation Active:</strong> System behavior adapted for {currentContext.name}
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <Languages className="h-4 w-4 text-blue-600 mt-1" />
              <div>
                <div className="text-sm font-medium">Greetings</div>
                <div className="text-sm text-gray-600">{currentContext.greetings}</div>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Calendar className="h-4 w-4 text-green-600 mt-1" />
              <div>
                <div className="text-sm font-medium">Time System</div>
                <div className="text-sm text-gray-600">{currentContext.timeSystem}</div>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Heart className="h-4 w-4 text-red-600 mt-1" />
              <div>
                <div className="text-sm font-medium">Cultural Taboos</div>
                <div className="text-sm text-gray-600">{currentContext.taboos}</div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <BookOpen className="h-4 w-4 text-purple-600 mt-1" />
              <div>
                <div className="text-sm font-medium">Core Values</div>
                <div className="text-sm text-gray-600">{currentContext.values}</div>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Users className="h-4 w-4 text-orange-600 mt-1" />
              <div>
                <div className="text-sm font-medium">Work Patterns</div>
                <div className="text-sm text-gray-600">{currentContext.workPatterns}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex space-x-2">
          <Button size="sm" variant="outline">
            <Lightbulb className="h-4 w-4 mr-2" />
            Apply Context
          </Button>
          <Button size="sm" variant="outline">
            <BookOpen className="h-4 w-4 mr-2" />
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

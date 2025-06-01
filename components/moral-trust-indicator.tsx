"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Heart, Shield, Users, Eye } from "lucide-react"

interface MoralTrustIndicatorProps {
  score: number
  factors: {
    ethical: number
    community: number
    transparency: number
    cultural: number
  }
}

export function MoralTrustIndicator({ score, factors }: MoralTrustIndicatorProps) {
  const getScoreColor = (score: number) => {
    if (score >= 8) return "text-green-600"
    if (score >= 6) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreBadge = (score: number) => {
    if (score >= 8) return "High Trust"
    if (score >= 6) return "Moderate Trust"
    return "Low Trust"
  }

  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Heart className="h-5 w-5 text-red-500" />
            <span className="font-semibold">Moral Trust Score</span>
          </div>
          <div className="text-right">
            <div className={`text-2xl font-bold ${getScoreColor(score)}`}>{score.toFixed(1)}/10</div>
            <Badge variant="outline" className={getScoreColor(score)}>
              {getScoreBadge(score)}
            </Badge>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-blue-600" />
              <span className="text-sm">Ethical Compliance</span>
            </div>
            <div className="flex items-center space-x-2">
              <Progress value={factors.ethical * 10} className="w-16 h-2" />
              <span className="text-sm font-medium">{factors.ethical.toFixed(1)}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-green-600" />
              <span className="text-sm">Community Trust</span>
            </div>
            <div className="flex items-center space-x-2">
              <Progress value={factors.community * 10} className="w-16 h-2" />
              <span className="text-sm font-medium">{factors.community.toFixed(1)}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Eye className="h-4 w-4 text-purple-600" />
              <span className="text-sm">Transparency</span>
            </div>
            <div className="flex items-center space-x-2">
              <Progress value={factors.transparency * 10} className="w-16 h-2" />
              <span className="text-sm font-medium">{factors.transparency.toFixed(1)}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="h-4 w-4 text-orange-600" />
              <span className="text-sm">Cultural Sensitivity</span>
            </div>
            <div className="flex items-center space-x-2">
              <Progress value={factors.cultural * 10} className="w-16 h-2" />
              <span className="text-sm font-medium">{factors.cultural.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

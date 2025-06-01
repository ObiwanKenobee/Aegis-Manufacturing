"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Textarea } from "@/components/ui/textarea"
import { Vote, Users, Crown, Heart, CheckCircle, Clock, MessageSquare, Shield, Scale, Handshake } from "lucide-react"

interface CommunityGovernancePanelProps {
  communityId: string
  activeProposals: number
}

export function CommunityGovernancePanel({ communityId, activeProposals }: CommunityGovernancePanelProps) {
  const [selectedProposal, setSelectedProposal] = useState("data-access")
  const [voteSubmitted, setVoteSubmitted] = useState(false)

  const proposals = {
    "data-access": {
      title: "Grant Research Data Access",
      description: "Allow university researchers to access anonymized health data for malaria study",
      votes: { approve: 7, reject: 2, abstain: 1 },
      total: 10,
      status: "active",
      timeLeft: "2 days",
      requiredApproval: 70,
    },
    "ai-deployment": {
      title: "Deploy AI Safety Monitoring",
      description: "Install AI-powered safety monitoring system in textile factory",
      votes: { approve: 8, reject: 1, abstain: 1 },
      total: 10,
      status: "approved",
      timeLeft: "completed",
      requiredApproval: 70,
    },
    "cultural-protocol": {
      title: "Update Cultural Protocols",
      description: "Modify system to respect Ramadan working hours",
      votes: { approve: 9, reject: 0, abstain: 1 },
      total: 10,
      status: "approved",
      timeLeft: "completed",
      requiredApproval: 70,
    },
  }

  const currentProposal = proposals[selectedProposal as keyof typeof proposals]
  const approvalPercentage = (currentProposal.votes.approve / currentProposal.total) * 100

  const elders = [
    { name: "Mzee Kamau", role: "Chief Elder", voted: true, vote: "approve" },
    { name: "Mama Grace", role: "Women's Representative", voted: true, vote: "approve" },
    { name: "Pastor John", role: "Faith Leader", voted: true, vote: "approve" },
    { name: "Dr. Wanjiku", role: "Health Representative", voted: true, vote: "approve" },
    { name: "Teacher Mary", role: "Education Rep", voted: false, vote: null },
  ]

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <Vote className="h-5 w-5 mr-2 text-blue-600" />
            Community Governance Panel
          </div>
          <Badge variant="outline" className="text-orange-600">
            {activeProposals} Active Proposals
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Proposal Selection */}
        <div className="space-y-3">
          <h4 className="font-semibold">Active Proposals</h4>
          <div className="space-y-2">
            {Object.entries(proposals).map(([key, proposal]) => (
              <div
                key={key}
                className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                  selectedProposal === key ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:bg-gray-50"
                }`}
                onClick={() => setSelectedProposal(key)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-sm">{proposal.title}</div>
                    <div className="text-xs text-gray-600">{proposal.description}</div>
                  </div>
                  <Badge
                    variant={proposal.status === "approved" ? "default" : "outline"}
                    className={proposal.status === "approved" ? "bg-green-600" : ""}
                  >
                    {proposal.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Proposal Details */}
        <Card className="border-blue-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">{currentProposal.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-700">{currentProposal.description}</p>

            {/* Voting Progress */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Community Approval</span>
                <span className="text-sm font-bold text-blue-600">
                  {approvalPercentage.toFixed(0)}% ({currentProposal.votes.approve}/{currentProposal.total})
                </span>
              </div>
              <Progress value={approvalPercentage} className="h-3" />
              <div className="flex justify-between text-xs text-gray-600">
                <span>Required: {currentProposal.requiredApproval}%</span>
                <span>Time left: {currentProposal.timeLeft}</span>
              </div>
            </div>

            {/* Vote Breakdown */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-2 bg-green-50 rounded">
                <div className="text-lg font-bold text-green-600">{currentProposal.votes.approve}</div>
                <div className="text-xs text-green-700">Approve</div>
              </div>
              <div className="p-2 bg-red-50 rounded">
                <div className="text-lg font-bold text-red-600">{currentProposal.votes.reject}</div>
                <div className="text-xs text-red-700">Reject</div>
              </div>
              <div className="p-2 bg-gray-50 rounded">
                <div className="text-lg font-bold text-gray-600">{currentProposal.votes.abstain}</div>
                <div className="text-xs text-gray-700">Abstain</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Elder Council Status */}
        <div className="space-y-3">
          <h4 className="font-semibold flex items-center">
            <Crown className="h-4 w-4 mr-2 text-yellow-600" />
            Elder Council Votes
          </h4>
          <div className="space-y-2">
            {elders.map((elder, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <div className="flex items-center space-x-2">
                  <Crown className="h-4 w-4 text-yellow-600" />
                  <div>
                    <div className="text-sm font-medium">{elder.name}</div>
                    <div className="text-xs text-gray-600">{elder.role}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {elder.voted ? (
                    <>
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <Badge
                        variant="outline"
                        className={
                          elder.vote === "approve" ? "text-green-600 border-green-200" : "text-red-600 border-red-200"
                        }
                      >
                        {elder.vote}
                      </Badge>
                    </>
                  ) : (
                    <>
                      <Clock className="h-4 w-4 text-gray-400" />
                      <Badge variant="outline" className="text-gray-600">
                        Pending
                      </Badge>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Voting Interface */}
        {currentProposal.status === "active" && !voteSubmitted && (
          <div className="space-y-3">
            <h4 className="font-semibold">Cast Your Vote</h4>
            <Textarea placeholder="Optional: Add your reasoning or concerns..." />
            <div className="flex space-x-2">
              <Button size="sm" className="bg-green-600 hover:bg-green-700" onClick={() => setVoteSubmitted(true)}>
                <CheckCircle className="h-4 w-4 mr-2" />
                Approve
              </Button>
              <Button size="sm" variant="destructive" onClick={() => setVoteSubmitted(true)}>
                <MessageSquare className="h-4 w-4 mr-2" />
                Reject
              </Button>
              <Button size="sm" variant="outline" onClick={() => setVoteSubmitted(true)}>
                <Clock className="h-4 w-4 mr-2" />
                Abstain
              </Button>
            </div>
          </div>
        )}

        {voteSubmitted && (
          <Alert className="border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4" />
            <AlertDescription>
              <strong>Vote Submitted:</strong> Your vote has been recorded and will be included in the community
              decision.
            </AlertDescription>
          </Alert>
        )}

        {/* Governance Principles */}
        <div className="space-y-3">
          <h4 className="font-semibold flex items-center">
            <Scale className="h-4 w-4 mr-2 text-purple-600" />
            Governance Principles
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center space-x-2">
              <Heart className="h-4 w-4 text-red-600" />
              <span>Ubuntu: Community first</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-blue-600" />
              <span>Transparency in decisions</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-green-600" />
              <span>Elder wisdom respected</span>
            </div>
            <div className="flex items-center space-x-2">
              <Handshake className="h-4 w-4 text-orange-600" />
              <span>Consensus building</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

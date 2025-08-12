"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PlusCircle, Trash2 } from "lucide-react"

interface TeamMember {
  id: string
  name: string
  isGoing: boolean
  hasPaid: boolean
}

export default function PeoplePage() {
  const [teamMembers] = useState<TeamMember[]>([
    { id: "1", name: "Grant Wasserman", isGoing: true, hasPaid: true },
    { id: "2", name: "Sam Kirchner", isGoing: true, hasPaid: false },
    { id: "3", name: "Zoie Ecord", isGoing: true, hasPaid: false },
    { id: "6", name: "Ali Bainbridge", isGoing: true, hasPaid: false },
    { id: "4", name: "Cami Merickel", isGoing: true, hasPaid: false },
    { id: "5", name: "Berlyn Schutz", isGoing: true, hasPaid: false },
    { id: "7", name: "Tommy Rice", isGoing: true, hasPaid: false },
    { id: "8", name: "Riley Boonstra", isGoing: true, hasPaid: false },
    { id: "9", name: "Max Myers", isGoing: true, hasPaid: false },
    { id: "10", name: "Dennis Chapman", isGoing: false, hasPaid: false },
    { id: "11", name: "Rico Leijenaar", isGoing: true, hasPaid: false },
    { id: "12", name: "Jack Witte", isGoing: true, hasPaid: false },
    { id: "13", name: "Hannes Fahl", isGoing: false, hasPaid: false },
    { id: "14", name: "Gabe Nash", isGoing: true, hasPaid: false },
    { id: "15", name: "Kaleb Sharp", isGoing: true, hasPaid: false },
    { id: "16", name: "Alea Hardie", isGoing: false, hasPaid: false },
    { id: "20", name: "Luci Medina", isGoing: true, hasPaid: false },
    { id: "21", name: "Jordan Metzler", isGoing: true, hasPaid: false },
    { id: "22", name: "Taya Fettig", isGoing: true, hasPaid: false },
    { id: "23", name: "Claire Helmers", isGoing: true, hasPaid: false },
    { id: "24", name: "Jordyn Brown", isGoing: true, hasPaid: false },
    { id: "25", name: "Kendall Zavala", isGoing: true, hasPaid: false },
    { id: "26", name: "Kate Ebmeier", isGoing: true, hasPaid: false },
    { id: "27", name: "Sydney Drevlow", isGoing: true, hasPaid: false },
    { id: "28", name: "Erin Moore", isGoing: true, hasPaid: false },
  ])

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-forest">Team Members</h1>

      <div className="rounded-md border border-forest/20 bg-card/50 shadow-md">
        <Table>
          <TableHeader className="bg-forest/10">
            <TableRow>
              <TableHead className="text-forest">Name</TableHead>
              <TableHead className="text-forest">Going?</TableHead>
              <TableHead className="text-forest">Paid In Full?</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {teamMembers.map((member) => (
              <TableRow key={member.id} className="hover:bg-forest/5">
                <TableCell className="font-medium">{member.name}</TableCell>
                <TableCell>
                  <Checkbox
                    checked={member.isGoing}
                    disabled
                    className="border-forest data-[state=checked]:bg-husker data-[state=checked]:border-husker"
                  />
                </TableCell>
                <TableCell>
                  <Checkbox
                    checked={member.hasPaid}
                    disabled
                    className="border-forest data-[state=checked]:bg-husker data-[state=checked]:border-husker"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface SharedExpense {
  id: string
  description: string
  total: number
  perPerson: number
}

interface PersonalExpense {
  id: string
  description: string
  amount: number
}

const peopleGoing = 20

export default function ExpensesPage() {
  const sharedExpenses: SharedExpense[] = [
    {
      id: "1",
      description: "Mens AirBnb Deposit",
      total: 1400,
      perPerson: 1400 / peopleGoing,
    },
    {
      id: "2",
      description: "Womens AirBnb Deposit",
      total: 1400,
      perPerson: 1400 / peopleGoing,
    },
    {
      id: "3",
      description: "Gasoline (Estimated)",
      total: 180,
      perPerson: 180 / 4,
    },
  ]

  const personalExpenses: PersonalExpense[] = [
    {
      id: "1",
      description: "Food",
      amount: 30,
    },
    {
      id: "1",
      description: "Shopping",
      amount: 50,
    },
    {
      id: "1",
      description: "Activities",
      amount: 50,
    },
  ]

  const calculateTotalSharedExpenses = () => {
    return sharedExpenses.reduce((total, expense) => total + expense.perPerson, 0)
  }

  const calculateTotalPersonalExpenses = () => {
    return personalExpenses.reduce((total, expense) => total + expense.amount, 0)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-forest">Trip Expenses</h1>

      <div className="grid grid-cols-2 gap-8">
        {/* Shared Expenses Section */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-forest">Shared Expenses</h2>
              <p className="text-muted-foreground">Total: ${calculateTotalSharedExpenses().toFixed(2)}</p>
            </div>
          </div>

          <div className="rounded-md border border-forest/20 bg-card/50 shadow-md">
            <Table>
              <TableHeader className="bg-forest/10">
                <TableRow>
                  <TableHead className="text-forest">Description</TableHead>
                  <TableHead className="text-right text-forest">Total</TableHead>
                  <TableHead className="text-right text-forest">Per Person</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sharedExpenses.map((expense) => (
                  <TableRow key={expense.id} className="hover:bg-forest/5">
                    <TableCell className="font-medium">{expense.description}</TableCell>
                    <TableCell className="text-right">${expense.total.toFixed(2)}</TableCell>
                    <TableCell className="text-right">${expense.perPerson.toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Personal Expenses Section */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-forest">Personal Expenses</h2>
              <p className="text-muted-foreground">Total: ${calculateTotalPersonalExpenses().toFixed(2)}</p>
              <p className="text-muted-foreground">How much you spend here is up to you. This is just an estimate.</p>
            </div>
          </div>

          <div className="rounded-md border border-forest/20 bg-card/50 shadow-md">
            <Table>
              <TableHeader className="bg-forest/10">
                <TableRow>
                  <TableHead className="text-forest">Description</TableHead>
                  <TableHead className="text-right text-forest">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {personalExpenses.map((expense) => (
                  <TableRow key={expense.id} className="hover:bg-forest/5">
                    <TableCell className="font-medium">{expense.description}</TableCell>
                    <TableCell className="text-right">${expense.amount.toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}
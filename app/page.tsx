import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MountainIcon as Mountains } from "lucide-react"
import CountdownTimer from "@/components/countdown-timer"

export default function Home() {
  const tripStartDate = new Date("2025-08-13T12:00:00")

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center text-center mb-8">
        <Mountains className="h-16 w-16 text-husker mb-4" />
        <h1 className="text-4xl font-bold tracking-tight text-black">Colorado Trip Planner</h1>
        <p className="text-xl text-muted-foreground mt-2 max-w-2xl">
          Everything you need to know about our upcoming trip in the Rocky Mountains
        </p>
      </div>

      <div className="mb-12">
        <CountdownTimer targetDate={tripStartDate} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-forest/20 shadow-md">
          <CardHeader className="bg-forest/10 rounded-t-lg">
            <CardTitle className="text-black">People</CardTitle>
            <CardDescription>Track who's coming and payments</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <p>View the team roster, check attendance status, and track payments for everyone joining the trip.</p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full bg-husker hover:bg-husker/90">
              <Link href="/people">View Team</Link>
            </Button>
          </CardFooter>
        </Card>

          <CountdownTimer targetDate={tripStartDate} />

        <Card className="border-forest/20 shadow-md">
          <CardHeader className="bg-forest/10 rounded-t-lg">
            <CardTitle className="text-black">Housing</CardTitle>
            <CardDescription>Accommodations information</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <p>Access links to our Airbnbs and learn about the town we'll be staying in during our trip.</p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full bg-husker hover:bg-husker/90">
              <Link href="/housing">View Housing</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-forest/20 shadow-md">
          <CardHeader className="bg-forest/10 rounded-t-lg">
            <CardTitle className="text-black">Schedule</CardTitle>
            <CardDescription>Daily itinerary</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <p>Check out our planned activities and timeline for each day of the Colorado adventure.</p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full bg-husker hover:bg-husker/90">
              <Link href="/schedule">View Schedule</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-forest/20 shadow-md">
          <CardHeader className="bg-forest/10 rounded-t-lg">
            <CardTitle className="text-black">Expenses</CardTitle>
            <CardDescription>Track and split trip costs</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <p>Keep track of all trip expenses, see who paid for what, and calculate how much each person owes.</p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full bg-husker hover:bg-husker/90">
              <Link href="/expenses">Manage Expenses</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-forest/20 shadow-md">
          <CardHeader className="bg-forest/10 rounded-t-lg">
            <CardTitle className="text-black">Packing List</CardTitle>
            <CardDescription>What to bring and what to leave behind</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <p>
              Get detailed information about what to pack for our Colorado trip, including essentials and items to
              avoid.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full bg-husker hover:bg-husker/90">
              <Link href="/packing">View Packing List</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

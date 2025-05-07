import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SchedulePage() {
  const days = [
    {
      id: "day1",
      title: "Day 1 - Arrival",
      date: "August 13, 2025",
      activities: [
        { time: "12:00 PM", description: "Check-in to Airbnbs" },
        { time: "2:00 PM", description: "Welcome meeting at guys' Airbnb" },
        { time: "4:00 PM", description: "Grocery shopping for essentials" },
        { time: "6:30 PM", description: "Group dinner at Breckenridge Brewery" },
        { time: "8:30 PM", description: "Free time / Rest" },
      ],
    },
    {
      id: "day2",
      title: "Day 2 - Hiking",
      date: "August 14, 2025",
      activities: [
        { time: "7:00 AM", description: "Breakfast" },
        { time: "8:30 AM", description: "Depart for McCullough Gulch Trail" },
        { time: "9:00 AM - 1:00 PM", description: "Hiking at McCullough Gulch" },
        { time: "1:30 PM", description: "Picnic lunch at the trail" },
        { time: "3:00 PM", description: "Return to Airbnbs" },
        { time: "4:00 PM - 6:00 PM", description: "Free time / Rest" },
        { time: "6:30 PM", description: "BBQ dinner at girls' Airbnb" },
        { time: "8:00 PM", description: "Games night" },
      ],
    },
    {
      id: "day3",
      title: "Day 3 - Rafting",
      date: "August 15, 2025",
      activities: [
        { time: "7:30 AM", description: "Breakfast" },
        { time: "8:45 AM", description: "Depart for rafting" },
        { time: "10:00 AM - 2:00 PM", description: "White water rafting on Arkansas River" },
        { time: "2:30 PM", description: "Lunch at riverside café" },
        { time: "4:00 PM", description: "Return to Airbnbs" },
        { time: "5:00 PM - 7:00 PM", description: "Free time / Rest" },
        { time: "7:30 PM", description: "Group dinner in downtown Breckenridge" },
      ],
    },
    {
      id: "day4",
      title: "Day 4 - Mountain Day",
      date: "August 16, 2025",
      activities: [
        { time: "7:00 AM", description: "Breakfast" },
        { time: "8:30 AM", description: "Depart for Breckenridge Ski Resort" },
        { time: "9:00 AM - 12:00 PM", description: "Gondola rides and alpine slides" },
        { time: "12:30 PM", description: "Lunch at Peak 8 Base Camp" },
        { time: "2:00 PM - 4:00 PM", description: "Mountain biking or hiking" },
        { time: "4:30 PM", description: "Return to Airbnbs" },
        { time: "6:00 PM", description: "Cookout dinner" },
        { time: "8:00 PM", description: "Campfire and s'mores" },
      ],
    },
    {
      id: "day5",
      title: "Day 5 - Departure",
      date: "August 17, 2025",
      activities: [
        { time: "8:00 AM", description: "Breakfast" },
        { time: "9:00 AM - 10:00 AM", description: "Pack and clean Airbnbs" },
        { time: "10:30 AM", description: "Final team meeting" },
        { time: "12:00 PM", description: "Check-out from Airbnbs" },
        { time: "12:30 PM", description: "Farewell lunch in town" },
        { time: "2:00 PM", description: "Departure" },
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4 text-forest">Trip Schedule</h1>
      <p className="text-xl mb-8 text-black">Please note that this is a tentative schedule and subject to change. </p>

      <Tabs defaultValue="day1" className="w-full">
        <div className="relative">
          <div className="overflow-x-auto pb-2">
            <TabsList className="inline-flex h-10 items-center justify-center rounded-md bg-forest/10 p-1 text-forest min-w-full md:min-w-0 md:grid md:grid-cols-5">
              {days.map((day) => (
                <TabsTrigger
                  key={day.id}
                  value={day.id}
                  className="data-[state=active]:bg-husker data-[state=active]:text-white whitespace-nowrap"
                >
                  {day.title.split(" - ")[0]}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </div>

        {days.map((day) => (
          <TabsContent key={day.id} value={day.id}>
            <Card className="border-forest/20 shadow-md">
              <CardHeader className="bg-forest/10 rounded-t-lg">
                <CardTitle className="text-forest">{day.title}</CardTitle>
                <CardDescription>{day.date}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {day.activities.map((activity, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-[100px_1fr] gap-4 items-start border-b border-forest/10 pb-4 last:border-0 last:pb-0"
                    >
                      <div className="font-medium text-husker">{activity.time}</div>
                      <div>{activity.description}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SchedulePage() {
  const days = [
    {
      id: "day1",
      title: "Day 1 - Arrival",
      date: "August 13, 2025",
      activities: [
        { time: "9:00 AM", description: "Departure from Lincoln" },
        { time: "4:30 PM", description: "Check-in to Airbnbs" },
        { time: "5:00 PM", description: "Afternoon Run (if applicable)" },
        { time: "6:00 PM", description: "Group Dinner at House" },
        { time: "7:00 PM", description: "Games and Introductions" },
      ],
    },
    {
      id: "day2",
      title: "Day 2",
      date: "August 14, 2025",
      activities: [
        { time: "7:00 AM", description: "Workout at Sante Fe Regional Trail" },
        { time: "11:00 AM", description: "Garden of the Gods" },
        { time: "1:30 PM", description: "Manitou Incline" },
        { time: "6:00 PM", description: "Group Dinner at House" },
        { time: "7:00 PM", description: "Volleyball Tournament" },
      ],
    },
    {
      id: "day3",
      title: "Day 3",
      date: "August 15, 2025",
      activities: [
        { time: "7:00 AM", description: "Run at Red Rock Canyon Open Space" },
        { time: "11:00 AM", description: "Leave for Paradise Cove" },
        { time: "12:00 PM", description: "Paradise Cove Cliff Diving/Swimming" },
        { time: "3:00 PM", description: "Leave for Colorado Springs" },
        { time: "5:30 PM", description: "Group Dinner at House" },
        { time: "6:30 PM", description: "Cornhole Tournament/Game Night" },
      ],
    },
    {
      id: "day4",
      title: "Day 4",
      date: "August 16, 2025",
      activities: [
        { time: "7:00 AM", description: "Long Run at Gold Camp Road" },
        { time: "9:30 AM", description: "Big Brunch as Team" },
        { time: "1:30 PM", description: "7 Falls Park or Mt. Muscoco Hike (TBD)" },
        { time: "4:30 PM", description: "Downtown Colorado Springs Shopping and Dinner" },
        { time: "7:30 PM", description: "Hang Out as a Team/Prepare to Leave" },

      ],
    },
    {
      id: "day5",
      title: "Day 5 - Departure",
      date: "August 17, 2025",
      activities: [
        { time: "7:00 AM - 10:00 AM", description: "Pack and clean Airbnbs" },
        { time: "10:00 AM", description: "Must Check-Out from Airbnbs" },
        { time: "5:00- 6:00 PM", description: "Arrival back in Lincoln" },
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

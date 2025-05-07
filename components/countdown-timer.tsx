"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        // If the target date has passed
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    // Calculate immediately
    calculateTimeLeft()

    // Then update every second
    const timer = setInterval(calculateTimeLeft, 1000)

    // Clean up on unmount
    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <Card className="border-forest/20 shadow-md">
      <CardHeader className="bg-forest/10 rounded-t-lg">
        <CardTitle className="text-black">Countdown to Colorado</CardTitle>
        <CardDescription>Time remaining until our adventure begins</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-4 gap-4 text-center">
          <div className="flex flex-col">
            <span className="text-4xl font-bold text-husker">{timeLeft.days}</span>
            <span className="text-sm text-muted-foreground">Days</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-bold text-husker">{timeLeft.hours}</span>
            <span className="text-sm text-muted-foreground">Hours</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-bold text-husker">{timeLeft.minutes}</span>
            <span className="text-sm text-muted-foreground">Minutes</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-bold text-husker">{timeLeft.seconds}</span>
            <span className="text-sm text-muted-foreground">Seconds</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

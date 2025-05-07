import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function HousingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-forest">Housing Information</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="border-forest/20 shadow-md">
          <CardHeader className="bg-forest/10 rounded-t-lg">
            <CardTitle className="text-forest">Girls' Airbnb</CardTitle>
            <CardDescription>Accommodation for female team members</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <div className="aspect-video relative rounded-md overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="Girls' Airbnb" fill className="object-cover" />
            </div>
            <p>brief description of the house</p>
            <Button asChild className="bg-husker hover:bg-husker/90">
              <a href="https://airbnb.com" target="_blank" rel="noopener noreferrer">
                View Listing
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-forest/20 shadow-md">
          <CardHeader className="bg-forest/10 rounded-t-lg">
            <CardTitle className="text-forest">Guys' Airbnb</CardTitle>
            <CardDescription>Accommodation for male team members</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <div className="aspect-video relative rounded-md overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="Guys' Airbnb" fill className="object-cover" />
            </div>
            <p>brief description of the house</p>
            <Button asChild className="bg-husker hover:bg-husker/90">
              <a href="https://airbnb.com" target="_blank" rel="noopener noreferrer">
                View Listing
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8 border-forest/20 shadow-md">
        <CardHeader className="bg-forest/10 rounded-t-lg">
          <CardTitle className="text-forest">About Where We're Staying</CardTitle>
          <CardDescription>City that we're staying in here</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 pt-6">
          <div className="aspect-video relative rounded-md overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Breckenridge, Colorado"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <p>
              Brief description of the city
            </p>
            <h3 className="text-xl font-semibold text-forest">Local Attractions</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>brief description of the local attractions</li>
              <li>brief description of the local attractions</li>
            </ul>
            <h3 className="text-xl font-semibold text-forest">Weather</h3>
            <p>
              brief description of the weather we are going to expect
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

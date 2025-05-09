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
              <Image src="/girls.png" alt="Girls' Airbnb" fill className="object-cover" />
            </div>
            <p>1630 Dorchester Place
            Colorado Springs, CO 80905</p>
            <p>This spacious Airbnb listing in Colorado offers a large house with 9 bedrooms and 3 bathrooms, ideal for accommodating our large group of women. It features two kitchens and dining rooms, providing enough space for cooking and dining as a team. The property is well-suited for larger groups with plenty of room to relax and socialize. The large and fairly private backyard contains a hot tub with views of the front range of the Rocky Mountains.</p>
            <Button asChild className="bg-husker hover:bg-husker/90">
              <a href="https://www.airbnb.com/rooms/6436111?adults=8&check_in=2025-08-13&check_out=2025-08-17&guests=10&location=Colorado&search_mode=regular_search&source_impression_id=p3_1746744293_P3rFcNh3tguHZ-8L&previous_page_section_name=1001&federated_search_id=52b3ed8b-11b2-46bd-b63b-5ba621067cad" target="_blank" rel="noopener noreferrer">
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
              <Image src="/boys.png" alt="Guys' Airbnb" fill className="object-cover" />
            </div>
            <p>1420 Ivy Place, Colorado Springs, CO 80905, United States</p>
            <p>This modern retreat in Colorado Springs offers 5 beds and 3 baths. Not quite as spacious as the girls' Airbnb, but enough for our group of men. The backyard, while not as large, boasts quite the aesthetic with a hot tub and a cornhole set. It is within walking distance to the girls' Airbnb (0.2 miles) and offers enough parking for our cars.</p>
            <Button asChild className="bg-husker hover:bg-husker/90">
              <a href="https://www.airbnb.com/rooms/1192083723104369868?adults=8&check_in=2025-08-13&check_out=2025-08-17&guests=10&location=Colorado&search_mode=regular_search&source_impression_id=p3_1746744291_P3rOwD7ThT8yNU6j&previous_page_section_name=1001&federated_search_id=52b3ed8b-11b2-46bd-b63b-5ba621067cad" target="_blank" rel="noopener noreferrer">
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
    <CardDescription>Colorado Springs, Colorado</CardDescription>
  </CardHeader>
  <CardContent className="space-y-4 pt-6">
    <div className="aspect-video relative rounded-md overflow-hidden">
      <Image
        src="/co.png"
        alt="Colorado Springs, Colorado"
        fill
        className="object-cover"
      />
    </div>
    <div className="space-y-4">
      <p>
        Nestled at the base of Pikes Peak, Colorado Springs offers a stunning backdrop for moderate altitude training,
        sightseeing, and team bonding. Known for its clean mountain air, scenic trails, and active
        lifestyle, it's the perfect destination for a cross country team getaway.
      </p>

      <h3 className="text-xl font-semibold text-forest">Local Attractions</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <strong>Garden of the Gods:</strong> Designated a National Natural Landmark in 1971, this park features striking red sandstone formations that were created during a geological upheaval along a natural fault line millions of years ago. It was donated to the city in 1909 with the stipulation that it remain free to the public forever.
        </li>
        <li>
          <strong>Pikes Peak:</strong> Known as “America’s Mountain,” this 14,115-foot summit inspired Katharine Lee Bates to write “America the Beautiful” after visiting in 1893. It was first ascended by explorer Zebulon Pike in 1806, although he never reached the summit himself.
        </li>
        <li>
          <strong>Downtown Colorado Springs:</strong> Founded in 1871 by General William Jackson Palmer, the downtown area has historical roots in railroad expansion and resort tourism. Today, many of the original buildings still stand, offering a glimpse into the city’s 19th-century beginnings.
        </li>
        <li>
          <strong>Seven Falls:</strong> Often referred to as “The Grandest Mile of Scenery in Colorado,” Seven Falls is a series of cascading waterfalls located in a narrow box canyon. Privately owned since the late 1800s, it became one of Colorado Springs’ earliest tourist attractions and remains a unique example of natural beauty combined with early tourism development.
        </li>
      </ul>


      <h3 className="text-xl font-semibold text-forest">Weather</h3>
      <p>
        Expect mild summer conditions in mid-August with daytime highs in the upper 70s to low 80s °F
        and cooler mornings—perfect for early runs. Afternoon storms are possible, so pack light rain gear
        just in case.
      </p>
    </div>
  </CardContent>
</Card>

    </div>
  )
}

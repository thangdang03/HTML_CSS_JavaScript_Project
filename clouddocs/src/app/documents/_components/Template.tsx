'use client'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useUserId } from "@/hooks/useUserId";
import { useSupabase } from "@/lib/supabase";
import { useOrganization } from "@clerk/nextjs";
import { templates } from "@Documents/data/template";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Template = () => {
    const { organization, isLoaded } = useOrganization();
    const userId = useUserId();
    const route = useRouter();
    const [memberships, setMemberships] = useState<any>();

    const getMemberships = async () => {
        try {
            if (organization) {
                const {data} = await organization.getMemberships();
                setMemberships(data);
                console.log("Organization members:", data);
                
            }
        } catch (error) {
            console.log("Error fetching memberships:", error);
        }
    };

    const createDocument = async(content: any,name:string | null) =>{
      // get content , name , membership , userid
      try {
        let members = null
        if(memberships){
           members = memberships.map((item:any) =>{
            let name  = item.publicUserData.firstName + item.publicUserData.lastName
            let temp = {
              name:  name || item.publicUserData.userId,
              url: item.publicUserData.imageUrl,
              email: item.publicUserData.identifier
            }
            return temp
          })
        }
        
        let document = {
          name,
          content,
          members: members ,
          shared: !organization,
          user_id: userId,
        }
        const newData = await useSupabase().createDocument(document)
        console.log(newData)
        route.push(`/documents/${newData.id}`)
      } catch (error) {
        console.log("Error fetching memberships:", error);
        
      }

    }

    useEffect(() => {
        if(isLoaded ) {
            getMemberships();
        }
    }, [isLoaded]);
    return (  
        <section className="w-full min-h-[300px] flex items-center justify-center bg-zinc-100 py-18">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-[80%]"
            >
              <CarouselContent>
                {templates.map((template, index) => (
                  <CarouselItem 
                    key={index} className="md:basis-auto lg:basis-auto " 
                    onClick={()=>{createDocument(template?.content,template.name)}}
                  >
                    <div className="w-[200px]">
                      <Card className="h-[250px] p-0  shadow-none hover:shadow-lg cursor-pointer  transition-shadow duration-300">   
                        <CardContent className="flex flex-wrap items-center justify-center ">
                          <Image 
                            src={template.svg} 
                            alt={template.name} 
                            width={200}
                            height={200}
                            className="w-full h-full object-contain" 
                          />
                          <span className="font-medium">{template.name}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="ml-4 border-none cursor-pointer" />
              <CarouselNext className="mr-4 border-none cursor-pointer"  />
            </Carousel>
        </section>
    );
}

export default Template;
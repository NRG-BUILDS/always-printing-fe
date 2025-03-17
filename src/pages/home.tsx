import Banner from "@/components/banner";
import Container from "@/components/container";
import TopCards from "@/components/homeComps/top-cards";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ecoDrive from "@/assets/images/item/ecoDrive.png";
import pumpert from "@/assets/images/item/pumpert.png";
import techNova from "@/assets/images/item/techNova.png";
import healthPlus from "@/assets/images/item/healthPlus.png";
import finSecure from "@/assets/images/item/finSecure.png";
import { Link } from "react-router";
import Header from "@/components/header";

const Home = () => {
  const tokens = [
    {
      name: "Pumpert(PUMPE)",
      author: "$yeyex",
      daysAgo: "5 days ago",
      percent: "+200%",
      image: pumpert,
    },
    {
      name: "EcoDrive(ED)",
      author: "$yeyex",
      daysAgo: "5 days ago",
      percent: "+120%",
      image: ecoDrive,
    },
    {
      name: "FinSecure(FS)",
      author: "$yeyex",
      daysAgo: "5 days ago",
      percent: "+200%",
      image: techNova,
    },
    {
      name: "Pumpert(PUMPE)",
      author: "$yeyex",
      daysAgo: "5 days ago",
      percent: "+550%",
      image: ecoDrive,
    },
    {
      name: "EcoDrive(ED)",
      author: "$yeyex",
      daysAgo: "5 days ago",
      percent: "+120%",
      image: techNova,
    },
    {
      name: "Pumpert(PUMPE)",
      author: "$yeyex",
      daysAgo: "5 days ago",
      percent: "+200%",
      image: finSecure,
    },
    {
      name: "HealthPlus(HP)",
      author: "$yeyex",
      daysAgo: "5 days ago",
      percent: "+200%",
      image: healthPlus,
    },
    {
      name: "Pumpert(PUMPE)",
      author: "$yeyex",
      daysAgo: "5 days ago",
      percent: "+200%",
      image: pumpert,
    },
    {
      name: "Pumpert(PUMPE)",
      author: "$yeyex",
      daysAgo: "5 days ago",
      percent: "+550%",
      image: finSecure,
    },
  ];
  return (
    <Container className="p-4 lg:p-5">
      <Header />
      <Banner />
      <section className="flex flex-col py-7 w-full">
        <h1 className="text-xl">Top 10</h1>
        <ScrollArea className="flex-1 w-full min-w-0 py-6 overflow-hidden whitespace-nowrap">
          <div className="flex gap-4 w-max">
            {Array.from({ length: 5 }).map((_, i) => (
              <TopCards key={i} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>

      <section className="pt-2 pb-7">
        <Tabs defaultValue="account" className="]">
          <div className="flex flex-col md:items-center gap-2 md:flex-row pb-5">
            <span className="opacity-50 font-semibold">Sort by:</span>
            <TabsList className="flex-wrap *:w-fit">
              <TabsTrigger value="account">Market Cap</TabsTrigger>
              <TabsTrigger value="tokens">Tokens</TabsTrigger>
              <TabsTrigger value="holdings">Holdings</TabsTrigger>
              <TabsTrigger value="tax">Tax</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="account">
            <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-1.5 justify-center lg:gap-4">
              {tokens.map((token) => (
                <Link to={"/coin/tw0i4tno405hgg04s4"}>
                  <div className="bg-brand-grey font-jost p-2 w-full rounded-2xl">
                    <div className="w-full aspect-[4/3] rounded-xl bg-white">
                      <img src={token.image} alt="" className="size-full" />
                    </div>
                    <div className="py-4 flex flex-col md:flex-row item-start justify-between">
                      <div className="space-y-1">
                        <p className="text-lg">{token.name}</p>
                        <p className="text-sm">by {token.author}</p>
                        <p className="text-xs text-brand-grey-100 ">
                          {token.daysAgo}
                        </p>
                      </div>
                      <div>
                        <p className="text-xl gradient bg-clip-text text-transparent font-semibold">
                          {token.percent}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="tokens">
            <div className="h-52 flex items-center justify-center">
              <p>No items found</p>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </Container>
  );
};

export default Home;

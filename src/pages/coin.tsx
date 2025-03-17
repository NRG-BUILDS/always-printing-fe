import Banner from "@/components/banner";
import Container from "@/components/container";
import TradingInterface from "@/components/tokenPageComps/trade-interface";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TradingView from "@/components/tokenPageComps/trading-view";

import ecoDrive from "@/assets/images/item/ecoDrive.png";
import pumpert from "@/assets/images/item/pumpert.png";
import techNova from "@/assets/images/item/techNova.png";

const CoinPage = () => {
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
  ];
  return (
    <Container className="grid lg:grid-cols-12 items-start gap-4 h-[70svh]">
      <div className="lg:col-span-8 grid gap-4">
        <div>
          <Banner />
        </div>
        {/* TRADE CHART */}
        <div className="bg-[#14251F] rounded-3xl min-h-96 lg:aspect-[838/462]">
          <TradingView />
        </div>

        <Tabs defaultValue="threads" className="]">
          <TabsList>
            <TabsTrigger value="threads">Threads</TabsTrigger>
            <TabsTrigger value="trading">Trading</TabsTrigger>
          </TabsList>

          <TabsContent value="threads">
            <Container className="bg-brand-grey rounded-3xl ">
              <div className="flex gap-5 items-center">
                <div className="size-20 rounded-2xl bg-accent overflow-clip">
                  <img className="size-full" src={""} />
                </div>
                <div className="space-y-0.5 text-white *:w-fit">
                  <p className="bg-brand-green text-xs p-1 px-2 rounded-md">
                    wie8urhn
                  </p>
                  <p className="font-poppins text-lg font-medium">Quakers</p>
                  <p className="font-poppins text-xl font-medium bg-gradient-to-r from-[#BAC1FF] via-[#63FEFE]  to-[#FF3EEC] bg-clip-text text-transparent">
                    quack quack quack
                  </p>
                </div>
              </div>
            </Container>
          </TabsContent>
        </Tabs>
        <div className="flex flex-col flex-1 min-w-0">
          <h2 className="text-xl text-[#A2A6D0] py-2 font-medium">
            Similar Coins
          </h2>
          <ScrollArea className="py-6 flex-1 min-w-0 overflow-hidden whitespace-nowrap">
            <div className="flex gap-4 w-max">
              {tokens.map((token, i) => (
                <SimilarCoins token={token} key={i} />
              ))}
            </div>
            <ScrollBar
              color="oklch(0.527 0.154 150.069)"
              orientation="horizontal"
              className=""
            />
          </ScrollArea>
        </div>
      </div>
      <div className="sticky top-0 bg-brand-grey rounded-3xl lg:col-span-4">
        <TradingInterface />
      </div>
    </Container>
  );
};

export default CoinPage;

const SimilarCoins = ({ token }: { token: any }) => {
  return (
    <Container className="bg-brand-grey">
      <div className="flex gap-5 items-stretch">
        <div className="size-20 rounded-2xl bg-accent overflow-clip">
          <img className="size-full object-cover" src={token.image} />
        </div>
        <div className="flex flex-col justify-between text-white *:w-fit">
          <div className="">
            <p className="font-poppins font-medium text-[14px]">{token.name}</p>
            <p className="text-green-700 text-[12px]">Market Cap: $50k</p>
          </div>
          <div className="text-[10px]">
            <p className="font-poppins font-medium">Replies: 30</p>
            <p className="text-gray-700 ">Created {token.daysAgo}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

import OrderSidebar from "@/components/order/OrderSidebar";
import OrderSummary from "@/components/order/OrderSummary";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <div className="md:flex lg:flex">

    <OrderSidebar />
    <main className="md:flex-1 lg:flex-1 md:h-screen lg:h-screen bg-gray-100 overflow-y-scroll p-5">
        {children}
    </main>

    <div>
        <OrderSummary />
    </div>

    </div>
   
    </>
  );
}
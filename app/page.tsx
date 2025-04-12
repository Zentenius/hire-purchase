"use client"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@radix-ui/react-accordion";
import Image from "next/image";

export default function Home() {
  return (
<div className="min-h-screen bg-white">
  <nav className="sticky top-5 mt-5 w-3/4 h-16 mx-auto rounded-full bg-blue-600 p-4 flex items-center justify-between z-10">
    <div className="flex items-center space-x-4">
    <div className="bg-white w-10 h-10 rounded-full"></div>
    <h1 className="text-2xl font-bold">High Wired</h1>
    </div>
    <span className="font-semibold">Your Future, Your Tech -- Made Affordable.</span>
    <button className="px-6 py-3 rounded-full font-semibold text-black bg-white">Learn More</button>
  </nav>
        {/* Main Content */}
        <main className="max-w-5xl bg-white mx-auto py-8 px-4 md:px-6 lg:px-8 space-y-8">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Hire Purchase Agreement</h2>

          {/* Customer Information */}
          <Card className="mb-8">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="text-lg text-gray-700">Customer Information</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-medium">John Doe</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="font-medium">45 Maple Road, Kingston 6</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">(876) 456-7890</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">johndoe@email.com</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Product Details */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-700 mb-4">Product Details</h3>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead>Model</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Cash Price (JMD)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Gaming Laptop</TableCell>
                    <TableCell>HP Victus 5</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>$150,000.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Wireless Headset</TableCell>
                    <TableCell>WH100XM4</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>$15,000.00</TableCell>
                  </TableRow>
                  <TableRow className="bg-gray-50">
                    <TableCell colSpan={3} className="text-right font-semibold">
                      Total Cash Price:
                    </TableCell>
                    <TableCell className="font-semibold">$165,000.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Payment Terms */}
          <Card className="mb-8 border-blue-100 bg-blue-50">
            <CardHeader className="border-b border-blue-100">
              <CardTitle className="text-lg text-blue-800">Payment Terms</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-blue-700">Deposit</p>
                  <p className="font-medium text-lg">$49,500.00</p>
                </div>
                <div>
                  <p className="text-sm text-blue-700">Balance Owing</p>
                  <p className="font-medium text-lg">$115,500.00</p>
                </div>
                <div>
                  <p className="text-sm text-blue-700">Interest Rate</p>
                  <p className="font-medium text-lg">15%</p>
                </div>
                <div>
                  <p className="text-sm text-blue-700">Hire Purchase Price</p>
                  <p className="font-medium text-lg">$132,825.00</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-blue-700">Monthly Payments</p>
                  <p className="font-medium text-lg">$11,068.75 for 12 months</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Terms and Conditions */}
          <div className="mb-8">
            <Accordion type="single" collapsible className="border rounded-md">
              <AccordionItem value="terms">
                <AccordionTrigger className="text-lg font-medium text-gray-700 px-4">
                  Terms and Conditions
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Goods remain property of HighWired until full payment.</li>
                    <li>Missed payments may result in repossession.</li>
                    <li>Early payment allowed with no penalty.</li>
                    <li>Customer is responsible for care of the items.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Signatures */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-700 mb-4">Signatures</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-b border-gray-300 pb-2">
                <p className="text-sm text-gray-500 mb-6">Customer Signature</p>
                <p className="font-medium italic">John Doe</p>
              </div>
              <div className="border-b border-gray-300 pb-2">
                <p className="text-sm text-gray-500 mb-6">Store Rep Signature</p>
                <p className="font-medium italic">Jane Smith</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-gray-300 text-sm mb-4">
            Note: This is a sample agreement for educational/demo purposes only.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <p className="font-medium">HighWired Electronics</p>
              <p className="text-sm text-gray-400">123 Tech Avenue, Kingston</p>
              <p className="text-sm text-gray-400">(876) 123-4567</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
</div>
  );
}

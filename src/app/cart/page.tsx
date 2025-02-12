import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function ShoppingCart() {
  return (
    <div className="container mx-auto p-6">
     <div className="flex flex-col gap-4">


      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Product Details */}
        <div className="md:col-span-2">
        <div className="flex justify-between border-b border-button p-4 items-center mb-2">
        <h1 className="text-4xl font-semibold text-[#006400]">Shopping Cart</h1>
        <span className="">1 Item</span>
      </div>

          <div className="mb-6">

            <div className="grid grid-cols-4 gap-3 px-4 text-sm  ">
              <div>Product details</div>
              <div className="text-center">Quantity</div>
              <div className="text-center">Price</div>
              <div className="text-center">Total</div>
            </div>

            {/* Product Row */}
            <div className="grid grid-cols-4 gap-4 place-items-center items-center py-4 px-1">
              <div className="flex items-center gap-4">
                <div className="bg-button p-2 rounded-lg h-12 w-12"></div>
                <div>
                  <p className="font-medium">Vegetable name</p>
                  <p className="text-sm text-gray-500">Category: 500g</p>
                </div>
              </div>
              <div className="flex justify-center item-center w-24 h-8 rounded-md bg-button overflow-hidden">
      <button className="h-full w-8 flex items-center justify-center text-white hover:bg-green-600 transition-colors">
        -
      </button>
      <span className="h-full px-4 flex items-center justify-center text-white bg-button">
        1
      </span>
      <button className="h-full w-8 flex items-center justify-center text-white hover:bg-green-600 transition-colors">
        +
      </button>
    </div>
              <div className="text-center">25.00</div>
              <div className="text-center">50.00</div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <Card className="bg-tertiary border-0 rounded-xl h-fit">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold text-center text-heading pb-2">
              Order summary
            </CardTitle>
            <div className="h-px bg-button"></div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-700">Subtotal:</span>
                <span>₹62</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Discount:</span>
                <span>₹0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Delivery Charges:</span>
                <span>₹0.00</span>
              </div>
              <div className="h-px bg-button"></div>
              <div className="flex justify-between font-semibold">
                <span>Total:</span>
                <span>₹0.00</span>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-base mb-1">Apply Coupon</p>
              <p className="text-sm text-gray-600 mb-3">Using a Promo Code?</p>
              <Input 
                placeholder="Enter coupon code" 
                className="mb-4 bg-[#F0FFE6] rounded-xl h-12 border-button focus:ring-2 focus:ring-green-500/20" 
              />
              <Button 
                className="w-full bg-button hover:bg-green-600 text-white h-12 rounded-xl flex items-center justify-center gap-2"
              >
               <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.95479 3.50078H3.50039C3.34126 3.50078 3.18865 3.43757 3.07613 3.32505C2.9636 3.21252 2.90039 3.05991 2.90039 2.90078C2.90039 2.74165 2.9636 2.58904 3.07613 2.47652C3.18865 2.364 3.34126 2.30078 3.50039 2.30078H5.42399C5.55783 2.30082 5.68781 2.3456 5.79327 2.42801C5.89873 2.51042 5.9736 2.62572 6.00599 2.75558L8.28239 11.8756C8.3168 12.0285 8.29001 12.1888 8.20776 12.3222C8.12551 12.4556 7.99433 12.5515 7.84227 12.5895C7.6902 12.6274 7.52933 12.6043 7.39406 12.5252C7.25878 12.4461 7.15984 12.3171 7.11839 12.166L4.95479 3.50078Z" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M19.0951 9.50146H9.50715C9.32635 9.50146 9.14755 9.52147 8.97075 9.56147C8.34657 9.70768 7.80573 10.0952 7.46659 10.6392C7.12745 11.1832 7.01762 11.8395 7.16115 12.4643L8.10075 16.6175C8.22051 17.1513 8.51818 17.6285 8.94491 17.9709C9.37164 18.3132 9.90207 18.5003 10.4491 18.5015H18.1555C18.7024 18.5 19.2326 18.3128 19.6591 17.9705C20.0855 17.6282 20.383 17.1511 20.5027 16.6175L21.4423 12.4631C21.4823 12.2863 21.5023 12.1067 21.5023 11.9243C21.5038 11.6071 21.4426 11.2928 21.3224 10.9993C21.2022 10.7058 21.0253 10.4389 20.8018 10.2139C20.5784 9.98882 20.3127 9.81006 20.02 9.68782C19.7274 9.56558 19.4123 9.50225 19.0951 9.50146ZM9.24075 10.7315C9.32854 10.7115 9.4183 10.7014 9.50835 10.7015H19.0951C19.2781 10.7025 19.4585 10.7448 19.6228 10.8252C19.7871 10.9056 19.9312 11.0221 20.0442 11.1659C20.1572 11.3098 20.2364 11.4773 20.2757 11.6559C20.315 11.8346 20.3134 12.0199 20.2711 12.1979L19.3303 16.3523C19.2708 16.6203 19.1221 16.8602 18.9084 17.0326C18.6948 17.205 18.4289 17.2998 18.1543 17.3015H10.4491C9.88755 17.3015 9.39915 16.9079 9.27315 16.3523L8.33355 12.1979C8.26073 11.883 8.31536 11.5522 8.48554 11.2775C8.65572 11.0027 8.92642 10.8065 9.24075 10.7315Z" fill="white"/>
<path d="M20.9008 20.6015C20.9008 21.1584 20.6795 21.6926 20.2857 22.0864C19.8919 22.4802 19.3577 22.7015 18.8008 22.7015C18.2438 22.7015 17.7097 22.4802 17.3159 22.0864C16.922 21.6926 16.7008 21.1584 16.7008 20.6015C16.7008 20.0445 16.922 19.5104 17.3159 19.1165C17.7097 18.7227 18.2438 18.5015 18.8008 18.5015C19.3577 18.5015 19.8919 18.7227 20.2857 19.1165C20.6795 19.5104 20.9008 20.0445 20.9008 20.6015ZM12.5008 20.6015C12.5008 20.8772 12.4465 21.1503 12.3409 21.4051C12.2354 21.6599 12.0807 21.8914 11.8857 22.0864C11.6907 22.2814 11.4592 22.4361 11.2044 22.5416C10.9496 22.6471 10.6766 22.7015 10.4008 22.7015C10.125 22.7015 9.85193 22.6471 9.59715 22.5416C9.34236 22.4361 9.11086 22.2814 8.91586 22.0864C8.72085 21.8914 8.56617 21.6599 8.46063 21.4051C8.3551 21.1503 8.30078 20.8772 8.30078 20.6015C8.30078 20.0445 8.52203 19.5104 8.91586 19.1165C9.30968 18.7227 9.84383 18.5015 10.4008 18.5015C10.9577 18.5015 11.4919 18.7227 11.8857 19.1165C12.2795 19.5104 12.5008 20.0445 12.5008 20.6015Z" fill="white"/>
</svg>

                Checkout
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
</div>
      {/* Continue Shopping Link */}
      <div className="mt-8">
        <Button 
          variant="link" 
          className="text-button hover:text-green-600 pl-0 flex items-center gap-2"
        >
          ← Continue shopping
        </Button>
      </div>
    </div>
  );
}
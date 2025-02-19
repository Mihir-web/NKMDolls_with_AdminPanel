
// import React from "react";


// interface ProductPageProps {
//   productName: string;
//   description: string;
//   price: number;
// }

// const ProductPage: React.FC<ProductPageProps> = ({
//   productName,
//   description,
//   price,
// }) => {
//   const features = [
//     {
//       title: "MONEY Return",
//       description: "Back guarantee under 7 days.",
//       bgColor: "bg-orange-50",
//     },
//     {
//       title: "Secure Payment",
//       description: "On every order over $150",
//       bgColor: "bg-sky-100",
//     },
//     {
//       title: "Home Delivery",
//       description: "Free delivery to your home",
//       bgColor: "bg-sky-100",
//     },
//     {
//       title: "24/7 Support",
//       description: "Dedicated support in 24hrs.",
//       bgColor: "bg-rose-50",
//     },
//   ];

//   return (
//     <main className="flex flex-col">
//       <section className="w-full max-w-[1380px] max-md:max-w-full">
//         <div className="flex gap-5 max-md:flex-col">
//           <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
//             <div className="flex shrink-0 max-w-full h-[476px] w-[807px] max-md:mt-9" />
//           </div>
//           <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
//             <ProductInfo
//               name={productName}
//               description={description}
//               price={price}
//             />
//             <BuyNowButton />
//           </div>
//         </div>
//       </section>
//       <section className="flex gap-2.5 items-center px-16 py-8 text-gray-600 bg-white rounded max-md:px-5 max-md:max-w-full">
//         <div className="flex flex-wrap gap-6 justify-center items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
//           {features.map((feature, index) => (
//             <FeatureCard key={index} {...feature} />
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// };

// export default ProductPage;

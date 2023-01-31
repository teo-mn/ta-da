import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import content from "./data/Contents.json";
import fontsize from "./data/fontSizes.json";
import sidebar from "./component/sidebar/data/sidebar.json";
import language from "./component/sidebar/data/language.json";

import GridItem from "./component/typography/GridItem";
import Sidebar from "./component/sidebar/sidebar";
import Contents from "./component/typography/Contents";
import Title from "./component/typography/title";
import Button from "./component/typography/button";
import Footer from "./component/typography/footer";
import Header from "./component/sidebar/header";
const root = ReactDOM.createRoot(document.getElementById("root"));
function onClick() {
  console.log("do something here");
}
root.render(
<React.StrictMode>
  <div className="container">
    <div className="bar">
      <Header />
      <div className="bar-container">
        <Sidebar props={sidebar} />
        <Sidebar props={language} />
      </div>
    </div>
    <div className="content">
      <div className="text-gray-700 bg-white font-Poppins">
        <div className="w-100 flex flex-row justify-between">
          <h1 className="text-3xl font-semibold">Typography</h1>
          <h6 className="text-xs">Version 1.0.0</h6>
        </div>
        <p className="text-sm pt-5 ">
          Typography is an important part of a design system that brings
          consistency across experiences and platforms. Good typography rules
          help present content clearly and efficiently.
        </p>
      </div>
      <div className="space"></div>
      <Contents props={content} />
      <div className="space"></div>
      <div className=" bg-white text-gray-700 pb-8">
        <h3 className=" font-medium text-xl mb-2">Typfaces</h3>
        <hr className=" bg-gray-100 h-1 border-none" />
        <p className="text-gray-900 font-Manrope font-normal py-8">
          TEO uses the typefaces Poppins. These are available for download on
          the
          <a
            className="text-gray-900 px-1 pb-8 underline"
            href="https://fonts.google.com/specimen/Poppins"
          >
            Google fonts
          </a>
          page.
        </p>
        <div className=" flex flex-row py-[5%] justify-evenly bg-gray-100">
          <div className="font-Manrope font-bold text-5xl">AaUuBb</div>
          <div className="font-Manrope font-semibold text-5xl">АаҮүӨө</div>
        </div>
      </div>
      <div className="space"></div>
      <div className="font-Manrope bg-gray-50 text-gray-700 flex-col">
        <h3 className="font-medium text-xl mb-2">Typography components</h3>
        <hr className=" bg-gray-100 border-none h-1" />
        <div className=" py-6 flex flex-col text-gray-900">
          <div className="flex flex-row w-[100%] h-52 my-5">
            <div className="w-[50%]">
              <h3 className=" text-l font-semibold">Heading</h3>
              <p className=" py-3 text-sm">
                Heading is used to create various levels of typographic
                hierarchies.
              </p>
              <p className="font-normal text-base text-blue-800">
                View the Heading typography component
              </p>
            </div>
            <div className="w-[50%]">
              <Title
                header={"Hello world."}
                body={"Example of Heading XXL"}
                bg={"#f3f3f3"}
                color={"gray-900"}
                headerSize={"3em"}
              />
            </div>
          </div>
          <div className="flex flex-row w-[100%] h-52 my-5">
            <div className="w-[50%]">
              <h3 className=" text-l font-semibold">Body</h3>
              <p className=" py-3 text-sm">
                Body is primarily used for Spectrum components and for blocks of
                text.
              </p>
              <p className="font-normal text-base text-blue-800">
                View the Body typography component
              </p>
            </div>
            <div className="w-[50%]">
              <Title
                header={"TEO is based on real-world situations."}
                body={"Example of Body M"}
                bg={"#f3f3f3"}
                color={"gray-900"}
                headerSize={"1em"}
              />
            </div>
          </div>
          <div className="flex flex-row w-[100%] h-52 my-5">
            <div className="w-[50%]">
              <h3 className="detail-title">Detail</h3>
              <p className=" py-3 text-sm">
                Detail is used for disclosing extra information or smaller items
                in hierarchical relationships of text.
              </p>
              <p className="font-normal text-base text-blue-800">
                View the Detail typography component
              </p>
            </div>
            <div className="w-[50%]">
              <Title
                header={"Our recommendations"}
                body={"Example of Detail XL"}
                bg={"#f3f3f3"}
                color={"gray-900"}
                headerSize={"1.3em"}
              />
            </div>
          </div>
          <div className="flex flex-row w-[100%] h-52 my-5">
            <div className="w-[50%]">
              <h3 className=" text-l font-semibold">Code</h3>
              <p className=" py-3 text-sm">
                Code is used for text that represents code.
              </p>
              <p className="font-normal text-base text-blue-800">
                View the Code typography component
              </p>
            </div>
            <div className="w-[50%]">
              <Title
                header={"alert(“Hello World”);"}
                body={"Example of Code S"}
                bg={"#f3f3f3"}
                color={"gray-900"}
                headerSize={"1em"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="space"></div>
      <div className="font-Poppins bg-gray-50 text-gray-700 flex-col">
        <h3 className="font-medium text-xl mb-2">Text formatting</h3>
        <hr className="bg-gray-100 border-none h-1" />
        <p className=" text-gray-900 font-Manrope font-normal py-8">
          Text formatting can be used to visually add clarity and adjust voice
          or meaning.
        </p>
        <div className="flex flex-col">
          <div className="flex flex-row my-5">
            <Button
              bg={"#0f799b"}
              text={"Button"}
              color={"#ffffff"}
              action={onClick}
              textSize={"1em"}
            />
            <div className=" pl-8 w-[100%]">
              <h3 className="color-gray-900 font-semibold text-sm">Bold</h3>
              <p className="color-gray-900 font-normal font-s py-4">
                Bold is used to add hierarchy within a sentence or to call
                attention, for example, in buttons and toasts. It’s also used to
                directly refer to the names of UI elements in running text.
              </p>
            </div>
          </div>
          <div className="flex flex-row my-5">
            <div className="w-[100%] flex bg-gray-100 h-52"></div>
            <div className=" pl-8 w-[100%]">
              <h3 className="color-gray-900 font-semibold text-sm">Italic</h3>
              <p className="color-gray-900 font-normal font-s py-4">
                Italic is used only for placeholder (“ghost”) text and image
                captions. Note that this does not apply to Adobe Clean Han
                because CJK languages should not be italicized.
              </p>
            </div>
          </div>
          <div className="flex flex-row my-5">
            <div className="w-[100%] flex bg-gray-100 h-52"></div>
            <div className=" pl-8 w-[100%]">
              <h3 className="color-gray-900 font-semibold text-sm">
                Underline
              </h3>
              <p className="color-gray-900 font-normal font-s py-4">
                Underline is used only for text{" "}
                <a href="https://spectrum.adobe.com/page/link/">links</a>{" "}
                (either hover state or default state, depending on the style of
                the link) and should never be used as a mechanism for adding
                emphasis.
              </p>
            </div>
          </div>
          <div className="flex flex-row my-5">
            <Button
              bg={"#0f799b"}
              text={"Button abc@adobe.com"}
              color={"#ffffff"}
              action={onClick}
              textSize={"1em"}
              decoration={"underline"}
              fontStyle={"italic"}
            />
            <div className=" pl-8 w-[100%]">
              <h3 className="color-gray-900 font-semibold text-sm">Strong</h3>
              <p className="color-gray-900 font-normal font-s py-4">
                Strong can be used for placing importance on part of a sentence,
                rendering the text as a heavier font weight. This is for
                semantic formatting, when it’s intended to add a tone that
                conveys importance.
              </p>
            </div>
          </div>
          <div className="flex flex-row my-5">
            <Button
              bg={"#0f799b"}
              text={"Button"}
              color={"#ffffff"}
              action={onClick}
              textSize={"1em"}
            />
            <div className=" pl-8 w-[100%]">
              <h3 className="color-gray-900 font-semibold text-sm">Emphasis</h3>
              <p className="color-gray-900 font-normal font-s py-4">
                Emphasis can be used for placing emphasis on part of a sentence,
                rendering the text as italic (or heavier weight, in CJK
                languages).
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="space"></div>
      <div className="bg-white text-gray-700 py-6">
        <h3 className=" font-medium text-xl mb-2">Font sizes</h3>
        <hr className="bg-gray-100 h-1 border-none" />
        <p className="text-gray-900 font-Manrope font-normal py-4">
          Spectrum ensures that different sizes of text can work together
          harmoniously, on both desktop and mobile. All font sizes have a ratio
          of 1.125, known as the major second type scale. This means that each
          size is multiplied or divided by 1.125 from the previous size,
          starting with the base size, and rounded. Custom text (any
          non-existing typography component) should use a font size from this
          list.
        </p>
        <div className="flex flex-col justify-between text-gray-900 w-[100%]">
          {fontsize.map((item, index) => (
            <GridItem key={index} item={item} />
          ))}
        </div>
      </div>
      <div className="space"></div>
      <div className="bg-white font-Poppins text-gray-700">
        <h3 className="font-medium text-base mb-2">Line height</h3>
        <hr className="bg-gray-100 h-1 border-none" />
        <div className="flex flex-row pt-6">
          <div className="w-[50%] bg-gray-100 h-52 flex justify-center items-center">
            <div className="w-[40%] font-medium text-gray-900">
              <p className="flex justify-self-center text-gray-900 font-medium p-0">
                Striving to be a Consistent
              </p>
              <div className="w-[100%] bg-aqua-500 h-6 relative flex justify-center font-medium">
                Tech Chainger
              </div>
            </div>
          </div>
          <div className="w-[50%] pl-8">
            <h3 className="font-semibold text-sm text-gray-900">
              Heading, body, detail and code
            </h3>
            <p className="p-0 text-gray-900 font-Poppins font-normal py-8 text-sm">
              Heading, body, detail and code use a 1.5x multipler to ensure
              readibilty. This applies to all TEO fonts as well as their
              fallback fonts.
            </p>
          </div>
        </div>
      </div>
      <div className="space"></div>
      <div className="bg-white font-Poppins">
        <div className=" text-blue-800 flex flex-row justify-between font-normal ">
          <p className=" text-sm py-4 hover:cursor-pointer">
            <i className="bi-chevron-left"></i> Previous
          </p>
          <p className=" text-sm py-4 hover:cursor-pointer">
            Next
            <i className="bi-chevron-right"></i>
          </p>
        </div>
        <hr className="w-[100%] border-none h-1 bg-gray-100" />
        <Footer text={"Copyright © 2022 TEO. All right reserved."} />
      </div>
    </div>
  </div>
  </React.StrictMode>
);

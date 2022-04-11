import type { NextPage } from "next";
import { Navigation } from "../components/layout/Navigation";
import { BigTwoImage, Header, TitleText } from "../components/modules/Home";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto bg-white font-jost">
      <Navigation />
      <Header />
      <TitleText
        title="We make Live, Push and Link — unique software and hardware for
              music creation and performance. With these products, our community
              of users creates amazing things."
        description="Ableton was founded in 1999 and released the first version of Live
              in 2001. Our products are used by a community of dedicated
              musicians, sound designers, and artists from across the world."
      />
      <BigTwoImage />
      <TitleText
        title="Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding."
        description="We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for."
      />
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col w-1/2">
            <img src="./photo-1.jpeg" alt="" />
            <span className="mt-2 text-sm font-medium">
              Why Ableton - Juanpe Bolivar
            </span>
          </div>
        </div>
      </div>
      <TitleText
        title="We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo."
        description="Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture.        "
      />
      <div className="relative h-screen w-full">
        <div className="bg-spearmint absolute w-7/12 h-full left-0" />
        <div
          className="absolute left-20 top-20 "
          style={{
            height: 300,
            width: 500,
          }}
        >
          <img
            src="./photo-3.jpeg"
            className="object-cover w-full h-full"
            alt=""
          />
        </div>
        <div
          className="absolute w-1/3 left-20 bottom-20"
          style={{
            height: 300,
            width: 500,
          }}
        >
          <img
            src="./photo-4.jpeg"
            className="object-cover w-full h-full"
            alt=""
          />
        </div>
        <div
          className="absolute right-40 top-1/2 transform -translate-y-1/2"
          style={{
            height: 600,
          }}
        >
          <img
            src="./photo-5.jpeg"
            className="object-cover w-full h-full"
            alt=""
          />
        </div>
      </div>
      <TitleText
        title="We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great."
        description="Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We’ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don’t always agree with each other, but opinion and debate are valued and openly encouraged.

        "
      />
      <div className="px-24">
        <img src="./poster.avif" alt="" className="object-fit" />
      </div>
      <TitleText
        title="We’re passionate about what we do, but we’re equally passionate about improving who we are.
        "
        description={
          <>
            We work hard to foster an environment where people can grow both
            personally and professionally, and we strive to create a wealth of
            opportunities to learn from and with each other.
            <br />
            <br />
            Alongside an internal training program, employees are actively
            supported in acquiring new knowledge and skills, and coached on
            applying these in their daily work. In addition, staff-organized
            development and music salons are a chance to discuss new
            technologies, production techniques and best practices.
          </>
        }
      />
      <div className="relative h-screen w-full">
        <div className="bg-lavender absolute w-3/4 left-1/2 -translate-x-1/2  h-full right-0" />
        <div
          className="absolute left-40 top-1/2 transform -translate-y-1/2"
          style={{ height: 300, width: 450 }}
        >
          <img
            src="./photo-6-a.jpeg"
            className="object-cover h-full w-full"
            alt=""
          />
        </div>
        <div
          className="absolute w-1/3 right-0 top-1/2 transform -translate-y-1/2"
          style={{ height: 600, width: 600 }}
        >
          <img
            src="./photo-7.jpeg"
            className="object-cover h-full w-full"
            alt=""
          />
        </div>
      </div>
      <TitleText
        title="We want our employees to love it here. Since we’re looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible.
        "
        description="If you're joining us in Berlin, we'll help with relocation and paperwork. We’ll even provide you with free German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it’s not all work; we have several company and team outings throughout the year as well as a variety of fun, informal small-group activities."
      />
      <div className="container p-36 w-full h-screen flex flex-row">
        <div className="w-1/2 h-full">
          <img
            src="./photo-8.jpeg"
            className="object-cover h-full w-full"
            alt=""
          />
        </div>
        <div className="w-1/2 h-full bg-periwinkle flex flex-col items-center justify-center">
          <div className="px-28 flex flex-col gap-8">
            <span className="text-3xl leading-10">
              We’re really proud of the work we’ve done so far. But there’s so
              much more to come. If you’d like to be a part of it, please join
              us.
            </span>
            <span className="text-blue-700 text-3xl">
              See latest jobs {">"}
            </span>
          </div>
        </div>
      </div>
      <div className="container px-24 py-36 border-t-2">
        <span className="text-6xl">Ableton</span>
        <div className="grid grid-cols-12 my-16 font-light text-lg gap-4 gap-y-16">
          <div className="col-span-3 flex flex-col gap-3">
            <span>Register Live or Push {">"}</span>
            <span>About Ableton {">"}</span>
            <span>Jobs {">"}</span>
            <div className="flex flex-row gap-2">
              <div className="h-10 w-10 bg-blue-600" />
              <div className="h-10 w-10 bg-blue-400" />
              <div className="h-10 w-10 bg-red-500" />
              <div className="h-10 w-10 bg-orange-400" />
            </div>
          </div>
          <div className="col-span-3 flex flex-col gap-3">
            <span className="font-normal">Education</span>
            <span>Offers for students and teachers {">"}</span>
            <span>Ableton for the Classroom {">"}</span>
            <span>Ableton for Collages and Universities {">"}</span>
          </div>
          <div className="col-span-6 flex flex-col gap-3">
            <span className="font-nomal">Sign up to our newsletter</span>
            <span>
              Enter your email address to stay up to date with the latest
              offers, tutorials, downloads, surveys and more.
            </span>
            <div className="mt-2 flex flex-row w-full">
              <input
                type="text"
                className="flex-1 px-4 py-2 bg-slate-200"
                placeholder="Email Address"
              />
              <button className="bg-blue-700 text-white px-6">Sign up</button>
            </div>
          </div>
          <div className="col-span-3 flex flex-col gap-3">
            <span className="font-normal">Community</span>
            <span>Find Ableton User Groups {">"}</span>
            <span>Find Certified Training {">"}</span>
            <span>Become a Certified Trainer {">"}</span>
          </div>
          <div className="col-span-3 flex flex-col gap-3">
            <span className="font-normal">Distributors</span>
            <span>Find Distributors {">"}</span>
            <span>Try Push in-store {">"}</span>
          </div>
          <div className="col-span-3 flex flex-col gap-3">
            <span className="font-normal">Language and Location</span>
            <div className="flex flex-row gap-1 text-xs font-normal">
              <select className="bg-slate-200 px-4 py-2 w-36" name="" id="">
                <option value="">English</option>
              </select>
              <select className="bg-slate-200 px-4 py-2 w-48" name="" id="">
                <option value="">Indonesia</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-3 font-normal text-sm">
            <span>Contact Us</span>
            <span>Press Resources</span>
            <span>Legal Info</span>
            <span>Privacy Policy</span>
            <span>Cookie Settings</span>
            <span>Imprint</span>
          </div>
          <div className="flex flex-row gap-3 font-normal text-sm">
            <span>Made in Berlin</span>
            <div className="w-12">
              <img src="./ableton-logo.png" alt="" className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

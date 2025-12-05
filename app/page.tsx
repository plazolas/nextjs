import AcmeLogo from '@/app/ui/acme-logo';
import {ArrowRightIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';
import {lusitana} from '@/app/ui/fonts';
import Form from '@/app/create-form';
import Image from 'next/image';
import StaticForm from "@/app/static-form";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col p-6">
            <div className="flex item h-20 shrink-0 items-end rounded-lg bg-blue-landscape p-0 md:h-52">
                <div className="col-last">
                    <a href="https://www.devenzone.com/public" title="Yardwork Professional">
                        <Image
                            src="/public/logo.png"
                            width={50}
                            height={50}
                            className="block"
                            alt="Yardwork Professional"
                        />
                    </a>
                </div>
                <div className="col-last">&nbsp;&nbsp;&nbsp;</div>
                <AcmeLogo/>
                <div className="flex flex-row">&nbsp;</div>
            </div>
            <div className="item flex flex-col bg-green-landscape rounded-lg">
                <div className={`${lusitana.className}`}>
                    <h1 className="text-[44px] text-center">
                        <b>Your Trusted Outdoor Living & Landscape Design Company</b>
                    </h1>
                    <div className="flex justify-center">
                        <a href="tel:4074801670" title="Call now!">
                            <Image
                                src="/public/sign.png"
                                width={600}
                                height={150}
                                className="content-center"
                                alt="Call NOW!"
                            />
                        </a>
                    </div>
                    <div className="content-center">
                        <br/>
                        <h5 className="text-[32px] text-center">
                            <b>Winter Garden, FLORIDA, and the Surrounding Area</b>
                        </h5>
                    </div>
                </div>
            </div>
            <div className="item flex flex-col md:flex-row p-6">
                <div className="flex-grow">
                    <div className={`${lusitana.className}`}>
                        <h2 className="flex flex-row text-[32px] justify-center">Comprehensive Services Backed by Over
                            20 Years of Landscaping Experience</h2>
                    </div>
                </div>
            </div>
            <div className="item flex flex-col md:flex-row">
                <div className="flex-grow">
                    <p>At <b>Yardwork Professional</b>, it's our goal to provide quality and professionalism beyond
                        expectations.
                        While many landscaping companies specialize in only installation or maintenance, we have a team
                        of certified
                        professionals for all your outdoor living needs, including design and installation, pavers,
                        drainage
                        solutions, landscape lighting, sprinkler repairs, palm/tree removals, major clean-ups, and
                        outdoor living
                        solutions.&nbsp;</p>
                    <p>We do the right thing for every client, which starts with a promise to return your calls within
                        24 business
                        hours and provide detailed
                        <a href="tel:4074801670" title="call us">pricing</a> within three business days to get your
                        project going.
                        Throughout the process, we'll stay in touch to make sure you know what to expect and when.
                        Whether we're on
                        your property for irrigation repair, outdoor living installation, or commercial maintenance, we
                        wear company
                        uniforms and work with respect for your home or business.&nbsp;</p>
                    <p>Turn your outdoor space into your personal paradise. We provide customized solutions that make it
                        possible.
                        Fill out our contact form to learn more about our 20-year history among landscaping companies in
                        Winter
                        Garden and how we can help with your project.</p>
                </div>
            </div>
            <div className="item mt-4 flex flex-col gap-4 md:flex-row">
                <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
                    <Image
                        src="/public/landscape-design.jpg"
                        width={500}
                        height={300}
                        className="block"
                        alt="Landscape Design"
                    />
                </div>
                <div
                    className="flex flex-col grow justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
                    <p>The foundation of every magnificent landscape starts with the design. Landscape design companies
                        are
                        not all alike; you will find that you have a better overall experience with a landscape
                        professional
                        who has been in the industry for an extended period. When designing a landscape, it is essential
                        to
                        take into consideration factors like the type of usage the area is subject to, personal
                        preferences,
                        the budgets involved in building and maintaining, the surroundings areas, etc.<br/>
                        It is with this in mind that we approach every project. Whether your design calls for a
                        retaining
                        wall along the property perimeter, or a myriad of trees, flowers and shrubs throughout the yard,
                        a
                        well thought out plan saves time, energy and money.</p>
                </div>
            </div>
            <div className="item mt-4 flex flex-col gap-4 md:flex-row">
                <div className="flex flex-col justify-center rounded-lg bg-gray-200 px-1 py-1 md:w-2/5 md:px-20">
                    <Image
                        src="/public/custom-curbing-800x450.jpg"
                        width={500}
                        height={300}
                        className="block"
                        alt="Landscape Design"
                    />
                </div>
                <div
                    className="flex flex-col grow justify-center gap-6 rounded-lg bg-gray-200 px-1 py-1 md:w-2/5 md:px-20">
                    <p>Concrete curbing can enhance your landscape; it is half the price of bricks, and is a permanent
                        solution, increases curb appeal, decreases the time spent trimming around landscape beds and
                        increase your property value.</p>
                    <p><b>Yardwork Professional</b> can also handle all of your decorative concrete landscape curbing
                        projects as well. Our decorative, stamped curbing is on the cutting edge of landscape design.
                        Concrete curbing is a professionally installed, permanent, attractive concrete border edging
                        that
                        provides great additions and solutions to any landscape and serves as a weed and grass barrier
                        by
                        outlining flowerbeds. Mansfield Landscaping decorative concrete curbing can be installed around
                        trees, flowerbeds, sidewalks and just about anywhere you like. Our curbing comes in multiple
                        shapes,
                        colors, stamp patterns, and textures; including brick, stone, and slate - and will create
                        customized
                        profiles and impressions upon request.</p>
                </div>
            </div>
            <div className="item mt-4 flex flex-col gap-4 md:flex-row">
                <div className="flex flex-col justify-center rounded-lg bg-gray-50 px-1 py-1 md:w-2/5 md:px-20">
                    <Image
                        src="/public/palms-trees-and-shrubs-800x450.jpg"
                        width={500}
                        height={300}
                        className="block"
                        alt="Landscape Design"
                    />
                </div>
                <div
                    className="flex flex-col grow justify-center gap-6 rounded-lg bg-gray-50 px-1 py-1 md:w-2/5 md:px-20">
                    <p>The plethora of plants, trees, and shrubs available can make selecting those that suit both the
                        location and style of your space seem a daunting prospect. Planting design is about correctly
                        placing and balancing quantities of plants and seeking to create the beautiful image you hold in
                        your mind's eye. Let us wow your garden guests or provide respite after a busy day.<br/>
                        Our fully stocked Nursery carries a vast selection of specimen quality trees, palms, and shrubs to
                        enhance landscape, garden, and home. From deciduous flowering trees to palm trees, shade or
                        ornamental varieties, we can help you select the perfect tree for your environment. When it comes to
                        shrubs, we carry a broad spectrum that reflects the Florida landscape providing natural beauty and
                        definition to your property. Our changing inventory and design assistance can help you to select the
                        right plant for the right location that will give you lasting aesthetic enjoyment.</p>
                </div>
            </div>
            <div className="item mt-4 flex flex-col gap-4 md:flex-row">
                <div className="flex flex-col justify-center rounded-lg bg-gray-200 px-1 py-1 md:w-2/5 md:px-20">
                    <Image
                        src="/public/irrigation-800x450.jpg"
                        width={500}
                        height={300}
                        className="block"
                        alt="Landscape Design"
                    />
                </div>
                <div className="flex flex-col grow justify-center gap-6 rounded-lg bg-gray-200 px-1 py-1 md:w-2/5 md:px-20">
                    <h2 className="text-[32px]">Irrigation</h2>
                    <p>Yardwork Professional offers not only sprinkler repair services, but we also provide sprinkler system
                        upgrades which can not only help save you money on your water bill but help you go green and keep
                        Florida (and your lawn and garden) beautiful. We take all the guesswork out of repairing and
                        installing lawn irrigation and plant irrigation systems in your yard.</p>
                    <h2 className="text-[32px]">Sprinkler Repair</h2>
                    <p><b>Yardwork Professional</b> offers affordable prices, quality products, and dependable service! The
                        advantage of using Yardwork Professional is that with a straightforward change, we give you a lot of
                        benefits, like saving money, water, and time. We also anticipate decreased liability and reduced
                        system wear and tear. Our installers meet all industry regulations and environmental challenges
                        while providing a lush landscape that all can enjoy. That's a lot of payback for just changing a
                        nozzle!</p>
                </div>
            </div>
            <div className="item mt-4 flex flex-col gap-4 md:flex-row">
                <div className="flex flex-col grow justify-center gap-6 rounded-lg bg-green-landscape px-4 py-8 md:w-2/5 md:px-20">
                    <StaticForm />
                </div>
                <div className="flex flex-col justify-center rounded-lg bg-blue-landscape px-4 py-1 md:w-2/5 md:px-20">
                    <center><h2 className="text-[32px]">The Crew</h2></center>
                    <Image
                        src="/public/crew.jpg"
                        width={500}
                        height={300}
                        className="block"
                        alt="Landscape Design"
                    />
                </div>
            </div>
        </main>
    );
}

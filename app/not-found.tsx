import Link from 'next/link';
import {ArrowRightIcon, FaceFrownIcon} from '@heroicons/react/24/outline';
import Image from "next/image";
import AcmeLogo from "@/app/ui/acme-logo";

export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col p-6">
            <div className="flex item h-20 shrink-0 items-end rounded-lg bg-blue-landscape p-4 md:h-52">
                <div className="col-last">
                    <a href="https://www.devenzone.com/public" title="Yardwork Professional">
                        <Image
                            src="/logo.png"
                            width={50}
                            height={50}
                            className="block"
                            alt="Yardwork Professional"
                        />
                    </a>
                </div>
                <div className="col-last">&nbsp;&nbsp;&nbsp;</div>
                <AcmeLogo />
                <div className="flex flex-row">&nbsp;</div>
            </div>
            <div className="item mt-4 flex grow flex-col gap-4 md:flex-row">
                <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
                    &nbsp;
                </div>
                <div className="flex flex-col justify-center gap-6 rounded-lg bg-red-300 px-6 py-10 md:w-2/5 md:px-20">
                    <center><FaceFrownIcon className="w-10 text-gray-400" />
                    <h2 className="text-xl font-semibold">404 Page Not Found</h2>
                    <p>Could not find the requested Page.</p></center>
                    <Link
                        href="/"
                        className="flex items-center mt-4 rounded-md bg-blue-landscape font-medium px-6 py-3 text-2xl text-white transition-colors hover:bg-blue-400"
                    >
                        Go Back&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ArrowRightIcon className="w-5 md:w-6 float-right" />
                    </Link>
                </div>
                <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
                    <Link
                        href="/ui/dashboard"
                        className="flex items-center gap-5 self-start rounded-lg bg-blue-landscape px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
                    >
                        <span>Go to Dashboard</span> <ArrowRightIcon className="w-5 md:w-6" />
                    </Link>
                </div>

            </div>

        </main>
    );
}
'use client';
import {
  PhoneIcon,
  EnvelopeIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createUser } from '@/app/lib/actions';
import { z } from 'zod';
import {saveUser} from "@/app/lib/data";
import {redirect} from "next/navigation";

const FormSchema = z.object({
  phone: z.string(),
  email: z.string(),
  name: z.string(),
});

export default function Form() {
  const createContact = async (formData: FormData) => {

    const { name, phone, email } = FormSchema.parse({
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email')
    });
    const date = new Date().toISOString().split('T')[0];

    try {
      await saveUser(name, phone, email, date);
    } catch (error) {
      console.error(error);
    }
    redirect('/ui/thanks');
  }

  return (
      <form action={createContact}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <center><h1 className="text-black content-center text-[32px]">CONTACT US</h1></center>
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <div className="relative text-black">
            <input
                id="name"
                name="name"
                type="string"
                step="0.01"
                placeholder="Your Name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Phone Number
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative text-black">
              <input
                  id="phone"
                  name="phone"
                  type="string"
                  step="0.01"
                  placeholder="Your Phone number"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <PhoneIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        {/* Email */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative text-black">
              <input
                  id="email"
                  name="email"
                  type="string"
                  step="0.01"
                  placeholder="Your Email Address"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
      </div>
      <div id="send" className="mt-6 flex justify-center gap-4">
        <Button type="submit">Send</Button>
      </div>
    </form>
  );
}

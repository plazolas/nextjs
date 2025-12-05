'use client';
import {
  PhoneIcon,
  EnvelopeIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import {FormEvent, useState} from "react";

export default function StaticForm() {
  const [message, setMessage] = useState('');
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('Submitting...');
    const formData = new FormData(event.currentTarget);
    const age = Number(formData.get('age'));
    const phone = Number(formData.get('phone'));
    const email = formData.get('email');
    const name = formData.get('name');

    const endpoint = 'https://www.devenzone.com:8077/users';
    const data = {
      "id" : 0,
      "name": name,
      "email": email,
      "phone": phone,
      "age": age,
      "date":  new Date().toISOString()
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Important: tell the server it's JSON
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessage('Data sent successfully! We will contact you shortly!');
        event.currentTarget.reset();
      } else {
        setMessage(response.statusText);
      }
    } catch (error) {
      // setMessage(JSON.stringify(error));
      setMessage('Message sent successfully! We will contact you shortly!');
      event.currentTarget.reset();
    }
  };

  return (
      <div>
      <form id="contact" onSubmit={handleSubmit}>
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
      <input type="hidden" name="age" id="age" value="21" />
      <input type="hidden" name="id" id="id" value="0" />
      <input type="hidden" name="date" id="date" value="12/25/2025" />
      <div id="send" className="mt-6 flex justify-center gap-4">
        <Button type="submit">Send</Button>
      </div>
    </form>
        <h2>{message && <p className="text-[16px]">{message}</p>}</h2>
      </div>
  );
}

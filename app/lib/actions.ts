'use server'

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { saveInvoice, saveUser} from '@/app/lib/data';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
    id: z.string(),
    customerId: z.string(),
    amount: z.coerce.number(),
    status: z.enum(['pending', 'paid']),
    date: z.string(),
    phone: z.string(),
    email: z.string(),
    name: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true, phone: true, name: true, email: true });
const CreateCustomer = FormSchema.omit({ id: true, date: true, customerId: true, amount: true, status: true });

export async function createInvoice(formData: FormData): Promise<void> {
    const { customerId, amount, status } = CreateInvoice.parse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status')
    });
    const amountInCents = amount * 100;
    const date = new Date().toISOString().split('T')[0];

    try {
        await saveInvoice(customerId, amountInCents, status, date);
    } catch (error) {
        console.error(error);
    }
    revalidatePath('/ui/dashboard/invoices');
    redirect('/ui/dashboard/invoices');
}

export async function createUser(formData: FormData): Promise<void> {
    const { name, phone, email } = CreateCustomer.parse({
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
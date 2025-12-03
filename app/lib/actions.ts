

import { z } from 'zod';
import { saveUser} from '@/app/lib/data';
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

const CreateCustomer = FormSchema.omit({ id: true, date: true, customerId: true, amount: true, status: true });

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
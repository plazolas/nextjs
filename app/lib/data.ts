
import postgres from 'postgres';
import {
  CustomerField,
  CustomersTableType,
  InvoiceForm,
  InvoicesTable,
  LatestInvoiceRaw,
  Revenue,
  Invoice,
  Customer
} from './definitions';
import { formatCurrency } from './utils';
import { revenue } from './placeholder-data';
import { invoices } from './placeholder-data';
import { customers } from './placeholder-data';
import { ReadableStream} from 'next/dist/compiled/@edge-runtime/primitives';
import {User} from "next-auth";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

const backend = process.env.BACKEND!;

export async function fetchRevenue(): Promise<Revenue[]> {

  await new Promise((resolve) => setTimeout(resolve, 100));

    const response = await fetch(backend+ '/revenues');
    const rawData = await response.text();
    let data = rawData.replace(/\n/g,'');
    data = data.replace(/'/g,'"');
    return JSON.parse(data);
}

export async function fetchLatestInvoices() {
  const response = await fetch(backend+'/latestInvoices');
  const rawData = await response.text();
  let data = rawData.replace(/\n/g,'');
  data = data.replace(/'/g,'"');
  return JSON.parse(data);
}

export async function fetchInvoices(): Promise<Invoice[]> {
  const response = await fetch(backend+'/invoices');
  const rawData = await response.text();
  let data = rawData.replace(/\n/g,'');
  data = data.replace(/'/g,'"');
  return JSON.parse(data);
}

export async function saveInvoice(customerId: string, amount: number, status: string, date: any ): Promise<Invoice> {
  const invoice = { 'id': 0, 'customer_id': customerId, 'amount':amount, 'status':status, 'date':date };
  const response = await fetch(backend+'/invoice',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer your_token' // Add other headers as needed
    },
    body: JSON.stringify(invoice), // Convert the TypeScript object to a JSON strin
  });
  const rawData = await response.text();
  let data = rawData.replace(/\n/g,'');
  data = data.replace(/'/g,'"');
  return JSON.parse(data);
}

export async function saveUser(name: string, phone: string, email: string, date: any ): Promise<User> {
  const user = { 'id': 0, 'name': name, 'email':email, 'phone':phone, 'date':date , 'age': 21};
  const response = await fetch(backend+'/users',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer your_token' // Add other headers as needed
    },
    body: JSON.stringify(user), // Convert the TypeScript object to a JSON strin
  });
  const rawData = await response.text();
  let data = rawData.replace(/\n/g,'');
  data = data.replace(/'/g,'"');
  return JSON.parse(data);
}

export async function fetchCardData() {
  try {
    // You can probably combine these into a single SQL query
    // However, we are intentionally splitting them to demonstrate
    // how to initialize multiple queries in parallel with JS.
    const invoicePromise =  fetchInvoices();
    const customerPromise = fetchCustomers();
    const invoiceStatusPromise = invoices.length - 3;

    const fetchedData = await Promise.all([
      [invoicePromise],
      [customerPromise]
    ]);

    const data =[
      [fetchedData[0].length],
      [fetchedData[1].length],
      [invoiceStatusPromise]
    ];

    const numberOfInvoices = Number(data[0][0] ?? '0');
    const numberOfCustomers = Number(data[1][0] ?? '0');
    const totalPaidInvoices = formatCurrency(data[2][0] ?? '0');
    const totalPendingInvoices = formatCurrency(data[2][0] ?? '0');

    return {
      numberOfCustomers,
      numberOfInvoices,
      totalPaidInvoices,
      totalPendingInvoices,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredInvoices(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    return fetchLatestInvoices();
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function fetchInvoicesPages(query: string) {
  try {
    const data = invoices;

    const totalPages = Math.ceil(Number(data[0]) );
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}

export async function fetchInvoiceById(id: string) {
  try {
    const data = invoices;

    const invoice = data.map((invoice) => ({
      ...invoice,
      // Convert amount from cents to dollars
      amount: invoice.amount / 100,
    }));

    return invoice[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}

export async function fetchCustomers(): Promise<Customer[]> {
  const response = await fetch("http://localhost:8077/customers");
  const rawData = await response.text();
  let data = rawData.replace(/\n/g,'');
  data = data.replace(/'/g,'"');
  return JSON.parse(data);
}

export async function fetchFilteredCustomers(query: string) {
  try {
    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch customer table.');
  }
}

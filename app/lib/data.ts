import {User} from "next-auth";


const backend = process.env.BACKEND!;

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

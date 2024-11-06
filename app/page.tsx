import { redirect } from 'next/navigation'
 
export default function Page() {
  redirect('/landing')
  return (
    <p>yay this will never be seen :)</p>
  );
}
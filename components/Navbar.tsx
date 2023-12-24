/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export function Navbar() {
  const { data } = useQuery<any, Error, { title: string; link: string }[]>({
    queryKey: ['links'],
    queryFn: async () => {
      const response = await axios.get('/api/getLinks')

      return response.data
    },
  })

  const link = data?.find((link) => link.title === 'Whatsapp')?.link || '#'

  return (
    <nav
      id="home"
      className="w-full shadow py-5 top-0 bg-gray-100 flex justify-center sm:fixed z-[999]"
    >
      <div className="xl:max-w-[1440px] w-full  flex justify-between items-center px-5">
        <Link href="/">
          <img src="/logo.png" alt="logo" className="w-60" />
        </Link>
        <div className="flex gap-5 items-center justify-center">
          <div className="grid">
            <Link
              href={link}
              target="_blank"
              className="font-bold bg-sky-500 hidden text-lg sm:flex text-white px-6 rounded-md py-3 hover:underline"
            >
              Fale conosco
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

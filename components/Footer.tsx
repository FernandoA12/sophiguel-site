/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import * as Icons from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export function Footer() {
  const { data } = useQuery<any, Error, { title: string; link: string }[]>({
    queryKey: ['links'],
    queryFn: async () => {
      const response = await axios.get('/api/getLinks')

      return response.data
    },
  })

  const getLink = (title: string) =>
    data?.find((link) => link.title === title)?.link || '#'

  return (
    <footer className="pb-20 pt-10 bg-zinc-50 w-full flex justify-center">
      <div className="max-w-[1440px] w-full flex px-5">
        <div className="grid gap-5 w-full">
          <div className="flex justify-between">
            <img src="/logo.png" alt="logo" className="w-60" />

            <Image
              alt="Sistema no notebook"
              priority
              width={150}
              height={150}
              src="/selo.svg"
            />
          </div>
          <hr />
          <div className="flex self-end gap-4">
            <a
              href={getLink('Facebook')}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:opacity-80"
            >
              <Icons.Facebook className="stroke-gray-400 fill-gray-400" />
            </a>
            <a
              href={getLink('Instagram')}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:opacity-80"
            >
              <Icons.Instagram className="stroke-gray-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

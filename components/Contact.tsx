import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export function Contact() {
  const { data } = useQuery<any, Error, { title: string; link: string }[]>({
    queryKey: ['links'],
    queryFn: async () => {
      const response = await axios.get('/api/getLinks')

      return response.data
    },
  })

  const link = data?.find((link) => link.title === 'Whatsapp')?.link || '#'

  return (
    <section className="w-full flex justify-center items-center py-10 px-6 bg-white">
      <div className="w-full max-w-[1440px] gap-6 grid text-center">
        <h1 className="font-logo text-[#333] text-3xl">
          Você ainda está com duvidas?
        </h1>
        <span className="text-xl text-primary font-bold">
          Fale agora mesmo com um especialista
        </span>
        <div className="w-full flex justify-center items-center">
          <Link
            href={link}
            target="_blank"
            className="flex justify-center hover:opacity-75 items-center flex-col gap-4 bg-zinc-100 p-4 rounded-md"
          >
            <svg className="fill-green-500 w-20" viewBox="0 0 20 20">
              <path d="M16.7,3.3c-1.8-1.8-4.1-2.8-6.7-2.8c-5.2,0-9.4,4.2-9.4,9.4c0,1.7,0.4,3.3,1.3,4.7l-1.3,4.9l5-1.3c1.4,0.8,2.9,1.2,4.5,1.2 l0,0l0,0c5.2,0,9.4-4.2,9.4-9.4C19.5,7.4,18.5,5,16.7,3.3 M10.1,17.7L10.1,17.7c-1.4,0-2.8-0.4-4-1.1l-0.3-0.2l-3,0.8l0.8-2.9 l-0.2-0.3c-0.8-1.2-1.2-2.7-1.2-4.2c0-4.3,3.5-7.8,7.8-7.8c2.1,0,4.1,0.8,5.5,2.3c1.5,1.5,2.3,3.4,2.3,5.5 C17.9,14.2,14.4,17.7,10.1,17.7 M14.4,11.9c-0.2-0.1-1.4-0.7-1.6-0.8c-0.2-0.1-0.4-0.1-0.5,0.1c-0.2,0.2-0.6,0.8-0.8,0.9 c-0.1,0.2-0.3,0.2-0.5,0.1c-0.2-0.1-1-0.4-1.9-1.2c-0.7-0.6-1.2-1.4-1.3-1.6c-0.1-0.2,0-0.4,0.1-0.5C8,8.8,8.1,8.7,8.2,8.5 c0.1-0.1,0.2-0.2,0.2-0.4c0.1-0.2,0-0.3,0-0.4C8.4,7.6,7.9,6.5,7.7,6C7.5,5.5,7.3,5.6,7.2,5.6c-0.1,0-0.3,0-0.4,0 c-0.2,0-0.4,0.1-0.6,0.3c-0.2,0.2-0.8,0.8-0.8,2c0,1.2,0.8,2.3,1,2.4c0.1,0.2,1.7,2.5,4,3.5c0.6,0.2,1,0.4,1.3,0.5 c0.6,0.2,1.1,0.2,1.5,0.1c0.5-0.1,1.4-0.6,1.6-1.1c0.2-0.5,0.2-1,0.1-1.1C14.8,12.1,14.6,12,14.4,11.9"></path>
            </svg>
            <span className="font-bold">Nos mande um Whatsapp</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
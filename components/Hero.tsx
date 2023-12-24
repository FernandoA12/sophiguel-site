/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'

let timer: NodeJS.Timeout

export function Hero() {
  const { data } = useQuery({
    queryKey: ['words hero'],
    queryFn: async () => {
      const response = await axios.get('/api/getWordsHero')

      return response.data
    },
  })

  const { data: links } = useQuery<
    any,
    Error,
    { title: string; link: string }[]
  >({
    queryKey: ['links'],
    queryFn: async () => {
      const response = await axios.get('/api/getLinks')

      return response.data
    },
  })

  const link = links?.find((link) => link.title === 'Whatsapp')?.link || '#'

  useEffect(() => {
    const spanElement = document.getElementById('texto') as HTMLSpanElement
    const words = data || ['Agilidade']
    let currentWord = 0

    function changeWord() {
      spanElement.innerHTML = ''
      const currentWordComplete = words[currentWord]
      let currentLetter = 0

      function writeLetter() {
        if (currentLetter < currentWordComplete.length) {
          spanElement.innerHTML += currentWordComplete.charAt(currentLetter)
          currentLetter++
          timer = setTimeout(writeLetter, 50)
        } else {
          timer = setTimeout(clearWord, 2000)
        }
      }

      function clearWord() {
        if (spanElement.innerHTML.length > 0) {
          spanElement.innerHTML = spanElement.innerHTML.slice(0, -1)
          timer = setTimeout(clearWord, 50)
        } else {
          currentWord = (currentWord + 1) % words.length
          timer = setTimeout(changeWord, 3)
        }
      }

      writeLetter()
    }

    changeWord()

    return () => {
      clearTimeout(timer)
    }
  }, [data])

  return (
    <section className="flex justify-center items-start overflow-hidden pt-10 sm:pt-24 px-6 z-50">
      <div className="max-w-[1000px] lg:max-w-[1340px] flex flex-col md:grid md:grid-cols-2 justify-center items-center md:items-end pb-44 w-full relative">
        <header className="grid max-w-[500px] w-full gap-4 md:pt-10 lg:pt-44">
          <div className="flex flex-col gap-2 sm:gap-4 text-center md:text-start">
            {/* <h2 className="text-md sm:text-2xl md:text-xl text-zinc-400">
              Trasportadora 
            </h2> */}
            <h1 className="text-[27px] sm:text-4xl lg:text-5xl font-logo !font-medium text-secondary">
              Aqui você tem{' '}
            </h1>
            <div className="flex justify-center md:justify-start items-end">
              <h1 className="text-[27px] sm:text-4xl lg:text-5xl font-logo !font-medium text-secondary">
                mais
              </h1>
              <span
                id="texto"
                className="text-[27px] ml-2 sm:text-4xl lg:text-5xl text-sky-500 font-logo "
              ></span>
              <span className="typing-cursor text-[27px] sm:text-4xl lg:text-5xl">
                |
              </span>
            </div>
            <h1 className="text-[27px] sm:text-4xl lg:text-5xl font-logo !font-medium text-secondary">
              para o seu negócio
            </h1>
            <h2 className="text-md sm:text-xl  text-zinc-400">
              A solução perfeita para suas necessidades de transporte!
            </h2>
          </div>
          <div className="flex justify-center items-center md:justify-start">
            <Link
              href={link}
              target="_blank"
              className="bg-sky-500 text-center max-w-[285px] cursor-pointer text-white p-3 w-full sm:text-xl text-md rounded-md font-bold shadow-lg hover:bg-sky-400"
            >
              Contratar
            </Link>
          </div>
        </header>
        <section className="flex justify-center items-center">
          <svg
            viewBox="0.0 0.0 381.3 253.2"
            zoomAndPan="magnify"
            className="fill-primary -z-[999] opacity-30 absolute -rotate-90 w-[700px]"
          >
            <g>
              <g id="_id298_siz16zdtp5">
                <path d="M164.18,56.56h-29.95c-7.34,0-13.31-5.97-13.31-13.31V13.31c0-7.34,5.97-13.31,13.31-13.31h29.95 c7.34,0,13.31,5.97,13.31,13.31v29.95C177.48,50.59,171.52,56.56,164.18,56.56z M134.23,3.04c-5.66,0-10.26,4.6-10.26,10.26v29.95 c0,5.66,4.6,10.26,10.26,10.26h29.95c5.66,0,10.26-4.6,10.26-10.26V13.31c0-5.66-4.6-10.26-10.26-10.26H134.23z" />
              </g>
              <g id="id299_siz16zdtp5">
                <path d="M262.84,214.1h-55.33c-12.84,0-23.29-10.45-23.29-23.29v-55.33c0-12.84,10.45-23.29,23.29-23.29h55.33 c12.84,0,23.29,10.45,23.29,23.29v55.33C286.13,203.65,275.68,214.1,262.84,214.1z M207.51,115.23 c-11.16,0-20.25,9.08-20.25,20.25v55.33c0,11.16,9.08,20.25,20.25,20.25h55.33c11.16,0,20.25-9.08,20.25-20.25v-55.33 c0-11.16-9.08-20.25-20.25-20.25H207.51z" />
              </g>
              <g id="id300_siz16zdtp5">
                <path d="M361.82,97.23H316.3c-10.71,0-19.43-8.72-19.43-19.43V32.28c0-10.71,8.72-19.43,19.43-19.43h45.52 c10.71,0,19.43,8.72,19.43,19.43V77.8C381.25,88.51,372.53,97.23,361.82,97.23z M316.3,15.89c-9.04,0-16.39,7.35-16.39,16.38V77.8 c0,9.04,7.35,16.39,16.39,16.39h45.52c9.04,0,16.39-7.35,16.39-16.39V32.28c0-9.03-7.35-16.38-16.39-16.38H316.3z" />
              </g>
              <g id="id301_siz16zdtp5">
                <path d="M147.7,149.75h-19.6c-5.09,0-9.23-4.14-9.23-9.23v-19.6c0-5.09,4.14-9.23,9.23-9.23h19.6 c5.09,0,9.23,4.14,9.23,9.23v19.6C156.93,145.61,152.79,149.75,147.7,149.75z M128.1,114.74c-3.41,0-6.19,2.78-6.19,6.19v19.6 c0,3.41,2.78,6.19,6.19,6.19h19.6c3.41,0,6.19-2.78,6.19-6.19v-19.6c0-3.41-2.78-6.19-6.19-6.19H128.1z" />
              </g>
              <g id="id302_siz16zdtp5">
                <path d="M108.61,253.19H78.66c-7.34,0-13.31-5.97-13.31-13.31v-29.95c0-7.34,5.97-13.31,13.31-13.31h29.95 c7.34,0,13.31,5.97,13.31,13.31v29.95C121.91,247.22,115.95,253.19,108.61,253.19z M78.66,199.67c-5.66,0-10.26,4.6-10.26,10.26 v29.95c0,5.66,4.6,10.26,10.26,10.26h29.95c5.66,0,10.26-4.6,10.26-10.26v-29.95c0-5.66-4.6-10.26-10.26-10.26H78.66z" />
              </g>
              <g id="_id303_siz16zdtp5">
                <path d="M28.83,178.64H9.23c-5.09,0-9.23-4.14-9.23-9.23v-19.6c0-5.09,4.14-9.23,9.23-9.23h19.6 c5.09,0,9.23,4.14,9.23,9.23v19.6C38.06,174.5,33.92,178.64,28.83,178.64z M9.23,143.62c-3.41,0-6.19,2.78-6.19,6.19v19.6 c0,3.41,2.78,6.19,6.19,6.19h19.6c3.41,0,6.19-2.78,6.19-6.19v-19.6c0-3.41-2.78-6.19-6.19-6.19H9.23z" />
              </g>
            </g>
          </svg>
          <svg
            viewBox="0.0 0.0 381.3 253.2"
            zoomAndPan="magnify"
            className="fill-primary -z-[999] opacity-40 -right-[400px] absolute rotate-90 w-[700px]"
          >
            <g>
              <g id="_id298_siz16zdtp5">
                <path d="M164.18,56.56h-29.95c-7.34,0-13.31-5.97-13.31-13.31V13.31c0-7.34,5.97-13.31,13.31-13.31h29.95 c7.34,0,13.31,5.97,13.31,13.31v29.95C177.48,50.59,171.52,56.56,164.18,56.56z M134.23,3.04c-5.66,0-10.26,4.6-10.26,10.26v29.95 c0,5.66,4.6,10.26,10.26,10.26h29.95c5.66,0,10.26-4.6,10.26-10.26V13.31c0-5.66-4.6-10.26-10.26-10.26H134.23z" />
              </g>
              <g id="id299_siz16zdtp5">
                <path d="M262.84,214.1h-55.33c-12.84,0-23.29-10.45-23.29-23.29v-55.33c0-12.84,10.45-23.29,23.29-23.29h55.33 c12.84,0,23.29,10.45,23.29,23.29v55.33C286.13,203.65,275.68,214.1,262.84,214.1z M207.51,115.23 c-11.16,0-20.25,9.08-20.25,20.25v55.33c0,11.16,9.08,20.25,20.25,20.25h55.33c11.16,0,20.25-9.08,20.25-20.25v-55.33 c0-11.16-9.08-20.25-20.25-20.25H207.51z" />
              </g>
              <g id="id300_siz16zdtp5">
                <path d="M361.82,97.23H316.3c-10.71,0-19.43-8.72-19.43-19.43V32.28c0-10.71,8.72-19.43,19.43-19.43h45.52 c10.71,0,19.43,8.72,19.43,19.43V77.8C381.25,88.51,372.53,97.23,361.82,97.23z M316.3,15.89c-9.04,0-16.39,7.35-16.39,16.38V77.8 c0,9.04,7.35,16.39,16.39,16.39h45.52c9.04,0,16.39-7.35,16.39-16.39V32.28c0-9.03-7.35-16.38-16.39-16.38H316.3z" />
              </g>
              <g id="id301_siz16zdtp5">
                <path d="M147.7,149.75h-19.6c-5.09,0-9.23-4.14-9.23-9.23v-19.6c0-5.09,4.14-9.23,9.23-9.23h19.6 c5.09,0,9.23,4.14,9.23,9.23v19.6C156.93,145.61,152.79,149.75,147.7,149.75z M128.1,114.74c-3.41,0-6.19,2.78-6.19,6.19v19.6 c0,3.41,2.78,6.19,6.19,6.19h19.6c3.41,0,6.19-2.78,6.19-6.19v-19.6c0-3.41-2.78-6.19-6.19-6.19H128.1z" />
              </g>
              <g id="id302_siz16zdtp5">
                <path d="M108.61,253.19H78.66c-7.34,0-13.31-5.97-13.31-13.31v-29.95c0-7.34,5.97-13.31,13.31-13.31h29.95 c7.34,0,13.31,5.97,13.31,13.31v29.95C121.91,247.22,115.95,253.19,108.61,253.19z M78.66,199.67c-5.66,0-10.26,4.6-10.26,10.26 v29.95c0,5.66,4.6,10.26,10.26,10.26h29.95c5.66,0,10.26-4.6,10.26-10.26v-29.95c0-5.66-4.6-10.26-10.26-10.26H78.66z" />
              </g>
              <g id="_id303_siz16zdtp5">
                <path d="M28.83,178.64H9.23c-5.09,0-9.23-4.14-9.23-9.23v-19.6c0-5.09,4.14-9.23,9.23-9.23h19.6 c5.09,0,9.23,4.14,9.23,9.23v19.6C38.06,174.5,33.92,178.64,28.83,178.64z M9.23,143.62c-3.41,0-6.19,2.78-6.19,6.19v19.6 c0,3.41,2.78,6.19,6.19,6.19h19.6c3.41,0,6.19-2.78,6.19-6.19v-19.6c0-3.41-2.78-6.19-6.19-6.19H9.23z" />
              </g>
            </g>
          </svg>
          <img
            alt="Fiorino"
            src="/fiorino.png"
            className="!z-[999] mix-blend-normal w-full "
          />
        </section>
      </div>
    </section>
  )
}

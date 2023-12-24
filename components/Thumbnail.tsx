import * as Avatar from '@radix-ui/react-avatar'

interface ThumbnailProps {
  thumbnail: string
  name: string
}

export function Thumbnail({ thumbnail, name }: ThumbnailProps) {
  return (
    <Avatar.Root className="bg-blackA1 inline-flex h-[100px] w-[100px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
      <Avatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src={thumbnail}
        alt="client"
      />
      <Avatar.Fallback
        className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
        delayMs={600}
      >
        {name}
      </Avatar.Fallback>
    </Avatar.Root>
  )
}

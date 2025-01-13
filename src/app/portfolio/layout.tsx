export default function layoutHome({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='relative h-full w-full'>
      {children}
    </div>
  )
}


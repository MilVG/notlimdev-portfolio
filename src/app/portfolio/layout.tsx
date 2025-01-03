export default function layoutHome({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='h-screen w-full'>
      <main>{children}</main>

    </div>
  )
}


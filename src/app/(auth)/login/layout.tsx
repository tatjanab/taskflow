import '../../globals.scss'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='font-mainFont'>{children}</body>
    </html>
  )
}

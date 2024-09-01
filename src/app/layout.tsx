const NotFoundLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element => {
  return (
    <html lang='en'>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default NotFoundLayout

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div>
        {children}
        &copyright;Next JS!
      </div>
  )
}

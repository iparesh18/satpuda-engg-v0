export default function RootLayout({ children, }) {
    return (<div className="bg-background font-sans antialiased min-h-screen">
      {children}
    </div>);
}

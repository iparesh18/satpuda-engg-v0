import SmoothScroll from "../shared/smooth-scroll.jsx";

export default function RootLayout({ children, }) {
    return (
    <SmoothScroll>
      <div className="bg-background font-sans antialiased min-h-screen">
        {children}
      </div>
    </SmoothScroll>
    );
}


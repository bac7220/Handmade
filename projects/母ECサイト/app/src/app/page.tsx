import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <ProductSection />
                <About />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

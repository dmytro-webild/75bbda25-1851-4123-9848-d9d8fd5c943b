"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Award, CheckCircle, Circle, Image, Palette, RotateCw, Sparkles, Star, Wrench, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="mediumLarge"
      sizing="medium"
      background="none"
      cardStyle="gradient-radial"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Service Auto"
          navItems={[
            { name: "Acasă", id: "hero" },
            { name: "Servicii", id: "services" },
            { name: "Despre Noi", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="🔧 Service Auto Profesionist – Reparații Rapide și de Încredere"
          description="Oferim servicii complete pentru mașina ta: mecanică, vopsitorie, geometrie roți și schimb anvelope. Profesionalism, seriozitate și rezultate de calitate garantate."
          buttons={[
            { text: "📞 Programează-te acum", href: "#contact" },
            { text: "📍 Vezi locația", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/modern-automobile-mechanic-composition_23-2147881860.jpg?_wi=1"
          imageAlt="Service auto profesionist cu mecanici calificati"
          showDimOverlay={false}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Despre Noi"
          description="La service-ul nostru punem accent pe calitate, seriozitate și transparență. Avem experiență în reparații auto și lucrăm cu echipamente moderne pentru a oferi rezultate sigure și rapide. Scopul nostru este ca fiecare client să plece mulțumit și cu mașina în stare perfectă."
          tag="Experiență și profesionalism"
          tagIcon={Sparkles}
          bulletPoints={[
            {
              title: "Mecanică auto",              description: "Reparații complete și eficiente pentru orice problemă mecanică",              icon: Wrench
            },
            {
              title: "Geometrie roți",              description: "Reglaj profesional pentru stabilitate și siguranță în mers",              icon: RotateCw
            },
            {
              title: "Vopsitorie auto",              description: "Refacem aspectul mașinii cu vopsea profesională de calitate",              icon: Palette
            },
            {
              title: "Schimb anvelope",              description: "Montaj și echilibrare anvelope realizate rapid și corect",              icon: Circle
            },
            {
              title: "Diagnosticare",              description: "Identificăm rapid probleme folosind echipamente moderne",              icon: Zap
            }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/professional-mechanics-popular-auto-workshop_329181-11834.jpg"
          imageAlt="Echipa de mecanici profesionisti"
          mediaAnimation="slide-up"
          imagePosition="right"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardNineteen
          title="Serviciile Noastre"
          description="Oferte complete de service auto cu profesionalism și calitate garantată"
          tag="Servicii de calitate"
          tagIcon={CheckCircle}
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: 1,
              tag: "Mecanică",              title: "Mecanică auto",              subtitle: "Reparații și întreținere completă",              description: "Reparăm rapid și eficient orice problemă mecanică a mașinii folosind piese de calitate și metode profesionale.",              imageSrc: "http://img.b2bpic.net/free-photo/meticulous-specialist-car-service-using-professional-mechanical-tool-repair-broken-engine-specialist-garage-fixing-client-automobile-ensuring-optimal-automotive-performance_482257-73039.jpg",              imageAlt: "Mecanică auto"
            },
            {
              id: 2,
              tag: "Estetică",              title: "Vopsitorie auto",              subtitle: "Finisaj profesional",              description: "Refacem aspectul mașinii cu vopsea profesională și finisaj de calitate, cu diverse culori și efecte.",              imageSrc: "http://img.b2bpic.net/free-photo/closeup-worker-spraying-timber-with-spray-gun-woodworking-factory_637285-12067.jpg",              imageAlt: "Vopsitorie auto"
            },
            {
              id: 3,
              tag: "Geometrie",              title: "Geometrie roți",              subtitle: "Reglaj precis",              description: "Reglaj profesional pentru stabilitate și siguranță în mers, folosind echipamente de ultima generație.",              imageSrc: "http://img.b2bpic.net/free-vector/tires-background-design_1284-906.jpg",              imageAlt: "Geometrie roți"
            },
            {
              id: 4,
              tag: "Anvelope",              title: "Schimb anvelope",              subtitle: "Montaj și echilibrare",              description: "Montaj și echilibrare anvelope realizate rapid și corect, cu consultare pentru tip și performanță.",              imageSrc: "http://img.b2bpic.net/free-photo/male-car-mechanic-working-car-repair-shop_23-2150367573.jpg",              imageAlt: "Schimb anvelope"
            },
            {
              id: 5,
              tag: "Diagnostic",              title: "Diagnosticare auto",              subtitle: "Identificare rapidă",              description: "Identificăm rapid problema folosind echipamente moderne de diagnosticare computerizată.",              imageSrc: "http://img.b2bpic.net/free-photo/mechanic-working-laptop_1170-1631.jpg",              imageAlt: "Diagnosticare auto"
            }
          ]}
        />
      </div>

      <div id="why-us" data-section="why-us">
        <MetricCardSeven
          title="De Ce Să Ne Alegi"
          description="Raivonăm cu experiență, dedica, și rezultate de calitate pentru fiecare client"
          tag="Avantaje"
          tagIcon={Award}
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          metrics={[
            {
              id: "1",              value: "10+",              title: "Ani de experiență",              items: ["Reparații auto de calitate", "Echipă formată și certificată", "Rezultate dovedite"]
            },
            {
              id: "2",              value: "100%",              title: "Clienți mulțumiți",              items: ["Servicii rapide și eficiente", "Profesionalism garantat", "Preț corect și transparent"]
            },
            {
              id: "3",              value: "24/7",              title: "Disponibilitate",              items: ["Urgențe și programări", "Consultanță disponibilă", "Suport rapid la telefon"]
            },
            {
              id: "4",              value: "Moderni",              title: "Echipamente noi",              items: ["Tehnologie de vârf", "Diagnostic computerizat", "Piese originale și garanție"]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve
          testimonials={[
            {
              id: "1",              name: "Ion Pavel",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",              imageAlt: "Ion Pavel"
            },
            {
              id: "2",              name: "Răzvan Jipa",              imageSrc: "http://img.b2bpic.net/free-photo/business-concept-portrait-handsome-happy-handsome-business-man-suit-smiling-siting-work-office-white-background_1258-349.jpg",              imageAlt: "Răzvan Jipa"
            },
            {
              id: "3",              name: "Marius Popescu",              imageSrc: "http://img.b2bpic.net/free-photo/happy-young-businessman-walking-near-business-center_171337-19784.jpg",              imageAlt: "Marius Popescu"
            },
            {
              id: "4",              name: "Cristian Ionescu",              imageSrc: "http://img.b2bpic.net/free-photo/positive-confident-businessman-posing-outside_74855-1183.jpg",              imageAlt: "Cristian Ionescu"
            }
          ]}
          cardTitle="Ce Spun Clienții"
          cardTag="Recomandări din experiență"
          cardTagIcon={Star}
          cardAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="gallery" data-section="gallery">
        <ProductCardFour
          title="Lucrările Noastre"
          description="Galerie cu mașini reparate și rezultate de calitate din serviciile noastre"
          tag="Portofoliu"
          tagIcon={Image}
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="bento-grid"
          animationType="slide-up"
          products={[
            {
              id: "1",              name: "Reparație completă",              price: "Portfolio",              variant: "Mecanică",              imageSrc: "http://img.b2bpic.net/free-photo/man-calling-help-fix-his-car_53876-20768.jpg",              imageAlt: "Mașină reparată - mecanică"
            },
            {
              id: "2",              name: "Vopsitorie profesională",              price: "Portfolio",              variant: "Estetică",              imageSrc: "http://img.b2bpic.net/free-photo/service-worker-painting-car-auto-service_23-2149487035.jpg",              imageAlt: "Mașină vopsită profesional"
            },
            {
              id: "3",              name: "Restaurare completă",              price: "Portfolio",              variant: "Restaurare",              imageSrc: "http://img.b2bpic.net/free-photo/stylish-businessman-working-near-car_1157-26083.jpg",              imageAlt: "Mașină restaurată complet"
            },
            {
              id: "4",              name: "Serviciu standard",              price: "Portfolio",              variant: "Întreținere",              imageSrc: "http://img.b2bpic.net/free-photo/woman-checking-car-oil_23-2149316436.jpg",              imageAlt: "Mașină după serviciu standard"
            },
            {
              id: "5",              name: "Geometrie și anvelope",              price: "Portfolio",              variant: "Anvelope",              imageSrc: "http://img.b2bpic.net/free-photo/distraught-man-feeling-sad-while-showing-his-mechanic-car-breakdown-auto-repair-shop_637285-7708.jpg",              imageAlt: "Mașină după service anvelope"
            },
            {
              id: "6",              name: "Detaliu post-service",              price: "Portfolio",              variant: "Detaliu",              imageSrc: "http://img.b2bpic.net/free-photo/collage-customer-experience-concept_23-2149367130.jpg",              imageAlt: "Detaliu mașină după service"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Programează-te Acum"
          description="Completează formularul și noi te vom contacta pentru a confirma programarea la service-ul nostru."
          inputs={[
            { name: "nume", type: "text", placeholder: "Numele tău", required: true },
            { name: "telefon", type: "tel", placeholder: "Telefonul tău (07...)", required: true },
            { name: "email", type: "email", placeholder: "Adresa de email", required: true },
            { name: "serviciu", type: "text", placeholder: "Tipul de serviciu dorit", required: true }
          ]}
          textarea={{
            name: "mesaj",            placeholder: "Detalii suplimentare sau întrebări...",            rows: 5
          }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/modern-automobile-mechanic-composition_23-2147881860.jpg?_wi=2"
          imageAlt="Service auto profesionist"
          mediaAnimation="slide-up"
          mediaPosition="left"
          buttonText="Trimite Programarea"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Service Auto"
          leftLink={{ text: "Servicii", href: "#services" }}
          rightLink={{ text: "Contact: 07XXXXXXXX", href: "#contact" }}
        />
      </div>
    </ThemeProvider>
  );
}
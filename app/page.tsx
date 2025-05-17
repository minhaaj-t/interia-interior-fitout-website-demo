"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight, Star, Users, Award, TrendingUp, Zap, Heart } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

// Custom animated components
const AnimatedGradientText = ({ children, className = "" }) => {
  return (
    <span
      className={`bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-purple-500 to-red-500 bg-size-200 animate-gradient ${className}`}
    >
      {children}
    </span>
  )
}

const AnimatedCard = ({ children, delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay }}
      className="relative z-10"
    >
      {children}
    </motion.div>
  )
}

const FloatingElement = ({ children, className = "" }) => {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const ShapesBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>
  )
}

export default function Home() {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-black/90 to-black/80 text-white py-4 px-6 md:px-12 flex items-center justify-between z-20 sticky top-0 backdrop-blur-sm"
      >
        <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <div className="h-8 w-8 bg-gradient-to-br from-red-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xs">E</span>
          </div>
          <span className="font-bold text-lg">EDOGE</span>
        </motion.div>
        <nav className="hidden md:flex items-center gap-6">
          {["Home", "About us", "Service", "Pages", "Contact us"].map((item, i) => (
            <motion.div key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link href="#" className="text-sm font-medium relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.div>
          ))}
        </nav>
        <motion.button
          className="bg-gradient-to-r from-red-600 to-red-500 text-white text-sm px-5 py-2.5 rounded-full flex items-center gap-1 shadow-lg shadow-red-500/20"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          Get In Touch
          <ChevronRight className="h-4 w-4" />
        </motion.button>
      </motion.header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-b from-black to-[#1a0208] text-white overflow-hidden">
        <ShapesBackground />

        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>

        <div className="relative z-10 px-6 md:px-12 py-24 md:py-32 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p
              className="text-sm font-medium mb-2 inline-block py-1 px-3 bg-white/10 backdrop-blur-sm rounded-full"
              initial={{ opacity: 0, x: -20 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              WELCOME TO INSPIRE
            </motion.p>
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Expert Your life &<br />
              <AnimatedGradientText>Business coaching</AnimatedGradientText>
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300 max-w-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Transform your potential into extraordinary success with our personalized coaching programs designed to
              elevate your life and business.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.button
                className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg shadow-red-500/20 flex items-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
                <Zap className="h-4 w-4" />
              </motion.button>
              <motion.button
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore More
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </motion.div>

            {/* Floating stats */}
            <div className="absolute top-1/4 right-10 hidden lg:block">
              <FloatingElement className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-300">Happy Clients</p>
                    <p className="font-bold text-xl">5,000+</p>
                  </div>
                </div>
              </FloatingElement>
            </div>

            <div className="absolute bottom-1/4 right-20 hidden lg:block">
              <FloatingElement className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl shadow-xl" delay={1}>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    <Star className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-300">Success Rate</p>
                    <p className="font-bold text-xl">98%</p>
                  </div>
                </div>
              </FloatingElement>
            </div>

            {/* Feature boxes */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
              variants={staggerContainer}
              initial="hidden"
              animate={isHeroInView ? "show" : "hidden"}
            >
              {[
                {
                  icon: <TrendingUp className="h-6 w-6 text-red-500" />,
                  title: "Tailored Coaching",
                  desc: "Solutions for growth",
                },
                {
                  icon: <Award className="h-6 w-6 text-red-500" />,
                  title: "Proven Coaching",
                  desc: "Techniques Backed",
                },
                {
                  icon: <Heart className="h-6 w-6 text-red-500" />,
                  title: "Holistic Life and",
                  desc: "Business Coaching",
                },
                {
                  icon: <Zap className="h-6 w-6 text-red-500" />,
                  title: "Expert Guidance",
                  desc: "with Ongoing Support",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-red-500/50 transition-all group"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)" }}
                >
                  <div className="w-12 h-12 mb-4 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-300">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Curved divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-16 text-white"
            fill="currentColor"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0Z"></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20 px-6 md:px-12 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="w-24 h-24 rounded-full bg-red-500 absolute top-10 left-10 blur-3xl opacity-20"></div>
            <div className="w-32 h-32 rounded-full bg-purple-500 absolute bottom-10 right-10 blur-3xl opacity-20"></div>
            <div className="w-20 h-20 rounded-full bg-yellow-500 absolute top-1/2 left-1/2 blur-3xl opacity-20"></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <AnimatedCard>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-7 relative">
                <div className="absolute -top-4 -left-4 bg-gradient-to-br from-red-600 to-red-500 text-white p-3 rounded-lg z-10 shadow-lg">
                  <Heart className="h-6 w-6" />
                </div>
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Coaching session"
                    width={300}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-purple-600 to-purple-500 text-white p-3 rounded-lg z-10 shadow-lg">
                  <Star className="h-6 w-6" />
                </div>
              </div>
              <div className="col-span-5 mt-12">
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/placeholder.svg?height=300&width=200"
                    alt="Coaching session"
                    width={200}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.2}>
            <motion.p
              className="text-red-600 text-sm font-medium mb-2 flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="w-8 h-0.5 bg-red-600"></span>
              ABOUT US
            </motion.p>
            <motion.h2
              className="text-4xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Expert guidance and
              <br />
              <AnimatedGradientText className="text-5xl">personalized coaching</AnimatedGradientText>
            </motion.h2>
            <motion.p
              className="text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Receive tailored coaching that empowers you to navigate challenges and achieve your personal and
              professional goals, with expert guidance that transforms obstacles into stepping stones for success.
            </motion.p>

            <motion.div
              className="space-y-4 mb-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {[
                "Goal Setting And Accountability",
                "Mindset And Confidence Building",
                "Strategic Planning For Success",
                "Personalized Growth Roadmaps",
              ].map((item, index) => (
                <motion.div key={index} variants={staggerItem} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center group-hover:bg-red-500 transition-colors">
                    <div className="w-2 h-2 bg-red-500 rounded-full group-hover:bg-white transition-colors"></div>
                  </div>
                  <p className="font-medium">{item}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-lg"
                  >
                    <Image
                      src={`/placeholder.svg?height=48&width=48&text=${i}`}
                      alt="Client"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              <div>
                <p className="text-sm">
                  Join our <span className="font-bold">5000+</span> satisfied clients
                </p>
                <div className="flex items-center mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.button
                className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg shadow-red-500/20 flex items-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </motion.button>

              <motion.div className="flex items-center gap-3" whileHover={{ x: 5 }}>
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div>
                  <p className="font-medium">Watch Demo</p>
                  <p className="text-xs text-gray-500">2 min video</p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatedCard>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gradient-to-b from-[#3D0A14] to-[#2A0A14] text-white py-20 px-6 md:px-12 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-red-500/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="mb-16 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.p
              className="text-sm font-medium mb-2 flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="w-8 h-0.5 bg-red-500"></span>
              SERVICES
            </motion.p>
            <motion.h2
              className="text-4xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Comprehensive
              <br />
              Coaching for life &<br />
              <AnimatedGradientText>business</AnimatedGradientText>
            </motion.h2>
            <motion.p
              className="text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Our coaching services provide personalized strategies tailored to your unique needs, helping you build
              confidence and achieve success, step by step through proven methodologies and expert guidance.
            </motion.p>
            <motion.button
              className="border border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 transition-colors"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              View All Services
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Users className="h-6 w-6" />,
                title: "Personal Coaching",
                desc: "Discover your true potential, clarify personal goals and enhance self-awareness through personalized guidance.",
              },
              {
                icon: <TrendingUp className="h-6 w-6" />,
                title: "Business Coaching",
                desc: "Develop strategies to achieve your business goals and enhance organizational performance with expert guidance.",
              },
              {
                icon: <Award className="h-6 w-6" />,
                title: "Career Development",
                desc: "Navigate career transitions, identify job search strategies and skill enhancement for professional growth.",
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Team Coaching",
                desc: "Improve team collaboration, communication and performance within organizations through targeted interventions.",
              },
              {
                icon: <Heart className="h-6 w-6" />,
                title: "Relationship Coaching",
                desc: "Address relationship challenges and enhance communication skills for healthier personal and professional connections.",
              },
              {
                icon: <Zap className="h-6 w-6" />,
                title: "Spiritual Coaching",
                desc: "Enhance spiritual awareness and find deeper meaning in your personal and professional life journey.",
              },
            ].map((service, index) => (
              <motion.div key={index} variants={staggerItem} className="group">
                <motion.div
                  className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm border border-white/10 p-6 rounded-2xl h-full hover:border-red-500/30 transition-all group-hover:shadow-xl group-hover:shadow-red-900/10"
                  whileHover={{ y: -10 }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/20 to-transparent flex items-center justify-center mb-6 group-hover:from-red-500/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center group-hover:bg-red-500 transition-colors">
                      <div className="text-red-500 group-hover:text-white transition-colors">{service.icon}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-red-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 text-sm">{service.desc}</p>

                  <div className="mt-6 flex items-center">
                    <motion.div
                      className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.2, x: 5 }}
                    >
                      <ArrowRight className="h-4 w-4 text-red-400" />
                    </motion.div>
                    <span className="text-sm font-medium ml-2 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-20 relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-purple-600/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-r from-black/60 to-black/80 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-white/10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    FREE
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Let's make something great together</h3>
                    <p className="text-gray-300 text-sm mt-1">Book a free 30-minute consultation call</p>
                  </div>
                </div>
                <motion.button
                  className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg shadow-red-500/20 flex items-center gap-2 whitespace-nowrap"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Now
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="rgba(220, 38, 38, 0.2)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.p
              className="text-red-600 text-sm font-medium mb-2 inline-flex items-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="w-5 h-0.5 bg-red-600"></span>
              TESTIMONIALS
              <span className="w-5 h-0.5 bg-red-600"></span>
            </motion.p>
            <motion.h2
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              What Our Clients Say
            </motion.h2>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Discover how our coaching has transformed lives and businesses through the words of those who've
              experienced our services firsthand.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart",
                image: "/placeholder.svg?height=80&width=80&text=SJ",
                quote:
                  "The business coaching program completely transformed my approach to leadership. I've seen a 40% increase in team productivity and a much healthier company culture.",
              },
              {
                name: "Michael Chen",
                role: "Marketing Director",
                image: "/placeholder.svg?height=80&width=80&text=MC",
                quote:
                  "Working with this coaching team helped me break through career plateaus I'd been stuck at for years. The personalized approach made all the difference in my professional growth.",
              },
              {
                name: "Jessica Williams",
                role: "Entrepreneur",
                image: "/placeholder.svg?height=80&width=80&text=JW",
                quote:
                  "The holistic approach to both personal and business coaching helped me find balance while scaling my company. I couldn't have navigated this journey without their guidance.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative"
                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="absolute -top-5 -right-5">
                  <div className="text-red-500 opacity-20">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.9999 0C5.37988 0 0 5.37988 0 11.9999C0 18.6201 5.37988 24 11.9999 24C18.6201 24 24 18.6201 24 11.9999C24 5.37988 18.6201 0 11.9999 0ZM17.8799 14.16C17.8799 14.4 17.7599 14.64 17.5199 14.76C16.8799 15.12 16.1999 15.36 15.4799 15.36C14.1599 15.36 13.0799 14.64 13.0799 13.08C13.0799 10.56 15.3599 8.76 17.6399 7.56L18.7199 8.64C18.9599 8.88 19.0799 9.24 18.9599 9.6C18.7199 10.32 18.3599 10.92 17.8799 11.52C17.8799 11.52 17.8799 14.16 17.8799 14.16ZM9.87988 14.16C9.87988 14.4 9.75988 14.64 9.51988 14.76C8.87988 15.12 8.19988 15.36 7.47988 15.36C6.15988 15.36 5.07988 14.64 5.07988 13.08C5.07988 10.56 7.35988 8.76 9.63988 7.56L10.7199 8.64C10.9599 8.88 11.0799 9.24 10.9599 9.6C10.7199 10.32 10.3599 10.92 9.87988 11.52C9.87988 11.52 9.87988 14.16 9.87988 14.16Z" />
                    </svg>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-red-600 to-red-500 text-white py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
              <radialGradient id="radialGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="white" stopOpacity="0.1" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="0" cy="0" r="20" fill="url(#radialGradient)" />
            <circle cx="100" cy="100" r="20" fill="url(#radialGradient)" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Life & Business?</h2>
              <p className="text-white/80 mb-8">
                Take the first step towards unlocking your full potential. Our expert coaches are ready to guide you on
                your journey to success.
              </p>
              <motion.button
                className="bg-white text-red-600 px-8 py-4 rounded-full text-sm font-bold shadow-xl flex items-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-6">Book a Free Consultation</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">What are you looking for?</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all">
                    <option>Business Coaching</option>
                    <option>Personal Coaching</option>
                    <option>Career Development</option>
                    <option>Team Coaching</option>
                  </select>
                </div>
                <motion.button
                  className="w-full bg-white text-red-600 px-6 py-3 rounded-lg text-sm font-bold shadow-xl mt-4"
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Schedule Consultation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A0208] text-white py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="h-8 w-8 bg-gradient-to-br from-red-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">E</span>
                </div>
                <span className="font-bold text-lg">EDOGE</span>
              </div>
              <p className="text-gray-400 mb-6">
                Transforming lives and businesses through expert coaching and personalized guidance.
              </p>
              <div className="flex gap-4">
                {["twitter", "facebook", "instagram", "linkedin"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-500 transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {[
              {
                title: "Services",
                links: ["Personal Coaching", "Business Coaching", "Career Development", "Team Coaching"],
              },
              {
                title: "Company",
                links: ["About Us", "Our Team", "Testimonials", "Blog"],
              },
              {
                title: "Support",
                links: ["FAQs", "Contact Us", "Privacy Policy", "Terms of Service"],
              },
            ].map((column, index) => (
              <div key={index}>
                <h3 className="font-bold text-lg mb-6">{column.title}</h3>
                <ul className="space-y-4">
                  {column.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 EDOGE. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

import HeroSection from '@/components/contact-us/HeroSection'
import OurMinistries from '@/components/contact-us/OurMinistries'
import Layout from '@/components/layout'
import React from 'react'

const page = () => {
  return (
    <Layout>
      <HeroSection />
      <OurMinistries />
    </Layout>
  )
}

export default page
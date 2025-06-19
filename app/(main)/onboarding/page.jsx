import { auth } from '@clerk/nextjs/server'
import React from 'react'
import { industries } from '@/data/industries';
import { redirect } from 'next/navigation';
import OnboardingForm from './_components/onboarding-form';
import CoraChat from '@/components/ui/CoraChat';

const OnboardingPage = async () => {

  return (
    <main>
      <OnboardingForm industries={industries}/>
      <CoraChat />
    </main>
  )
}

export default OnboardingPage;


